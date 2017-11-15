import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from "../main/main";

@IonicPage()
@Component({
    selector: 'page-authentication',
    templateUrl: 'authentication.html',
})
export class AuthenticationPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
    ) { }

    goToMain(): void {
        this.navCtrl.push(MainPage);
    }
}
