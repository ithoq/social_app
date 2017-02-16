/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InviteManagedUserComponent } from './invite-managed-user.component';

describe('InviteManagedUserComponent', () => {
  let component: InviteManagedUserComponent;
  let fixture: ComponentFixture<InviteManagedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteManagedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteManagedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
