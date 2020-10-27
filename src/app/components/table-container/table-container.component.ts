import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.sass']
})
export class TableContainerComponent {

  @Input() data: Array<Array<String>>;
  @Input() headers: Array<String>;
  @Input() showIndex: boolean = true;

  constructor() {}
}
