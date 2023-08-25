import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  countries = [
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
];
}
