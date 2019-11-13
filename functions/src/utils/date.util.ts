export function getNextDayOfWeek(dayOfWeek: number): string {
    let date = new Date();
    let resultDate = new Date();
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate.getDate().toString() + "/" + (resultDate.getMonth() + 1).toString();
}

export const weekInMilliseconds = 604800000;