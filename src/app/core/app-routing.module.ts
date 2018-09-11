import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../component/user/user.component';
import { LoginComponent } from '../component/login/login.component';
import { HomeComponent } from '../component/home/home.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'user',  component: UserComponent  },
  { path : 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
