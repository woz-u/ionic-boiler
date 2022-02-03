import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4Page } from './chapter4.page';

describe('Chapter4Page', () => {
  let component: Chapter4Page;
  let fixture: ComponentFixture<Chapter4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
