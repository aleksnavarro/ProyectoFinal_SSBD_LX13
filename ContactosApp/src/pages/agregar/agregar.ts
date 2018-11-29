import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  homePage=HomePage;
  nombre='';
  telefono='';
  correo='';
  fb='';
  tw='';
  ig='';
  notas='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  clickAgregar(){
    console.log(this.nombre);
    console.log(this.telefono);
    console.log(this.correo);
    console.log(this.fb);
    console.log(this.tw);
    console.log(this.ig);
    console.log(this.notas);

    this.navCtrl.setRoot(this.homePage);

  }

}
