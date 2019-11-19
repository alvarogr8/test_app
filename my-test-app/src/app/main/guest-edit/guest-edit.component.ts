import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../services/guest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss']
})
export class GuestEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    status: new FormControl(null),
  });
  title: string;
  isWarningShown: boolean;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public guestService: GuestService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    if (id) {
      const guest = this.guestService.data.find(v => v.id === id);
      this.form.controls.id.setValue(guest.id);
      this.form.controls.name.setValue(guest.name);
      this.form.controls.email.setValue(guest.email);
      this.form.controls.status.setValue(guest.status, {
        onlySelf: true
      });
      this.title = 'Edit';
    } else {
      this.title = 'Create';
    }
  }

  onClickModify(): void {
    if (this.form.dirty && this.form.invalid) {
      this.isWarningShown = true;
      return;
    }
    this.isWarningShown = false;
    if (this.title === 'Create') {
      this.guestService.insertGuest(this.form.value).subscribe(
        res => this.router.navigate(['']),
        error => alert('Request failed' + error)
      );
    } else {
      this.guestService.modifyGuest(this.form.value).subscribe(
        res => this.router.navigate(['']),
        error => alert('Request failed' + error)
      );
    }
  }

}
