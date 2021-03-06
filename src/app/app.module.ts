import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Symptoms } from '../pages/symptoms/symptoms';
import { Data } from '../pages/data/data';
import { About } from '../pages/about/about';
import { Settings } from '../pages/settings/settings';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';
import { Terms } from '../pages/login/terms';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Symptoms,
    Data,
    About,
    Settings,
    Register,
    Login,
    Terms
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Symptoms,
    Data,
    About,
    Settings,
    Register,
    Login,
    Terms
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
