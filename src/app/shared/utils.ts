export class Utils {

    static capitalizeFirstLetter(value: any): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    public static isBetween(val: number, min: number, max: number, strict: boolean = false): boolean {
        return strict ? val > min && val < max : val >= min && val <= max;
    }


    static flattenObject(obj: any, keepParent: boolean = false) {
        let result = {};
        (function recurse(curr: any, prop: string = '') {
            if (Object(curr) !== curr) {
                result[prop] = curr;
            }
            else if (Array.isArray(curr)) {
                if (!curr.length) {
                    result[prop] = [];
                } else {
                    for (let i = 0, l = curr.length; i < l; i++)
                        recurse(curr[i], prop + "[" + i + "]");
                }

            } else {
                let isEmpty = true;
                for (let p of Object.keys(curr)) {
                    isEmpty = false;
                    recurse(curr[p], (keepParent ? (prop ? prop + "." : '') : '') + p);
                }
                if (isEmpty && prop)
                    result[prop] = {};
            }
        }(obj));
        return result;
    };

}
