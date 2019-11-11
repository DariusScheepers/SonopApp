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

    async readFromDatabaseWithProperty(databaseIdentifierAttributeValue: FirebaseIdentifierAttributeValue, referencesOnly = false): Promise<FirebaseFirestore.DocumentReference[] | FirebaseFirestore.DocumentData[]> {
        const documents = await this.database.collection(databaseIdentifierAttributeValue.collection)
            .where(
                databaseIdentifierAttributeValue.attribute,
                databaseIdentifierAttributeValue.queryOperator,
                databaseIdentifierAttributeValue.value
            ).get();
        return referencesOnly
            ? documents.docs.map(document => document.ref)
            : documents.docs.map(document => document.data());
    }

    readDatabaseSingleItemReference(databaseIdentifier: FirebaseIdentifier): FirebaseFirestore.DocumentReference {
        return this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document);
    }

    async readFromDatabaseSingleItem(databaseIdentifier: FirebaseIdentifier) {
        const documentToRead = this.readDatabaseSingleItemReference(databaseIdentifier);
        return await this.readDataWithReference(documentToRead);
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