import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidemenuModule } from "./sidemenu/sidemenu.module";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "../pages/pages.module";

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, { preloadModules: false }),
        PagesModule,
        SharedModule,
        SidemenuModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AndroidPermissions,
    ]
})
export class AppModule {
}
