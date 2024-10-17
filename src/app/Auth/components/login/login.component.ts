import { Component } from '@angular/core';
import { AuthService } from '../../Services/services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '' ;
  password = '' ;
  errorMessage = '';

  constructor(private authService:AuthService , private router : Router){}

  onLogin(){
    const success = this.authService.login(this.username , this.password);

    if(success){
      console.log('Usuario existe')
      this.router.navigate(['/Dashboard']);
    }else{
      this.errorMessage = 'Credenciales invalidas'
    }

  }



}
