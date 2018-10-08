import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Todo } from '../../domain/todo';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 
  private todo: Todo;
 
  constructor(private route: ActivatedRoute, private dataService: DataService, private navCtrl: NavController) {
 
    // Initialise a placeholder todo until the actual todo can be loaded in
    this.todo = {
      id: '',
      task: '',
      tag: ''
    };
 
  }
 
  ngOnInit() {
 
    // Get the id of the todo from the URL
    let todoId = this.route.snapshot.paramMap.get('id');
 
    // Check that the data is loaded before getting the todo
    // This handles the case where the detail page is loaded directly via the URL
    if(this.dataService.loaded){
      this.todo = this.dataService.getTodo(todoId)
    } else {
      this.dataService.load().then(() => {
        this.todo = this.dataService.getTodo(todoId)
      });
    }
 
  }
 
  todoChanged(){
    this.dataService.save();
  }
 
  deleteTodo(){
    this.dataService.deleteTodo(this.todo);
    this.navCtrl.navigateBack('/todo');
  }
 
}