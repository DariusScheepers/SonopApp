import { DatabaseIdentifier } from '../models/database-identifier.model'

export interface DatabaseInterface {
    writeToDatabase(databaseIdentifier: DatabaseIdentifier): void;
    readFromDatabaseSingleItem(databaseIdentifier: DatabaseIdentifier): void;
    readFromDatabaseMultipleItems(databaseIdentifier: DatabaseIdentifier): any;
    updateDatabaseItem(databaseIdentifier: DatabaseIdentifier): void;
    deleteCollection(databaseIdentifier: DatabaseIdentifier): void;
}