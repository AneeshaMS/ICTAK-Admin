import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course:any = {
    courseTitle            : '',
    courseImage            : '',
    shortDesc              : '',
    LongDes                 : '',
    Reg_Status              : 1 ,
    Objectives              : '',
    category                : '',
    Rating                  : '',
    about_course            : '',
    dates                   : '' ,
    eligibility             : '',
    course_fee              : '',
    aptitude_test           : '',
    course_delivery         : '',
    internship_partner      : '',
    knowledge_partner       : '',
    index                   : 0,
    active                  : true 
  }
   
   
  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";


  selectedFile: any = null;
  formData: any = {};
  fd = new FormData();

  constructor(private Adminserve:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }
 

  AddcourseForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    describe:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    eligible:new FormControl('',[Validators.required]),
    fee:new FormControl('',[Validators.required]),
    entrance:new FormControl('',[Validators.required]),
    refund:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    delivery:new FormControl('',[Validators.required]),
    intern:new FormControl('',[Validators.required]),
    knowledge:new FormControl('',[Validators.required]),
    sponsour:new FormControl('',[Validators.required]),
   
  })

  addCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.AddcourseForm.get('title');
  }
  get describe()
  {
    return this.AddcourseForm.get('describe');
  }
  get status()
  {
    return this.AddcourseForm.get('status');
  }
  get rate()
  {
    return this.AddcourseForm.get('rate');
  }
  get category()
  {
    return this.AddcourseForm.get('category');
  }
  get about()
  {
    return this.AddcourseForm.get('about');
  }
  get date()
  {
    return this.AddcourseForm.get('date');
  }
  get eligible()
  {
    return this.AddcourseForm.get('eligible');
  }
  get fee()
  {
    return this.AddcourseForm.get('fee');
  }
  get entrance()
  {
    return this.AddcourseForm.get('entrance');
  }
  get refund()
  {
    return this.AddcourseForm.get('refund');
  }
  get img()
  {
    return this.AddcourseForm.get('img');
  }
  get delivery()
  {
    return this.AddcourseForm.get('delivery');
  }
  get intern()
  {
    return this.AddcourseForm.get('intern');
  }
  get knowledge()
  {
    return this.AddcourseForm.get('knowledge');
  }
  get sponsour()
  {
    return this.AddcourseForm.get('sponsour');
  }

  ngOnInit(): void {
  }


  AddCourse() {

    this.Adminserve.newCourse(this.course).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })

        }
      })
  }


  courseImage(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log("course image",this.fd)
    // this.course.courseImage
  }
  
  courseDelivery(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }
  courseIntern(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }
  courseKnowledge(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }





}
