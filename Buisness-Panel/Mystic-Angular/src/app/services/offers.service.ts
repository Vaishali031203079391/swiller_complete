import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  restaurantOffersUpdated = new Subject<{ offers: Offer[], offerCount: number }>();
  buyerOffersUpdated = new Subject<{ buyerOffers: Offer[], buyerOfferCount: number }>();
  allRestaurantsOffersUpdated = new Subject<{ allOffers: Offer[], allOfferCount: number }>();

  newOfferAdded = new Subject<{ offer: Offer }>();
  newOfferSubscribed = new Subject<{ buyerOffer: Offer }>();

  private offers: Offer[] = [];
  private totalOffers: number;

  private buyerOffers: Offer[] = [];
  private buyerTotalOffers: number;

  private allOffers: Offer[] = [];
  private allTotalOffers: number;

  constructor(private http: HttpClient, private router: Router) { }

  // Observables-

  sendrestaurantOffers() {
    return this.restaurantOffersUpdated.asObservable();
  }

  sendbuyerOffers() {
    return this.buyerOffersUpdated.asObservable();
  }

  sendallRestaurantOffers() {
    return this.allRestaurantsOffersUpdated.asObservable();
  }

  // Instructor-

  getRestaurantOffers() {
    this.http.get<{ owner: string, offers: Offer[], offersCount: number }>(BACKEND_URL + "restaurant-offers").pipe(map(offerData => {
      return {
        owner: offerData.owner,
        offers: offerData.offers.map(offer => {
          var offer_title = offer.offer_title;
          var category = offer.category;
          var offer_ = offer.offer;
          var dress_code = offer.dress_code;
          var description = offer.description;
          var start_date = offer.start_date;
          var end_date = offer.end_date;
          var start_time = offer.start_time;
          var end_time = offer.end_time;
          var close_bookings_by = offer.close_bookings_by;
          var repeat_offer = offer.repeat_offer;
          var no_of_tables = offer.no_of_tables;
          var time_slot = offer.time_slot;
          var owner = offer.owner;
          var avatar = offer.avatar;
          var offerImages = offer.offerImages;

          let offerInfo: Offer = {
            offer_title : offer_title,
            category : category,
            offer : offer_,
            dress_code : dress_code,
            description : description,
            start_date : start_date,
            end_date : end_date,
            start_time : start_time,
            end_time : end_time,
            close_bookings_by : close_bookings_by,
            repeat_offer : repeat_offer,
            no_of_tables : no_of_tables,
            time_slot : time_slot,
            owner : owner,
            avatar : avatar,
            offerImages : offerImages
          }

          return offerInfo;
        }),
        maxOffers: offerData.offersCount
      };
    })).subscribe(response => {
      //console.log(response);
      this.offers = response.offers;
      this.totalOffers = response.maxOffers;
      this.restaurantOffersUpdated.next({ offers: [...this.offers], offerCount: response.maxOffers });
    }, error => {
        this.router.navigate(['dashboard/profile']);
    });

    return { courses: [...this.offers], maxCourses: this.totalOffers };
  }

  getRestaurantOffer(id: string) {
    return this.http.get<{ offer: Offer, owner: string }>(BACKEND_URL + "tasks/" + id).pipe(map(offerData => {
      return {
        owner: offerData.owner,
        offer: {
            offer_title : offerData.offer.offer_title,
            category : offerData.offer.category,
            offer : offerData.offer.offer,
            dress_code : offerData.offer.dress_code,
            description : offerData.offer.description,
            start_date : offerData.offer.start_date,
            end_date : offerData.offer.end_date,
            start_time : offerData.offer.start_time,
            end_time : offerData.offer.end_time,
            close_bookings_by : offerData.offer.close_bookings_by,
            repeat_offer : offerData.offer.repeat_offer,
            no_of_tables : offerData.offer.no_of_tables,
            time_slot : offerData.offer.time_slot,
            owner : offerData.offer.owner,
            avatar : offerData.offer.avatar,
            offerImages : offerData.offer.offerImages
        }
      };
    }
    ));
  }

  updateOffer(id: string, instructions: string, image?: File | any) {

    let offerData: any | FormData;
    if (typeof image === "object") {
      offerData = new FormData();
      offerData.append("instructions", instructions);
      offerData.append("avatar", image);
    } else {
      offerData = {
        instructions: instructions,
        avatar: image
      };
    }

    //var courseData = new FormData();
    //courseData.append("instructions", instructions);
    //courseData.append("avatar", image);

    //console.log(courseData);
    this.http.put<{ message: string, offer: Offer, Id: string }>(BACKEND_URL + "tasks/" + id, offerData).subscribe((response) => {
      this.restaurantOffersUpdated.next({ offers: [...this.offers], offerCount: this.totalOffers });
      //console.log(response.message);
      this.router.navigate(["courses", "view", id]);
    });
  }

  /* postOffer(title: string, instructions: string, image: File) {
    const offerData = new FormData();
    offerData.append("title", title);
    offerData.append("instructions", instructions);
    offerData.append("avatar", image);

    //console.log(courseData);
    this.http.post<{ message: string, course: Offer }>(BACKEND_URL + "tasks", offerData).subscribe(responseData => {
      this.restaurantOffersUpdated.next({ offers: [...this.offers], offerCount: this.totalOffers });
      window.alert('Offer Posted');
      window.location.reload();
      //this.router.navigate(["courses", "courses"]);
    }, error => {
        window.location.reload();
    });
  } */

  postOffer(offerData: Offer) {

    //console.log(courseData);
    this.http.post<{ msg: string, offer: Offer }>(BACKEND_URL + "offers", offerData).subscribe(responseData => {
      this.restaurantOffersUpdated.next({ offers: [...this.offers], offerCount: this.totalOffers });
      window.alert(responseData.msg);
      window.alert(responseData.offer.offer_title);
      window.location.reload();
      //this.router.navigate(["courses", "courses"]);
    }, error => {
        console.log(error);
        //window.location.reload();
    });
  }

  // Student:-

  onSubscribeOffer(id: string, buyer: string) {
    this.http.patch<{ offer: any, user: any, msg: string }>(BACKEND_URL + "tasks/buy/" + id, buyer).subscribe((response) => {
      this.buyerOffersUpdated.next({ buyerOffers: [...this.buyerOffers], buyerOfferCount: this.buyerTotalOffers });
      window.alert("Successfully Subscribed!!!");
    }, error => {
        window.location.reload();
    });
  }

  getBuyerOffers(offersPerPage: number, currentPage: number) {
    const queryParams = `?limit=${offersPerPage}&skip=${currentPage}`;
    this.http.get<{ buyerTotalOffers: number, buyerOffers: any }>(BACKEND_URL + "mytasks" + queryParams).pipe(map(offerData => {
      return {
        offers: offerData.buyerOffers.map(offer => {
          var _id = offer._id;
          var title = offer.title;
          var instructions = offer.instructions;
          var avatar = offer.avatar;
          var owner = offer.owner;
          var createdAt = offer.createdAt;
          var updatedAt = offer.updatedAt;
          var subscribers = offer.buyers.length;

          let offerInfo = {
            _id: _id,
            title: title,
            instructions: instructions,
            avatar: avatar,
            owner: owner,
            createdAt: createdAt,
            updatedAt: updatedAt,
            buyers: subscribers
          }

          return offerInfo;
        }),
        maxOffers: offerData.buyerTotalOffers
      };
    })).subscribe(response => {
      //console.log(response);
      this.buyerOffers = response.offers;
      this.buyerTotalOffers = response.maxOffers;
      this.buyerOffersUpdated.next({ buyerOffers: [...this.buyerOffers], buyerOfferCount: response.maxOffers });
    }, error => {
        this.router.navigate(['courses', 'courses']);
    });

    return { buyerOffers: [...this.buyerOffers], buyerOfferCount: this.buyerTotalOffers };
  }

  getBuyerOffer(id: string) {
    return this.http.get<{ offer: Offer, owner: string }>(BACKEND_URL + "mytasks/get/" + id).pipe(map(offerData => {
      return {
        owner: offerData.owner,
        offer: {
         /*  _id: offerData.offer._id,
          title: offerData.offer.title,
          instructions: offerData.offer.instructions,
          owner: offerData.owner,
          avatar: offerData.offer.avatar,
          createdAt: offerData.offer.createdAt,
          updatedAt: offerData.offer.updatedAt,
          buyers: offerData.offer.buyers.length */
        }
      };
    }
    ));
  }

  // General Users-

  /* getAllCourse(id: string) {
    return this.http.get<{ task: Course, owner: string }>(BACKEND_URL + "alltasks/get/" + id).pipe(map(courseData => {
      return {
        owner: courseData.owner,
        task: {
          _id: courseData.task._id,
          title: courseData.task.title,
          instructions: courseData.task.instructions,
          owner: courseData.owner,
          avatar: courseData.task.avatar,
          createdAt: courseData.task.createdAt,
          updatedAt: courseData.task.updatedAt,
          buyers: courseData.task.buyers.length
        }
      };
    }
    ));
  }

  getAllCourses(coursesPerPage: number, currentPage: number, selected?: string, selectedOption?: string) {
    const queryParams = `?limit=${coursesPerPage}&skip=${currentPage}&sortBy=${selected}:${selectedOption}`;
    this.http.get<{ tasks: Course[], coursesCount: number }>(BACKEND_URL + "alltasks" + queryParams).pipe(map(courseData => {
      return {
        tasks: courseData.tasks.map(task => {
          var _id = task._id;
          var title = task.title;
          var instructions = task.instructions;
          var avatar = task.avatar;
          var owner = task.owner;
          var createdAt = task.createdAt;
          var updatedAt = task.updatedAt;
          var subscribers = task.buyers.length;

          let taskInfo = {
            _id: _id,
            title: title,
            instructions: instructions,
            avatar: avatar,
            owner: owner,
            createdAt: createdAt,
            updatedAt: updatedAt,
            buyers: subscribers
          }

          return taskInfo;
        }),
        maxCourses: courseData.coursesCount
      };
    })).subscribe(response => {
      //console.log(response);
      this.allCourses = response.tasks;
      this.allTotalCourses = response.maxCourses;
      this.allUserCoursesUpdated.next({ allCourses: [...this.allCourses], allCourseCount: response.maxCourses });
    }, error => {
        this.router.navigate(['main','products']);
    });

    return { allCourses: [...this.allCourses], maxCourses: this.allTotalCourses };
  }
 */
}
