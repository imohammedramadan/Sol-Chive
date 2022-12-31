import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isEmptyHeader: boolean = false;
  isLoggedIn: boolean = false;
  mail: string = '';
  user: User = {
    name: '',
    picture: '',
    email: '',
    about: '',
    contacts: '',
    problem_count: 0,
  };
  isUserMenuOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService,
    private cookieService: CookieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getUserAuthStatus();
    this.setHeaderType();
  }

  activateMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  getUserAuthStatus() {
    const isLoggedIn = this.cookieService.get('isLoggedIn');

    if (isLoggedIn === 'true') this.isLoggedIn = true;
    if (isLoggedIn === 'false') this.isLoggedIn = false;
  }

  getUserData() {
    this.userService.getUserProfileData().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

  setHeaderType() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') this.isEmptyHeader = true;
        else this.isEmptyHeader = false;
      }
    });
  }
}
