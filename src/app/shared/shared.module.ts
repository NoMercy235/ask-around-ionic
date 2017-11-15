import { NgModule } from '@angular/core';
import { UserSettingsService } from "./user-settings.service";
import { HttpClientModule } from "@angular/common/http";
import { SidemenuModule } from "../sidemenu/sidemenu.module";

@NgModule({
    imports: [
        HttpClientModule,
        SidemenuModule
    ],
    exports: [
        HttpClientModule,
        SidemenuModule,
    ],
    declarations: [],
    providers: [
        UserSettingsService,
    ],
})
export class SharedModule {
}
