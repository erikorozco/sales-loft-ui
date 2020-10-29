import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl: string = environment.apiBaseUrl;

  people = new BehaviorSubject(undefined);
  characterFrecuency = new BehaviorSubject(undefined);
  similarEmails = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) {
    this.initPepleServiceData();
  };


  /**
   * Fetch api data and init peple service data
   *
   * @memberof PeopleService
   */
  initPepleServiceData(): void {

    const promiseQueue = [this.getAll(), this.getCharacterFrecuency(), this.getSimilarEmails()];

    Promise.all(promiseQueue).then((responses) => {
      const [getAllResponse, getCharacterFrecuencyResponse, getSimilarEmailsReponse] = responses;
      this.people.next(getAllResponse);
      this.characterFrecuency.next(getCharacterFrecuencyResponse);
      this.similarEmails.next(getSimilarEmailsReponse);
    });

  }

  getAll(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}people`).toPromise();;
  }

  getCharacterFrecuency(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}people/character-frecuency`).toPromise();;
  }

  getSimilarEmails(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}people/similar-emails`).toPromise();;
  }

}
