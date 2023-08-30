import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlanCardComponent } from './app-plan-card.component';

describe('AppPlanCardComponent', () => {
  let component: AppPlanCardComponent;
  let fixture: ComponentFixture<AppPlanCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPlanCardComponent]
    });
    fixture = TestBed.createComponent(AppPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
