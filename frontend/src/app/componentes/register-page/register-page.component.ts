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
    

      }
  
}