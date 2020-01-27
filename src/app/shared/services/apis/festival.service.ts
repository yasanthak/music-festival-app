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
  festivalCloned = new Festivals();
  bands = new Bands();
  bandsCloned = new Bands();

  constructor(private http: HttpClient) { }

  getFestivalResults(): Observable<any> {

    return this.http.get<any>(this.url)
      .pipe(map(res => {

        const festivalList = res;
        let tranFormedBands = [];
       
        festivalList.forEach(fest => {

          fest.bands.forEach(bands => {

            this.bands.name = bands.name;
            this.bands.festivalName = fest.name === undefined ? "" : fest.name;

            // band object needs to be cloned before pushing
            this.bandsCloned = Object.assign({}, this.bands);

            /// festival array needs to be empty before pushing new values
            this.festivals.bands = [];
            this.festivals.bands.push(this.bandsCloned);
            this.festivals.recordLabel = bands.recordLabel === undefined ? "" : bands.recordLabel;

            // new festival object needs to be cloned before pushing 
            this.festivalCloned = Object.assign({}, this.festivals);
            tranFormedBands.push(this.festivalCloned);

          });

        });

        tranFormedBands = tranFormedBands.sort(this.comparetoSort);
        tranFormedBands = this.mergeRecordLables(tranFormedBands);

        return tranFormedBands;


      }),
        catchError(this.handleHttpError)

      );
  }



  private comparetoSort(a, b) {

    const recordLabelA = a.recordLabel.toUpperCase();
    const recordLabelB = b.recordLabel.toUpperCase();

    let comparison = 0;
    if (recordLabelA > recordLabelB) {
      comparison = 1;
    } else if (recordLabelA < recordLabelB) {
      comparison = -1;
    }

    return comparison;
  }

  private mergeRecordLables(listOfFestivals) {

    const mergeRecordLables = [...listOfFestivals.reduce(function (a, b) {
      let name = b.recordLabel;
      let festivalObj = a.get(name);

      return festivalObj ? a.set(name, {
        recordLabel: name,
        bands: [...new Set(festivalObj.bands.concat(b.bands))]
      }) : a.set(name, b);
    }, new Map())
      .values()];

    return mergeRecordLables;

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