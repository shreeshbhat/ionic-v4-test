import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CardComponent } from '../../components/card/card.component';
import { AddTodoComponent } from '../../components/add-todo/add-todo.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
    AddTodoComponent,
    CardComponent
  ],
  entryComponents: [
    AddTodoComponent,
    CardComponent
  ],
})
export class HomePageModule {}
