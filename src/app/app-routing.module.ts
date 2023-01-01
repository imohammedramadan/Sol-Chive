import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddSolutionComponent } from './pages/add-solution/add-solution.component';
import { SolutionComponent } from './pages/solution/solution.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'search-result/:email', component: SearchResultComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'add-solution', component: AddSolutionComponent },
  { path: 'solution/:email/:id', component: SolutionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
