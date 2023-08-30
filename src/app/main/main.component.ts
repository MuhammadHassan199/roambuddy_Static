import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppPlanCardComponent } from '../app-plan-card/app-plan-card.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  countries: any[] = [
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'IL', name: 'Israel' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'OM', name: 'Oman' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'VC', name: ' Saint Vincent And The Grenadines' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'TD', name: 'Chad' },
    { code: 'CD', name: ' Democratic Republic of the Congo' },
    { code: 'EG', name: 'Egypt' },
    { code: 'KE', name: 'Kenya' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'RE', name: 'Reunion' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'IL', name: 'Israel' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'OM', name: 'Oman' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'VC', name: ' Saint Vincent And The Grenadines' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'TD', name: 'Chad' },
    { code: 'CD', name: ' Democratic Republic of the Congo' },
    { code: 'EG', name: 'Egypt' },
    { code: 'KE', name: 'Kenya' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'RE', name: 'Reunion' },
  ];
  displayedCountries: any[] = [];
  showAll: boolean = false;

constructor() {
  this.displayedCountries = this.countries.slice(0, 12);
}
countriesItem() {
  this.showAll = !this.showAll;

  if (this.showAll) {
      this.displayedCountries = this.countries; // Show all countries
  } else {
      this.displayedCountries = this.countries.slice(0, 12); // Show only first 12 countries
  }
}
openPlans() {
  this.countriesItem 
  
}
}
