import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauComponent } from './chau.component';

describe('ChauComponent', () => {
  let component: ChauComponent;
  let fixture: ComponentFixture<ChauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChauComponent]
    });
    fixture = TestBed.createComponent(ChauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
