import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs/Observable";
import { Globals } from "./globals";
import { BaseModel } from "./base.model";
import { UserSettingsService } from "./user-settings.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private userSettings: UserSettingsService,
    ) {}

    async get(endpoint: string, params: HttpParams = new HttpParams()): Promise<any> {
        const headers = (new HttpHeaders()).append('authorization', 'Bearer ' + this.userSettings.getToken());
        return this.http.get(Globals.API +  endpoint, { headers: headers, params: params })
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
