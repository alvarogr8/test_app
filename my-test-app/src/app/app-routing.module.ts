import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GuestListComponent } from './main/guest-list/guest-list.component';
import { GuestEditComponent } from './main/guest-edit/guest-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: GuestListComponent},
      {path: 'edit', component: GuestEditComponent},
    ]
  }, // , canActivate: MainGuard},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
