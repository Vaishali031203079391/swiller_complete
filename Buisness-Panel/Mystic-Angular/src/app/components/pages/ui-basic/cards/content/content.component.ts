import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  cardblock = [
    { img: 'assets/img/misc/misc-6.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-7.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-8.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/misc/misc-9.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
  ];
  socialcards = [
    {
      username: 'Wright Doe',
      userimg: 'assets/img/people/people-5.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-5.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'Anna Wright',
      userimg: 'assets/img/people/people-9.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-10.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'James Anderson',
      userimg: 'assets/img/people/people-12.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-11.jpg',
      likes: 982,
      comments: 785
    },
  ];

  ngOnInit(): void {
  }

}
