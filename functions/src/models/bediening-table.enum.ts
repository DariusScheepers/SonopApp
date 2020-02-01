export enum BedieningTable {
    HK = 'HK',
    WesteSenior = 'Weste Senior',
    WesteJunior = 'Weste Junior',
    OosteSenior = 'Ooste Senior',
    OosteJunior = 'Ooste Junior',
    NoordeSenior = 'Noorde Senior',
    NoordeJunior = 'Noorde Junior',
    Sentraal = 'Sentraal',
    Senaat = 'Senaat',
    VerreWeste = 'Verre Weste',
    EersteJaar = 'Eerste Jaar',
}

export class BedieningTableModel {
    description: string;
    value: BedieningTable;
    seats: number;
    oldID: number;
    constructor(description: string, value: BedieningTable, seats: number, oldID: number) {
        this.description = description;
        this.value = value;
        this.seats = seats;
        this.oldID = oldID;
    }
}