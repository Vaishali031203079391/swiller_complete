import { Component, OnInit, Injectable } from '@angular/core';
import {formatDate} from '@angular/common';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import datatable from '../../../../../data/offers_table.json';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import todolist from '../../../../../data/todolist.json';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { Offer } from 'src/app/services/offer.model';
import { OffersService } from 'src/app/services/offers.service';
import { mimeType } from '../../../../../services/mime-type.validator';
import { ImageService } from 'src/app/services/image.service';
import { Subscription } from 'rxjs';

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

  imagePreview: string | ArrayBuffer;
  imageSource: any;
  imageSourceFile: any;

  allowBookings: Boolean;
  customEvent: Boolean = false;
  repeatOffer: any;
  customDate: any;

  // Form Data Values:
  offer_title: string = '';
  category: string = '';
  offer: string = '';
  dress_code: string = '';
  description: string = '';
  start_date: string = '';
  end_date: string = '';
  close_bookings_by: string;
  repeat_offer: string = '';
  no_of_tables: number;
  time_slot: string[] = [];

  close_bookings: string = '';

  slotStart: string;
  slotEnd: string;
  slotTime: string = '';
  lastActiveBox: number;

  startDate: string;
  endDate: string;
  startTime: '13:30:00';
  endTime: '14:00:00';

  // Select value
  rowOneSelect: string[] = ['Specials', 'Openings', 'Events'];

  onChange(eve: any){
    if(eve == 'Custom'){
      this.customEvent = true;
    }else{
      this.customEvent = false;
      this.repeatOffer = eve;
    }
  }

  setClosing(eve: any){
    this.close_bookings_by = eve;
  }

  setTables(eve: any){
    console.log(eve);
    this.no_of_tables = parseInt(eve);
  }

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


  selectCategory(e: any){
    console.log(e);
  }

  offers: Offer[] = [];
  totalOffers: Number;
  private offerSubs: Subscription;

  ngOnInit() {
     this.offerService.getRestaurantOffers();
      this.offerSubs = this.offerService.sendrestaurantOffers().subscribe((offerData: { offers: Offer[], offerCount: number }) => {
        console.log(offerData);
        this.totalOffers = offerData.offerCount;
        this.offers = offerData.offers;
        this.source = new LocalDataSource(this.offers);
      });
  }


  constructor(private ngWizardService: NgWizardService, private modalService: NgbModal, private offerService: OffersService, private imageService: ImageService) {
    this.offerService.getRestaurantOffers();
      this.offerSubs = this.offerService.sendrestaurantOffers().subscribe((offerData: { offers: Offer[], offerCount: number }) => {
        console.log(offerData);
        this.totalOffers = offerData.offerCount;
        this.offers = offerData.offers;
        this.source = new LocalDataSource(this.offers);
      });
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
      start_date: {
        title: 'Offer_start_Date',
        type: 'html',
        valuePrepareFunction: (start_date: Date) => {
          let dte = formatDate((new Date(start_date).toLocaleDateString()), 'dd-MM-yyyy','en-US');
          return `${dte}`
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

  // Wizard

  step = null;

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
  stepChanged(_args: StepChangedArgs) {
    console.log(_args.step.title);

    if(_args.previousStep !== undefined){
      this.step = _args.previousStep.title;
    }

    if(_args.previousStep !== undefined && _args.previousStep.title == 'Slots'){
      this.postOffer();
    }

  };

  postOffer(){
    if(this.allowBookings){
      this.close_bookings_by = 'Always allow Bookings';
    }

    if(this.close_bookings_by == 'Custom'){

    }

    if(this.customEvent){
      this.repeatOffer = this.customDate;
    }

    let data: Offer = {
      offer_title: this.offer_title,
      category: this.category,
      offer: this.offer,
      dress_code: this.dress_code,
      description: this.description,
      start_date: this.startDate,
      end_date: this.endDate,
      close_bookings_by: this.close_bookings_by,
      repeat_offer: this.repeatOffer,
      no_of_tables: this.no_of_tables,
      time_slot: this.time_slot
    };

    this.offerService.postOffer(data);
  }


  // Task modal
  closeResult: string;

  open(content: any) {
    //this.lastActiveBox = index;
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }

  // Add Slot

  onClickTask() {
    if( this.slotStart == '' || this.slotStart == undefined || this.slotStart == null || this.slotEnd == '' || this.slotEnd == undefined || this.slotEnd == null) return;
    this.slotTime = this.slotStart + ' to ' + this.slotEnd + ' hrs';
    this.time.push({ id: this.time.length + 1, slot: this.slotTime });
    this.time_slot.push(this.slotTime);
    this.slotTime = '';
    this.slotEnd = '';
    this.slotStart = '';
  }

  removeTask(i: number): void {
    if (window.confirm("Are you sure you want to delete this slot?")) {
      this.time.splice(i-1, 1);
    }
  }

  ngOnDestroy() {
    this.offerSubs.unsubscribe();
  }


}
