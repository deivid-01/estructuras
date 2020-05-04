import { Component, OnInit, DebugElement } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  constructor(public usersService: UsersService, public router: Router) { }
  public userName: string;

  ngOnInit(): void {
  }

  public getUserNickName(): void{
    const  user=JSON.parse(localStorage.getItem('user'));
    this.userName = user.nickname;
  }
}
