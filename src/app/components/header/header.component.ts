import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interfaces/user';

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
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private cookieService: CookieService
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
    if (isLoggedIn === 'false' || isLoggedIn === '') this.isLoggedIn = false;
    if (isLoggedIn === 'true') this.isLoggedIn = true;
  }

  getUserData() {
    const isLoggedIn = this.cookieService.get('isLoggedIn');

    if (isLoggedIn === 'true') {
      this.userService.getUserProfileData().subscribe((user) => {
        this.user = user;
      });
    }
  }

  logout() {
    this.authService.logout().subscribe();
    this.router.navigateByUrl('/login');
  }

  setHeaderType() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEmptyHeader = false;
        this.isUserMenuOpen = false;
        if (event.url === '/login') this.isEmptyHeader = true;
      }
    });
  }
}
