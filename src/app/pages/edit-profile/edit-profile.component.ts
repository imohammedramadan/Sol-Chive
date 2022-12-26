import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
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
  }

  getUserData() {
    let email: string = this.route.snapshot.paramMap.get('email')!;

    if (!email) {
      // email = this.mail;
      email = 'mohammed.ramadan1474@gmail.com';
    }

    this.userService.getAnonUserData(email).subscribe((user) => {
      this.user = user;
    });
  }
}
