import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  columnList = [
    {title: 'Name', key: 'name', type: 'text'},
    {title: 'Email', key: 'email', type: 'text'},
    {title: 'Last Operation', key: 'lastOperation', type: 'date'},
    {title: 'Status', key: 'status', type: 'status'},
  ];

  data = [
    {name: 'user 1', email: 'email@example.com', lastOperation: new Date(), status: true},
    {name: 'user 2', email: 'email@example.com', lastOperation: new Date(), status: false},
    {name: 'user 3', email: 'email@example.com', lastOperation: null, status: false},
    {name: 'user 4', email: 'email@example.com', lastOperation: new Date(), status: true},
    {name: 'user 5', email: 'email@example.com', lastOperation: new Date(), status: true},
    {name: 'user 6', email: 'email@example.com', lastOperation: null, status: false},
    {name: 'user 7', email: 'email@example.com', lastOperation: new Date(), status: false},
    {name: 'user 8', email: 'email@example.com', lastOperation: new Date(), status: true},
  ];

  constructor() { }

  ngOnInit() {
  }

}
