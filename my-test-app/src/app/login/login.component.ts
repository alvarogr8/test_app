import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  isRememberMe: boolean;

  constructor(
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onClickLogin(): void {
    this.loginService.login(this.form.value).subscribe(
      token => {
        if (token) {
          sessionStorage.setItem('token', token);
          this.router.navigate(['']);
        } else {
          alert('Wrong Credentials');
        }
      },
      error => alert('Request failed' + error)
    );
  }
}
