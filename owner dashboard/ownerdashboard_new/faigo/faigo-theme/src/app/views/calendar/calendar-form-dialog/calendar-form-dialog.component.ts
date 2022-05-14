import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/utils';

interface DialogData {
  offer_type?: string;
  event?: CalendarEvent;
  action?: string;
  date?: Date;
}
@Component({
  selector: 'app-calendar-form-dialog',
  templateUrl: './calendar-form-dialog.component.html',
  styleUrls: ['./calendar-form-dialog.component.scss']
})
export class CalendarFormDialogComponent implements OnInit {
  data: DialogData;
  event: any; // CalendarEvent
  dialogTitle: string;
  eventForm: FormGroup;
  action: string;

  offers: string[] = ["Specials", "Openings", "Events"];
  selectedOffer: string;

  ChangeOffer(newOffer: string) { 
    this.selectedOffer = newOffer;
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.action === 'edit') {
        this.selectedOffer = this.event.offer_type;
        this.dialogTitle = this.event.title;
      } else {
        this.dialogTitle = 'Add Event';
        this.event = new CalendarAppEvent(this.data.event);
        this.selectedOffer = this.data.offer_type;
        console.log(this.selectedOffer);
      }
      this.eventForm = this.buildEventForm(this.event);

    }, 100);
    this.eventForm = this.buildEventForm(this.event);

  }

  buildEventForm(event: CalendarAppEvent = {offer_type : '', image: null, start: null, title: null, color: null, offer: null, dresscode: null, meta: {location: '', description: '' }}) {
    let frmData = new FormGroup({
      _id: new FormControl(event._id),
      offer_type: new FormControl(this.selectedOffer),
      image: new FormControl(null),
      title: new FormControl(event.title, Validators.required),
      start: new FormControl(Utils.dateToNgbDate(event.start), Validators.required),
      end: new FormControl(Utils.dateToNgbDate(event.end)),
      //allDay: new FormControl(event.allDay),
      offer: new FormControl(event.offer),
      dresscode: new FormControl(event.dresscode),
      meta: this.formBuilder.group({
        location: new FormControl(event.meta.location),
        description: new FormControl(event.meta.description)
      })
    });
    console.log(frmData.value);
  return frmData;
  }

  

}

//offer type, image, title, location, description, start-date, end-date, offer, dresscode