import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Solution } from 'src/app/interfaces/solution';
import { SolutionService } from 'src/app/services/solution.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent implements OnInit {
  isUserSolution: boolean = false;
  isEditMode: boolean = false;
  LoggedInUserEmail: string = '';

  solution: Solution = {
    solution_id: 0,
    created_on: '',
    title: '',
    link: '',
    source: '',
    tags: [''],
    my_solution: '',
    perfect_solution: '',
  };

  solutionId: string = this.route.snapshot.paramMap.get('id')!;
  routeUserEmail: string = this.route.snapshot.paramMap.get('email')!;

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getLoggedInUserEmail();
  }

  getLoggedInUserEmail() {
    this.userService.getUserProfileData().subscribe((res) => {
      this.LoggedInUserEmail = res.email;
      this.getSolutionData();
    });
  }

  getSolutionData() {
    if (this.LoggedInUserEmail === this.routeUserEmail) {
      this.getUserSolutionData();
      this.isUserSolution = true;
      return;
    }

    if (this.LoggedInUserEmail !== this.routeUserEmail) {
      this.getAnonSolutionData();
      this.isUserSolution = false;
      return;
    }
  }

  getUserSolutionData() {
    this.solutionService
      .getOneUserSolution(this.solutionId)
      .subscribe((res) => {
        this.solution = res;
      });
  }

  getAnonSolutionData() {
    this.solutionService
      .getOneAnonSolution(this.solutionId)
      .subscribe((res) => {
        this.solution = res;
      });
  }

  updateSolution() {}

  enableEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
