import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDataComponent } from './hotel-data.component';

describe('HotelDataComponent', () => {
  let component: HotelDataComponent;
  let fixture: ComponentFixture<HotelDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
