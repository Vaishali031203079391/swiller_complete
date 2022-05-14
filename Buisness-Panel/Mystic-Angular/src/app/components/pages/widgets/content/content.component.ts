import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import chats from '../../../../data/chats.json';
import groups from '../../../../data/groups.json';
import contacts from '../../../../data/contact.json';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public chatspost = chats;
  public groupspost = groups;
  public contactspost = contacts;
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      this.chatspost.splice(item, 1);
    }
  }
  // Infographics
  // Line Chart
  public lineChartType: ChartType = 'line';
  public lineChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public linetwoChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22"];
  public linethreeChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  public linefourChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

  public lineChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#F7931A',
      pointBorderColor: '#F7931A',
      pointBackgroundColor: '#F7931A',
      pointHoverBackgroundColor: '#F7931A',
      pointHoverBorderColor: '#F7931A',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(247, 147, 26,0.2)",
      borderWidth: 2,
      data: [4100, 3800, 3200, 3400, 2700, 3600, 3300, 3700, 4900]
    }
  ]
  public linetwoChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [2800, 2600, 2300, 2800, 3600, 2900, 3000, 3100, 3600, 3000, 3100, 3200]
    }
  ]
  public linethreeChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#e5a93d',
      pointBorderColor: '#e5a93d',
      pointBackgroundColor: '#e5a93d',
      pointHoverBackgroundColor: '#e5a93d',
      pointHoverBorderColor: '#e5a93d',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(229, 169, 61,0.2)",
      borderWidth: 2,
      data: [5, 6, 8, 1, 5, 3, 9, 7, 5, 8, 7, 3, 6, 9, 1]
    }
  ]
  public linefourChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#3FA30C',
      pointBorderColor: '#3FA30C',
      pointBackgroundColor: '#3FA30C',
      pointHoverBackgroundColor: '#3FA30C',
      pointHoverBorderColor: '#3FA30C',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(63, 163, 12,0.2)",
      borderWidth: 2,
      data: [1, 4, 7, 3, 5, 7, 6, 5, 8, 3, 5, 5, 4, 3, 7]
    }
  ]

  public lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false,
      position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false,
      }]
    }
  }
  // Notifications
  notifications = [
    {
      icon: 'email',
      title: 'Email Message',
      text: 'Email App',
      notification: 5
    },
    {
      icon: 'person',
      title: 'Follow Request',
      text: 'User Profile',
      notification: 5
    },
    {
      icon: 'show_chart',
      title: 'New Sales',
      text: 'Sales',
      notification: 3
    },
    {
      icon: 'graphic_eq',
      title: 'Voicemail',
      text: 'Chat App',
      notification: 2
    },
  ];
  // Useractivity
  userActivity = [
    {
      countryflag: 'assets/img/flags/us.png',
      entrance: 725,
      bouncerate: 17.24,
      exits: 7.65,
    },
    {
      countryflag: 'assets/img/flags/grm.png',
      entrance: 890,
      bouncerate: 12.90,
      exits: 9.12,
    },
    {
      countryflag: 'assets/img/flags/uk.png',
      entrance: 729,
      bouncerate: 20.75,
      exits: 14.29,
    },
    {
      countryflag: 'assets/img/flags/russia.png',
      entrance: 316,
      bouncerate: 32.09,
      exits: 10.99,
    },
    {
      countryflag: 'assets/img/flags/fr.png',
      entrance: 275,
      bouncerate: 33.58,
      exits: 6.75,
    },
  ];
  // Tradehistory
  tradelist = [
    { price: 7860.24, icon: 'BTC', amount: 0.528, date: '12.11.2021' },
    { price: 3360.14, icon: 'ETH', amount: 0.215, date: '12.11.2021' },
    { price: 1264.99, icon: 'BTC', amount: 0.117, date: '12.11.2021' },
    { price: 3789.31, icon: 'PPC-alt', amount: 0.217, date: '12.11.2021' },
    { price: 3789.31, icon: 'PPC-alt', amount: 0.217, date: '12.11.2021' },
  ];
  // User chat
  public currentUserId = 1;
  chats = [
    {
      userImg: 'assets/img/people/people-7.jpg',
      userId: 1,
      time: '10:33 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
      userImg: 'assets/img/people/people-3.jpg',
      userId: 2,
      time: '11:01 pm',
      message: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    },
  ]

  getChatInitialMsg(item: { userId: number; userImg: string; }, i: number) {
    var content = '';
    i === 0 || (i !== 0 && this.chats[i - 1].userId !== item.userId) ?
      content += '<div class="ms-chat-status ms-status-online ms-chat-img">' +
      '<img src="' + item.userImg + '" class="ms-img-round" alt="people">' +
      '</div>' : content = '';
    return content;
  }

  getChatInitialTime(item: { userId: number; time: string; }, i: number) {
    var content = '';
    i === this.chats.length - 1 || (i + 1 <= this.chats.length - 1 && this.chats[i + 1].userId !== item.userId) ?
      content += '<p class="ms-chat-time">' + item.time + '</p>' : content = '';
    return content;
  }
  // Tasks
  // Task modal
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }
  // Add task
  taks: string;
  lastActiveBox: number;
  onClickTask() {
    if (this.taks == '' || this.taks == undefined || this.taks == null) return;
    this.tasks.unshift({ name: this.taks, state: false });
    this.taks = '';
  }
  tasks = [
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    }
  ];
  removeTask(i: number): void {
    if (window.confirm("Are you sure you want to delete this task?")) {
      this.tasks.splice(i, 1);
    }
  }
  taskComplete(task: { state: boolean; }) {
    task.state == true ? task.state = false : task.state = true;
  }
  // Market Position
  marketPosTable = [
    {
      country: "United Kingdom",
      value: 8528.70,
      position: 17.24,
      volume: 7.65,
      status: true,
    },
    {
      country: "United States",
      value: 4867.41,
      position: 12.24,
      volume: 9.12,
      status: false,
    },
    {
      country: "Australia",
      value: 7538.90,
      position: 32.04,
      volume: 14.29,
      status: true,
    },
    {
      country: "Netherlands",
      value: 1614.19,
      position: 20.75,
      volume: 12.25,
      status: false,
    },
    {
      country: "Russia",
      value: 7538.90,
      position: 32.04,
      volume: 14.29,
      status: true,
    }
  ];
  // Followers
  followerlist = [
    { img: 'assets/img/people/people-3.jpg', name: 'Nathaniel Bustos', post: 'UI Designer', success: true, primary: false },
    { img: 'assets/img/people/people-5.jpg', name: 'Anny Farisha', post: 'UI Designer', success: false, primary: true },
    { img: 'assets/img/people/people-7.jpg', name: 'James Zathila', post: 'UI Designer', success: false, primary: true },
    { img: 'assets/img/people/people-8.jpg', name: 'Jhon Deo', post: 'UI Designer', success: true, primary: false },
    { img: 'assets/img/people/people-9.jpg', name: 'Khadiza Rehna', post: 'UI Designer', success: false, primary: true },
    { img: 'assets/img/people/people-10.jpg', name: 'Peter Amber', post: 'UI Designer', success: true, primary: false },
    { img: 'assets/img/people/people-11.jpg', name: 'Helen Southern', post: 'UI Designer', success: true, primary: false },
  ]

  ngOnInit(): void {
  }

}
