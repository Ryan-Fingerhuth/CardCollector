import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardModalComponent } from './search-card-modal.component';

describe('SearchCardModalComponent', () => {
  let component: SearchCardModalComponent;
  let fixture: ComponentFixture<SearchCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCardModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
