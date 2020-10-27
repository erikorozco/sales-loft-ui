import { Component } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  data: any = undefined;
  headers = [
    'Person Name',
    'Email Address',
    'Job Title',
  ];

  constructor(private peopleService: PeopleService) {
    this.watchData();
  }

  /**
   * Fetch poeple data and watch for any data update 
   * when this SubjectBehaviour is updated
   *
   * @memberof ResultsComponent
   */
  watchData(): void {
    this.peopleService.people.subscribe((res) => {
      if (res) {
        this.data = this.parseDataToTableDataSource(res.data);
      }
    });

  }


  /**
   * Parse data according to format in table-container component
   *
   * @param {Array<any>} data
   * @returns Array
   * @memberof ResultsComponent
   */
  parseDataToTableDataSource(data: Array<any>): Array<any> {

    return data.map((person) => {
      return [person.display_name, person.email_address, person.title];
    });

  }

}
