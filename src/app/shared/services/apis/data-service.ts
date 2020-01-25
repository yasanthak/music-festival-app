
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getJson(file: string) {
    let url = '/assets/' + file;
     return url;
  }
}
