import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOCPage } from './toc.page';

describe('TOCPage', () => {
  let component: TOCPage;
  let fixture: ComponentFixture<TOCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
