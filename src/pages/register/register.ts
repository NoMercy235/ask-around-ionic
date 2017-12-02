import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastOptions } from 'ionic-angular';
import { RegisterController } from "./register.controller";
import { Keyboard } from "@ionic-native/keyboard";
import { ToastService } from "../../app/shared/toast.service";
import { MainPage } from "../main/main";

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    public showFooter: boolean = true;

    private toastId: number;
    private toastOptions: ToastOptions = {
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public registerCtrl: RegisterController,
        public keyboard: Keyboard,
        public toastService: ToastService,
    ) {
        this.registerCtrl.onInit();

        if ((<any>window).cordova) {
            this.keyboard.disableScroll(true); // TODO: should not be here?
            this.keyboard.onKeyboardShow().subscribe(() => this.showFooter = false);
            this.keyboard.onKeyboardHide().subscribe(() => this.showFooter = true);
        }
    }

    public async register(): Promise<void> {
        this.toastId = this.toastService.create(this.toastOptions);

        if (this.registerCtrl.fg.invalid) {
            this.toastService.get(this.toastId).setMessage('Input is invalid. Please check above for more details.');
            this.toastService.get(this.toastId).present();
            return;
        }

        const formValues: any = this.registerCtrl.fg.value;

        if (formValues.password !== formValues.repeatPassword) {
            this.toastService.get(this.toastId).setMessage('Passwords do not match.');
            this.toastService.get(this.toastId).present();
            return;
        }

        const result = await this.registerCtrl.register(formValues);

        if (!result) {
            this.toastService.get(this.toastId).setMessage('An error has occured.');
            this.toastService.get(this.toastId).present();
            return;
        }

        this.navCtrl.push(MainPage);
    }

}
