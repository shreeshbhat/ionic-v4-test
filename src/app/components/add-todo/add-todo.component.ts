import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private modalCtrl : ModalController) { }
  private task : string;
  private tag : string;
  
  ngOnInit() {
  }

  saveItem(): void {
    let newTodo = {
      id : '',
      task: this.task,
      tag: this.tag
    };

    this.dataService.createTodo(newTodo);
    this.close();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
