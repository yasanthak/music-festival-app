import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../shared/services/apis/festival.service';
import { Festivals } from 'src/app/shared/models/festival';


@Component({
  selector: 'festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.scss']

})

export class FestivalListComponent implements OnInit {

  festivalLists: Festivals[];
  constructor(private festivalService: FestivalService) {}

  ngOnInit() {

    this.festivalService.getFestivalResults().subscribe(
      response => {
        this.festivalLists = response;
       }, (err: any) => console.log(err)
    )
  }



}