import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './content/event/event.component';
import { StoriesComponent } from './content/stories/stories.component';
import { DiscussionsComponent } from './content/discussions/discussions.component';
import { PollsComponent } from './content/polls/polls.component';
import { LoginComponent } from './auth/login/login.component';
import { StatsComponent } from './content/stats/stats.component';
import { authGuard } from './services/auth.guard';
import { ProfileComponent } from './alumni/profile/profile.component';
import { UpdateprofileComponent } from './alumni/updateprofile/updateprofile.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "sjc", component:EventComponent},
  {path: "stories", component:StoriesComponent},
  {path: "discussions", component:DiscussionsComponent},
  {path: "polls", component:PollsComponent},
  {path: "login", component:LoginComponent},
  {path:"stats", component:StatsComponent, canActivate: [authGuard]},
  {path:"profile/:id", component:ProfileComponent, canActivate: [authGuard]},
  {path:"profile", component:ProfileComponent, canActivate: [authGuard]},
  {path:"updateprofile",component:UpdateprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
