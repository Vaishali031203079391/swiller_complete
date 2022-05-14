import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/invoice_admin.json';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  paid = true;
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
      invoice_number: {
        title: 'Invoice Number',
        filter: false
      },
      restarunt_name: {
        title: 'Restarunt Name',
        filter: false
      },
      invoice_date: {
        title: 'Date Of Invoice Generation',
        filter: false
      },
      due_date: {
        title: 'Due Date',
        filter: false
      },
      no_of_bookings: {
        title: 'No Of Bookings',
        filter: false
      },
      total_amount: {
        title: 'Total Amount',
        filter: false
      },
      send: {
        title: 'Send',
        type: 'html',
        valuePrepareFunction: (price: number) => {
          return `<a><i class="fab fa-telegram"></i> <i class="fas fa-trash"></i></a>`;
        },
        filter: false
      }
      }
    };

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'invoice_number',
        search: query
      }, {
        field: 'invoice_date',
        search: query
      }, {
        field: 'due_date',
        search: query
      }, {
        field: 'total_bookings',
        search: query
      }, {
        field: 'total_amount',
        search: query
      }, {
        field: 'restarunt_name',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }


}
