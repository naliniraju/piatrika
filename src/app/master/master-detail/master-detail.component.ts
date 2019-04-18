import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PlotDetail } from '../../models/plot-detail';
import { PlotdetailService } from '../../services/plotdetail/plotdetail.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  submitted = false;
  message: string;
 plots: PlotDetail[];

 constructor(private plotDetailService:PlotdetailService,private http: HttpClient) {}

 ngOnInit(): void {
   this.getPlotDetails();
    
 }

 getPlotDetails() {
   return this.plotDetailService.getPlotDetails()
              .subscribe(
                plots => {
                 console.log(plots);
                 this.plots = plots
                }
               );
              }


}




