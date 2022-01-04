import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  searchText:any;

  adminUsers=[{
    image:"",
    Username:"",
    FName:"",
    LName:"",
    Email:"",
    Designation:""
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
