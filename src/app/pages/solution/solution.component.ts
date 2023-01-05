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
    //for demo purposes START
    if (this.routeUserEmail === 'mohammed.ramadan1474@gmail.com') {
      const solutionArray = [
        {
          solution_id: 307,
          created_on: '2023-01-01T16:46:04.628Z',
          title: 'Caesar Cipher',
          link: 'https://www.theodinproject.com/lessons/node-path-javascript-testing-practice',
          source: 'TheOdinProject',
          tags: ['array'],
          my_solution: `const isAlphabetLetter = (letter) => {
            return letter.match(/[A-Za-z]/);
          };
          //rotates from Z to A or from z to a
          function alphabetRotation(letter) {
            if (letter.charCodeAt(0) === 122) {
              return 97;
            }
            if (letter.charCodeAt(0) === 90) {
              return 65;
            }
          }

          const caesarCipher = (string) => {
            let cipheredString = '';
            for (let index = 0; index < string.length; index++) {
              if (isAlphabetLetter(string[index])) {
                if (string[index] === 'Z' || string[index] === 'z') {
                  cipheredString += String.fromCharCode(alphabetRotation(string[index]));
                }
                cipheredString += String.fromCharCode(string.charCodeAt(index) + 1);
              } else {
                cipheredString += string[index];
              }
            }
            return cipheredString;
          };`,
        },
        {
          solution_id: 306,
          created_on: '2023-01-01T16:46:02.118Z',
          title: 'Analyze Array',
          link: 'https://www.theodinproject.com/lessons/node-path-javascript-testing-practice',
          source: 'TheOdinProject',
          tags: ['array'],
          my_solution: `const isArrayOfNumbers = (array) => {
            if (!Array.isArray(array)) return false;
            if (array.length === 0) return false;

            for (const item of array) {
              if (typeof item != 'number') {
                return false;
              }
            }
            return true;
          };

          const analyzeArray = (array) => {
            if (!isArrayOfNumbers(array)) {
              return 'enter an array of numbers';
            }

            const min = Math.min(...array);
            const max = Math.max(...array);
            const length = array.length;
            const sum = array.reduce((prev, curr) => (prev += curr), 0);
            const average = sum / length;

            return { average: average, min: min, max: max, length: length };
          };`,
        },
        {
          solution_id: 305,
          created_on: '2023-01-01T16:45:59.222Z',
          title: 'Capitalize',
          link: 'https://www.google.com/two-sum',
          source: 'google',
          tags: ['array', 'tree'],
          my_solution: `const capitalize = (string) => {
            if (typeof string !== 'string') {
              return 'enter a valid string';
            }
            const charsRegEx = /[A-Za-z]/;
            for (let index = 0; index < string.length; index++) {
              if (string[index].match(charsRegEx)) {
                return string.replace(string[index], string[index].toUpperCase());
              }
            }
          };`,
        },
      ];

      const solutionIndex = solutionArray.findIndex(
        (solution) => solution.solution_id === parseInt(this.solutionId)
      );
      this.solution = solutionArray[solutionIndex];
      return;
    }
    //for demo purposes END

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
