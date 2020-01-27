
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getJson() {

    const festivalJson = [
      {
          "name": "LOL-palooza",
          "bands": [
              {
                  "name": "Werewolf Weekday",
                  "recordLabel": "XS Recordings"
              },
              {
                  "name": "Jill Black",
                  "recordLabel": "Fourth Woman Records"
              },
              {
                  "name": "Frank Jupiter",
                  "recordLabel": "Pacific Records"
              },
              {
                  "name": "Winter Primates",
                  "recordLabel": ""
              }
          ]
      },
      {
          "name": "Small Night In",
          "bands": [
              {
                  "name": "The Black Dashes",
                  "recordLabel": "Fourth Woman Records"
              },
              {
                  "name": "Yanke East",
                  "recordLabel": "MEDIOCRE Music"
              },
              {
                  "name": "Green Mild Cold Capsicum",
                  "recordLabel": "Marner Sis. Recording"
              },
              {
                  "name": "Squint-281",
                  "recordLabel": "Outerscope"
              },
              {
                  "name": "Wild Antelope",
                  "recordLabel": "Marner Sis. Recording"
              }
          ]
      },
      {
          "name": "Trainerella",
          "bands": [
              {
                  "name": "YOUKRANE",
                  "recordLabel": "Anti Records"
              },
              {
                  "name": "Adrian Venti",
                  "recordLabel": "Monocracy Records"
              },
              {
                  "name": "Wild Antelope",
                  "recordLabel": "Still Bottom Records"
              },
              {
                  "name": "Manish Ditch",
                  "recordLabel": "ACR"
              }
          ]
      },
      {
          "name": "Twisted Tour",
          "bands": [
              {
                  "name": "Auditones",
                  "recordLabel": "Marner Sis. Recording"
              },
              {
                  "name": "Summon",
                  "recordLabel": "Outerscope"
              },
              {
                  "name": "Squint-281"
              }
          ]
      },
      {
          "bands": [
              {
                  "name": "Critter Girls",
                  "recordLabel": "ACR"
              },
              {
                  "name": "Propeller",
                  "recordLabel": "Pacific Records"
              }
          ]
      }
  ]


    // let url = '/assets/' + file;
      return festivalJson;
  }
}
