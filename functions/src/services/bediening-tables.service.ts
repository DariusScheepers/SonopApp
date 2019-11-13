import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, QueryOperators } from "../models/database-identifier.model";
import { BedieningTable, BedieningTableModel } from "../models/bediening-table.enum";
import { bedieningTables } from "../constants/bediening-tables.constant";
import { environment } from "../constants/environment.constant";

export class BedieningTableService extends DataService {
    collection = 'bedieningTables';
    constructor(database: FirebaseDataBase) {
        super(database);
        if (environment.development) {
            this.populateDatabaseWithTables();
        }
    }

    private async populateDatabaseWithTables() {
        // const toDeleteAllTables = new FirebaseIdentifier(this.collection);
        // await this.database.deleteTable(toDeleteAllTables);
        
        bedieningTables.forEach(async (table) => {
            const tableName = table.value.replace(/\ /, '');
            const tableToInsert = new FirebaseIdentifier(this.collection, tableName, table);
            await this.database.writeToDatabase(tableToInsert);
        });
    }

    async getBedieningTableByTableValue(bedieningTable: BedieningTable) {
        const getBedieningTableDoc = new FirebaseIdentifierAttributeValue(
            this.collection,
            'value',
            QueryOperators.equal,
            bedieningTable
        );
        const references = await this.database.readFromDatabaseWithProperty(getBedieningTableDoc);        
        return references[0];        
    }

    async getTableValueFromReference(reference: FirebaseFirestore.DocumentReference): Promise<BedieningTableModel> {
        const table = await this.database.readDataWithReference(reference);
        return table.data() as BedieningTableModel;
    }
}