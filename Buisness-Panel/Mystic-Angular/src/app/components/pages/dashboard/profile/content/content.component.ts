import { Component, OnInit } from '@angular/core';
import followers from '../../../../../data/followers.json'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  followers: any[] = followers;
  reviews: any[] = [
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

  paginateDataReview: any[] = [];
  paginateData: any[] = [];
  page = 1;
  pageSize = 2;
  pageReview = 1;
  pageSizeReview = 2;
  collectionSize = this.followers.length;
  collectionSizeReview = this.reviews.length;
  pagetwo = 2;
  pagefull = 3;

  defaultslide = [
    { bigimg:"assets/img/slider-md/md-1.jpg", img: 'assets/img/wide/wide-3.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-2.jpg", img: 'assets/img/wide/wide-2.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/slider-md/md-3.jpg", img: 'assets/img/wide/wide-1.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
  ];

  // Skills
  skills = [
    { title: 'Mediterranean', limit: 5 },
    { title: 'Moroccan', limit: 4 },
    { title: 'Spanish', limit: 3 },
    { title: 'French', limit: 4.5 },
    { title: 'Italian', limit: 3.5 },
    { title: 'Kebabs', limit: 3.5 },
  ];
  // Information
  information = [
    { title: 'Restarunt Name', text: 'Chihoo Hwang' },
    { title: 'Founded', text: 'January 25th, 1996' },
    { title: 'Category', text: 'Pubs' },
    { title: 'Website', text: 'www.example.com' },
    { title: 'Phone Number', text: '+123 456 789' },
    { title: 'Email Address', text: 'example@mail.com' },
    { title: 'Location', text: 'New York, USA' },
  ];

  // Current Info
  currentInfo = [
    { title: 'Active Offers', text: '2' },
    { title: 'Flash Booking', text: '0' },
    { title: 'Offers', text: '10' },
    { title: 'Discount', text: '2' }
  ];

  // Membership Info
  membershipInfo = [
    { title: 'Status', text: 'Premium' },
    { title: 'Joined', text: 'February 02, 2021' },
    { title: 'Spent', text: '4,587' },
    { title: 'Earned', text: '97,325' }
  ];

  // Billing Address
  billingAddress = [
    { title: 'Post Code', text: '570017' },
    { title: 'State', text: 'Karnataka' },
    { title: 'City', text: 'Mysore' },
    { title: 'Country', text: 'India' }
  ];

  // Contact Info
  contactInfo = [
    { title: 'Website', text: 'www.kegs&pegs.com' },
    { title: 'Email', text: 'kegs&pegs@gmail.com' },
    { title: 'Phone', text: '+91-9745832154' },
    { title: 'Skype', text: 'live:kegs&Pegs' }
  ];

  // Shipping Address
  shippingAddress = [
    { title: 'Post Code', text: '571130' },
    { title: 'State', text: 'Karnataka' },
    { title: 'City', text: 'Yelwal' },
    { title: 'Country', text: 'India' }
  ];

  // Projects
  projects = [
    {
      username: 'Wright Doe',
      userimg: 'assets/img/people/people-5.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-11.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'Anna Wright',
      userimg: 'assets/img/people/people-6.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-10.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'James Anderson',
      userimg: 'assets/img/people/people-7.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-9.jpg',
      likes: 982,
      comments: 785
    },
  ];
  cardblock = [
    { img: 'assets/img/misc/misc-6.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-7.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-8.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-9.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
  ];
  // Icon box
  statbox = [
    {
      icon: 'book',
      title: 'Blog Posts',
      text: '2433'
    },
    {
      icon: 'people',
      title: 'Followers',
      text: '2433'
    },
    {
      icon: 'comment',
      title: 'Total Reviews',
      text: '2433'
    },
    {
      icon: 'star',
      title: 'Rating',
      text: '5'
    },
  ];
  ngOnInit(): void {
    this.followers = followers;
    this.collectionSizeReview = this.reviews.length;
    this.collectionSize = this.followers.length;
    this.getPremiumData();
    this.getReviewData();
  }

  getPremiumData(){
    this.collectionSize = this.followers.length;
    this.paginateData =  this.followers.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }

   getReviewData(){
    this.collectionSizeReview = this.reviews.length;
    this.paginateDataReview =  this.reviews.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }

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

}
