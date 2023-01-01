import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  loggedInUser: any;
  requestFailed: boolean = false;
  requestSucceeded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    // let email: string = this.route.snapshot.paramMap.get('email')!;

    // if (!email) {
    //   // email = this.mail;
    //   email = 'mohammed.ramadan1474@gmail.com';
    // }

    // this.userService.getAnonUserData(email).subscribe((user) => {
    //   this.user = user;
    // });
    this.userService.getUserProfileData().subscribe((data) => {
      this.loggedInUser = data;
    });
  }

  updateProfile(data: any) {
    for (const iterator in data.value) {
      if (data.value[iterator] === null) {
        data.value[iterator] = '';
      }
    }
    this.userService.updateUserSettings(data.value).subscribe(() => {
      this.getUserData();
      this.requestFailed = false;
      this.requestSucceeded = true;
    });
  }

  updateAvatar() {
    this.userService.updateUserAvatar();
  }
}
