import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeTabIndex: number = 0;
  showTab(index: number) {
    this.activeTabIndex = index;
  }
}
