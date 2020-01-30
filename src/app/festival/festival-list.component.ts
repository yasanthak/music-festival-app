import { Component, OnInit,Input } from '@angular/core';
import { Festivals } from 'src/app/shared/models/festival';



@Component({
  selector: 'festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.scss']

})

export class FestivalListComponent implements OnInit {

  @Input() festivals = [];
  constructor() {}

  ngOnInit() {
  
  }



}