import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {


  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  
  selectedFile:any=null;
  fd=new FormData();

  constructor() { }

  createFormData(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.fd.append('image',this.selectedFile,this.selectedFile.name)
  }

  public imagePath:any;
 imgURL: any;
public message: string;
 preview(files:any) {
 if (files.length === 0)
  return;
 var mimeType = files[0].type;
 if (mimeType.match(/image\/*/) == null) {
  this.message = "Only images are supported.";
  return;
 }
 var reader = new FileReader();
 this.imagePath = files;
 reader.readAsDataURL(files[0]); 
 reader.onload = (_event) => { 
 this.imgURL = reader.result; 
}
}

Addstaff=new FormGroup({
  name:new FormControl('',[Validators.required]),
  designation:new FormControl('',[Validators.required]),
  about:new FormControl('',[Validators.required]),
  img:new FormControl('',[Validators.required])
  
})

get name()
{
  return this.Addstaff.get('name');
}
get designation()
{
  return this.Addstaff.get('designation');
}
get about()
{
  return this.Addstaff.get('about');
}

get img()
{
  return this.Addstaff.get('img');
}



addstaff(){

}


  ngOnInit(): void {
  }

}
