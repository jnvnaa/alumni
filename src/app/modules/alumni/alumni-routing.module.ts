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
import { nonameGuard } from './guard/noname.guard';
import { GalleryComponent } from 'src/app/content/gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: "", redirectTo: "home", pathMatch:"full"},
      {path: "home", component:HomeComponent, canActivate:[nonameGuard]},
      {path: "notices/:id", component:NoticeComponent, canActivate:[nonameGuard]},
      {path: "stories", component:StoriesComponent, canActivate:[nonameGuard]},
      {path: "stories/:id", component:StoryComponent, canActivate:[nonameGuard]},
      {path: "discussions", component:DiscussionsComponent, canActivate:[nonameGuard]},
      {path: "discussions/:id", component:DiscussionComponent, canActivate:[nonameGuard]},
      {path: "polls", component:PollsComponent, canActivate:[nonameGuard]},
      {path:"stats", component:StatsComponent, canActivate:[nonameGuard]},
      {path:"profile/:id", component:ProfileComponent, canActivate:[nonameGuard]},
      {path:"profile", component:ProfileComponent},
      {path:"updateprofile",component:UpdateprofileComponent},
      {path:"phoneregister",component:PhoneregisterComponent, canActivate:[nonameGuard]},
      {path:"sjc",component:SjcComponent, canActivate:[nonameGuard]},
      {path:"gallery",component:GalleryComponent, canActivate:[nonameGuard]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
