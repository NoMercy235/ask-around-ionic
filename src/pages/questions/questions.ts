import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html',
})
export class QuestionsPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
    ) { }

}
