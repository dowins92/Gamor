import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  theme = 'dark';
  logo = 'logo-dark';
  visible: boolean = false;
  autenticado: boolean = false;

  constructor(private user:UserService){}

  ngOnInit(){
    this.ComprobarAutenticado()
  }

  switchTheme(){
    //cambio a dark
    if(this.theme == 'light'){
      document.documentElement.style.setProperty('--background', '#181f27');
      document.documentElement.style.setProperty('--gamercontentcolor', '#1f2630');
      document.documentElement.style.setProperty('--textcolor', '#e9e8eb');
      document.documentElement.style.setProperty('--gamermiddleseccion', '#fe8743');
      document.documentElement.style.setProperty('--gamersectionbuttoncolor', '#444c53');
      document.documentElement.style.setProperty('--textarea', '#e5e1f0');
      document.documentElement.style.setProperty('--textgamerh2', '#7e34ed');
      document.documentElement.style.setProperty('--middletextcolor', '#bf5000');
      document.documentElement.style.setProperty('--background-image-gamezone', 'url(./assets/img/backsect_dark.png)');
      document.documentElement.style.setProperty('--gamerbackcolor', '#181f27');
      document.documentElement.style.setProperty('--backmenubar', '#7e34ed');
      document.documentElement.style.setProperty('--backidtable', '#000000');


      this.theme = 'dark';
      this.logo = 'logo-dark';
    }
    //cambio a light
    else{
      if(this.theme == 'dark'){
        document.documentElement.style.setProperty('--background', '#f0f1f3');
        document.documentElement.style.setProperty('--gamercontentcolor', '#f9fafc');
        document.documentElement.style.setProperty('--textcolor', '#1f2630');
        document.documentElement.style.setProperty('--gamermiddleseccion', '#7e34ed');
        document.documentElement.style.setProperty('--gamersectionbuttoncolor', '#c9c9c9');
        document.documentElement.style.setProperty('--textarea', '#1f2630');
        document.documentElement.style.setProperty('--textgamerh2', '#fe8743');
        document.documentElement.style.setProperty('--middletextcolor', '#410699');
        document.documentElement.style.setProperty('--background-image-gamezone', 'url(./assets/img/backsect_light.png)');
        document.documentElement.style.setProperty('--gamerbackcolor', '#f9fafc');
        document.documentElement.style.setProperty('--backmenubar', '#fe8743');
        document.documentElement.style.setProperty('--backidtable', '#c9c9c9');

        this.theme = 'light';
        this.logo = 'logo-light'
      }
    }
  }

  desplegarMenu(){
    if(!this.visible){
      document.documentElement.style.setProperty('--displayimage', 'none');
      document.documentElement.style.setProperty('--menuheight', '8rem');
      document.documentElement.style.setProperty('--navbar-nav-display', 'inline-block');
      this.visible = true;
    }
    else{
      if(this.visible){
        document.documentElement.style.setProperty('--displayimage', 'flex');
        document.documentElement.style.setProperty('--menuheight', '50px');
        document.documentElement.style.setProperty('--navbar-nav-display', 'none');
        this.visible = false;
      }
    }
  }

  ComprobarAutenticado(){
    this.autenticado = this.user.getAutentication();
  }

}
