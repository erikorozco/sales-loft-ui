import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-character-frecuency',
  templateUrl: './character-frecuency.component.html',
  styleUrls: ['./character-frecuency.component.sass']
})
export class CharacterFrecuencyComponent {

  data: any = undefined;
  headers = [
    'Character',
    'Count',
  ];

  constructor(private peopleService: PeopleService) {
    this.watchData();
  }

  /**
   * Fetch data and watch for any data update 
   * when this SubjectBehaviour is updated
   *
   * @memberof ResultsComponent
   */
  watchData(): void {
    this.peopleService.characterFrecuency.subscribe((res) => {
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

    return data.map((item) => {
      return [item.key, item.number];
    });

  }

}
