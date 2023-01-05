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
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.googleLogin();

    if (this.cookieService.get('isLoggedIn') === 'true') {
      this.router.navigateByUrl('/home');
    }
  }

  googleLogin() {
    this.authService.getGoogleLogin().subscribe({
      next: (googleObject) => (this.googleLoginUrl = googleObject.redirectUrl),
    });
  }

  findUser() {
    //for demo purposes START
    if (this.searchEmail === 'mohammed.ramadan1474@gmail.com') {
      this.router.navigateByUrl(`/search-result/${this.searchEmail}`);
      return;
    }
    //for demo purposes END

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
