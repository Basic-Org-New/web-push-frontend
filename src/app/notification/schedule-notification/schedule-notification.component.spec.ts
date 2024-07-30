import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNotificationComponent } from './schedule-notification.component';

describe('ScheduleNotificationComponent', () => {
  let component: ScheduleNotificationComponent;
  let fixture: ComponentFixture<ScheduleNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleNotificationComponent]
    });
    fixture = TestBed.createComponent(ScheduleNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
