import { Component } from '@angular/core';

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
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
