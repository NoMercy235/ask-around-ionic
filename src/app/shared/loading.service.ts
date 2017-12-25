import { Injectable } from '@angular/core';
import { Loading, LoadingController, LoadingOptions } from "ionic-angular";

@Injectable()
export class LoadingService {

    private id: number = 1;
    private loadings: Map<number, Loading> = new Map();

    constructor(
        public loadingCtrl: LoadingController,
    ) { }

    public create(options?: LoadingOptions, enforceId?: number): number {
        if (enforceId && this.loadings.has(enforceId)) {
            const loading = this.loadings.get(enforceId);
            loading.dismiss();
            this.loadings.delete(enforceId);
        }

        const loading = this.loadingCtrl.create(options);

        loading.onWillDismiss(() => this.loadings.delete(this.id));

        this.loadings.set(this.id, loading);

        return this.id ++;
    }

    public get(id: number): Loading {
        return this.loadings.get(id);
    }

    public dismiss(id: number): void {
        const loading = this.get(id);
        if (loading) loading.dismiss();
    }
}
