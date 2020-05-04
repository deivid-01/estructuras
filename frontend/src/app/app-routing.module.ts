import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { UserPageComponent } from './componentes/user-page/user-page.component';
import { EditPageComponent } from './componentes/edit-page/edit-page.component';

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'edit', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
