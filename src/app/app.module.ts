//!use moment (date-fns alternative) for date handling in solution & solution-list

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

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
