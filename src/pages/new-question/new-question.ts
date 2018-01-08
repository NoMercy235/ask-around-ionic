import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from "@angular/forms";

@IonicPage()
@Component({
    selector: 'page-new-question',
    templateUrl: 'new-question.html',
})
export class NewQuestionPage {

    public fg: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

}
