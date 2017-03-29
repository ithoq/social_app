/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightAsideCloserComponent } from './right-aside-closer.component';

describe('RightAsideCloserComponent', () => {
  let component: RightAsideCloserComponent;
  let fixture: ComponentFixture<RightAsideCloserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAsideCloserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAsideCloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
