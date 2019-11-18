import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GuestListComponent } from './main/guest-list/guest-list.component';
import { GuestEditComponent } from './main/guest-edit/guest-edit.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
