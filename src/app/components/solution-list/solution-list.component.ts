import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { SolutionService } from 'src/app/services/solution.service';
import { UserService } from 'src/app/services/user.service';

import { Solution } from 'src/app/interfaces/solution';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss'],
})
export class SolutionListComponent implements OnInit {
  @Input() solutions: Solution[] = [];
  @Input() userEmail: string = '';

  isSolutionControlsVisible: boolean = false;
  LoggedInUser: User = {
    name: '',
    picture: '',
    email: '',
    about: '',
    contacts: '',
    problem_count: 0,
  };

  constructor(
    private solutionService: SolutionService,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.getLoggedInUserData();
  }

  deleteSolution(solutionId: number) {
    this.solutionService.deleteUserSolution(solutionId).subscribe(() => {
      const solutionIndex = this.solutions.findIndex(
        (solution) => solution.solution_id === solutionId
      );
      this.solutions.splice(solutionIndex, 1);
    });
  }

  getLoggedInUserData() {
    if (this.cookieService.get('isLoggedIn') === 'true') {
      this.userService.getUserProfileData().subscribe((data) => {
        this.LoggedInUser = data;
      });
    }
  }
}
