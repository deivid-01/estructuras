import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  public usName: string;
  public fullName: string;
  public height: number;
  public weight: number;
  public email: string;
  public gender: boolean;
  public activity: string;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));

    this.usName = user.nickname;
    this.fullName = user.name;
    this.height = user.estatura;
    this.weight = user.peso;
    this.email = user.email;
    this.gender = user.genero;
    this.activity = user.actividadFisica;

  }


  setUser() {

    const  user=JSON.parse(localStorage.getItem('user'));
    console.log(user)
    user.name = this.fullName;
    user.nickname = this.usName;
    user.estatura = this.height;
    user.peso = this.weight;
    user.email = this.email;
    user.genero = this.gender;
    user.actividadFisica = this.activity;
    
    localStorage.setItem('user', JSON.stringify(user));
   
    //send to data base
    this.usersService.putUser(user).subscribe(res=>{
console.log(res);

    })
  }

}
