 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { HttpClientModule} from '@angular/common/http';
 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { LoginComponent } from './login/login.component';
 import { SignupComponent } from './signup/signup.component';
 import { HomeComponent } from './home/home.component';
 import { NavbarComponent } from './navbar/navbar.component';
 import { FooterComponent } from './footer/footer.component';
 import { MyProfileComponent } from './my-profile/my-profile.component';
 import { BlogAdditionComponent } from './blog-addition/blog-addition.component';
 import { BlogDetailsComponent } from './blog-details/blog-details.component';
 import { LogoutComponent } from './logout/logout.component';
 import {FormsModule} from '@angular/forms';
 import { BlogListComponent } from './blog-list/blog-list.component';
 import { OrderByPipe } from './order-by.pipe';
 import { AllUsersComponent } from './all-users/all-users.component';
 import { BlogUpdateComponent } from './blog-update/blog-update.component';


 @NgModule({
   declarations: [
     AppComponent,
     LoginComponent,
     SignupComponent,
     HomeComponent,
     NavbarComponent,
     FooterComponent,
     MyProfileComponent,
     BlogAdditionComponent,
     BlogDetailsComponent,
     LogoutComponent,
     BlogListComponent,
     OrderByPipe,
     OrderByPipe,
     AllUsersComponent,
     BlogUpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
