import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';
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

  addUser(form: NgForm){
    
    console.log(form.value);
    //Validar formulario :Espacios vacios, el correo tenga arroba, etc
    //
    //Si al validar faltan datos: solicitarlos al usuario

    //#region Si al validar están todos los datos ahí si hacer lo que está aquí abajo     
        this.usersService.postUser(form.value)
          .subscribe(res=>{
            console.log(res)
          });

      }
      //Si la respuesta es 'User Saved', redireccionar al login
      //Si la respuesta es 'The email is already in use', pedir que cambie el correo
      //#endregion  
  
}