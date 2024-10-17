import { Injectable } from '@angular/core';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users:Users[] =[
    {username:'Juan' ,password:'122340JuAn' , role:'admin'},
    {username:'Daniel' ,password:'DaNieL2345' , role:'user'}
  ];

  private currentUser: Users | null = null;

  login(username: string , password:string):boolean{
    const user = this.users.find(
      (u)=>u.username === username && u.password === password
    );

    if(user){
      this.currentUser = user;
      localStorage.setItem('currentUser' , JSON.stringify(this.currentUser))
      return true
    }
    return false
  }

  getCurrentUsers():Users | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) :null;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

}
