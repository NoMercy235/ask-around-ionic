import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from "../main/main";
import { AuthenticationController } from "./authentication.controller";

@IonicPage()
@Component({
    selector: 'page-authentication',
    templateUrl: 'authentication.html',
})
export class AuthenticationPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public authenticateController: AuthenticationController,
    ) {
        authenticateController.onInit();
    }

    public async ionViewDidLoad(): Promise<void> {
        await this.authenticateController.login('admin@askaround.com', '123456');
        console.log('should redirect');
    }

    goToMain(): void {
        this.navCtrl.push(MainPage);
    }
}
