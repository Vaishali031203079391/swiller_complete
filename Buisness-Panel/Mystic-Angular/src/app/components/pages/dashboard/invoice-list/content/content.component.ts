import { Component, OnInit } from '@angular/core';
import datatable from '../../../../../data/invoice.json';
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
      invoice_date: {
        title: 'Date Of Invoice Generation',
        filter: false
      },
      due_date: {
        title: 'Due Date',
        filter: false
      },
      total_bookings: {
        title: 'No Of Bookings',
        filter: false
      },
      bill_amount: {
        title: 'Total Amount',
        filter: false
      },
      status: {
        title: 'Status',
        filter: false,
        type: 'html',
        valuePrepareFunction: (status: any) => {
          if(status == 'paid'){
            this.paid = true;
          } else{
            this.paid = false
          }
          return `${status}`;
        }
      },
      action: {
        title: 'Action',
        type: 'html',
        valuePrepareFunction: (status: any) => {
          if(this.paid){
            return `<a class="btn">View Bill</a>`;
          } else{
            return `<a class="btn">Pay Bill</a>`;
          }
          //return `<span>$${new Intl.NumberFormat().format(price)}</span>`;
        },
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
        field: 'bill_amount',
        search: query
      }, {
        field: 'status',
        search: query
      }
    ], false);
  }

  ngOnInit(): void {
  }


}
