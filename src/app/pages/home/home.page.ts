import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { AddTodoComponent } from '../../components/add-todo/add-todo.component';
import { Todo } from '../../domain/todo';
import { Tag } from '../../domain/tag';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public todos: Todo[] = [];
  public cards: Map<string,Tag> = new Map();
  public tags: Tag[] =[];

  constructor(
    private modalCtrl: ModalController, 
    private dataService: DataService,
    private navCtrl: NavController) {
  }

  ngOnInit(){
    this.dataService.load().then(() => {
      this.getData();
    });
  }
  
  async addTodo() {
    let addModal = await this.modalCtrl.create({
      component: AddTodoComponent,
      cssClass: 'add-todo'
    });

    addModal.onDidDismiss().then(() => {
      this.getData();
    });
    return await addModal.present();
  }

  public getData() {
    this.dataService.getData().then((todos) => {
      if(!!todos){
        this.todos = todos as Todo[];
        this.cards = this.getCards();
        this.tags = Array.from(this.cards.values());
      }
    });
  }

  private getCards():  Map<string,Tag> {
    let cards:  Map<string,Tag> = new Map();
    for (let i = 0; i < this.todos.length; i++) {
      let todo = this.todos[i];
      const label = todo['tag'];
      let newTodos: Todo[] = [];
      let newTodo: Todo = new Todo(todo['id'],todo['task'],todo['tag']);
      if (cards.has(label)) {
        cards.get(label).todos.push(newTodo);
      }
      else {
        const color = 'tertiary';
        newTodos.push(newTodo);
        let tag: Tag = new Tag(label,color,newTodos);
        cards.set(label,tag);
      }
    }
    return cards;
  }
  
}