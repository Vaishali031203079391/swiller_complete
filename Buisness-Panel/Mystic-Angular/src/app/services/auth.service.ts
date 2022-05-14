import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthData } from './auth-data.model';

const BACKEND_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  public token: string;
  public tokenExpiryDate: any;
  private message: string;
  private tokenSetter = new Subject<string>();
  private authStatusListener = new Subject<boolean>();
  private userInfoUpdated = new Subject<AuthData>();
  private profilePicUpdated = new Subject<any>();
  private userSelected = new Subject<AuthData>();
  private tokenTimer: any;
  private userId: string;
  private user: any;
  Email: string;
  Domain: number;
  userdomain: number;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  getUpdatedProfilePic() {
    return this.profilePicUpdated.asObservable();
  }

  currentUser(userInfo: any) {
    this.user = userInfo;
    this.userSelected.next(userInfo);
  }

  getCurrentUser() {
    return this.userSelected.asObservable();
  }

  getAuthStatusListner() {
    return this.authStatusListener.asObservable();
  }

  getUpdatedUserInfo() {
    return this.userInfoUpdated.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserInfo() {
    return this.user;
  }

  onForgotPassword(domain: number, email: string) {
    const userEmail = {
      domain: domain,
      email: email
    }
    this.Domain = userEmail.domain;
    this.Email = userEmail.email;
    this.http.post<{ msg: string, otp: number }>(BACKEND_URL + "forgot-password", userEmail).subscribe(res => {
      //console.log(res.msg);
      //console.log(res.otp);
      this.router.navigate(['auth','validate-otp']);
    }, error => {
        //console.log(error.error.msg);
        this.router.navigate(['/auth/signup']);
    });
  }

  onValidateOtp(otp: number) {
    const userOtp = {
      domain: this.Domain,
      email: this.Email,
      otp: otp
    }
    this.http.post<{ msg: string, password: string }>(BACKEND_URL + "validate-otp", userOtp).subscribe(res => {
      //console.log(res.msg);
      //console.log(res.password);
      this.router.navigate(['/auth/login']);
    }, error => {
        //console.log(error.error.msg);
        this.router.navigate(['/auth/home']);
    });
  }

  createUser(authData: AuthData) {
    this.http.post<{ restaurant: any, msg: string, username: string, password: string }>(BACKEND_URL + "register", authData).subscribe(response => {
      this.user = response.restaurant;
      window.alert(response.msg + ", user_name: " + response.username + ", password: " + response.password);
      this.router.navigate['/login'];
    }, error => {
        if (error.error.msg == "Email already enrolled") {
          window.alert(error.error.msg);
          window.location.reload();
        } else {
          window.location.reload();
        }

    });
  }

  getUser() {
    return this.user.name;
  }

  login(authData: any) {
    this.http.post<{ restaurant: any, token: string, expiresIn: number }>(BACKEND_URL + "login", authData).subscribe(response => {
      console.log(response.token);
      const token = response.token;
      this.token = token;
      this.user = response.restaurant;
      if (token != undefined) {
        this.token = token;
        this.user = response.restaurant;
        this.clearAuthData();
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        //this.userdomain = response.restaurant.domain;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.tokenExpiryDate = expirationDate;
        this.saveAuthData(token, expirationDate, response.restaurant);
        if (response.restaurant.userUpdatedPassword == true) {
          this.tokenSetter.next(token);
          this.router.navigate(['/dashboard/profile'])
        } else {
          this.router.navigate([''])
        }
      }
    }, error => {
      //console.log(error);
      this.router.navigate(['']);
    });
  }

  updateUserInfo(name: string, address: string, city: string, state: string, country: string) {
    let userData = {
      name: name,
      address: address,
      city: city,
      state: state,
      country: country
    };
    this.http.patch<{ user: any, token: any, expiresIn: number }>(BACKEND_URL + "users/me", userData).pipe(map(response => {
      return {
        user: {
          domain: response.user.domain,
          name: response.user.name,
          email: response.user.email,
          confirmpassword: response.user.confirmpassword,
          phone: response.user.phone,
          address: response.user.address,
          city: response.user.city,
          state: response.user.state,
          country: response.user.country,
          avatar: response.user.avatar,
          userUpdatedPassword: response.user.userUpdatedPassword
        },
        token: response.token,
        expiresIn: response.expiresIn
      };
    })).subscribe(res => {
      let updatedUser = res
      const now = new Date();
      const expiresIn = new Date(now.getTime() + updatedUser.expiresIn * 1000);
      this.saveAuthData(this.token, expiresIn, updatedUser.user);
      this.userInfoUpdated.next(updatedUser.user);
      this.router.navigate(['/main/profile']);
    }, error => {
        this.router.navigate(['/main/profile']);
    });
  }

  getProfileInfo() {
    this.http.get<{ user: any }>(BACKEND_URL + "profile/me").subscribe(response => {
      this.authStatusListener.next(true);
      this.user = response.user;
    }, error => {
      console.log(error);
      this.router.navigate(['/auth/login']);
    });
    return this.user;
  }

  getUserProfile() {
    this.http.get(BACKEND_URL + "profile/me").subscribe(res => {
      return res;
    });
  }

  updateProfilePic(image: File) {
    const picData = new FormData();
    picData.append("avatar", image);

    this.http.post<{ message: string, user: any, token: string, expiresIn: any }>(BACKEND_URL + "users/me/avatar", picData).pipe(map(response => {
      return {
        user: {
          domain: response.user.domain,
          name: response.user.name,
          email: response.user.email,
          confirmpassword: response.user.confirmpassword,
          phone: response.user.phone,
          address: response.user.address,
          city: response.user.city,
          state: response.user.state,
          country: response.user.country,
          avatar: response.user.avatar
        },
        token: response.token,
        expiresIn: response.expiresIn
      };
    })).subscribe(res => {
      let updatedUser = res
      const now = new Date();
      const expiresIn = new Date(now.getTime() + updatedUser.expiresIn * 1000);
      this.saveAuthData(updatedUser.token, expiresIn, updatedUser.user);
      this.profilePicUpdated.next(updatedUser.user.avatar);
      this.router.navigate(['/main/profile']);
    }, error => {
      console.log(error.error);
        window.location.reload();
    });
  }

  getCurrentProfilePic() {
    var userData;
    this.http.get<{ user: any }>(BACKEND_URL + "profile/me").subscribe(response => {
      userData = response.user.avatar;
    }, error => {
      //console.log(error);
      this.router.navigate(['/main/profile']);
    });
    if (userData) {
      return userData;
    } else {
      return null;
    }
  }

  onProfilePicDeleted() {
    this.http.delete<{user: any}>(BACKEND_URL + "users/me/avatar").subscribe(res => {
      this.saveAuthData(this.token, this.tokenExpiryDate, res.user);
      this.profilePicUpdated.next(res.user.avatar);
      this.router.navigate(['/main/profile']);
    });
  }

  getToken() {
    return this.tokenSetter.asObservable();
  }

  logout() {
    this.http.post(BACKEND_URL + "restaurants/logout", this.token).subscribe(response => {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      clearTimeout(this.tokenTimer);
      this.clearAuthData();
      this.router.navigate(['/login']);
    }, error => {
        this.onLogoutall();
        this.router.navigate(['/login']);
    });
  }

  onLogoutall() {
    console.log(localStorage.getItem("token"));
    this.http.post(BACKEND_URL + "restaurants/logoutall", this.token).subscribe(response => {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      clearTimeout(this.tokenTimer);
      this.clearAuthData();
      this.router.navigate(['/login']);
    });
  }

  changePassword(password: string, userUpdatedPassword: boolean) {
    let userData = {
      confirmpassword: password,
      userUpdatedPassword: userUpdatedPassword
    };
    this.http.patch<{ user: any, token: any, expiresIn: any }>(BACKEND_URL + "users/me", userData).pipe(map(response => {
      return {
        user: {
          domain: response.user.domain,
          name: response.user.name,
          email: response.user.email,
          confirmpassword: response.user.confirmpassword,
          phone: response.user.phone,
          address: response.user.address,
          city: response.user.city,
          state: response.user.state,
          country: response.user.country,
          avatar: response.user.avatar,
          userUpdatedPassword: response.user.userUpdatedPassword
        },

        token: response.token,
        expiresIn: response.expiresIn
      };
    })).subscribe(res => {
      let updatedUser = res
      const now = new Date();
      let expiresIn = new Date(now.getTime() + updatedUser.expiresIn * 1000);

      this.saveAuthData(updatedUser.token, expiresIn, updatedUser.user);
      this.userInfoUpdated.next(updatedUser.user);
      this.router.navigate(['/main/profile']);
    }, error => {
      //console.log(error);
        window.location.reload();
    });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.user = JSON.parse(authInformation.user);
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }


  private setAuthTimer(duration: number) {
    //console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, user: any) {
    //console.log(expirationDate);
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("user", JSON.stringify(user));
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const user = localStorage.getItem("user");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      user: user
    }
  }
}
