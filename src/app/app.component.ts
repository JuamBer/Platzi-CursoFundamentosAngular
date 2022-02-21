import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: String = 'Nicolas';
  public age: Number = 18;
  public btnDisabled: Boolean = true;
  public img: String = 'https://multimedia.comunitatvalenciana.com/A1761560812F4470B6A1D8BC96835C8D/img/73A120AB817648A7B990AB66E8FB824D/JUCAR-0011.jpg?responsive'
  public person = {
    name: 'Nicolas',
    age:18
  }

  public toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  public increaseAge(){
    this.person.age += 1;
  }
}
