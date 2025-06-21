import { Component, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  productos = signal([{
    id: 1, nombre: 'Smootie de Fresa', precio: 25, imagen: 'https://picsum.photos/200/300'
  },{
    id: 2, nombre: 'Torta de Chocolate', precio: 30, imagen: 'https://picsum.photos/200/301'
  }, {
    id: 3, nombre: 'Tostada de Queso', precio: 20, imagen: 'https://picsum.photos/200/302'
  }])
  constructor() {}
}
