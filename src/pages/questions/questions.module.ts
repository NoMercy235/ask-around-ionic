import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';
import { QuestionsController } from "./questions.controller";

@NgModule({
    declarations: [
        QuestionsPage,
    ],
    imports: [
        IonicPageModule.forChild(QuestionsPage),
    ],
    providers: [
        QuestionsController,
    ]
})
export class QuestionsPageModule {
}
