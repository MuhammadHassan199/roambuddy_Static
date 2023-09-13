import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apilink } from '../../data/apilink'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private _apilink: Apilink, private http:HttpClient) { }
  getHeaders(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return  headers;
  }
  getAllPlanCountryWise(CountryCode: any) {
    let headers = this.getHeaders();
    return this.http.get(this._apilink.countryWisePlans + CountryCode, {
      headers,
    });
  }
  getAllProducts() {
    let headers = this.getHeaders();
    return this.http.get(this._apilink.all_Esim_Plans, { headers });
  }
}
