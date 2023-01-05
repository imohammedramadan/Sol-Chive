import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SolutionService } from 'src/app/services/solution.service';

import { Solution } from 'src/app/interfaces/solution';

@Component({
  selector: 'app-profile',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
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
    //for demo purposes START
    if (email === 'mohammed.ramadan1474@gmail.com') {
      this.solutions = [
        {
          solution_id: 307,
          created_on: '2023-01-01T16:46:04.628Z',
          title: 'Caesar Cipher',
          link: 'https://www.theodinproject.com/lessons/node-path-javascript-testing-practice',
          source: 'TheOdinProject',
          tags: ['array'],
        },
        {
          solution_id: 306,
          created_on: '2023-01-01T16:46:02.118Z',
          title: 'Analyze Array',
          link: 'https://www.theodinproject.com/lessons/node-path-javascript-testing-practice',
          source: 'TheOdinProject',
          tags: ['array'],
        },
        {
          solution_id: 305,
          created_on: '2023-01-01T16:45:59.222Z',
          title: 'Capitalize',
          link: 'https://www.theodinproject.com/lessons/node-path-javascript-testing-practice',
          source: 'TheOdinProject',
          tags: ['array'],
        },
      ];
      return;
    }
    //for demo purposes end
    this.solutionService.getAnonSolutions(email).subscribe((solutionObject) => {
      this.solutions = solutionObject.solutions;
    });
  }
}
