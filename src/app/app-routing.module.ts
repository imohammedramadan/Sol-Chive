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

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorPageComponent },
  { path: 'search-result/:email', component: SearchResultComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  {
    path: 'add-solution',
    component: AddSolutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'solution/:email/:id', component: SolutionComponent },
  {
    path: 'edit-solution/:email/:id',
    component: SolutionComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
