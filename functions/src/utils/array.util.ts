export function sortArrayAlphabetically(array: any[], property: any): any[] {
    return array.sort((a, b) => {
        const aValue = a[property] as string;
        const bValue = b[property] as string;
        return aValue.localeCompare(bValue);
    });
}