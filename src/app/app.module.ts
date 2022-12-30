//!use moment (date-fns alternative) for date handling in solution & solution-list
//TODO Search Result(no result) (rename profile to search result and my profile to profile)
//TODO Home Empty
//TODO View Solution
//TODO Home Error

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';

import {
  featherCheckCircle,
  featherChevronDown,
  featherChevronUp,
  featherChrome,
  featherCopy,
  featherEdit,
  featherExternalLink,
  featherFacebook,
  featherGithub,
  featherHome,
  featherLogOut,
  featherMenu,
  featherPlusCircle,
  featherRefreshCcw,
  featherSearch,
  featherTrash,
  featherTwitter,
  featherXCircle,
} from '@ng-icons/feather-icons';

import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AddSolutionBtnComponent } from './components/add-solution-btn/add-solution-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NoSolutionsComponent } from './components/no-solutions/no-solutions.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SearchComponent } from './components/search/search.component';
import { SolutionListComponent } from './components/solution-list/solution-list.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SolutionListComponent,
    NoSolutionsComponent,
    ErrorPageComponent,
    ProfileComponent,
    ProfileCardComponent,
    AddSolutionBtnComponent,
    EditProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({
      featherHome,
      featherLogOut,
      featherSearch,
      featherExternalLink,
      featherCopy,
      featherEdit,
      featherChevronDown,
      featherChevronUp,
      featherCheckCircle,
      featherXCircle,
      featherRefreshCcw,
      featherPlusCircle,
      featherGithub,
      featherFacebook,
      featherTwitter,
      featherChrome,
      featherTrash,
      featherMenu,
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
