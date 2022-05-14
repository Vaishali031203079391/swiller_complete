import { Component, createPlatformFactory, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormControl, FormGroup } from '@angular/forms';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthData } from 'src/app/services/auth-data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('search') public searchElementRef!: ElementRef;

  constructor(private ngWizardService: NgWizardService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private authService: AuthService) {
  }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      window.alert(autocomplete);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  //Form Control:

  restaurantname = new FormControl('');
  restaurantaddress = new FormControl('');
  restaurantcity = new FormControl('');
  restaurantphone = new FormControl('');
  landlinephone = new FormControl('');
  ownerphone = new FormControl('');
  ownername = new FormControl('');
  owneremail = new FormControl('');
  openingTime = new FormControl('');
  closingTime = new FormControl('');

  temp: string[] = [];
  cu: string = '';
  zoom: number = 12;
  private geoCoder;
  opening_time: string = '';
  closing_time: string = '';

  makeInputVisible: Boolean = false;

  // Restaruant Details variables:

  restaurant_name: string = '';
  restaurant_address: string = '';
  restaurant_city: string = '';
  address: string = '';
  lat: number;
  lng: number;
  restaurant_phone: string = '';
  landline_phone: string = '';
  owner_phone: string = '';
  owner_name: string = '';
  restaurant_email: string = '';
  establishment_type: string[] = [];
  cuisines: string[] = [];
  operational_days: string[] = [];

  rowOneCheckBox: string[] = ['Restaruants', 'Cafes', 'Bars & Pubs', 'Clubs'];
  rowTwoCheckBox: string[] = ['Beverages', 'Biryani', 'Chinese', 'Desserts', 'Fast Food', 'North Indian', 'South Indian', 'Street Food'];
  rowThreeCheckBox: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];




  step1form: FormGroup;


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
    console.log(_args.step.description);

    if(_args.previousStep !== undefined){
      this.step = _args.previousStep.description;
    }

    if(_args.previousStep !== undefined && _args.previousStep.description == '2'){
      this.resgisterRestaruant();
    }
  };

  resgisterRestaruant(){
    let restaurant_data: AuthData = {
      restaurant_name: this.restaurant_name,
      restaurant_address: this.restaurant_address,
      restaurant_city: this.restaurant_city,
      restaurant_location: {
        coordinates: [this.lat, this.lng]
      },
      restaurant_phone: this.restaurant_phone.toString(),
      landline_phone: this.landline_phone.toString(),
      owner_name: this.owner_name,
      owner_phone: this.owner_phone.toString(),
      restaurant_email: this.restaurant_email,
      establishment_type: this.establishment_type,
      cuisines: this.cuisines,
      operational_hours: this.opening_time + ' to ' + this.closing_time,
      operational_days: this.operational_days
    };

    console.log(restaurant_data);

    this.authService.createUser(restaurant_data);
  }

  addOutlet(index: number, name: string, isChecked: boolean){
    if (isChecked) {
      this.establishment_type.push(name);
    } else {
      this.establishment_type.splice(this.establishment_type.indexOf(name), 1);
    }
  }

  addCuisines(name: string, isChecked: boolean){
    if (isChecked) {
      this.cuisines.push(name);
    } else {
      this.cuisines.splice(this.cuisines.indexOf(name), 1);
    }
  }

  addDays(index: number, name: string, isChecked: boolean){
    if (isChecked) {
      this.operational_days.push(name);
    } else {
      this.operational_days.splice(this.operational_days.indexOf(name), 1);
    }
  }

  addCuisineList(event: Event){
    this.cuisines.push(this.cu);
    this.temp.push(this.cu);
    this.cu='';
  }


  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.lat, this.lng);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.getAddress(this.lat, this.lng);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  addCuisine(){
    this.makeInputVisible = true;
  }

}
