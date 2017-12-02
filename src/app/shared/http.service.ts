import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs/Observable";
import { Globals } from "./globals";
import { BaseModel } from "./base.model";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
    ) {}

    async get(endpoint: string, options: { headers: HttpHeaders, params: HttpParams }): Promise<any> {
        return this.http.get(Globals.API +  endpoint, options)
            .catch(HttpService.handleHttpError)
            .toPromise();
    }

    async post(endpoint: string, body: BaseModel): Promise<any> {
        return await this.http.post(Globals.API +  endpoint, body)
            .catch(HttpService.handleHttpError)
            .toPromise();
    }


    private static handleHttpError(err: any, caught: Observable<ArrayBuffer>): ObservableInput<any> {
        return Observable.empty();
    }

}
