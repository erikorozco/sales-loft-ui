import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-people-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  @Output() actionsHandler = new EventEmitter();

  constructor() { }


  /**
   * Will trigger an event with the action performed on components which calls this component
   *
   * @param {string} action
   * @memberof ActionsComponent
   */
  emitAction(action: string): void {
    this.actionsHandler.emit(action);
  }

}
