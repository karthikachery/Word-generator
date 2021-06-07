import { Component } from '@angular/core';
import arrayWord from "./words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  word ='';
  limit=10;
  
  handleSlider(newLimit:number){
    this.limit=newLimit;
  }
  generateWord(){
    this.word= arrayWord.slice(0,this.limit).join(" ");
  }
  generateCountry(){
    var rand=(Math.random()*20);
    
  }

}
