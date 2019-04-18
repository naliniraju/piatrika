import { Component, OnInit } from '@angular/core';
import { PlotDetail } from '../models/plot-detail';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PlotdetailService } from '../services/plotdetail/plotdetail.service';
import { RyotDetail } from '../models/ryot-detail';
import { RyotdetailService } from '../services/servicedetail/ryotdetail.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  ryot:RyotDetail = new RyotDetail();
  plot:PlotDetail = new PlotDetail();
  submitted = false;
  ryots: RyotDetail[];
  plots: PlotDetail[];

  
 

  constructor(
    private plotDetailService:PlotdetailService,
    private ryotDetailService:RyotdetailService,
    private router:Router
  ) { }
ngOnInit(){
  
}

// PLOT DATA
  newPlot(): void {
    this.submitted = false;
    this.plot = new PlotDetail();
  }

 addPlotdetail() {
   this.submitted = true;
   this.save();
 }

   private save(): void {
    console.log(this.plot);
    this.plotDetailService.addPlotDetail(this.plot)
        .subscribe();
        this.getPlotDetails();
        this.router.navigate(['/masterdetail']);
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
// RYOT DATA
newRyot(): void {
  this.submitted = false;
  this.ryot = new RyotDetail();
}

addRyotDetail() {
 this.submitted = true;
 //this.saveRyot();
 console.log(this.ryot);
 this.ryotDetailService.addRyotDetail(this.ryot)
     .subscribe();
     this.getRyotDetails();
     this.router.navigate(['/masterdetail'])
}

//  saveRyot(): void {
//   console.log(this.ryot);
//   this.ryotDetailService.addRyotDetail(this.ryot)
//       .subscribe();
//       this.getRyotDetails();
//       this.router.navigate(['/masterdetail']);
// }

getRyotDetails() {
  return this.ryotDetailService.getRyotDetails()
             .subscribe(
               ryots => {
                console.log(ryots);
                this.ryots = ryots;
               }
              );
}

}
