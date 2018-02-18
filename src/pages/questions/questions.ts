import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsController } from "./questions.controller";
import { LoadingService } from "../../app/shared/loading.service";
import { NewQuestionPage } from "../new-question/new-question";
import { QuestionModel } from "../../app/models/question.model";

@IonicPage()
@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html',
})
export class QuestionsPage {
    public questions: QuestionModel[];
    public showInfinite: boolean = true;

    private loadingId: number;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public questionsCtrl: QuestionsController,
        public loadingService: LoadingService,
    ) { }

    public ionViewDidLoad(): void {
        this.loadingId = this.loadingService.create({ content: 'Please wait', dismissOnPageChange: true });
        this.questionsCtrl.getQuestions().then((data: QuestionModel[]) => {
            this.questions = data;
            this.loadingService.dismiss(this.loadingId);
        });
    }

    public fetchMoreQuestions(infiniteScroll: any): void {
        this.questionsCtrl.getQuestions(true).then((data: QuestionModel[]) => {
            if (!data.length) {
                this.showInfinite = false;
                return;
            }
            this.questions.push(...data);
            infiniteScroll.complete();
        });
    }

    public goToNewQuestion(): void {
        this.navCtrl.push(NewQuestionPage);
    }
}
