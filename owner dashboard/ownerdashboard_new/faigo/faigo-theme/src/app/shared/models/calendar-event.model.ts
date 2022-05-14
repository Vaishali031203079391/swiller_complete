import { CalendarEventAction, CalendarEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

export class CalendarAppEvent implements CalendarEvent {
  _id?: string;
  offer_type: string;
  image?: any;
  title: string;
  start: Date;
  end?: Date;
  color?: {
    primary: string;
    secondary: string;
  };
  offer: string;
  dresscode: string;
  actions?: CalendarEventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: {
    location: string,
    description: string
  };

  //offer type, image, title, location, description, start-date, end-date, offer, dresscode

  constructor(data?) {
    data = data || {};
    this.start = new Date(data.start) || startOfDay(new Date());
    this.end = data.end ? new Date(data.end) : null;
    this._id = data._id || '';
    this.title = data.title || '';
    this.offer_type = data.offer_type; //'Specials' || 'Events' || 'Openings';
    this.image = null;
    this.offer = data.offer;
    this.dresscode = data.dresscode;
    if(this.offer_type == 'specials'){
      this.color = {
        primary: '#3EB559',
        secondary: '#3EB559'
      };
    } else if(this.offer_type == 'events'){
      this.color = {
        primary: '#6fa8dc',
        secondary: '#6fa8dc'
      };
    } else{
      this.color = {
        primary: '#f44336',
        secondary: '#f44336'
      };
    }
    
    this.draggable = data.draggable || true;
    this.resizable = {
      beforeStart: data.resizable && data.resizable.beforeStart || true,
      afterEnd: data.resizable && data.resizable.afterEnd || true
    };
    this.actions = data.actions || [];
    this.allDay = data.allDay || false;
    this.cssClass = data.cssClass || '';
    this.meta = {
      location: data.meta && data.meta.location || '',
      description: data.meta && data.meta.description || ''
    };
  }
}
