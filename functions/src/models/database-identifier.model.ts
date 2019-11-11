export class DatabaseIdentifier {
    data: any;
    constructor(data?: any) {
        this.data = data;
    }
}

export class FirebaseIdentifier extends DatabaseIdentifier {
    collection: string
    document: string
    constructor(collection: string, document: string = "", data?: any, addTimeStamp: boolean = true) {
        super(data);
        this.collection = collection;
        this.document = addTimeStamp 
            ? this.getTimeStamp(document)
            : document;
    }

    private getTimeStamp(documentName: string): string {
        const timeStamp = new Date().getTime().toString();
        const name = documentName + "_" + timeStamp;
        return name;
    }
}

export class FirebaseIdentifierAttributeValue {
    collection: string;
    attribute: string;
    queryOperator: queryOperators;
    value: any;
    constructor(collection: string, attribute: string, queryOperator: queryOperators, value: any) {
        this.collection = collection;
        this.attribute = attribute;
        this.queryOperator = queryOperator;
        this.value = value;
    }
}

export enum queryOperators {
    lessThan = "<",
    lessThanEqual = "<=",
    equal = "==",
    greaterThan = ">",
    greaterThanEqual = ">=",
    arrayContains = "array-contains"
}