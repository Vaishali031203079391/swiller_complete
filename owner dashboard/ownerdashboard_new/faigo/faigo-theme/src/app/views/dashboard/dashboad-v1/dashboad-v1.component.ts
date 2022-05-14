import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
	selector: 'app-dashboad-v1',
	templateUrl: './dashboad-v1.component.html',
	styleUrls: ['./dashboad-v1.component.css']
})
export class DashboadOneComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
    salesChartBar: EChartOption;
    saleOptions: any;

	constructor() { }

	ngOnInit() {
		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(138, 109, 236, 0.4)',
						origin: 'start'
					},
					lineStyle: {
						color: '#906afb',
					},
					itemStyle: {
						color: '#906afb'
					}
				}]
			}
		};
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 10, 40, 10, 40, 20, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#f45905'
					},
					itemStyle: {
						color: '#f45905'
					}
				}]
			}
		};
		this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Specials', 'Events', 'Openings']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }

            ],

            series: [{
                    name: 'Specials',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'line',
                    barGap: 0,
                    color: '#bcbbdd',
                    smooth: true,

                },
                {
                    name: 'Events',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'line',
                    color: '#7569b3',
                    smooth: true
                },
                {
                  name: 'Openings',
                  data: [45000, 82000, 69000, 97000, 65000, 98000, 39000, 81000, 80200, 76000, 65000, 50050],
                  label: { show: false, color: '#B6D2B0' },
                  type: 'line',
                  color: '#9096AD',
                  smooth: true
              }
            ]
        };

        this.saleOptions = {
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, .8)',
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['Specials', 'Events', 'Openings']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Specials',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210],
                label: { show: false, color: '#0168c1' },
                color: 'rgba(138, 109, 236, 0.4)'
              },
              {
                name: 'Events',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [220, 182, 191, 234, 290, 330, 310],
                label: { show: false, color: '#639' },
                color: '#906afb',
              },
              {
                name: 'Openings',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [420, 122, 91, 324, 200, 370, 312],
                label: { show: false, color: '#639E' },
                color: '#907afa',
              }
            ]
          };
         
	}
}
