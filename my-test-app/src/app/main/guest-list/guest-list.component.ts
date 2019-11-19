import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  data = [];
  columnList = [
    {title: 'Name', key: 'name', type: 'text', width: '25%'},
    {title: 'Email', key: 'email', type: 'text', width: '25%'},
    {title: 'Last Operation', key: 'lastOperation', type: 'date', width: '25%'},
    {title: 'Status', key: 'status', type: 'status', width: '25%'},
  ];
  searchName: string;

  constructor(
    public router: Router,
    public guestService: GuestService
  ) { }

  ngOnInit() {
    this.guestService.getData().subscribe(
      res => this.data.push(...res),
      error => alert('Request failed' + error)
    );
  }

  onClickEdit(item): void {
    this.router.navigate(['edit', item.id]);
  }

  onSearchChange(event): void {
    this.data = this.guestService.data.filter(v => v.name.includes(event));
  }
}
