export const bestCodersInformation: BestCodersInformation[] = [
    {
        name: "Darius Scheepers",
        studentNumber: '16006250',
        emailAddress: "dariusscheepers@gmail.com"
    },
    {
        name: "Ivan Pretorius",
        studentNumber: '19021306',
        emailAddress: "ivanpretorius0@gmail.com"
    }
]

interface BestCodersInformation {
    name: string,
    studentNumber: string,
    emailAddress: string;
}