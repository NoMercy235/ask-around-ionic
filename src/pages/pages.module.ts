import { NgModule } from '@angular/core';
import { QuestionsPageModule } from "./questions/questions.module";
import { MyQuestionsPageModule } from "./my-questions/my-questions.module";
import { ProfilePageModule } from "./profile/profile.module";
import { SettingsPageModule } from "./settings/settings.module";
import { MainPageModule } from "./main/main.module";
import { AuthenticationPageModule } from "./authentication/authentication.module";
import { RegisterPageModule } from "./register/register.module";

@NgModule({
    imports: [
        AuthenticationPageModule,
        RegisterPageModule,
        MainPageModule,
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
