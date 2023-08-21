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
import { IdentificationComponent } from 'src/app/alumni/identification/identification.component';
import { TeachersComponent } from 'src/app/content/teachers/teachers.component';
import { EventManagementComponent } from 'src/app/content/sjc/pages/event-management/event-management/event-management.component';
import { CulturalComponent } from 'src/app/content/sjc/pages/cultural/cultural/cultural.component';
import { FinanceComponent } from 'src/app/content/sjc/pages/finance/finance/finance.component';
import { LiteraryComponent } from 'src/app/content/sjc/pages/literary/literary/literary.component';
import { ReceptionComponent } from 'src/app/content/sjc/pages/reception/reception/reception.component';
import { FoodCateringComponent } from 'src/app/content/sjc/pages/food-catering/food-catering/food-catering.component';
import { HealthWellnessComponent } from 'src/app/content/sjc/pages/health-wellness/health-wellness/health-wellness.component';
import { TransportAccommodationComponent } from 'src/app/content/sjc/pages/transport_accommodation/transport-accommodation/transport-accommodation.component';
import { SportsComponent } from 'src/app/content/sjc/pages/sports/sports/sports.component';
import { AuditComponent } from 'src/app/content/sjc/pages/audit/audit/audit.component';
import { PlantationComponent } from 'src/app/content/sjc/pages/plantation/plantation/plantation.component';
import { ItComponent } from 'src/app/content/sjc/pages/it/it/it.component';
import { CoreComponent } from 'src/app/content/sjc/pages/core/core/core.component';
import { MediaPublicityComponent } from 'src/app/content/sjc/pages/media-publicity/media-publicity/media-publicity.component';
import { LegalComponent } from 'src/app/content/sjc/pages/legal/legal/legal.component';

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
      {path:"teachers", component:TeachersComponent, canActivate:[nonameGuard]},
      {path:"profile/:id", component:ProfileComponent, canActivate:[nonameGuard]},
      {path:"profile", component:ProfileComponent},
      {path:"updateprofile",component:UpdateprofileComponent},
      {path:"phoneregister",component:PhoneregisterComponent, canActivate:[nonameGuard]},
      {path:"sjc",component:SjcComponent, canActivate:[nonameGuard]},
      {path:"event-management",component:EventManagementComponent, canActivate:[nonameGuard]},
      {path:"cultural",component:CulturalComponent, canActivate:[nonameGuard]},
      {path:"finance",component:FinanceComponent, canActivate:[nonameGuard]},
      {path:"literary",component:LiteraryComponent, canActivate:[nonameGuard]},
      {path:"reception",component:ReceptionComponent, canActivate:[nonameGuard]},
      {path:"food-catering",component:FoodCateringComponent, canActivate:[nonameGuard]},
      {path:"health-wellness",component:HealthWellnessComponent, canActivate:[nonameGuard]},
      {path:"transport-accomodation",component:TransportAccommodationComponent, canActivate:[nonameGuard]},
      {path:"media-publicity",component:MediaPublicityComponent, canActivate:[nonameGuard]},
      {path:"sports",component:SportsComponent, canActivate:[nonameGuard]},
      {path:"audit",component:AuditComponent, canActivate:[nonameGuard]},
      {path:"plantation",component:PlantationComponent, canActivate:[nonameGuard]},
      {path:"legal",component:LegalComponent, canActivate:[nonameGuard]},
      {path:"it",component:ItComponent, canActivate:[nonameGuard]},   
      {path:"core",component:CoreComponent, canActivate:[nonameGuard]},       
      {path:"gallery",component:GalleryComponent, canActivate:[nonameGuard]},
      {path: 'identification', component:IdentificationComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
