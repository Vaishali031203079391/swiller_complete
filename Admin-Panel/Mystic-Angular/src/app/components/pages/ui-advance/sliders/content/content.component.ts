import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultslide = [
    { bigimg:"assets/img/slider-md/md-1.jpg", img: 'assets/img/wide/wide-3.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-2.jpg", img: 'assets/img/wide/wide-2.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-3.jpg", img: 'assets/img/wide/wide-1.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
  ];

  ngOnInit(): void {
  }

}
