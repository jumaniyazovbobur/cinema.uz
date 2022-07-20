import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./user-panel/home/home.component";
import {AdminComponent} from "./admin-panel/admin/admin.component";
import {LoginComponent} from "./shared-component/login/login.component";
import {NotFoundComponent} from "./shared-component/not-found/not-found.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  // {path: '', redirectTo: '/task', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
