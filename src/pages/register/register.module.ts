import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { RegisterController } from "./register.controller";

@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterPage),
    ],
    providers: [
        RegisterController,
    ],
})
export class RegisterPageModule {
}
