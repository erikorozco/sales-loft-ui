import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  // Default menu option
  action = 'listPeople';

  constructor() { }

  /**
   * Action handler for app-people-actions component
   * @param action 
   */
  executeAction(action) {
    this.action = action;
  }

}
