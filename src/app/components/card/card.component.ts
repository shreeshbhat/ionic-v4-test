import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../domain/todo';
import { Tag } from '../../domain/tag';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() tag: Tag[];

  constructor() { }

  ngOnInit() {
  }

}
