import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppPlanCardComponent } from '../app-plan-card/app-plan-card.component';
import { Router } from '@angular/router';


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
// drop_Down: any;
constructor(private router:Router) {
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
@Input() country: any;
countryCardOpenStates: number = -1;

    toggleCountryCard(index: number) {
      if (this.countryCardOpenStates === index) {
        // Clicked on an already open card, so close it
        this.countryCardOpenStates = -1;
    } else {
        // Close previously open card (if any) and open the new one
        this.countryCardOpenStates = index;
    
    }
  }
  currentlyDisplayedContentId: string = 'countryFlags';
  changeDisplayedContent(contentId: string) {
    this.currentlyDisplayedContentId = contentId;
    
}

activeTabIndex: number = 0;
showTab(index: number) {
  this.activeTabIndex = index;
}

}

