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



  




  }

