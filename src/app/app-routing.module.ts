import { UserProfileComponent } from './user-profile/user-profile.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path: 'search', component: UserProfileComponent },
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/search", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
