import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private AuthenticationService: AuthenticationService,

    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.googleLogin();
    // this.findUser('mohammed.ramadan1474@gmail.com');
    // 'madrasy101s@gmail.com'
    // this.findUser();
  }

  googleLogin() {
    this.AuthenticationService.getGoogleLogin().subscribe((googleObject) => {
      this.googleLoginUrl = googleObject.redirectUrl;
    });
  }

  findUser() {
    this.userService.getAnonUserData(this.searchEmail).subscribe({
      next: (res) => this.router.navigateByUrl(`/profile/${this.searchEmail}`),
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
