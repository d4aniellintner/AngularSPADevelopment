import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMockComponent } from './use-mock.component';

describe('UseMockComponent', () => {
  let component: UseMockComponent;
  let fixture: ComponentFixture<UseMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
