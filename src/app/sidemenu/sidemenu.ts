import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";
import { QuestionsPage } from "../../pages/questions/questions";
import { MyQuestionsPage } from "../../pages/my-questions/my-questions";
import { ProfilePage } from "../../pages/profile/profile";
import { SettingsPage } from "../../pages/settings/settings";

@Component({
    selector: 'ask-sidemenu',
    templateUrl: 'sidemenu.component.html'
})
export class SidemenuComponent {
    @Input() inputNav: NavController;

    constructor() {}

    goToQuestions(): void {
        this.inputNav.push(QuestionsPage);
    }

    goToMyQuestions(): void {
        this.inputNav.push(MyQuestionsPage);
    }

    goToProfile(): void {
        this.inputNav.push(ProfilePage);
    }

    goToSettings(): void {
        this.inputNav.push(SettingsPage);
    }

    logout(): void {
        // TODO: logout logic.
    }
}
