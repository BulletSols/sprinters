import { Component } from '@angular/core';
import {UUID} from 'uuid-generator-ts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprinters';


  changeWidth(state: boolean){
    if (state == true){
       const x = document.getElementById('sidebar') as HTMLElement;
       x.style.width = "100px";
    }
    else {
      const x = document.getElementById('sidebar') as HTMLElement;
      x.style.width = "290px";
    }
  }
}