import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  data = [
    {id: 1, name: 'user 1', email: 'email@example.com', lastOperation: new Date(), status: true},
    {id: 2, name: 'user 2', email: 'email@example.com', lastOperation: new Date(), status: false},
    {id: 3, name: 'user 3', email: 'email@example.com', lastOperation: null, status: false},
    {id: 4, name: 'user 4', email: 'email@example.com', lastOperation: new Date(), status: true},
    {id: 5, name: 'user 5', email: 'email@example.com', lastOperation: new Date(), status: true},
    {id: 6, name: 'user 6', email: 'email@example.com', lastOperation: null, status: false},
    {id: 7, name: 'user 7', email: 'email@example.com', lastOperation: new Date(), status: false},
    {id: 8, name: 'user 8', email: 'email@example.com', lastOperation: new Date(), status: true},
  ];

  constructor() { }

  getData(): Observable<any[]> {
    return of(this.data);
  }

  insertGuest(guest): Observable<boolean> {
    guest.id = this.data.length + 1;
    this.data.push(guest);
    return of(true);
  }

  modifyGuest(guest): Observable<boolean> {
    const guestIndex = this.data.findIndex(v => v.id === guest.id);
    this.data.splice(guestIndex, 1, guest);
    return of(true);
  }
}
