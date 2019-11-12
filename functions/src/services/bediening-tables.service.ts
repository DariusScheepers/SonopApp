import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, queryOperators } from "../models/database-identifier.model";
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
        // await this.database.deleteCollection(toDeleteAllTables);
        
        bedieningTables.forEach(async (table) => {
            const tableName = table.value.replace(/\ /, '');
            const tableToInsert = new FirebaseIdentifier(this.collection, tableName, table);
            await this.database.writeToDatabase(tableToInsert);
        });
    }

    async getBedieningTableReference(bedieningTable: BedieningTable) {
        const getBedieningTableDoc = new FirebaseIdentifierAttributeValue(
            this.collection,
            'value',
            queryOperators.equal,
            bedieningTable
        );
        const references = await this.database.readFromDatabaseWithProperty(getBedieningTableDoc);
        if (references.length > 0) {
            return references[0].ref;
        }
        return null;
    }

    async getTableValueFromReference(reference: FirebaseFirestore.DocumentReference): Promise<BedieningTableModel> {
        const table = await this.database.readDataWithReference(reference);
        return table as BedieningTableModel;
    }
}