//!use moment (date-fns alternative) for date handling in solution & solution-list
//TODO Home Error

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { JwtModule } from '@auth0/angular-jwt';
import { NgIconsModule } from '@ng-icons/core';
import { CookieService } from 'ngx-cookie-service';
// import { JWT_OPTIONS } from '@auth0/angular-jwt';

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

import { AppComponent } from './app.component';

import { AddSolutionComponent } from './pages/add-solution/add-solution.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SolutionComponent } from './pages/solution/solution.component';

import { AddSolutionBtnComponent } from './components/add-solution-btn/add-solution-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NoSolutionsComponent } from './components/no-solutions/no-solutions.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SearchComponent } from './components/search/search.component';
import { SolutionListComponent } from './components/solution-list/solution-list.component';

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
    SearchResultComponent,
    ProfileCardComponent,
    AddSolutionBtnComponent,
    SettingsComponent,
    AddSolutionComponent,
    ProfileComponent,
    SolutionComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
    NgIconsModule.withIcons({
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
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
