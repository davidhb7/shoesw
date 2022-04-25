import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaproComponent } from './vistapro.component';

describe('VistaproComponent', () => {
  let component: VistaproComponent;
  let fixture: ComponentFixture<VistaproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
