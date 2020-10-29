import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-similar-emails',
  templateUrl: './similar-emails.component.html',
  styleUrls: ['./similar-emails.component.scss']
})
export class SimilarEmailsComponent {

  data: any = undefined;
  headers = [
    'Email',
    'Similar Emails',
  ];

  constructor(private peopleService: PeopleService) {
    this.watchData();
  }

  /**
   * Fetch similar emails data and watch for any data update 
   * when this SubjectBehaviour is updated
   *
   * @memberof ResultsComponent
   */
  watchData(): void {
    this.peopleService.similarEmails.subscribe((res) => {
      if (res) {
        this.data = this.parseDataToTableDataSource(res.data);
        debugger;
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

    return data.map((item) => {
      return [item.email, item.similarEmails.join(',')];
    });

  }
}
