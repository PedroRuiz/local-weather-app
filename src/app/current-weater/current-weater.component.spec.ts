import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeaterComponent } from './current-weater.component';

describe('CurrentWeaterComponent', () => {
  let component: CurrentWeaterComponent;
  let fixture: ComponentFixture<CurrentWeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
