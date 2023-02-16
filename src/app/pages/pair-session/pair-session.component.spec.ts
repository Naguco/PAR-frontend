import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairSessionComponent } from './pair-session.component';

describe('PairSessionComponent', () => {
  let component: PairSessionComponent;
  let fixture: ComponentFixture<PairSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
