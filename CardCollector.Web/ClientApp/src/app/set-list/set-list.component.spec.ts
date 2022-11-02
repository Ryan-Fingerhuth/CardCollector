import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListComponent } from './set-list.component';

describe('SetListComponent', () => {
  let component: SetListComponent;
  let fixture: ComponentFixture<SetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
