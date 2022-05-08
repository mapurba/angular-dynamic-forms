import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguarFormsComponent } from './anguar-forms.component';

describe('AnguarFormsComponent', () => {
  let component: AnguarFormsComponent;
  let fixture: ComponentFixture<AnguarFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnguarFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguarFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
