import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './user-panel/home/home.component';
import {LoginComponent} from './shared-component/login/login.component';
import {NotFoundComponent} from './shared-component/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AdminComponent} from "./admin-panel/admin/admin.component";
import { RegistrationComponent } from './shared-component/registration/registration.component';
import { KinoComponent } from './user-panel/kino/kino.component';
import { SerialComponent } from './user-panel/serial/serial.component';
import { MulticComponent } from './user-panel/multic/multic.component';
import { AnimeComponent } from './user-panel/anime/anime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NotFoundComponent,
    AdminComponent,
    AdminComponent,
    RegistrationComponent,
    KinoComponent,
    SerialComponent,
    MulticComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
