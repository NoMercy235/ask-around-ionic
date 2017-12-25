import { Component } from '@angular/core';
import { IonicPage, NavController, ToastOptions } from 'ionic-angular';
import { AuthenticationController } from "./authentication.controller";
import { Keyboard } from "@ionic-native/keyboard";
import { ToastService } from "../../app/shared/toast.service";
import { MainPage } from "../main/main";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
    selector: 'page-authentication',
    templateUrl: 'authentication.html',
})
export class AuthenticationPage {

    public showFooter: boolean = true;

    private toastId: number;
    private toastOptions: ToastOptions = {
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
    };

    constructor(
        public navCtrl: NavController,
        public authenticateCtrl: AuthenticationController,
        public keyboard: Keyboard,
        public toastService: ToastService,
    ) {
        this.authenticateCtrl.onInit();

        if ((<any>window).cordova) {
            this.keyboard.onKeyboardShow().subscribe(() => this.showFooter = false);
            this.keyboard.onKeyboardHide().subscribe(() => this.showFooter = true);
        }
    }

    public ionViewDidLoad(): void {
        this.keyboard.disableScroll(true);
        this.authenticateCtrl.hasToken().then((hasToken: boolean) => {
            if (hasToken) this.navCtrl.push(MainPage);
        });
    }

    public async login(): Promise<void> {
        this.toastId = this.toastService.create(this.toastOptions);

        if (this.authenticateCtrl.fg.invalid) {
            this.toastService.get(this.toastId).setMessage('Input is invalid. Please check above for more details.');
            this.toastService.get(this.toastId).present();
            return
        }

        const formValues = this.authenticateCtrl.fg.value;
        const result = await this.authenticateCtrl.login(formValues.email, formValues.password);

        if (!result) {
            this.toastService.get(this.toastId).setMessage('Email or password are incorrect.');
            this.toastService.get(this.toastId).present();
            return;
        }

        this.navCtrl.push(MainPage);
    }

    public goToRegister(): void {
        this.navCtrl.push(RegisterPage);
    }
}
