import { Injectable } from '@angular/core';

@Injectable()
export class QueryParamsService {

    public generateLink(url: string, params: any): string {
        return url + '?' + this.getParamsAsString(params, '', '');
    }

    private getParamsAsString(params: any, path: string, urlParams: string): string {
        if (!params) return '';
        for (let key of Object.keys(params)) {
            if (typeof params[key] === 'object') {
                return this.getParamsAsString(params[key], path ? path + '[' + key + ']' : key, urlParams);
            } else {
                if (!path) {
                    urlParams += this.encode(key, params[key]);
                } else {
                    urlParams += this.encode(`${path}[${key}]`, params[key]);
                }
            }
        }
        return urlParams;
    }

    private encode(key: string, value: string): string {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }
}
