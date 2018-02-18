import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from "@angular/forms";
import { NewQuestionController } from "./new-question.controller";
import { Keyboard } from "@ionic-native/keyboard";

@IonicPage()
@Component({
    selector: 'page-new-question',
    templateUrl: 'new-question.html',
})
export class NewQuestionPage {

    public fg: FormGroup;
    public showFooter: boolean = true;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public keyboard: Keyboard,
        public newQuestionCtrl: NewQuestionController,
    ) {
        this.newQuestionCtrl.onInit();

        if ((<any>window).cordova) {
            this.keyboard.onKeyboardShow().subscribe(() => this.showFooter = false);
            this.keyboard.onKeyboardHide().subscribe(() => this.showFooter = true);
        }
    }

}
