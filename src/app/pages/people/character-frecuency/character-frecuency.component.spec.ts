import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFrecuencyComponent } from './character-frecuency.component';

describe('CharacterFrecuencyComponent', () => {
  let component: CharacterFrecuencyComponent;
  let fixture: ComponentFixture<CharacterFrecuencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFrecuencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFrecuencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
