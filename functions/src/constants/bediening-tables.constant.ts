import { BedieningTable, BedieningTableModel } from "../models/bediening-table.enum";

export const bedieningTables: BedieningTableModel[] = [
    {
        value: BedieningTable.HK,
        description: 'HK',
        seats: 1
    },
    {
        value: BedieningTable.WesteSenior, 
        description: 'Weste Senior',
        seats: 1
    },
    {
        value: BedieningTable.WesteJunior, 
        description: 'Weste Junior',
        seats: 1
    },
    {
        value: BedieningTable.OosteSenior, 
        description: 'Ooste Senior',
        seats: 1
    },
    {
        value: BedieningTable.OosteJunior, 
        description: 'Ooste Junior',
        seats: 1
    },
    {
        value: BedieningTable.NoordeSenior, 
        description: 'Noorde Senior',
        seats: 1
    },
    {
        value: BedieningTable.NoordeJunior, 
        description: 'Noorde Junior',
        seats: 1
    },
    {
        value: BedieningTable.Sentraal, 
        description: 'Sentraal',
        seats: 1
    },
    {
        value: BedieningTable.Senaat, 
        description: 'Senaat',
        seats: 1
    },
    {
        value: BedieningTable.VerreWeste, 
        description: 'Verre Weste',
        seats: 1
    },
    {
        value: BedieningTable.EersteJaar, 
        description: 'Eerste Jaar',
        seats: 1
    },
];