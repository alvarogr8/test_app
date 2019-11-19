import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GuestListComponent } from './main/guest-list/guest-list.component';
import { GuestEditComponent } from './main/guest-edit/guest-edit.component';
import { LoginService } from './login/login.service';
import { GuestService } from './main/services/guest.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GuestListComponent,
    GuestEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AuthGuardService,
    GuestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
