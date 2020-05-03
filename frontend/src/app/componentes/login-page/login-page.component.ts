import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [UsersService]
})
export class LoginPageComponent implements OnInit {
  loginForm: NgForm;
  public nickname: string;
  public password: string;


  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
  }


  
  
 loginUser(form: NgForm){
    
    console.log(form.value);
    
    //Validar formulario :Espacios vacios, el correo tenga arroba, etc
    //
    //Si al validar faltan datos: solicitarlos al usuario
    if(!form.value.nickname || !form.value.password ){
      alert("Recuerda que debes llenar toda la información");  
      window.location.href="http://localhost:4200/login";
    //#region Si al validar están todos los datos ahí si hacer lo que está aquí abajo     
        this.usersService.postUser(form.value)
          .subscribe(res=>{
            console.log(res)
          });

      } else{
        window.location.href="http://localhost:4200/home";
      }
      //Si la respuesta es 'User Saved', redireccionar al login
      //Si la respuesta es 'The email is already in use', pedir que cambie el correo
      //#endregion  
 }
}
  

