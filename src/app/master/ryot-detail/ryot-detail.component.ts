import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RyotDetail } from '../../models/ryot-detail';
import { RyotdetailService } from '../../services/servicedetail/ryotdetail.service';
@Component({
  selector: 'app-ryot-detail',
  templateUrl: './ryot-detail.component.html',
  styleUrls: ['./ryot-detail.component.css']
})
export class RyotDetailComponent implements OnInit {

  submitted = false;
  message: string;
 ryots: RyotDetail[];

 constructor(private ryotDetailService:RyotdetailService,private http: HttpClient) {}

 ngOnInit(): void {
   this.getRyotDetails();
    
 }

 getRyotDetails() {
   return this.ryotDetailService.getRyotDetails()
              .subscribe(
                ryots => {
                 console.log(ryots);
                 this.ryots = ryots
                }
               );
              }


}



