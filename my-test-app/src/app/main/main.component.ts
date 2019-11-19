import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public router: Router,
    public loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  onClickLogout(): void {
    this.loginService.logout().subscribe(
      res => this.router.navigate(['login']),
      err => alert('Somthing went wrong when logout' + err)
    );
  }
}
