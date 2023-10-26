import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsComponent } from './props.component';

describe('PropsComponent', () => {
  let component: PropsComponent;
  let fixture: ComponentFixture<PropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropsComponent]
    });
    fixture = TestBed.createComponent(PropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
