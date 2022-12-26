import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  isSearchMenuOpen: boolean = false;
  @Input() isUserMenuOpen: boolean = false;
  // @Output() isSearchMenuOpenEvent: EventEmitter<boolean> = new EventEmitter();

  openSearchMenu(): void {
    this.isSearchMenuOpen = !this.isSearchMenuOpen;
  }
}
