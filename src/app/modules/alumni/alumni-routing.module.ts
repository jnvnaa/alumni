import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneregisterComponent } from 'src/app/alumni/phoneregister/phoneregister.component';
import { ProfileComponent } from 'src/app/alumni/profile/profile.component';
import { UpdateprofileComponent } from 'src/app/alumni/updateprofile/updateprofile.component';
import { DashboardComponent } from 'src/app/content/dashboard/dashboard.component';
import { DiscussionComponent } from 'src/app/content/discussions/discussion/discussion.component';
import { DiscussionsComponent } from 'src/app/content/discussions/discussions.component';
import { HomeComponent } from 'src/app/content/home/home.component';
import { PollsComponent } from 'src/app/content/polls/polls.component';
import { SjcComponent } from 'src/app/content/sjc/sjc.component';
import { StatsComponent } from 'src/app/content/stats/stats.component';
import { StoriesComponent } from 'src/app/content/stories/stories.component';
import { StoryComponent } from 'src/app/content/stories/story/story.component';
import { NoticeComponent } from 'src/app/home/notice/notice.component';
import { authGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch:"full"},
      {path: "home", component:HomeComponent},
      {path: "notices/:id", component:NoticeComponent},
      {path: "stories", component:StoriesComponent},
      {path: "stories/:id", component:StoryComponent},
      {path: "discussions", component:DiscussionsComponent},
      {path: "discussions/:id", component:DiscussionComponent},
      {path: "polls", component:PollsComponent},
      {path:"stats", component:StatsComponent},
      {path:"profile/:id", component:ProfileComponent},
      {path:"profile", component:ProfileComponent},
      {path:"updateprofile",component:UpdateprofileComponent},
      {path:"phoneregister",component:PhoneregisterComponent},
      {path:"sjc",component:SjcComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
