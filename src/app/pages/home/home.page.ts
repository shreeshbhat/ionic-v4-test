import { Component } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = [];

  constructor(
    private modalCtrl: ModalController, 
    private dataService: DataService,
    private alertCtrl: AlertController,
    private navCtrl: NavController) {
    this.getData();
  }

  ngOnInit(){
    this.dataService.load();
  }
  
  public addTodo() {
    this.alertCtrl.create({
      header: 'New Note',
      message: 'What should the title of this note be?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.dataService.createTodo(data.title);
            this.getData();
            //TODO Change this to not load entire data while adding one todo
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  public getData() {
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = todos;
      }
    });
  }
  
}