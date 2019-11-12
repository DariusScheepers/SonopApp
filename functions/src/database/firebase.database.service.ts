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

    async readFromDatabaseSingleItem(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.DocumentData | undefined> {
        const documentToRead = await this.database.collection(databaseIdentifier.collection).doc(databaseIdentifier.document).get();
        return documentToRead.data();
    }

    async readFromDatabaseSingleItemReference(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.DocumentReference> {
        const documentToRead = await this.database.collection(databaseIdentifier.collection).doc(databaseIdentifier.document).get();
        return documentToRead.ref;
    }

    async readDataWithReference(documentReference: FirebaseFirestore.DocumentReference) {
        const document = await documentReference.get();
        return document.data();
    }

    async readFromDatabaseMultipleItems(databaseIdentifier: FirebaseIdentifier) {
        const collectionToRead = await this.database.collection(databaseIdentifier.collection).get();
        return collectionToRead.docs.map(document => document.data());
    }

    async updateDatabaseItem(databaseIdentifier: FirebaseIdentifier) {
        await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document)
            .update(databaseIdentifier.data);
    }

    async deleteCollection(databaseIdentifier: FirebaseIdentifier) {
        const collectionToDelete = this.database.collection(databaseIdentifier.collection);
        if (collectionToDelete) {
            collectionToDelete.listDocuments().then(val => {
                val.map((val) => {
                    val.delete()
                })
            });
        }
    }
}