import { Component, OnInit, Input } from '@angular/core';
import datatable from '../../../../../data/customers.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource(datatable);
  }

  model = 1;

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
      customer_id: {
        title: 'Customer Id',
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
      location: {
        title: 'Location',
        filter: false
      },
      bookings: {
        title: 'Bookings',
        filter: false
      },
      bill: {
        title: 'Bill',
        filter: false
      }
    }
  };
  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'customer_id',
        search: query
      }, {
        field: 'customer_name',
        search: query
      }, {
        field: 'customer_email',
        search: query
      }, {
        field: 'location',
        search: query
      }, {
        field: 'bookings',
        search: query
      }, {
        field: 'bill',
        search: query
      },
    ], false);
  }

}
