import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  team_list = [{id: 1, username: 'user1', team_name: 'Dr. Team', mini:'mini1', team_img: 'user1', password: 'qwert'}, {id: 2, username: 'user2', team_name: 'Mia Plays', mini:'mini2', team_img: 'user2', password: 'qwert'}, {id: 3, username: 'user3', team_name: 'Keoxer', mini:'mini3', team_img: 'user3', password: 'qwert'}, {id: 4, username: 'user4', team_name: 'Nickmerc', mini:'mini4', team_img: 'user4', password: 'qwert'}, {id: 5, username: 'user5', team_name: 'Chavos', mini:'mini5', team_img: 'user5', password: 'qwert'}, {id: 6, username: 'user6', team_name: 'Destroyers', mini:'mini6', team_img: 'user6', password: 'qwert'}];
  game_list = [{id: 1, name: 'Blur', teams:[1, 3, 4, 5]}, {id: 2, name: 'Fortnine', teams:[2, 6, 4, 5]}, {id: 3, name: 'COD Warzone', teams:[1, 2, 4, 6]}, {id:4, name: 'GTA V Online', teams:[2,5,6,1]}];
  autentication:boolean = false;

  constructor() { }

  getTeamList(){
    return this.team_list;
  }

  getGameList(){
    return this.game_list;
  }

  getTeamByID(id: any): any{
    var team:any = {};
    this.team_list.forEach(item=>{
      if(item.id === id){
        team = item;
      }
    });
    return team;
  }

  getGameByID(id: any):any{
    var game:any = {};
    this.game_list.forEach(item=>{
      if(item.id === id){
        game = item;
      }
    });
    return game;
  }

  getImageByID(id: any): any{
    var image: any = '';
    this.team_list.forEach(item=>{
      if(id === item.id){
        image = item.team_img;
      }
    });
    return image;
  }

  auteticate(user: string, password: string):string {
    var access = 'false';
    this.team_list.forEach(item => {
      if(user === item.username && password === item.password){
        this.autentication = true;
        access = item.username;
      }
    });
    return access;
  }

  getAutentication(){
    return this.autentication;
  }

  setAutentication(){
    this.autentication = true;
    
  }

}
