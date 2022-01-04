import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  searchText:any;

  staffs = [
    {
     image:"",
     Name:"",
     designation:""
    }
 
   ]

  constructor() { }

  ngOnInit(): void {
  }
 

}
