import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppPlanCardComponent} from '../app/app-plan-card/app-plan-card.component';

const routes: Routes = [
  {path:'plan', component: AppPlanCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
