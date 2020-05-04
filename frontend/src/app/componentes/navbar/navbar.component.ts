import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  page: boolean = false;
  islogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /*ogged(sw: boolean){
    this.logged = sw;
    console.log(sw);
  }*/
  

}
