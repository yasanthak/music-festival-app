import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { FestivalListComponent } from './festival-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('FestivalListComponent', () => {

  let component: FestivalListComponent;
  let fixture: ComponentFixture<FestivalListComponent>;
  let el: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [FestivalListComponent],


    }).compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(FestivalListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;

      });

  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should diplay the Festival List data', () => {
    expect(component).toBeDefined();

    component.festivals = [
      {
        "recordLabel": "ACR",
        "bands": [
          {
            "name": "Manish Ditch",
            "festivalName": "Trainerella"
          },
          {
            "name": "Critter Girls",
            "festivalName": ""
          }
        ]
      },
      {
        "bands": [
          {
            "name": "YOUKRANE",
            "festivalName": "Trainerella"
          }
        ],
        "recordLabel": "Anti Records"
      },
      {
        "recordLabel": "Fourth Woman Records",
        "bands": [
          {
            "name": "Jill Black",
            "festivalName": "LOL-palooza"
          },
          {
            "name": "The Black Dashes",
            "festivalName": "Small Night In"
          }
        ]
      }


    ];



    fixture.detectChanges();
    const festivals = el.queryAll(By.css(".list-group"));
    expect(festivals).toBeTruthy();
    expect(festivals.length).toBe(3);


  });


});
