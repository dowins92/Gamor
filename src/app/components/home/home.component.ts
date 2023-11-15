import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Gamor';
  date: Date = new Date();
  active_user = 4;
  teams:any = [];

  constructor(private user: UserService){
  }

  ngOnInit(){
    this.switchBackImageTeam();
  }

  obtenerImagen(): string{
    console.log(this.user.getImageByID(this.active_user));
    return this.user.getImageByID(this.active_user);
  }

  getTeams(){
    this.teams = this.user.getTeamList();
  }


  switchBackImageTeam(){
    document.documentElement.style.setProperty('--background-image-middle', 'url(./assets/img/users/'+this.obtenerImagen()+'.png)');
  }





}
