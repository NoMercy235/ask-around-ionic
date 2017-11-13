import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";

export interface UserSettings {

}

@Injectable()
export class UserSettingsService {

    constructor(
        protected storage: Storage,
        protected events: Events,
    ) { }

    private setStorage(name: string, val: any): Promise<any> {
        return this.storage.set(name, val);
    }

    private getStorage(name: string): Promise<any> {
        return this.storage.get(name);
    }

    clearStorage(): void {
        this.storage.clear();
    }
}
