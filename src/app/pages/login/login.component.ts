import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  googleLoginUrl: string = '';
  isSearchError: boolean = false;
  searchEmail: string = '';
  constructor(
    private authenticationService: AuthService,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.googleLogin();
  }
  // this.router.navigateByUrl('/home');
  googleLogin() {
    this.authenticationService.getGoogleLogin().subscribe({
      next: (googleObject) => (this.googleLoginUrl = googleObject.redirectUrl),
      complete: () => {
        if (this.cookieService.get('isLoggedIn') === 'true') {
          this.router.navigateByUrl('/home');
        }
      },
    });
  }

  findUser() {
    this.userService.getAnonUserData(this.searchEmail).subscribe({
      next: (res) =>
        this.router.navigateByUrl(`/search-result/${this.searchEmail}`),
      error: (err) => this.handleErrorDisplay(true),
    });
  }

  handleErrorDisplay(status: boolean) {
    if (status) {
      this.isSearchError = true;
    } else {
      this.isSearchError = false;
    }
  }
}
