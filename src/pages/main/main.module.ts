import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { SharedModule } from "../../app/shared/shared.module";

@NgModule({
    declarations: [
        MainPage,
    ],
    imports: [
        IonicPageModule.forChild(MainPage),
        SharedModule,
    ],
})
export class MainPageModule {
}
