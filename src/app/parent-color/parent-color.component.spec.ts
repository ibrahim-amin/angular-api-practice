import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentColorComponent } from './parent-color.component';

describe('ParentColorComponent', () => {
  let component: ParentColorComponent;
  let fixture: ComponentFixture<ParentColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
