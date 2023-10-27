import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartPage } from './dart.page';

describe('dartPage', () => {
  let component: DartPage;
  let fixture: ComponentFixture<DartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
