import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-admin-user',
  templateUrl: './edit-admin-user.component.html',
  styleUrls: ['./edit-admin-user.component.css']
})
export class EditAdminUserComponent implements OnInit {


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

edituserForm=new FormGroup({
  usrname:new FormControl('',[Validators.required]),
  Fname:new FormControl('',[Validators.required]),
  Lname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  designation:new FormControl('',[Validators.required]),
  about:new FormControl('',[Validators.required]),
  image:new FormControl('',[Validators.required]),
  pwd:new FormControl('',[Validators.required])
  
})

get usrname()
{
  return this.edituserForm.get('usrname');
}
get Fname()
{
  return this.edituserForm.get('Fname');
}
get Lname()
{
  return this.edituserForm.get('Lname');
}
get email()
{
  return this.edituserForm.get('email');
}
get designation()
{
  return this.edituserForm.get('designation');
}
get about()
{
  return this.edituserForm.get('about');
}
get image()
{
  return this.edituserForm.get('image');
}
get pwd()
{
  return this.edituserForm.get('pwd');
}



editUser(){

}

  ngOnInit(): void {
  }

}
