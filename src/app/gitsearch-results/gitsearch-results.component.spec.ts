import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsearchResultsComponent } from './gitsearch-results.component';

describe('GitsearchResultsComponent', () => {
  let component: GitsearchResultsComponent;
  let fixture: ComponentFixture<GitsearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
