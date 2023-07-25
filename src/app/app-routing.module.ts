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
import { PhoneregisterComponent } from './alumni/phoneregister/phoneregister.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'alumni',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/alumni/alumni.module').then((m) => m.AlumniModule),
  },  
  { path: '**', redirectTo: '/login',pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
