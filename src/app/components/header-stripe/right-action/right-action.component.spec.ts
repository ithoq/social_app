/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightActionComponent } from './right-action.component';

describe('RightActionComponent', () => {
  let component: RightActionComponent;
  let fixture: ComponentFixture<RightActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
