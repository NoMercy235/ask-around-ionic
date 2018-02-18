import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { UserModel } from "../models/user.model";

@Injectable()
export class UserSettingsService {

    private token: string;
    private user: UserModel;

    constructor(
        protected storage: Storage,
    ) { }

    public setStorage(name: string, val: any): Promise<any> {
        return this.storage.set(name, val);
    }

    public getStorage(name: string): Promise<any> {
        return this.storage.get(name);
    }

    public deleteFromStorage(name: string): Promise<any> {
        return this.storage.remove(name);
    }

    public clearStorage(): void {
        this.storage.clear();
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }

    public setUser(apiUser: any): void {
        this.user = new UserModel(apiUser);
    }

    public getUser(): UserModel {
        return this.user;
    }

}
