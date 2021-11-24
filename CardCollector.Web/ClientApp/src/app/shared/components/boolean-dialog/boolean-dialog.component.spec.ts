import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooleanDialogComponent } from './boolean-dialog.component';

describe('BooleanDialogComponent', () => {
  let component: BooleanDialogComponent;
  let fixture: ComponentFixture<BooleanDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
