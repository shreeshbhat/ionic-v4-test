import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public storage: Storage){
  }

  public getData() {
    return this.storage.get('todos'); 
  }
 
  public save(data){
    this.storage.set('todos', data);
  }
}
