import { Injectable } from '@angular/core';
import { Utils } from "./utils";

@Injectable()
export class QueryParamsService {

    public generateLink(url: string, params: any): string {
        return url + '?' + this.getParamsAsString(params);
    }

    private getParamsAsString(params: any): string {
        const flatObj = Utils.flattenObject(params, true);
        let urlParams = '';
        Object.keys(flatObj).forEach((key: string) => urlParams += this.encode(key, flatObj[key]));
        return urlParams;
    }

    private encode(key: string, value: string): string {
        let keyParts = key.split('.');
        const firstKey = keyParts[0];
        keyParts.splice(0, 1);
        const trueKey = firstKey + keyParts.map((k: string) => '['+k+']').join('');
        return encodeURIComponent(trueKey) + '=' + encodeURIComponent(value) + '&';
    }
}
