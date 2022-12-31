import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

import { UserService } from 'src/app/services/user.service';

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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    console.log(this.userEmail);
  }

  getUserData() {
    const email: string = this.route.snapshot.paramMap.get('email')!;

    if (!email) {
      this.userService.getUserProfileData().subscribe((data) => {
        this.user = data;
      });
    } else {
      this.userService.getAnonUserData(email).subscribe((user) => {
        this.user = user;
      });
    }
  }
}
