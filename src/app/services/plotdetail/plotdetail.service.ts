import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlotDetail } from 'src/app/models/plot-detail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlotdetailService {
  plot:PlotDetail = new PlotDetail();
  submitted = false;
  plots: PlotDetail[];
  private piatrikaUrl = 'http://localhost:3000/plots';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getPlotDetails (): Observable<PlotDetail[]> {
    return this.http.get<PlotDetail[]>(`${this.piatrikaUrl}/`)
  }

  getPlotdetail(id: number): Observable<PlotDetail> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<PlotDetail>(url);
  }

  addPlotDetail (PlotDetail: PlotDetail): Observable<PlotDetail> {
    return this.http.post<PlotDetail>(`${this.piatrikaUrl}/`, PlotDetail, httpOptions);
  }}
