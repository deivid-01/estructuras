import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
