import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/Bookings_Table.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   // Table
   sortBy: string;
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
      },
      no_of_guests: {
        title: 'No Of Guests',
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
      },{
        field: 'no_of_guests',
        search: query
      }
    ], false);
  }

  onChange(val: any){

  }

   ngOnInit(): void {
   }
}
