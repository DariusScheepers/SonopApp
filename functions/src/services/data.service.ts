import { FirebaseDataBase } from '../database/firebase.database.service';

export class DataService {
    
    database: FirebaseDataBase;
    constructor(database: FirebaseDataBase) {
        this.database = database;
    }
}