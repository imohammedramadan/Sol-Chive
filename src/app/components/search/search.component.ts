import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() isUserMenuOpen: boolean = false;

  isSearchMenuOpen: boolean = false;
  isSearchError: boolean = false;
  searchEmail: string = '';
  LoggedInUserEmail: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  openSearchMenu(): void {
    this.isSearchMenuOpen = !this.isSearchMenuOpen;
  }

  getLoggedInUserEmail() {}

  findUser() {
    //get logged in user email if its empty
    if (this.LoggedInUserEmail === '') {
      if (this.cookieService.get('isLoggedIn') === 'true') {
        this.userService.getUserProfileData().subscribe((res) => {
          this.LoggedInUserEmail = res.email;
          this.findUser();
        });
      }
    } else {
      //check if logged in user is searching for himself/herself
      if (this.LoggedInUserEmail === this.searchEmail) {
        //if user is searching for himself/herself route to his/her profile
        this.router.navigateByUrl('/my-profile');
      } else {
        //if user not searching for himself/herself route to searched profile
        this.userService.getAnonUserData(this.searchEmail).subscribe({
          next: (res) => {
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([`/profile/${this.searchEmail}`]);
              });
          },
          error: (err) => this.handleErrorDisplay(true),
        });
      }
    }
  }

  handleErrorDisplay(status: boolean) {
    if (status) {
      this.isSearchError = true;
    } else {
      this.isSearchError = false;
    }
  }
}
