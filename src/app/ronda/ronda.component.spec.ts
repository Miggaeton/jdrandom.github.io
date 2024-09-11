import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaComponent } from './ronda.component';

describe('RondaComponent', () => {
  let component: RondaComponent;
  let fixture: ComponentFixture<RondaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RondaComponent]
    });
    fixture = TestBed.createComponent(RondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
