import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  googleLoginUrl: string = '';

  constructor(private AuthenticationService: AuthenticationService) {}
  ngOnInit(): void {
    this.googleLogin();
  }

  googleLogin() {
    this.AuthenticationService.getGoogleLogin().subscribe((googleObject) => {
      this.googleLoginUrl = googleObject.redirectUrl;
      console.log(this.googleLoginUrl);
    });
  }
}
