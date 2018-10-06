import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public todos: Todo[] = [];
  public loaded: boolean = false;

  constructor(public storage: Storage){
  }

  load(): Promise<boolean> {
    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {
      // Get the todos that were saved into storage
      this.storage.get('todos').then((todos) => {
        // Only set this.todos to the returned value if there were values stored
        if(todos != null){
          this.todos = todos;
        }
        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);
      });
    });
  }

  public getData() {
    return this.storage.get('todos'); 
  }
 
  public save(){
    this.storage.set('todos', this.todos);
  }

  getTodo(id): Todo {
    // Return the todo that has an id matching the id passed in
    return this.todos.find(todo => todo.id === id);
  }

  createTodo(todo): void {
    // Create a unique id that is one larger than the current largest id
    let id = Math.max(...this.todos.map(todo => parseInt(todo.id)), 0) + 1;
    this.todos.push({
      id: id.toString(),
      task: todo,
      tag: ''
    });
    this.save();
  }

  deleteTodo(todo): void {
    // Get the index in the array of the todo that was passed in
    let index = this.todos.indexOf(todo);
    // Delete that element of the array and resave the data
    if(index > -1){
      this.todos.splice(index, 1);
      this.save();
    }
 
  }

}