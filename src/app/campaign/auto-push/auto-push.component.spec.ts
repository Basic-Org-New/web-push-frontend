import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPushComponent } from './auto-push.component';

describe('AutoPushComponent', () => {
  let component: AutoPushComponent;
  let fixture: ComponentFixture<AutoPushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoPushComponent]
    });
    fixture = TestBed.createComponent(AutoPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
