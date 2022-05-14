import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import datatable from '../../../../../data/offers_table.json';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import todolist from '../../../../../data/todolist.json';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;

@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
  }
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class ContentComponent implements OnInit {

  time: any[] = [
    {
      "id": 1,
      "slot": '13:00:00 to 14:00:00 hrs'
    },
    {
      "id": 2,
      "slot": '14:00:00 to 15:00:00 hrs'
    },
    {
      "id": 3,
      "slot": '15:00:00 to 16:00:00 hrs'
    }
  ];

   // Table
  source: LocalDataSource;
  startDate: string;
  endDate: string;
  startTime: '13:30:00';
  endTime: '14:00:00';

  constructor(private ngWizardService: NgWizardService, private modalService: NgbModal) {
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
      offer_image_url: {
        title: '#',
        type: 'html',
        valuePrepareFunction: (offer_image_url: string) => {
          return `<img src="${offer_image_url}">`
        },
        filter: false
      },
      offer_title: {
        title: 'Offer_title',
        filter: false
      },
      offer: {
        title: 'Offer',
        filter: false
      },
      date: {
        title: 'Offer_start_Date',
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

  // Wizard



  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style4config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { };

  ngOnInit() {
  }

  // Task modal
  closeResult: string;

  open(content: any) {
    //this.lastActiveBox = index;
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }

  // Add Slot
  slotStart: string;
  slotEnd: string;
  slotTime: string = '';
  lastActiveBox: number;
  onClickTask() {
    if( this.slotStart == '' || this.slotStart == undefined || this.slotStart == null || this.slotEnd == '' || this.slotEnd == undefined || this.slotEnd == null) return;
    this.slotTime = this.slotStart + ' to ' + this.slotEnd + ' hrs';
    this.time.push({ id: this.time.length + 1, slot: this.slotTime });
    this.slotTime = '';
    this.slotEnd = '';
    this.slotStart = '';
  }

  removeTask(i: number): void {
    if (window.confirm("Are you sure you want to delete this slot?")) {
      this.time.splice(i-1, 1);
    }
  }


}
