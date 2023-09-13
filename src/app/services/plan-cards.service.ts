import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlanCardsService {
  url = "http://192.168.0.29:3005/api/v1/plans/all";
  constructor(private http:HttpClient) { }
  planCards(){
    return this.http.get(this.url)
  }
}
