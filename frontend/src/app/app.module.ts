import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPageComponent} from './componentes/register-page/register-page.component';
import { LoginPageComponent} from './componentes/login-page/login-page.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { UserPageComponent } from './componentes/user-page/user-page.component';
import { EditPageComponent } from './componentes/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    UserPageComponent,
    EditPageComponent,
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
