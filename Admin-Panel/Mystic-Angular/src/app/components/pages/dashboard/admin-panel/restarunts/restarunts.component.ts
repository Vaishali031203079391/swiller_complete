import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import total_users_table from '../../../../../data/total_users_table.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-restarunts',
  templateUrl: './restarunts.component.html',
  styleUrls: ['./restarunts.component.css']
})
export class RestaruntsComponent implements OnInit {

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(total_users_table);
  }

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
      no: {
        title: '#',
        filter: false
      },
      city: {
        title: 'Location',
        filter: false
      },
      total_users: {
        title: 'Total Users',
        filter: false
      },
      active_users: {
        title: 'Active Users',
        filter: false
      },
      inactive_users: {
        title: 'Inactive Users',
        filter: false
      },
      deactivated_users: {
        title: 'Deactivated Users',
        filter: false
      }
    }
  };
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      }, {
        field: 'city',
        search: query
      }, {
        field: 'total_users',
        search: query
      }, {
        field: 'active_users',
        search: query
      }, {
        field: 'inactive_users',
        search: query
      }, {
        field: 'deactivated_users',
        search: query
      },
    ], false);
  }

  countrytable = [
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
  ];

   // Pie chart
   public PieChartLabels: Label[] = ["USA", "Germany", "UK", "Russia", "France"];
   public PieChartType: ChartType = 'pie';
   public PieChartData: ChartDataSets[] = [
     {
       label: "Users (thousands)",
       backgroundColor: ["#357ffa", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
       data: [725, 890, 729, 316, 275]
     }
   ];
   public PieChartOptions: ChartOptions = {
     responsive: true,
     title: {
       display: false,
       text: 'Users By Country'
     },
     legend: {
       display: false
     },
   }
   public lineChartType: ChartType = 'line';
   // User Traffic
   public UsertrafficChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
   public UsertrafficChartData: ChartDataSets[] = [
     {
       label: "Users",
       borderColor: '#357ffa',
       pointBorderColor: '#357ffa',
       pointBackgroundColor: '#357ffa',
       pointHoverBackgroundColor: '#357ffa',
       pointHoverBorderColor: '#357ffa',
       pointBorderWidth: 1,
       pointHoverRadius: 4,
       pointHoverBorderWidth: 1,
       pointRadius: 2,
       fill: true,
       backgroundColor: "rgba(53,127,250,0.4)",
       borderWidth: 1,
       data: [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600]
     }
   ];
   public UsertrafficChartOptions: ChartOptions = {
     responsive: true,
     legend: {
       display: false,
       position: "bottom"
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
           fontColor: "#A8A9AD"
         }
       }]
     }
   }
   // User Purchase
   public UserpchChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
   public UserpchChartOptions: ChartOptions = {
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

  model = 1;

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


}
