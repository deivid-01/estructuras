import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [UsersService]
})
export class UserPageComponent implements OnInit {
  public usName: string;
  public fullName: string;
  public userName: string;
  public height: number;
  public weight: number;
  public email: string;
  public gender: boolean;
  public activity: string;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }

  /*getUser() {
    this.usersService.getUser()
      .subscribe(res =>{
        this.usersService.user = res as User[];
      })
  }*/

  public showInfo(): void {
    this.usName = 'Arlinson';
    this.fullName = 'Arlinson Gomex';
    this.userName = 'Zorrillo37';
    this.height = 174;
    this.weight = 82;
    this.email = 'guantanamera@udea.edu.co';
    this.gender = false;
    this.activity = 'Regular';
  }

}
