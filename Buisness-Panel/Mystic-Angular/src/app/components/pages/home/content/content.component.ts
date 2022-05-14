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
  // News flash
  newsflash = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dui purus. Mauris id lacinia turpis'
    },
  ];
  newsSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: true
  };
  // Crypto Currency
  cryptoCurrency = [
    { icon: 'BTC', text: 'BTC $1,119' },
    { icon: 'LTC', text: 'LTC $1,119' },
    { icon: 'ETH', text: 'ETH $1,119' },
    { icon: 'PPC-alt', text: 'PPC $1,119' },
    { icon: 'ZEC-alt', text: 'ZEC $1,119' },
    { icon: 'XLM', text: 'XLM $1,119' },
    { icon: 'KOBO', text: 'KOBO $1,119' },
    { icon: 'ADA-alt', text: 'ADA $1,119' },
    { icon: 'AMP', text: 'AMP $1,119' },
    { icon: 'EOS-alt', text: 'EOS $1,119' },
  ];
  cryptoSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 9,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  // Infographics
  // Line Chart
  public InfographicsChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  public LineChartType: ChartType = 'line';
  public InfographicsChartOptions: ChartOptions = {
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
  // Bitcoin
  public BitcoinChartData: ChartDataSets[] = [
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
      backgroundColor: '#f7931a33',
      borderWidth: 2,
      data: [4, 3, 2, 3, 1, 4, 3, 5, 4, 5, 4, 6, 7, 5, 4]
    }
  ];
  // Ethereum
  public EthereumChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#4e8ee8',
      pointBorderColor: '#4e8ee8',
      pointBackgroundColor: '#4e8ee8',
      pointHoverBackgroundColor: '#4e8ee8',
      pointHoverBorderColor: '#4e8ee8',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(78, 142, 232,0.2)",
      borderWidth: 2,
      data: [4, 5, 3, 7, 5, 7, 8, 9, 7, 6, 7, 7, 6, 5, 3]
    }
  ];
  // ZCash
  public ZCashChartData: ChartDataSets[] = [
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
  ];
  // Peercoin
  public PeercoinChartData: ChartDataSets[] = [
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
  ];
  // crypto-rating-graph
  public cryptoratingChartLabels: Label[] = ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"];
  public cryptoratingChartData: ChartDataSets[] = [
    {
      label: "Price",
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
      data: [65, 59, 80, 81, 56, 55, 40, 70, 56, 76, 51, 59]
    }
  ];
  public cryptoratingChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 20,
          fontColor: "#A8A9AD"
        },
      }],
      xAxes: [{
        ticks: {
          padding: 20,
          beginAtZero: true,
          fontColor: "#A8A9AD"
        }
      }]
    }
  };
  // Highlight News
  highlightnews = [
    {
      badge: 'Bitcoin',
      text: "Bitcoin Cash’s Birthday, Binance Acquires Trust Wallet, Wikipedia Rejects ICO, Krugman Predicts Crypto Collapse, More Regulation in Japan",
      time: '10 Minutes Ago',
      warning: true,
      primary: false,
      light: false,
    },
    {
      badge: 'Ethereum',
      text: "Coinbase Adds XRP Support, Goldman Sachs Crypto Custody, Starbucks Denies BTC Rumors, Bank of Thailand Approves Crypto, Bitmain Confirms Texas Facility",
      time: '1 Day Ago',
      warning: false,
      primary: true,
      light: false,
    }
  ];
  // Current order
  currentorderData = [
    { price: 7860.24, amount: 0.528, icon: "dollar", trackid: "TR34351", date: "12.01.2021", extclass: "BTC" },
    { price: 5813.44, amount: 0.345, icon: "pound", trackid: "TR34352", date: "12.01.2021", extclass: "ETH" },
    { price: 1264.99, amount: 0.117, icon: "dollar", trackid: "TR34353", date: "12.01.2021", extclass: "BTC" },
    { price: 3789.31, amount: 0.217, icon: "euro", trackid: "TR34354", date: "11.01.2021", extclass: "PPC-alt" },
  ];
  // Active Orders
  public activeOrderChartLabels: Label[] = ["Ehereum", "Bitcoin", "Dash", "Litecoin", "Peercoin"];
  public doughnutChartType: ChartType = 'doughnut';
  public activeOrderChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      borderColor: 'transparent',
      backgroundColor: ["#357ffa", "#f0ad4e", "#d9534f", "#445cc8", "#5cb85c"],
      data: [478, 267, 734, 784, 433]
    }
  ];
  public activeOrderChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 70,
    animation: {
      animateScale: true
    },
    title: {
      display: false,
      text: 'Predicted world population (millions) in 2050'
    },
    legend: {
      position: 'left',
      display: false,
    },
  };
  // Orders table
  public OrdersChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public OrdersChartOptions: ChartOptions = {
    responsive: true,
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
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  // Trend 1
  public trend1ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#F7931A',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [1, 3, 5, 4, 3, 3, 4, 8, 5]
    }
  ];
  // Trend 2
  public trend2ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#4e8ee8',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [3, 2, 5, 4, 8, 4, 5, 2, 3]
    }
  ];
  // Trend 3
  public trend3ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#3FA30C',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [7, 5, 4, 5, 4, 7, 5, 5, 4]
    }
  ];
  // Trend 4
  public trend4ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#3FA30C',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [3, 3, 4, 6, 7, 6, 6, 4, 3]
    }
  ];
  // Trend 5
  public trend5ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#F7931A',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [5, 4, 6, 7, 6, 5, 5, 7, 4]
    }
  ];
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
  // candle-chart
  public rand = () => Math.round(Math.random() * 20 - 10)
  public candleChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public ScatterChartType: ChartType = 'scatter';
  public candleChartData: ChartDataSets[] = [
    {
      label: 'Data Rate',
      data: [
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
        { x: this.rand(), y: this.rand() },
      ],
      backgroundColor: '#357ffa',
    }
  ];
  public candleChartOptions: ChartOptions = {
    legend: {
      labels: {
        fontColor: "#A8A9AD"
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "#A8A9AD"
        }
      }],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#A8A9AD"
          },
        },
      ],
    },
  };


  ngOnInit(): void {
  }

}
