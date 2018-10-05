import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AddItemPage } from '../pages/add-item/add-item.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = [];

  constructor(public modalCtrl: ModalController, public dataService: DataService) {
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = todos;
      }
    });
  }
  
  async addItem() {
    const addModal = await this.modalCtrl.create({
      component: AddItemPage,
      componentProps: { }
    });

    addModal.onDidDismiss().then((item) => {
      if(item){
        this.saveItem(item);
      }});
    return await addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
  
}
