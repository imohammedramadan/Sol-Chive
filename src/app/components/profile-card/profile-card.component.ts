import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() isLoggedIn: boolean = false;
  @Input() userEmail: string = '';

  user: User = {
    name: '',
    picture: '',
    email: '',
    about: '',
    contacts: '',
    problem_count: 0,
  };
  contactsArray: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const email: string = this.route.snapshot.paramMap.get('email')!;
    //for demo purposes START
    if (email === 'mohammed.ramadan1474@gmail.com') {
      this.user = {
        name: 'Mohammed Ramadan',
        picture: '../../../assets/mohammed-ramadan.jpg',
        email: 'mohammed.ramadan1474@gmail.com',
        about:
          'I am a frontend software engineer that loves JavaScript and gets mildly infuriated by CSS',
        contacts: 'mohammed.ramadan1474@gmail.com 0123456789',
        problem_count: 3,
      };
      this.contactsArray = this.user.contacts.split(' ');
      return;
    }
    //for demo purposes END
    if (!email) {
      this.userService.getUserProfileData().subscribe((data) => {
        this.user = data;
        this.contactsArray = this.user.contacts.split(' ');
      });
    } else {
      this.userService.getAnonUserData(email).subscribe((user) => {
        this.user = user;
        this.contactsArray = this.user.contacts.split(' ');
      });
    }
  }
}
