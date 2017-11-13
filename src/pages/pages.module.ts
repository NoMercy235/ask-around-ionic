import { NgModule } from '@angular/core';
import { QuestionsPageModule } from "./questions/questions.module";
import { MyQuestionsPageModule } from "./my-questions/my-questions.module";
import { ProfilePageModule } from "./profile/profile.module";
import { SettingsPageModule } from "./settings/settings.module";

@NgModule({
    imports: [
        QuestionsPageModule,
        MyQuestionsPageModule,
        ProfilePageModule,
        SettingsPageModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule {
}
