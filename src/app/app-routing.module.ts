import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {BlogAdditionComponent} from './blog-addition/blog-addition.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {LogoutComponent} from './logout/logout.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {BlogUpdateComponent} from './blog-update/blog-update.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blog-list',
    component: BlogListComponent,
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
  },
  {
    path: 'add-blog',
    component: BlogAdditionComponent,
  },
  {
    path: 'my-profile/blog-update/:blogid',
    component: BlogUpdateComponent,
  },
  {
    path: 'all-users',
    component: AllUsersComponent,
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    redirectTo: 'signup',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
