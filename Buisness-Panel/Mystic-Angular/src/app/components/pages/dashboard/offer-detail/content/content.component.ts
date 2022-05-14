import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import datatable from '../../../../../data/bookingstable.json';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // Skills
  tags = [
    { title: 'Weekend', limit: 83 },
    { title: 'Specials', limit: 50 },
    { title: 'off', limit: 75 },
    { title: 'tables', limit: 92 },
    { title: 'pink', limit: 97 },
    { title: 'halloween', limit: 90 },
  ];
  // Information
  information = [
    { title: 'Offer', text: 'Chihoo Hwang' },
    { title: 'Start Date', text: 'January 25th, 1996' },
    { title: 'End Date', text: 'January 25th, 1996' },
    { title: 'Category', text: 'Specials' },
    { title: 'No Of Tables', text: '50' },
    { title: 'Slots Available', text: '10' },
    { title: 'Bookings', text: '7055' },
    { title: 'Location', text: 'New York, USA' },
  ];
  // Work Exp
  workexp = [
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
    { logo: 'assets/img/people/people-5.jpg', name: 'User Research Hub', time: 'January 2013 to Present', designation: 'UX Designer' },
  ];
  // Projects
  offers = [
    {
      offer: 'Wright Doe',
      offer_img_url: 'assets/img/people/people-5.jpg',
      posted_time: '30 seconds ago',
      category: 'Specials',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-11.jpg'
    },
    {
      offer: 'Anna Wright',
      offer_img_url: 'assets/img/people/people-6.jpg',
      posted_time: '30 seconds ago',
      category: 'Events',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-10.jpg'
    },
    {
      offer: 'James Anderson',
      offer_img_url: 'assets/img/people/people-7.jpg',
      posted_time: '30 seconds ago',
      category: 'Openings',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/misc/misc-9.jpg'
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
  ngOnInit(): void {
  }

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
