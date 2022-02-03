import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2Page } from './chapter2.page';

describe('Chapter2Page', () => {
  let component: Chapter2Page;
  let fixture: ComponentFixture<Chapter2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
