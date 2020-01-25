import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MusicBands } from 'src/app/shared/models/festival';
import {DataService} from './data-service';




@Injectable({
  providedIn: 'root'
})
export class FestivalService {
 
  private festivalRequestUrl = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';
  private url = 'http://localhost:3000/api/currencies';
  
  //private Url = this.dataService.getJson('festivals.json');

  constructor(private http: HttpClient,private dataService: DataService) { }

  getFestivalResults(): Observable<any> {
     
    return this.http.get<any>(this.url)
    .pipe(map(res => {

     // console.log(res);
       const festivalList = res;
       return festivalList;
      // const tranFormedArray = [];

      // currencyList.forEach(result => {

      //     const resultList = this.maxProfitForCurrency(result);
      //     tranFormedArray.push(resultList);

      // });

      // return tranFormedArray;

  }),
      catchError(this.handleHttpError)

  );
  }

  private handleHttpError(err) {
   
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
       errorMessage = `An error occurred: ${err.error.Message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.error.Message}`;
    }
    return throwError(errorMessage);
  }

}