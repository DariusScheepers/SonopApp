export class DatabaseIdentifier {
    data: any;
    constructor(data?: any) {
        this.data = data;
    }
}

export class FirebaseIdentifier extends DatabaseIdentifier {
    collection: string
    document: string
    constructor(collection: string, document: string = "", data?: any) {
        super(data);
        this.collection = collection;
        this.document = document;
    }
}