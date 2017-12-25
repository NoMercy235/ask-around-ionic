import { NgModule } from '@angular/core';
import { UserSettingsService } from "./user-settings.service";
import { HttpClientModule } from "@angular/common/http";
import { SidemenuModule } from "../sidemenu/sidemenu.module";
import { HttpService } from "./http.service";
import { EventsService } from "./events.service";
import { ToastService } from "./toast.service";
import { LoadingService } from "./loading.service";
import { QueryParamsService } from "./query-params.service";

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
        HttpService,
        EventsService,
        ToastService,
        LoadingService,
        QueryParamsService,
    ],
})
export class SharedModule {
}
