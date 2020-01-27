import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Festivals, Bands } from 'src/app/shared/models/festival';


@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private festivalRequestUrl = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';
  private url = 'http://localhost:3000/api/v1/festivals';
  festivals = new Festivals();
  bands = new Bands();

  constructor(private http: HttpClient) { }

  getFestivalResults(): Observable<any> {

    return this.http.get<any>(this.url)
      .pipe(map(res => {

        // console.log(res);
        let tranFormedBands = [];
        let tranFormedArray = [];
        let listOfFestivals = [];
        const festivalList = res;
        let  festivalCopy: Festivals

        festivalList.forEach(fest => {

          fest.bands.forEach(bands => {
           
            this.bands.name = bands.name;
            this.bands.festivalName = fest.name;

            // new band object
            const bandCopy = Object.assign({}, this.bands);

            
            /// festival array needs to be empty before pushing new values
            this.festivals.bands = [];
            this.festivals.bands.push(bandCopy);
            this.festivals.recordLabel = bands.recordLabel;
             // new festival object 
             festivalCopy = Object.assign({}, this.festivals);

             if(this.festivals.recordLabel !== festivalCopy.recordLabel) {
             
              
            }
            tranFormedBands.push(festivalCopy);

            // tranFormedBands.forEach(bd => {
            //   if(bd.recordLabel === bands.recordLabel) {
            //     tranFormedBands.pop();
            //   }
            // })


            /// use speard operator to clone the object and push it to festivals
            // tranFormedBands  = [...festivals];
            // tranFormedBands.push(bands);
          });
          // tranFormedArray.push(tranFormedBands);
        });

        /// clone the transfomed bands array 
        // tranFormedArray = [...tranFormedBands];

        // tranFormedBands.forEach((band) => {
        //     if(band.recordLabel.indexOf()) {


        //     }
        // })


        // tranFormedBands.filter(function (item) {
        //   tranFormedArray.forEach(function (cItem) {
        //     if (cItem.recordLabel === item.recordLabel) {
        //       listOfFestivals.push(item)
        //     }
        //   })
        // });

        return tranFormedBands;


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