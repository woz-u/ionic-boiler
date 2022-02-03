import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TOCPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Begining",
      url: "/chapter1"
    },
    {
      title: 'Chapter 2 | From Man to Guitar God',
      url: '/chapter2'
    },
    {
      title: 'Chapter 3 | The Rig of Destruction',
      url: '/chapter3'
    },
    {
      title: 'Chapter 4 | Its Over. GTFO!',
      url: '/chapter4'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
