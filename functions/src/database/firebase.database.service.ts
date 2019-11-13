import { DatabaseInterface } from "./database.interface";
import { FirebaseIdentifier, FirebaseIdentifierAttributeValue } from "../models/database-identifier.model";

export class FirebaseDataBase implements DatabaseInterface {

    private database: FirebaseFirestore.Firestore;
    constructor(database: FirebaseFirestore.Firestore) {
        this.database = database;
    }

    async writeToDatabase(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.WriteResult> {
        return await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document)
            .set(databaseIdentifier.data);
    }

    async readFromDatabaseSingleItem(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.DocumentSnapshot> {
        const documentToRead = await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document).get();
        return documentToRead;
    }

    async readDataWithReference(documentReference: FirebaseFirestore.DocumentReference): Promise<FirebaseFirestore.DocumentSnapshot> {
        const document = await documentReference.get();
        return document;
    }

    async readFromDatabaseMultipleItems(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.QueryDocumentSnapshot[]> {
        const collectionToRead = await this.database.collection(databaseIdentifier.collection).get();
        return collectionToRead.docs;
    }

    async readFromDatabaseWithProperty(databaseIdentifierAttributeValue: FirebaseIdentifierAttributeValue): Promise<FirebaseFirestore.QueryDocumentSnapshot[]> {
        let documentsUnordered = this.database.collection(databaseIdentifierAttributeValue.collection)
            .where(
                databaseIdentifierAttributeValue.attribute,
                databaseIdentifierAttributeValue.queryOperator,
                databaseIdentifierAttributeValue.value
            );
        for (const order of databaseIdentifierAttributeValue.orderBy) {
            documentsUnordered = documentsUnordered.orderBy(order.attribute, order.direction);
        };
        const documents = await documentsUnordered.get();
        return documents.docs;
    }

    async updateDatabaseItem(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.WriteResult> {
        return await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document)
            .update(databaseIdentifier.data);
    }

    async deleteTable(databaseIdentifier: FirebaseIdentifier) {
        const collectionToDelete = this.database.collection(databaseIdentifier.collection);
        if (collectionToDelete) {
            collectionToDelete.listDocuments().then(val => {
                val.map((val) => {
                    val.delete()
                })
            });
        }
    }

    async deleteItem(databaseIdentifier: FirebaseIdentifier) {
        return await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document)
            .delete();
    }
}