import { Component } from '@angular/core';
import { AddSolution } from 'src/app/interfaces/add-solution';
import { SolutionService } from 'src/app/services/solution.service';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.scss'],
})
export class AddSolutionComponent {
  newSolution: any = {
    title: 'title',
    link: 'https://www.google.com/two-sum',
    mySolution: 'testM',
    perfectSolution: 'testP',
    tags: 'array,tree',
  };
  constructor(private solutionService: SolutionService) {}

  addSolution() {
    if (this.newSolution.tags.includes(',')) {
      this.newSolution.tags = this.newSolution.tags.split(',');
    } else {
      this.newSolution.tags = [this.newSolution.tags];
    }

    this.solutionService.addUserSolution(this.newSolution).subscribe((data) => {
      this.newSolution = {
        title: null,
        link: null,
        mySolution: null,
        perfectSolution: null,
        tags: null,
      };
    });
  }
}
