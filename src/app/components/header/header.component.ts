import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isEmptyHeader: boolean = false;
  @Input() isLoggedIn: boolean = false;
  @Input() mail: string = '';
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
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  activateMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  getUserData() {
    let email: string = this.route.snapshot.paramMap.get('email')!;
    if (!email) {
      email = this.mail;
    }

    this.userService.getAnonUserData(email).subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}
