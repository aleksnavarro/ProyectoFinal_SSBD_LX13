import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
import { Http } from "@angular/http";
import { ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController ) {}

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

    this.http.get("/agregar/?nombre="+this.nombre+'&telefono='+this.telefono+
    '&correo='+this.correo+'&fb='+this.fb+'&tw='+this.tw+'&ig='+this.ig+
    '&notas='+this.notas).subscribe(data=>{console.log(data.text());
        const toast = this.toastCtrl.create({
        message: 'Contacto añadido correctamente.',
        position: 'middle',
        showCloseButton: true,
        closeButtonText: 'Ok',
      });
      toast.present();

/*      const alerta = this.alertCtrl.create(
        {
          title:'Exito',
          subTitle:'Contacto añadido correctamente',
          buttons:['ok']
        }
      );
      alerta.present();*/
    },
    error1=>{console.log("Error");}
  );
    this.navCtrl.pop();
    //this.navCtrl.setRoot(this.navCtrl.getActive().homePage);
  }
}
