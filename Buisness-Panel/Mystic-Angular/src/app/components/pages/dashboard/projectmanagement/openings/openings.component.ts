import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import datatable from '../../../../../data/bookingstable.json';
import offerstable from '../../../../../data/offer_table_first_page.json';
import preferdoffers from '../../../../../data/prefered_offer_table_first_page.json';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class OpeningsComponent implements OnInit {

  @Input() fromParent: any;
  source: LocalDataSource;
  closeResult: string;
  constructor(private modalService: NgbModal) {
    this.source = new LocalDataSource(datatable);
  }

  open(content: any, event: any) {
    this.modalService.open(content, { centered: true });
    console.log(event.data);
    let data = {
      booking_date: event.data.booking_date,
      booking_id: event.data.booking_id,
      booking_status: event.data.booking_status,
      customer_email: event.data.customer_email,
      customer_name: event.data.customer_name,
      no_of_guests: event.data.no_of_guests,
      no_of_tables: event.data.no_of_tables,
      offer: event.data.offer,
      offer_url: event.data.offer_url,
      time_slot: event.data.time_slot
    }

    this.fromParent = data;

  }
  /* openmin(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-min' });
  }
  openmax(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-max' });
  } */

  preferdOffersTable = preferdoffers.slice(0,6);

  public barChartType: ChartType = 'bar';
  public ytsusChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public ytsusChartData: ChartDataSets[] = [
    {
      label: "Subscribers Gained",
      backgroundColor: '#357ffa',
      data: [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7]
    }, {
      label: "Subscribers List",
      backgroundColor: '#ec4e3f',
      data: [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3]
    }
  ];
  public ytsusChartOptions: ChartOptions = {
    responsive: true,
    legend: { display: false },
    title: {
      display: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          fontColor: "#A8A9AD"
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          fontColor: "#A8A9AD"
        }
      }]
    }
  };

  cardblock = [
    { img: 'assets/img/misc/misc-6.jpg', offer_name: 'Offer Name', category: 'Specials', offer: "flat 75% off", bookings: '15798', income: '$5000'},
    { img: 'assets/img/misc/misc-7.jpg', offer_name: 'Offer Name', category: 'Events', offer: "10% off", bookings: '17798', income: '$10000'},
    { img: 'assets/img/misc/misc-8.jpg', offer_name: 'Offer Name', category: 'Openings', offer: "15% cash back", bookings: '12378', income: '$12300' },
    { img: 'assets/img/misc/misc-9.jpg', offer_name: 'Offer Name', category: 'Specials', offer: "Women Special 100%", bookings: '11598', income: '$8000'},
  ];

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

  model = 1;
  // Recent Buyers
  recentOffers = offerstable.slice( 0, 6);

  // Project Sales
  public pmChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public pmChartData: ChartDataSets[] = [
    {
      label: "Traffic",
      borderColor: '#357ffa',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#357ffa',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(53,127,250,0.4)",
      borderWidth: 2,
      data: [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800]
    }, {
      label: "Sales",
      borderColor: '#ec4e3f',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#ec4e3f',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800]
    }
  ];
  public pmChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    tooltips: {
      titleFontColor: '#3a3952',
      bodyFontFamily: 'Roboto',
      backgroundColor: '#FFF',
      bodyFontColor: '#878793',
      bodyFontSize: 14,
      displayColors: false,
      bodySpacing: 10,
      intersect: false,
      bodyFontStyle: 'bold',
      xPadding: 15,
      yPadding: 15,
      mode: 'index'
    },
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
          beginAtZero: true,
          maxTicksLimit: 200,
          padding: 20
        },
        gridLines: {
          drawTicks: false,
          display: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          beginAtZero: true,
          fontColor: "#A8A9AD"
        }
      }]
    }
  };
  public day(): void {
    this.ytsusChartData[0].data = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
    this.ytsusChartData[1].data = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
    this.ytsusChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
    this.pmChartData[0].data = [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800];
    this.pmChartData[1].data = [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800];
    this.pmChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  }
  public month(): void {
    this.ytsusChartData[0].data = [24, 27, 21, 27, 24, 23, 25, 28, 21, 23, 24, 27];
    this.ytsusChartData[1].data = [-25, -24, -23, -27, -21, -23, 0, 0, -23, 0, -26, -23];
    this.ytsusChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    this.pmChartData[0].data = [4800, 4900, 4300, 4800, 5000, 5200, 5400, 4800, 5600, 4900, 4800, 5500];
    this.pmChartData[1].data = [3100, 4000, 3200, 3400, 3800, 3600, 3800, 3600, 3300, 3900, 3800, 2500];
    this.pmChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }
  public year(): void {
    this.ytsusChartData[0].data = [300, 321, 259, 391, 429, 249, 300, 183, 341, 412, 422, 214];
    this.ytsusChartData[1].data = [-120, -85, -31, -180, -51, -44, -101, -125, -44, -31, -34, -29];
    this.ytsusChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2021"];
    this.pmChartData[0].data = [6800, 6900, 6300, 6800, 7000, 7200, 7400, 6800, 7600, 6900, 6800, 7500];
    this.pmChartData[1].data = [5100, 6000, 5200, 5400, 5800, 5600, 5800, 5600, 5300, 5900, 5800, 4500];
    this.pmChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2021"];
  }
  // Latest Project
  latestProjects = [
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

  ngOnInit(): void {
  }

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      booking_id: {
        title: 'Booking Id',
        filter: false
      },
      customer_name: {
        title: 'Customer Name',
        filter: false
      },
      customer_email: {
        title: 'Email',
        filter: false
      },
      booking_status: {
        title: 'Booking Status',
        filter: false
      },
      time_slot: {
        title: 'Booking Time',
        filter: false
      },
      booking_date: {
        title: 'Booking Date',
        filter: false
      },
      offer: {
        title: 'Offer',
        filter: false
      }
     /*  salary: {
        title: 'Offers',
        type: 'html',
        valuePrepareFunction: (price: number) => {
          return `<span>$${new Intl.NumberFormat().format(price)}</span>`;
        },
        filter: false
      } */
    }
  };
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'booking_id',
        search: query
      }, {
        field: 'customer_name',
        search: query
      }, {
        field: 'customer_email',
        search: query
      }, {
        field: 'booking_status',
        search: query
      }, {
        field: 'time_slot',
        search: query
      }, {
        field: 'booking_date',
        search: query
      }, {
        field: 'offer',
        search: query
      },
    ], false);
  }

  // support tickets
  tickets = [
    {
      userimg: 'assets/img/people/people-12.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2021',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
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
  ];

  public currentUserId = 1;
  chats = [
    {
      userImg: 'assets/img/people/people-7.jpg',
      userId: 1,
      time: '10:33 pm',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      userImg: 'assets/img/people/people-3.jpg',
      userId: 2,
      time: '11:01 pm',
      message: "I'm doing great, thanks for asking"
    },
    {
      userImg: 'assets/img/people/people-3.jpg',
      userId: 2,
      time: '11:01 pm',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      userImg: 'assets/img/people/people-7.jpg',
      userId: 1,
      time: '11:03 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page'
    },
    {
      userImg: 'assets/img/people/people-7.jpg',
      userId: 1,
      time: '11:03 pm',
      message: 'There are many variations of passages of Lorem Ipsum available'
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


}
