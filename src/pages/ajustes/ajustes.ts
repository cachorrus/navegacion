import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
  }

  irTabPrincipal() {

    this.navCtrl.parent.select(0); // PrincipalPage si has navegado en este root irá a esa pagina

  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPage, { nombre:'Cachorrus', edad:'35'});

    modal.present(); // mostrar modal

    modal.onDidDismiss( parametros => {

      if( parametros ){
        console.log('Se cerró con parámetros');
        console.log(parametros);
      }else {
        console.log('Se Cerró sin parámetros');
      }

    });
  }
}
