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
  teams = [{id: 0, username: '', team_name: '', mini:'', team_img: '', password: ''}];
  games: any = [{id: 0, name: '', teams:[]}];
  juegosearch: any = '';
  autenticado: boolean = false;


  constructor(private user: UserService){

  }

  ngOnInit(){
    this.ComprobarAutenticado();
    this.switchBackImageTeam();
    this.getGames();
    this.Buscar();

  }

  setActiveUser(id:any){
    this.active_user = id;
    this.switchBackImageTeam();
  }

  obtenerImagen(): string{
    return this.user.getImageByID(this.active_user);
  }


  getGames(){
    this.games = this.user.getGameList();
  }


  switchBackImageTeam(){
    document.documentElement.style.setProperty('--background-image-middle', 'url(./assets/img/users/'+this.obtenerImagen()+'.png)');
  }

  Buscar(){
    if(this.juegosearch === ''){
      this.teams = this.user.getTeamList();
    }
    else{
      this.teams = [];
      this.games.forEach((game:any)=>{
        if(game.name === this.juegosearch || game.id === this.juegosearch){
          game.teams.forEach((id_player:any)=>{
            this.user.getTeamList().forEach(team=>{
                if(id_player===team.id){
                  this.teams.push(team);
                }
            });
          });
        }
      });
    }
  }

  ComprobarAutenticado(){
    this.autenticado = this.user.getAutentication();
  }



}
