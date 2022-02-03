import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3Page } from './chapter3.page';

describe('Chapter3Page', () => {
  let component: Chapter3Page;
  let fixture: ComponentFixture<Chapter3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
