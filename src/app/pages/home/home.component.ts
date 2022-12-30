import { Solution } from '../../interfaces/solution';
import { SolutionService } from './../../services/solution.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

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
