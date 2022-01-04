import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  
  server_address: string = "http://localhost:3000"
  
  getCourses() {
    return this.http.get<any>(`${this.server_address}/coursedata`);
  };
   
  getCourseRegistrationAggr() {
    return this.http.get(`${this.server_address}/registration/registercourseAggr`)
  };

  session_out() {
    this.http.get(`${this.server_address}/logout`)
  };

  getCourseRegistrationList() {
    return this.http.get(`${this.server_address}/registration/registercourseList`)
  };

  getSingleCourse(id: any) {
    return this.http.get(`${this.server_address}/coursedata/courseSingle/` +id);
  };

  // updateCourseIndex(course: any) {
  //   return this.http.put(`${this.server_address}/course/Course/updateIndex`, course);
  // };

  editCourse(Course: any) {

    console.log("data arrived at service",Course)
    return this.http.post<any>(`${this.server_address}/coursedata/Course/update`, Course);

  };

  newCourse(course: any) {
    return this.http.post(`${this.server_address}/coursedata/Course/add`, course);
  }

  deleteCourse(id: any) {
    console.log("id getting",id._id)
    return this.http.post<any>(`${this.server_address}/coursedata/Course/remove`, +id);
  }
  

//!Testimonials
  
  
gettestimonial(id: any) {
  return this.http.get(`${this.server_address}/testimonials/testimonial/` + id);
}


gettestimonials() {
  return this.http.get(`${this.server_address}/CourseTestimony`);
}

updateTestimonialIndex(testimonial: any) {
  return this.http.put(`${this.server_address}/testimonials/Testimonials/updateIndex`, testimonial);
};


newTestimonial(item: any) {

  return this.http.post(`${this.server_address}/testimonials/testimony/insert`, item)
}


deletetestimonial(testimonial: any) {
  return this.http.post(`${this.server_address}/testimonials/testimonial/remove/`, testimonial);
}


editTestimonial(item: any) {
  return this.http.post(`${this.server_address}/testimonials/testimonial/update`, item)
};

// Academics
// academic list

getacademic() {
  return this.http.get(`${this.server_address}/academic`);
};
// delete academic
deleteacademic(AcademicAppln : any){
  return this.http.post(`${this.server_address}/academic/remove`,AcademicAppln);
}


// corporate membership
// corporate list
getcorporate() {
  return this.http.get(`${this.server_address}/CorporateApplication/corporatelist`);
};
deletecorporate(corporate:any) {
  return this.http.post(`${this.server_address}/CorporateApplication/remove`,corporate);
};

// partnership
getpartnership() {
  return this.http.get(`${this.server_address}/PartnershipApplication`);
};
// delete partnership member
deletepartner(partnerAppl:any){
  return this.http.post(`${this.server_address}/PartnershipApplication/remove`,partnerAppl);
}

// course registered users
getregistereduser() {
  return this.http.get(`${this.server_address}/registration/registercourseList`);
};
// delete registered user
deleteuser(RegsiteredUser:any){
  return this.http.post(`${this.server_address}/registration/registercourseList/remove`,RegsiteredUser);
}

}





