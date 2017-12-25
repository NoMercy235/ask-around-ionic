import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsController } from "./questions.controller";
import { Question } from "../../app/models/question.model";
import { LoadingService } from "../../app/shared/loading.service";

@IonicPage()
@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html',
})
export class QuestionsPage {
    public questions: Question[];

    private loadingId: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public questionsCtrl: QuestionsController,
        public loadingService: LoadingService,
    ) { }

    public ionViewDidLoad(): void {
        this.loadingId = this.loadingService.create({ content: 'Please wait', dismissOnPageChange: true });
        this.questionsCtrl.getQuestions().then((data: Question[]) => {
            this.questions = data;
            this.loadingService.dismiss(this.loadingId);
        });
    }
}
