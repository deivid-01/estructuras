import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { RegisterPageComponent } from '../componentes/register-page/register-page.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser: User;
  users: User[];
  readonly URL_API ='http://localhost:3000/api';

  constructor(private http: HttpClient) { 
    this.selectedUser= new User();
  }


  getUser(){
    return this.http.get(this.URL_API);
  }

  postUser(User: User){
    return this.http.post(this.URL_API, User);
  }

  putUser(user: User){
    return this.http.put(this.URL_API + '/${user.id}', user);

  }

  deleteUser(user: String){
    return this.http.delete(this.URL_API + '/${id}' );
  }
}
