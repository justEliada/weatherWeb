import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedpageComponent } from './integratedpage.component';

describe('IntegratedpageComponent', () => {
  let component: IntegratedpageComponent;
  let fixture: ComponentFixture<IntegratedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegratedpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
