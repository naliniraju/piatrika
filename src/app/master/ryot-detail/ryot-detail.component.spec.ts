import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyotDetailComponent } from './ryot-detail.component';

describe('RyotDetailComponent', () => {
  let component: RyotDetailComponent;
  let fixture: ComponentFixture<RyotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
