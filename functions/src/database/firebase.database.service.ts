import * as admin from 'firebase-admin';
admin.initializeApp();
const database = admin.database();

export function writeToDatabase(collection: string, document: string) {
    database
}