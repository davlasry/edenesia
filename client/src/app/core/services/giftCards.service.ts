import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftCardsService {
  constructor(private http: HttpClient) {}

  getGiftCards(): Observable<any> {
    console.log('payload GET All Gift Cards SERVICE:');

    return this.http
      .get<any>(`${environment.API_URL}/giftcard/`)
      .pipe(map(result => result.data));
  }

  getGiftCard(id): Observable<any> {
    console.log(id);
    return this.http.get<any>(`${environment.API_URL}/giftcard/${id}`);
  }

  getGiftCardsUser(userID): Observable<any> {
    console.log('payload GET Gift Cards User SERVICE:', userID);
    return this.http
      .get<any>(`${environment.API_URL}/giftcard/user/${userID}`)
      .pipe(map(res => res.data));
  }

  addGiftCard(giftCard, userID): Observable<any> {
    console.log('ADD GiftCard SERVICE', giftCard);
    const data = { ...giftCard, userID };
    return this.http.post<any>(`${environment.API_URL}/giftcard`, data);
  }

  searchBooking(searchString): Observable<any> {
    // console.log(id);
    return this.http.get<any>(
      `${environment.API_URL}/booking/search/${searchString}`
    );
  }

  getBookingContext(id): Observable<any> {
    // console.log(id);
    return this.http.get<any>(`${environment.API_URL}/context/${id}`);
  }

  deleteBooking(bookingId): Observable<any> {
    // console.log('DELETE TRIP SERVICE', bookingId);
    return this.http.delete<any>(`${environment.API_URL}/booking/${bookingId}`);
  }

  deleteManyBookings(bookingsIds): Observable<any> {
    // console.log('DELETE MANY TRIPS SERVICE', bookingsIds);
    return this.http.post<any>(
      `${environment.API_URL}/booking/deleteMany`,
      bookingsIds
    );
  }

  updateBooking(booking, overwrite): Observable<any> {
    console.log('UPDATE TRIP SERVICE', booking);
    return this.http.post<any>(
      `${environment.API_URL}/booking/${booking._id}`,
      {
        bookingData: booking,
        overwrite
      }
    );
  }
}
