import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthenticationPage } from './authentication';
import { AuthenticationController } from "./authentication.controller";

@NgModule({
    declarations: [
        AuthenticationPage,
    ],
    imports: [
        IonicPageModule.forChild(AuthenticationPage),
    ],
    providers: [
        AuthenticationController,
    ]
})
export class AuthenticationPageModule {
}
