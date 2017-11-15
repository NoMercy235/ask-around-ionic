import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { MyApp } from './app.component';
import { PagesModule } from "../pages/pages.module";
import { IonicStorageModule } from "@ionic/storage";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, { preloadModules: false }),
        IonicStorageModule.forRoot(),
        SharedModule,
        PagesModule,
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
