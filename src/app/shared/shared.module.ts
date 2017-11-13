import { NgModule } from '@angular/core';
import { IonicStorageModule } from "@ionic/storage";
import { UserSettingsService } from "./user-settings.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule,
        IonicStorageModule.forRoot(),
    ],
    exports: [
        HttpClientModule,
    ],
    declarations: [],
    providers: [
        UserSettingsService,
    ],
})
export class SharedModule {
}
