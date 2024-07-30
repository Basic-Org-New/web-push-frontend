import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePopupComponent } from './customize-popup.component';

describe('CustomizePopupComponent', () => {
  let component: CustomizePopupComponent;
  let fixture: ComponentFixture<CustomizePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomizePopupComponent]
    });
    fixture = TestBed.createComponent(CustomizePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
