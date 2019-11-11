import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, queryOperators } from "../models/database-identifier.model";
import { bedieningTableModels, BedieningTable } from "../models/bediening-table.enum";

export class BedieningTableService extends DataService {
    collection = 'bedieningTables';
    constructor(database: FirebaseDataBase) {
        super(database);
        this.populateDatabaseWithTables();
    }

    private populateDatabaseWithTables() {
        const toDeleteAllTables = new FirebaseIdentifier(this.collection);
        this.database.deleteCollection(toDeleteAllTables);

        bedieningTableModels.forEach(async (table) => {
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
        const references = await this.database.readFromDatabaseWithProperty(getBedieningTableDoc, true);
        if (references.length > 0) {
            return references[0];
        }
        return null;
    }
}