export const bestCodersInformation: BestCodersInformation[] = [
    {
        name: "Darius Scheepers",
        studentNumber: '16006250',
        emailAddress: "dariusscheepers@gmail.com"
    },
    {
        name: "Bedeker Snyman",
        studentNumber: '17106436',
        emailAddress: "bedeker.hk@gmail.com"
    }
]

interface BestCodersInformation {
    name: string,
    studentNumber: string,
    emailAddress: string;
}