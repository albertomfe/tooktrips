import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHotelComponent } from './slider-hotel.component';

describe('SliderHotelComponent', () => {
  let component: SliderHotelComponent;
  let fixture: ComponentFixture<SliderHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
