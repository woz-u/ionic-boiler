import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public appPages = [
   
    {
      title: 'Chapter 1',
      url: '/chapter1',
      icon: 'book',
      note: 'The Beginning'
    },
    {
      title: 'Chapter 2',
      url: '/chapter2',
      icon: 'book',
      note: 'The Second Part'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
