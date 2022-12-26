import { Solution } from '../../interfaces/solution';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss'],
})
export class SolutionListComponent {
  @Input() solutions: Solution[] = [];
}
