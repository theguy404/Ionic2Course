import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EliteApi{

  private baseUrl = 'https://elite-schedule-app-i2-c4ae4.firebaseio.com/';
  constructor(private http: Http){

    getTournaments(){
      return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/tournaments.json`)
          .subscribe(res => resolve(res.json()));
      });
    }
  }
}
