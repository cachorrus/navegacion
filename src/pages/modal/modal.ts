import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = navParams.get('nombre');
    this.edad = navParams.get('edad');

    console.log(this.nombre, this.edad);
  }

  cerrarConParametros() {
    let data = {
      nombre: 'Cachorrus Infamous',
      edad: 35,
      coors: {
        latitud: 100,
        longitud: -50
      }
    };

    this.viewCtrl.dismiss( data );

  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
