import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SolutionService } from 'src/app/services/solution.service';
import { UserService } from 'src/app/services/user.service';

import { Solution } from 'src/app/interfaces/solution';
import { Location } from '@angular/common';
import { UpdateSolution } from 'src/app/interfaces/update-solution';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent implements OnInit {
  isUserSolution: boolean = false;
  isEditMode: boolean = this.router.url.split('/').includes('edit-solution');
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
    private router: Router,
    private location: Location,
    private solutionService: SolutionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getLoggedInUserEmail();
  }

  getLoggedInUserEmail() {
    this.userService.getUserProfileData().subscribe({
      next: (res) => {
        this.LoggedInUserEmail = res.email;
        this.getSolutionData();
      },
      error: (err) => {
        this.getSolutionData();
      },
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

  updateSolution() {
    const updateSolution: UpdateSolution = {
      title: this.solution.title,
      link: this.solution.link,
      mySolution: this.solution.my_solution!,
      perfectSolution: this.solution.perfect_solution,
      tags: this.solution.tags,
    };

    this.solutionService
      .updateUserSolution(this.solution.solution_id, updateSolution)
      .subscribe({
        next: () => alert('success'),
        error: () => alert('failed, try again'),
      });
  }

  deleteSolution(solutionId: number) {
    this.solutionService.deleteUserSolution(solutionId).subscribe(() => {
      this.goBack();
    });
  }

  enableEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  goBack(): void {
    this.location.back();
  }
}
