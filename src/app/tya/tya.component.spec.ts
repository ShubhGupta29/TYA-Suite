import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TYAComponent } from './tya.component';

describe('TYAComponent', () => {
  let component: TYAComponent;
  let fixture: ComponentFixture<TYAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TYAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TYAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
