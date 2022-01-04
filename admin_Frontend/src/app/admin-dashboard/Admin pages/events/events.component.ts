import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  searchText:any;

  events=[{
    image:"",
    EventName:"",
    Date:"",
    Location:"",
    description:""
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
