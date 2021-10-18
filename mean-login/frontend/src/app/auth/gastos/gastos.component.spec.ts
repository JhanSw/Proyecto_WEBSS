/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastosComponent } from './gastos.component';

describe('GastosComponent', () => {
  let component: GastosComponent;
  let fixture: ComponentFixture<GastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
