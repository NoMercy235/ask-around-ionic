import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class UserSettingsService {

    private token: string;

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
}
