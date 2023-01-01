import { Component, OnInit } from '@angular/core';
import { Solution } from 'src/app/interfaces/solution';
import { SolutionService } from 'src/app/services/solution.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  solutions: Solution[] = [];
  userEmail: string = '';

  constructor(
    private solutionService: SolutionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getSolutions();
    this.getLoggedInUserData();
  }

  getSolutions() {
    this.solutionService.getUserSolutions().subscribe((SolutionObject) => {
      this.solutions = SolutionObject.solutions;
    });
  }

  getLoggedInUserData() {
    this.userService.getUserProfileData().subscribe((data) => {
      this.userEmail = data.email;
    });
  }
}
