import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public widthImg = 10;
  public name: String = 'Nicolas';
  public age: Number = 18;
  public box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  public btnDisabled: Boolean = true;
  public img: String = 'https://multimedia.comunitatvalenciana.com/A1761560812F4470B6A1D8BC96835C8D/img/73A120AB817648A7B990AB66E8FB824D/JUCAR-0011.jpg?responsive'
  public person = {
    name: 'Nicolas',
    age:18
  }
  public names: String[] = ['Nico','July','Santi']
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  public toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  public increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
