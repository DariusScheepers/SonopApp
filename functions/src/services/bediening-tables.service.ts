import { DataService } from "./data.service";
import { FirebaseDataBase } from "../database/firebase.database.service";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue, QueryOperators } from "../models/database-identifier.model";
import { BedieningTable, BedieningTableModel } from "../models/bediening-table.enum";

export class BedieningTableService extends DataService {
    collection = 'bedieningTables';
    constructor(database: FirebaseDataBase) {
        super(database);
    }

    async getBedieningTableByTableValue(bedieningTable: BedieningTable) {
        const getBedieningTableDoc: FirebaseIdentifierAttributeValue = {
            collection: this.collection,
            where: [
                {
                    attribute: 'value',
                    queryOperator: QueryOperators.equal,
                    value: bedieningTable
                }
            ],
            orderBy: []
        };
        const references = await this.database.readFromDatabaseWithProperty(getBedieningTableDoc);        
        return references[0];        
    }

    async getTableValueFromReference(reference: FirebaseFirestore.DocumentReference): Promise<BedieningTableModel> {
        const table = await this.database.readDataWithReference(reference);
        return table.data() as BedieningTableModel;
    }

    async getDocumentReferenceFromTableValue(bedieningTable: BedieningTable | string): Promise<FirebaseFirestore.DocumentReference> {
        const documentQuery = new FirebaseIdentifier(this.collection, bedieningTable);
        const ref = (await this.database.readFromDatabaseSingleItem(documentQuery)).ref;
        return ref;
    }
}