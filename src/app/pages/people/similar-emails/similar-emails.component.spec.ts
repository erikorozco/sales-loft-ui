import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarEmailsComponent } from './similar-emails.component';

describe('SimilarEmailsComponent', () => {
  let component: SimilarEmailsComponent;
  let fixture: ComponentFixture<SimilarEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
