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
        title: 'Id',
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      position: {
        title: 'Position',
        filter: false
      },
      office: {
        title: 'Office',
        filter: false
      },
      extn: {
        title: 'Extn.',
        filter: false
      },
      startdate: {
        title: 'Start date',
        filter: false
      },
      salary: {
        title: 'Salary',
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
        field: 'id',
        search: query
      }, {
        field: 'name',
        search: query
      }, {
        field: 'position',
        search: query
      }, {
        field: 'office',
        search: query
      }, {
        field: 'extn',
        search: query
      }, {
        field: 'startdate',
        search: query
      }, {
        field: 'salary',
        search: query
      },
    ], false);
  }

  ngOnInit(): void {
  }12

}
