import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  politicos:any = [
    {
      nombre: 'AMLOVE',
      poder: 'Manipulación de las masas y chairos'
    },
    {
      nombre: 'Margarita',
      poder: 'Hablar fluidamente'
    },
    {
      nombre: 'El Bronco',
      poder: 'Cortador de manos'
    },
    {
      nombre: 'Canaya',
      poder: 'Lavado de dinero'
    },
    {
      nombre: 'Meade',
      poder: 'Espada del augurio'
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  irPagina3( politico:any ) {

    this.navCtrl.push( Pagina3Page, { politico } );
  }
  

}
