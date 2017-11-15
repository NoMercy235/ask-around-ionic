import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from "../questions/questions";

@IonicPage()
@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {
    @ViewChild(Nav) nav: Nav;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
    ) { }

    rootPage: any = QuestionsPage;
}
