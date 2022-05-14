import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/datatable.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
       id: {
         title: 'Booking Id',
         filter: false
       },
       name: {
         title: 'Customer Name',
         filter: false
       },
       position: {
         title: 'No of Guests',
         filter: false
       },
       office: {
         title: 'Table',
         filter: false
       },
       extn: {
         title: 'Table Status',
         filter: false
       },
       startdate: {
         title: 'Time',
         filter: false
       },
       salary: {
         title: 'Offer',
         type: 'html',
         valuePrepareFunction: (price: number) => {
           return `<span>$${new Intl.NumberFormat().format(price)}</span>`;
         },
         filter: false
       }
     }
   };
   onSearch(query: string = '') {
     this.source.setFilter([
       // fields we want to include in the search
       {
         field: 'Booking id',
         search: query
       }, {
         field: 'Customer Name',
         search: query
       }, {
         field: 'No of guests',
         search: query
       }, {
         field: 'Table',
         search: query
       }, {
         field: 'Table Status',
         search: query
       }, {
         field: 'Time',
         search: query
       }, {
         field: 'Offers',
         search: query
       },
     ], false);
   }

   ngOnInit(): void {
   }
}
