import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  theme = 'dark';
  logo = 'logo-dark';

  switchTheme(){
    //cambio a dark
    if(this.theme == 'light'){
      document.documentElement.style.setProperty('--background', '#141c29');
      document.documentElement.style.setProperty('--gamercontentcolor', '#1f2630');
      document.documentElement.style.setProperty('--textcolor', '#f8f9fa');
      document.documentElement.style.setProperty('--gamermiddleseccion', '#fe8743');
      document.documentElement.style.setProperty('--gamersectionbuttoncolor', '#444c53');
      this.theme = 'dark';
      this.logo = 'logo-dark';
    }
    //cambio a light
    else{
      if(this.theme == 'dark'){
        document.documentElement.style.setProperty('--background', '#dbeaff');
        document.documentElement.style.setProperty('--gamercontentcolor', '#e6edf7');
        document.documentElement.style.setProperty('--textcolor', '#1f2630');
        document.documentElement.style.setProperty('--gamermiddleseccion', '#7e34ed');
        document.documentElement.style.setProperty('--gamersectionbuttoncolor', '#7e34ed');
        this.theme = 'light';
        this.logo = 'logo-light'
      }
    }
  }
}
