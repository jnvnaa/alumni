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
import { StoryComponent } from './content/stories/story/story.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component:HomeComponent, canActivate: [authGuard]},
  {path: "sjc", component:EventComponent, canActivate: [authGuard]},
  {path: "stories", component:StoriesComponent, canActivate: [authGuard]},
  {path: "stories/:id", component:StoryComponent, canActivate: [authGuard]},
  {path: "discussions", component:DiscussionsComponent, canActivate: [authGuard]},
  {path: "polls", component:PollsComponent, canActivate: [authGuard]},
  {path: "login", component:LoginComponent},
  {path:"stats", component:StatsComponent, canActivate: [authGuard]},
  {path:"profile/:id", component:ProfileComponent, canActivate: [authGuard]},
  {path:"profile", component:ProfileComponent, canActivate: [authGuard]},
  {path:"updateprofile",component:UpdateprofileComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
