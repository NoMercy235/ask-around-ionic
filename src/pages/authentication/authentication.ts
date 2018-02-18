import { Component } from '@angular/core';
import { IonicPage, NavController, ToastOptions } from 'ionic-angular';
import { AuthenticationController } from "./authentication.controller";
import { Keyboard } from "@ionic-native/keyboard";
import { ToastService } from "../../app/shared/toast.service";
import { MainPage } from "../main/main";
import { RegisterPage } from "../register/register";
import { Globals } from "../../app/shared/globals";
import { LoadingService } from "../../app/shared/loading.service";

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
        public loadingService: LoadingService,
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

        const loadingId = this.loadingService.create({ content: 'Please wait', dismissOnPageChange: true });
        const result = await this.authenticateCtrl.login();

        if (!result) {
            this.toastService.get(this.toastId).setMessage('Email or password are incorrect.');
            this.toastService.get(this.toastId).present();
            return;
        }

        this.loadingService.dismiss(loadingId);
        this.navCtrl.push(MainPage);
    }

    public handleKeyPress(keyCode: number): void {
        if (keyCode === Globals.KEY_CODES.ENTER) this.login();
    }

    public goToRegister(): void {
        this.navCtrl.push(RegisterPage);
    }
}
