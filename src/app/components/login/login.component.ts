import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private user: UserService, private router: Router){}

  autenticar(){
    var autenticate = false;
    this.user.getTeamList().forEach(team=>{
      if(team.username === this.username && team.password === this.password){
        autenticate = true;
      }
    });
    if(!autenticate){
      alert("Wrong username or password!!!")
      this.username = '';
      this.password = '';
    }
    else{
     this.user.setAutentication();
     this.router.navigate(['/home'])
    }
  }


}
