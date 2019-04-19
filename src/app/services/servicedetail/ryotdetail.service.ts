import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RyotDetail } from '../../models/ryot-detail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RyotdetailService {

  ryot:RyotDetail = new RyotDetail();
  submitted = false;
  ryots: RyotDetail[];
  private piatrikaUrl = 'http://localhost:8000/ryots';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getRyotDetails (): Observable<RyotDetail[]> {
    return this.http.get<RyotDetail[]>(`${this.piatrikaUrl}/`)
  }

  getRyotDetail(id: number): Observable<RyotDetail> {
    const url = `${this.piatrikaUrl}/${id}/`;
    return this.http.get<RyotDetail>(url);
  }

  addRyotDetail (RyotDetail: RyotDetail): Observable<RyotDetail> {
    return this.http.post<RyotDetail>(`${this.piatrikaUrl}/`, RyotDetail, httpOptions);
  }}

