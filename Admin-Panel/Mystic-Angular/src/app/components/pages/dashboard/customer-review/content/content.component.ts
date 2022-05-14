import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  // support tickets
  tickets = [
    {
      userimg: 'assets/img/people/people-12.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      comment: 16,
      attachment: 3,
      open: true,
      close: false,
    },
    {
      userimg: 'assets/img/people/people-10.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 11,
      attachment: 1,
      open: true,
      close: false,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
  ];

  reviews: any[] = [];
  paginateData: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  pagetwo = 2;
  pagefull = 3;

  ngOnInit(): void {
    this.reviews = this.tickets;
    this.collectionSize = this.reviews.length;
    this.getPremiumData();
  }

  getPremiumData(){
    this.paginateData =  this.reviews.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }

}
