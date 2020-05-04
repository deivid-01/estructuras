import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { NgForm, ControlContainer } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'], 
  providers: [UsersService]
})
export class RegisterPageComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm){
  if(form){
    form.reset();
    this.usersService.selectedUser= new User();
  }

  }
  login(){

    console.log("que es esto");
  }
    
  


  addUser(form: NgForm){
    
    
    
    //Validar formulario :Espacios vacios, el correo tenga arroba, etc
    //
    //Si al validar faltan datos: solicitarlos al usuario
    if(!form.value.name || !form.value.nickname || !form.value.estatura || !form.value.peso || !form.value.password || !form.value.email || !form.value.genero || !form.value.actividad){
      alert("Recuerda que debes llenar toda la información");  
      window.location.href="http://localhost:4200/register";
    //#region Si al validar están todos los datos ahí si hacer lo que está aquí abajo     
        
    

      }else{
        console.log(form.value);
        
        this.usersService.postUserSignUp(form.value)
          .subscribe(res=>{
            console.log(res)
          });
        window.location.href="http://localhost:4200/login";
        
 }
      //Si la respuesta es 'User Saved', redireccionar al login
      //Si la respuesta es 'The email is already in use', pedir que cambie el correo
      //#endregion  
    
    }
}