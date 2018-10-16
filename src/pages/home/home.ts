import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  listaCompras: Array<{ nome: String; qtde: number; comprado: boolean }>;
  item: String;
  qtde: number;

  constructor(public navCtrl: NavController, private storage: Storage) {
    
    storage.get('listaCompras').then((val) => {
      if(val != null){
        this.listaCompras = val;
      }else{
        this.listaCompras = [];
      }
    });
  }
  adicionar() {
    this.listaCompras.push({
      comprado: false,
      nome: this.item,
      qtde: this.qtde,
    });
    this.storage.set("listaCompras", this.listaCompras);
  }
  apagar(item) {
    let index = this.listaCompras.indexOf(item);
    this.listaCompras.splice(index, 1);
  }
}
