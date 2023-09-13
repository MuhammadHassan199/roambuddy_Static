import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './navbar/logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';
import { AppPlanCardComponent } from './app-plan-card/app-plan-card.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    ButtonComponent,
    MainComponent,
    AppPlanCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
