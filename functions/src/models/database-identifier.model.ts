export class DatabaseIdentifier {
    data: any;
    constructor(data?: any) {
        this.data = data;
    }
}

export class FirebaseIdentifier extends DatabaseIdentifier {
    collection: string
    document: string
    constructor(collection: string, document: string = "", data?: any, addTimeStamp: boolean = false) {
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

export interface FirebaseIdentifierAttributeValue {
    collection: string;
    where: whereQuery[];
    orderBy: OrderBy[];
}

export interface whereQuery {
    attribute: string;
    queryOperator: QueryOperators;
    value: any;
}

export interface OrderBy {
    attribute: string;
    direction: OrderByDirection;
}

export enum QueryOperators {
    lessThan = "<",
    lessThanEqual = "<=",
    equal = "==",
    greaterThan = ">",
    greaterThanEqual = ">=",
    arrayContains = "array-contains"
}

export enum OrderByDirection {
    ascending = 'asc',
    descending = 'desc'
}