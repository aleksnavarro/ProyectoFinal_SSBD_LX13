import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { ContactoPage} from '../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactoPage=ContactoPage;
  contactos=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http)
              {this.getContactos();}

  getContactos(){
    this.http.get('/contactos/')
    .subscribe(data=>{
      console.log(data.text());
      this.contactos=data.json();
    },error1=>{
      console.log('error');
    });
  }

  clickContacto(i){
    this.navCtrl.push(this.contactoPage,i);
  }

}
