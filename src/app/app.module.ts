import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './user-panel/home/home.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin-panle/admin/admin.component';
import { LoginComponent } from './shared-component/login/login.component';
import { NotFoundComponent } from './shared-component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
