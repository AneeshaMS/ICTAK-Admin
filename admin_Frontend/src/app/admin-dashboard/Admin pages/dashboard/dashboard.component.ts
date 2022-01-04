import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3: any

  step:any
  // Clicked : boolean
  


  constructor() { }

  ngOnInit(): void {
      // chart
      const data = {
        labels: [
          'Total Courses',
          ' Student registrations',
          'Total Admins',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4
        }]
      };
       
  
      Chart.register(...registerables);
      var myChart = new Chart("myChart", {
        type: 'doughnut',
        data: data,
        
      });

  }


  onClick(check:any){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }    
      
    }

   onSwitch(check:any){
 
     switch (check) {
      case 1: 'tab1';
        return 
      case 2:'tab2';
        return 
      case 3: 'tab3';
        return 
    }

}

}
