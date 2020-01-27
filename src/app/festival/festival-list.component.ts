import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../shared/services/apis/festival.service';


@Component({
  selector: 'festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.scss']

})

export class FestivalListComponent implements OnInit {

  festivalLists = [];
  constructor( 
      private festivalService: FestivalService,
      ) { 

}

  ngOnInit() {

  
      this.festivalService.getFestivalResults().subscribe(
          response => {
               this.festivalLists = response;
               console.log(JSON.stringify(this.festivalLists));
         
          },(err: any) => console.log(err)
        )
  }



}