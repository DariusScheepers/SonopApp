import { DatabaseInterface } from "./database.interface";
import { FirebaseIdentifier } from "../models/database-identifier.model";

export class FirebaseDataBase implements DatabaseInterface {

    private database: FirebaseFirestore.Firestore;
    constructor(database: FirebaseFirestore.Firestore) {
        this.database = database;
    }

    async writeToDatabase(databaseIdentifier: FirebaseIdentifier) {
        return await this.database.collection(databaseIdentifier.collection)
            .doc(databaseIdentifier.document)
            .set(databaseIdentifier.data);
    }

    readDatabaseSingleItemReference(databaseIdentifier: FirebaseIdentifier) {
        return this.database.collection(databaseIdentifier.collection)
        .doc(databaseIdentifier.document)
    }

    async readFromDatabaseSingleItem(databaseIdentifier: FirebaseIdentifier) {
        const documentToRead = this.readDatabaseSingleItemReference(databaseIdentifier);
        return await this.readDataWithReference(documentToRead);
    }

    async readDataWithReference(documentReference: FirebaseFirestore.DocumentReference) {
        return await documentReference.get().then(document => {
            if (document.exists) {
                return document.data()
            } else {
                return null;
            }
        })
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