import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePushComponent } from './welcome-push.component';

describe('WelcomePushComponent', () => {
  let component: WelcomePushComponent;
  let fixture: ComponentFixture<WelcomePushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePushComponent]
    });
    fixture = TestBed.createComponent(WelcomePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
