import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsController } from "./questions.controller";
import { Question } from "../../app/models/question.model";

@IonicPage()
@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html',
})
export class QuestionsPage {
    public questions: Question[];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public questionsCtrl: QuestionsController,
    ) { }

    public ionViewDidLoad(): void {
        this.questionsCtrl.getQuestions().then((data: Question[]) => this.questions = data);
    }
}
