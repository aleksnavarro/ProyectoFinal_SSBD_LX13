import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  nombre='';
  telefono='';
  correo='';
  fb='';
  tw='';
  ig='';
  notas='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http){
                this.nombre=this.navParams.get('nombre');
                this.telefono=this.navParams.get('telefono');
                this.correo=this.navParams.get('correo');
                this.fb=this.navParams.get('fb');
                this.tw=this.navParams.get('tw');
                this.ig=this.navParams.get('ig');
                this.notas=this.navParams.get('notas');
              }


}
