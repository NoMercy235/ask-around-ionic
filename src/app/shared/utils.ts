export class Utils {

    static capitalizeFirstLetter(value: any): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    public static isBetween(val: number, min: number, max: number, strict: boolean = false): boolean {
        return strict ? val > min && val < max : val >= min && val <= max;
    }

}
