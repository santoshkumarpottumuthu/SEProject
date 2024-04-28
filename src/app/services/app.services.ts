import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class appApiServices {
    baseUrl = "https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/";
    // server.port = 8080
    constructor(private httpClient: HttpClient) { 
      
    }
    // getmovieinfo(data:any): Observable<any> {
    //     const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    //     return this.httpClient.post("http://localhost:4200/getmoviedetails",JSON.parse(data),{'headers':headers});
    // }

    addNewAdmin(formData: any): Observable<any> {
      const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
      return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/registerAdmin",formData, {'headers':headers});
  }

  getAllAdmins() :Observable<any> {
    const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getAllAdmins",{'headers':headers});
}

    deleteAdmin(userID: any): Observable<any> {
      const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
      return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/deleteAdmin",userID, {'headers':headers});
    }
      getCustomerByID(userID: any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getCustomerById",userID, {'headers':headers});
      } 
      suspendCustomer(userID: any): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/suspendCustomer",userID, {'headers':headers});
      } 
    activateCustomer(userID: any): Observable<any> {
      const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
      return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/activateCustomer",userID, {'headers':headers});
    } 
    getShowBasedOnMovie(movieId: any): Observable<any> {
      const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
      return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getShowsByMovieID",movieId, {'headers':headers});
    } 

    getMoviesList(): Observable<any> {
        const headers= new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getallmovies",{'headers':headers});
    }

    //Signup Form

    sendCustomerUserData(formData: any): Observable<any> {
        const headers = new HttpHeaders()
          .set('content-type', 'application/json;charset=utf-8')
          .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
          .set('Access-Control-Allow-Origin', '*');
      
        // Modify the post request to send formData
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/registerCustomer", formData, { 'headers':headers });
      }
      
      // Add a method to save address
    saveAddress(addressData: any): Observable<any> {
        // Prepare the HTTP headers for the request
        const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');

        // Send a POST request to save the address
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/saveAddress", addressData, { 'headers':headers });
    }

    // Add a method to save payment card information
    addPaymentCard(cardData: any): Observable<any> {
        const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');

        // Send a POST request to add the payment card
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addCard", cardData, { 'headers':headers });
    }

//Forgot Password
forgotPasswordData(userEmail: any): Observable<any> {
  const headers = new HttpHeaders()
    .set('content-type', 'application/json;charset=utf-8')
    .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
    .set('Access-Control-Allow-Origin', '*');

  // Modify the post request to send formData
  return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/forgetPassword", userEmail, { 'headers':headers });
}
//ResetPassword

resetPassword(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        const data = { email, password };
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addCard", data);
  }

  viewMovieInfo (movieTitle : string): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        const data = { movieTitle };
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getmoviedetails", data, { 'headers': headers });
  }

  addMovieAdmin(formData: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addmovie", formData, { 'headers': headers });
  }
  scheduleMovieAdmin(formData: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addShow", formData, { 'headers': headers });
  }
  editMovieAdmin(formData: any) : Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/updatemovie", formData, { 'headers': headers });
  }
  getMovieInfo (movieTitle : string): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        const data = { movieTitle };
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getmoviedetails", data, { 'headers': headers });
  }
  deleteMovieAdmin(userID: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/admin/deletemovie", userID, { 'headers': headers });
  }

  deleteCustomerAdmin(userID: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/deleteCustomer", userID, { 'headers': headers });
  }
  adminGetShowsByDate(showDate: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getAvailableShows", showDate, { 'headers': headers });
  }
  customerGetShowsByData(data : any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getShowsByDate", data, { 'headers': headers });
  }
  getShowIDByShowDateandTime(showDate: any, showTime: any): Observable<any>
  {
    const data = {showDate:showDate, showTime : showTime }
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getShow", data, { 'headers': headers });
  }
  updateShowTime(showId: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/updateShow", showId, { 'headers': headers });
  }
  deleteShowTime(showId: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/deleteShow", showId, { 'headers': headers });
  }
  getAllPromotions(): Observable<any>
  {
    return this.httpClient.get("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getAllPromos");
  }
  confirmBookingOrder(formData: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addBooking", formData, { 'headers': headers });
  } 
  getBookingByCustomerID(customerID: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getCustomerBookings", customerID, { 'headers': headers });
  } 

  getReservedSeats(showID :any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getReservedSeats", showID, { 'headers': headers });
  } 

  addNewPromotion(formData: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/addPromo", formData, { 'headers': headers });
  }

  deletePromotion(promoId: any): Observable<any>
  {
    const headers = new HttpHeaders()
        .set('content-type', 'application/json;charset=utf-8')
        .set('Access-Control-Allow-Methods', 'OPTIONS,POST,GET')
        .set('Access-Control-Allow-Origin', '*');
        return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/deletePromo", promoId, { 'headers': headers });
  }


  
  // Add a method to check if the user is logged in
  checkUserLoggedIn(): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/checkUserLoggedIn", { 'headers': headers });
  }

  // Add a method to get user information
  getUserInfo(): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/getUserInfo", { 'headers': headers });
  }

  // Add a method for user login
  userLogin(username: string, password: string): Observable<any> {
    // Implement your login logic here, e.g., send username and password to the server
    const loginData = { username: username, password: password };
    const headers = new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/userLogin", loginData, { 'headers': headers });
  }

  // Add a method for user logout
  userLogout(): Observable<any> {
    // Implement your logout logic here
    const headers = new HttpHeaders().set('content-type', 'application/json;charset=utf-8').set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post("https://movie-booking-backend-dbc9c6a9b35f.herokuapp.com/userLogout", null, { 'headers': headers });
  }

  

}