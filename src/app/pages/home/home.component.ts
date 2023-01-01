import { Component, OnInit } from '@angular/core';

import { SolutionService } from 'src/app/services/solution.service';
import { UserService } from 'src/app/services/user.service';

import { Solution } from 'src/app/interfaces/solution';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User = {
    name: '',
    picture: '',
    email: '',
    about: '',
    contacts: '',
    problem_count: 0,
  };

  test: string = '';
  solutions: Solution[] = [];

  constructor(
    private userService: UserService,
    private solutionService: SolutionService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getSolutions();
  }

  getUserData() {
    this.userService.getUserProfileData().subscribe((user) => {
      this.user = user;
    });
  }

  getSolutions() {
    this.solutionService.getUserSolutions().subscribe((solutionObject) => {
      this.solutions = solutionObject.solutions;
    });
  }
}
