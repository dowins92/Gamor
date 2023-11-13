import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Gamor';
  dark: boolean = false;
  style = 'gcontent-dark';

  switchDark(){
    this.style = "gcontent-light";
  }

  switchLight(){
    this.style = "gcontent-dark";
  }
}
