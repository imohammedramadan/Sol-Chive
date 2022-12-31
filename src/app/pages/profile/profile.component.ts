import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Solution } from '../../interfaces/solution';

import { SolutionService } from './../../services/solution.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  solutions: Solution[] = [];
  userEmail: string = this.route.snapshot.paramMap.get('email')!;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solutionService: SolutionService
  ) {}

  ngOnInit(): void {
    this.getSolutions();
  }

  getSolutions() {
    const email: string = this.route.snapshot.paramMap.get('email')!;
    this.solutionService.getAnonSolutions(email).subscribe((SolutionObject) => {
      this.solutions = SolutionObject.solutions;
    });
  }
}
