import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/ratings.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


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


  sortedData: any;
  sortBy: any;
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

   // Table
   source: LocalDataSource;
   constructor() {
     this.source = new LocalDataSource(datatable);
   }
   settings = {
     hideSubHeader: true,
     actions: {
       add: false,
       edit: false,
       delete: false,
     },
     columns: {
       offer_id: {
         title: 'Offer Id',
         filter: false
       },
       offer: {
         title: 'Offer',
         filter: false
       },
       category: {
         title: 'Category',
         filter: false
       },
       offer_date: {
        title: 'Offer Date',
        filter: false
      },
       ratings: {
         title: 'Ratings',
         filter: false
       },
       total_bookings: {
         title: 'Total Bookings',
         filter: false
       },
       total_revenue: {
        title: 'Total Revenue',
        filter: false
      }
     }
   };
   onSearch(query: string = '') {
     this.source.setFilter([
       // fields we want to include in the search
       {
         field: 'Offer Id',
         search: query
       }, {
         field: 'Offer',
         search: query
       }, {
         field: 'Category',
         search: query
       }, {
         field: 'Offer Date',
         search: query
       }, {
         field: 'Ratings',
         search: query
       }, {
         field: 'Total Bookings',
         search: query
       }, {
         field: 'Total Revenue',
         search: query
       },
     ], false);
   }

   onChange(val: any){
    this.source.setSort([{ field: 'Total Revenue' , direction: 'asc' }]);
  }

}
