import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNavigatorComponent } from './list-navigator.component';

describe('ListNavigatorComponent', () => {
  let component: ListNavigatorComponent;
  let fixture: ComponentFixture<ListNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
