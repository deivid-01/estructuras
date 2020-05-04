import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onClickMe() {
    localStorage.clear();
  }

  logIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user != null) {
      return true;
    }

    return false;
  }

}
