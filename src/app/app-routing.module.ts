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
import { DiscussionComponent } from './content/discussions/discussion/discussion.component';
import { NoticeComponent } from './home/notice/notice.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "notices/:id", component:NoticeComponent},
  {path: "sjc", component:EventComponent, canActivate: [authGuard]},
  {path: "stories", component:StoriesComponent},
  {path: "stories/:id", component:StoryComponent},
  {path: "discussions", component:DiscussionsComponent},
  {path: "discussions/:id", component:DiscussionComponent},
  {path: "polls", component:PollsComponent, canActivate: [authGuard]},
  {path: "login", component:LoginComponent},
  {path:"stats", component:StatsComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:"profile", component:ProfileComponent, canActivate: [authGuard]},
  {path:"updateprofile",component:UpdateprofileComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
