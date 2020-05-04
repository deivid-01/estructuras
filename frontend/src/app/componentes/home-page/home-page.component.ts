import { Component, OnInit, DebugElement } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  

  constructor(public usersService: UsersService, public router: Router) { }


  ngOnInit(): void {
   
   
  }

  getUser()
  {
    
    const  user=JSON.parse(localStorage.getItem('user'));
   
    //obtener una variable especifica -> user.name
  }
  
  setName(nombre)
  {
    const  user=JSON.parse(localStorage.getItem('user'));
    user.name=nombre;
    localStorage.setItem('user');

  }


}
