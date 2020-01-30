import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs";
import { FestivalService } from '../shared/services/apis/festival.service';
import { Festivals } from '../shared/models/festival';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  festivalLists$: Observable<Festivals[]>;

  constructor(private festivalService: FestivalService) {

  }

  ngOnInit() {

    this.loadFestivals();

  }

  loadFestivals() {

    this.festivalLists$ = this.festivalService.getFestivalResults();

  }



}