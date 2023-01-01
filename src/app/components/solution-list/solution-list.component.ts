import { Solution } from '../../interfaces/solution';
import { Component, Input } from '@angular/core';
import { SolutionService } from 'src/app/services/solution.service';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss'],
})
export class SolutionListComponent {
  @Input() solutions: Solution[] = [];
  @Input() userEmail: string = '';

  constructor(private solutionService: SolutionService) {}

  deleteSolution(solutionId: number) {
    console.table(this.solutions);
    this.solutionService.deleteUserSolution(solutionId).subscribe(() => {
      const solutionIndex = this.solutions.findIndex(
        (solution) => solution.solution_id === solutionId
      );
      this.solutions.splice(solutionIndex, 1);
      console.table(this.solutions);
    });
  }
}
