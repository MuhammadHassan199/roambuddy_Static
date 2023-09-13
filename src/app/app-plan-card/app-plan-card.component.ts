import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-app-plan-card',
  templateUrl: './app-plan-card.component.html',
  styleUrls: ['./app-plan-card.component.css']
})
export class AppPlanCardComponent {
  @Input() country: any;
  
  
  constructor(private _route: Router, private _apiService: ApiService){}

}
