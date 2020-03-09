import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocPage } from './toc.page';

describe('TocPage', () => {
  let component: TocPage;
  let fixture: ComponentFixture<TocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
