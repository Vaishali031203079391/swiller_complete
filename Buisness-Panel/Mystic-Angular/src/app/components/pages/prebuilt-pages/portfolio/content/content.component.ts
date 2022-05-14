import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultportfolio = [
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg1.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg2.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg1.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
  ];
  minimalportfolio = [
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg1.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg2.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/portfolio/portfolio-sm.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/portfolio/portfolio-lg1.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
  ]

  ngOnInit(): void {
  }

}
