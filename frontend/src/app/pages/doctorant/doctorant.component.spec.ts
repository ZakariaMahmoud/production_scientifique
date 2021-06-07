import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorantComponent } from './doctorant.component';

describe('DoctorantComponent', () => {
  let component: DoctorantComponent;
  let fixture: ComponentFixture<DoctorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
