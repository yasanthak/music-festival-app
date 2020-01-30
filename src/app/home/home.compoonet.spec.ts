import { async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeComponent } from "./home.component";
import { FestivalService } from '../shared/services/apis/festival.service';
import { FestivalListComponent } from '../festival/festival-list.component';
import {of} from 'rxjs';
import { By } from '@angular/platform-browser';



describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;
  let festivalService: any;

  

  beforeEach(async(() => {

    const festivalServiceSpy = jasmine.createSpyObj('FestivalService', ['getFestivalResults'])

    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FestivalListComponent],
     
      
      providers: [
        { provide: FestivalService, useValue: festivalServiceSpy }
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        festivalService = TestBed.get(FestivalService);
      });

  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });

  

});
