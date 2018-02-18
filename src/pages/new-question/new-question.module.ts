import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewQuestionPage } from './new-question';
import { NewQuestionController } from "./new-question.controller";

@NgModule({
    declarations: [
        NewQuestionPage,
    ],
    imports: [
        IonicPageModule.forChild(NewQuestionPage),
    ],
    providers: [
        NewQuestionController,
    ]
})
export class NewQuestionPageModule {}
