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
        const documents = await this.database.collection(databaseIdentifierAttributeValue.collection)
            .where(
                databaseIdentifierAttributeValue.attribute,
                databaseIdentifierAttributeValue.queryOperator,
                databaseIdentifierAttributeValue.value
            ).get();
        return documents.docs;
    }

    readDatabaseSingleItemReference(databaseIdentifier: FirebaseIdentifier): FirebaseFirestore.DocumentReference {
        return this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document);
    }

    async readFromDatabaseSingleItem(databaseIdentifier: FirebaseIdentifier): Promise<FirebaseFirestore.DocumentData | undefined> {
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