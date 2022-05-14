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
  model = 1;
  // Youtube Subscriber
  // Bar chart
  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';
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
  public day(): void {
    this.ytsusChartData[0].data = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
    this.ytsusChartData[1].data = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
    this.ytsusChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  }
  public month(): void {
    this.ytsusChartData[0].data = [24, 27, 21, 27, 24, 23, 25, 28, 21, 23, 24, 27];
    this.ytsusChartData[1].data = [-25, -24, -23, -27, -21, -23, 0, 0, -23, 0, -26, -23];
    this.ytsusChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }
  public year(): void {
    this.ytsusChartData[0].data = [300, 321, 259, 391, 429, 249, 300, 183, 341, 412, 422, 214];
    this.ytsusChartData[1].data = [-120, -85, -31, -180, -51, -44, -101, -125, -44, -31, -34, -29];
    this.ytsusChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2021"];
  }
  // Facebook graph
  public fbChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  public fbChartOptions: ChartOptions = {
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
  };
  // engaged-users
  public engagedChartData: ChartDataSets[] = [
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
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // page-impressions
  public pageimmpChartData: ChartDataSets[] = [
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
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];
  // Twitter post
  twitterpost = [
    {
      userimg: 'assets/img/people/people-3.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/people/people-5.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/people/people-7.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/people/people-8.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/people/people-9.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
  ];
  // Facebook post
  facebookfeed = [
    {
      userimg: 'assets/img/people/people-10.jpg',
      name: 'Rakhan Potik',
      postdatetime: '24 January at 9:04 pm',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      postimg: 'assets/img/misc/misc-1.jpg',
      likes: 485,
      comment: 48,
    },
    {
      userimg: 'assets/img/people/people-11.jpg',
      name: 'Rakhan Potik',
      postdatetime: '24 January at 9:04 pm',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      postimg: 'assets/img/misc/misc-3.jpg',
      likes: 485,
      comment: 48,
    },
  ];
  // Insta post
  instagramfeed = [
    {
      userimg: 'assets/img/people/people-12.jpg',
      username: 'username24',
      postimg: 'assets/img/misc/misc-2.jpg',
      post: 'website design in progress',
      tags: [
        {
          tag: 'design'
        },
        {
          tag: 'ui'
        },
        {
          tag: 'ux'
        },
        {
          tag: 'website'
        },
      ],
      shareuser: [
        {
          img: 'assets/img/people/people-3.jpg'
        },
        {
          img: 'assets/img/people/people-5.jpg'
        },
      ]
    },
    {
      userimg: 'assets/img/people/people-7.jpg',
      username: 'username24',
      postimg: 'assets/img/misc/misc-4.jpg',
      post: 'website design in progress',
      tags: [
        {
          tag: 'design'
        },
        {
          tag: 'ui'
        },
        {
          tag: 'ux'
        },
        {
          tag: 'website'
        },
      ],
      shareuser: [
        {
          img: 'assets/img/people/people-10.jpg'
        },
        {
          img: 'assets/img/people/people-12.jpg'
        },
      ]
    },
  ];


  ngOnInit(): void {
  }

}
