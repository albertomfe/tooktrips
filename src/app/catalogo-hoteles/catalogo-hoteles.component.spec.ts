import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoHotelesComponent } from './catalogo-hoteles.component';

describe('CatalogoHotelesComponent', () => {
  let component: CatalogoHotelesComponent;
  let fixture: ComponentFixture<CatalogoHotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoHotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
