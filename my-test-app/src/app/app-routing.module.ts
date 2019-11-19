import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GuestListComponent } from './main/guest-list/guest-list.component';
import { GuestEditComponent } from './main/guest-edit/guest-edit.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', component: GuestListComponent},
      {path: 'edit', component: GuestEditComponent},
      {path: 'edit/:id', component: GuestEditComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent},
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
