import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-testimony',
  templateUrl: './add-testimony.component.html',
  styleUrls: ['./add-testimony.component.css']
})
export class AddTestimonyComponent implements OnInit {


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

Addtestimony=new FormGroup({
  name:new FormControl('',[Validators.required]),
  position:new FormControl('',[Validators.required]),
  Org:new FormControl('',[Validators.required]),
  testi:new FormControl('',[Validators.required]),
  title:new FormControl('',[Validators.required]),
  img:new FormControl('',[Validators.required])
  
})

get name()
{
  return this.Addtestimony.get('name');
}
get position()
{
  return this.Addtestimony.get('position');
}
get Org()
{
  return this.Addtestimony.get('Org');
}
get testi()
{
  return this.Addtestimony.get('testi');
}
get title()
{
  return this.Addtestimony.get('title');
}
get img()
{
  return this.Addtestimony.get('img');
}



addtestimony(){

}

  ngOnInit(): void {
  }

}
