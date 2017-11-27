import { Injectable } from '@angular/core';
import { Toast, ToastController, ToastOptions } from "ionic-angular";

@Injectable()
export class ToastService {

    private id: number = 1;
    private toasters: Map<number, Toast> = new Map();

    constructor(
        public toastCtrl: ToastController,
    ) { }

    public create(options?: ToastOptions, enforceId?: number): number {
        if (enforceId && this.toasters.has(enforceId)) {
            const toast = this.toasters.get(enforceId);
            toast.dismiss();
            this.toasters.delete(enforceId);
        }

        const toast = this.toastCtrl.create(options);

        toast.onWillDismiss(() => this.toasters.delete(this.id));

        this.toasters.set(this.id, toast);

        return this.id ++;
    }

    public get(id: number): Toast {
        return this.toasters.get(id);
    }
}
