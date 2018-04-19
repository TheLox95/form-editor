import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicContentComponent } from './dinamic-content.component';

describe('DinamicContentComponent', () => {
  let component: DinamicContentComponent;
  let fixture: ComponentFixture<DinamicContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
