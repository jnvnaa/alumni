import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { EventComponent } from './content/event/event.component';
import { DiscussionsComponent } from './content/discussions/discussions.component';
import { StoriesComponent } from './content/stories/stories.component';
import { PollsComponent } from './content/polls/polls.component';
import { StatsComponent } from './content/stats/stats.component';
import { ProfileComponent } from './alumni/profile/profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomInterceptor } from './services/custom.interceptor';

import { DataTablesModule } from "angular-datatables";
import { UpdateprofileComponent } from './alumni/updateprofile/updateprofile.component';
import { DisplayprofileComponent } from './alumni/displayprofile/displayprofile.component';
import { ChangepasswordComponent } from './alumni/changepassword/changepassword.component';
import { HomeComponent } from './content/home/home.component';
import { AddstoryComponent } from './content/stories/addstory/addstory.component';

import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';
import { StoryexcerptComponent } from './content/stories/storyexcerpt/storyexcerpt.component';
import { StoryComponent } from './content/stories/story/story.component';
import { AdddiscussionComponent } from './content/discussions/adddiscussion/adddiscussion.component';
import { DiscussionexcerptComponent } from './content/discussions/discussionexcerpt/discussionexcerpt.component';
import { DiscussionComponent } from './content/discussions/discussion/discussion.component';
import { AddcommentComponent } from './content/discussions/addcomment/addcomment.component';
import { CommentComponent } from './content/discussions/comment/comment.component';
import { NoticeComponent } from './home/notice/notice.component';
import { NoticesComponent } from './home/notices/notices.component';
import { AddnoticeComponent } from './home/addnotice/addnotice.component';
import { NoticeexcerptComponent } from './home/noticeexcerpt/noticeexcerpt.component';
import { OverlayspinnerComponent } from './overlayspinner/overlayspinner.component';
import { PhoneregisterComponent } from './alumni/phoneregister/phoneregister.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { SjcComponent } from './content/sjc/sjc.component';
import { VideoplayerComponent } from './content/videoplayer/videoplayer.component';
import { CommonModule } from '@angular/common';
import { VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ChartComponent } from './content/stats/chart/chart.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { UrlloginComponent } from './auth/urllogin/urllogin.component';
import { CredmessageComponent } from './alumni/credmessage/credmessage.component';
import { CommitteeComponent } from './content/sjc/committee/committee.component';
import { ThemesongComponent } from './content/sjc/themesong/themesong.component';
import { IdentificationComponent } from './alumni/identification/identification.component';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleloginComponent } from './auth/googlelogin/googlelogin.component';
import { TeachersComponent } from './content/teachers/teachers.component';
import { BatchrepresentativesComponent } from './content/sjc/batchrepresentatives/batchrepresentatives/batchrepresentatives.component';
import { EventManagementComponent } from './content/sjc/pages/event-management/event-management/event-management.component';
import { CulturalComponent } from './content/sjc/pages/cultural/cultural/cultural.component';
import { FinanceComponent } from './content/sjc/pages/finance/finance/finance.component';
import { LiteraryComponent } from './content/sjc/pages/literary/literary/literary.component';
import { ReceptionComponent } from './content/sjc/pages/reception/reception/reception.component';
import { FoodCateringComponent } from './content/sjc/pages/food-catering/food-catering/food-catering.component';
import { HealthWellnessComponent } from './content/sjc/pages/health-wellness/health-wellness/health-wellness.component';
import { TransportAccommodationComponent } from './content/sjc/pages/transport_accommodation/transport-accommodation/transport-accommodation.component';
import { SportsComponent } from './content/sjc/pages/sports/sports/sports.component';
import { AuditComponent } from './content/sjc/pages/audit/audit/audit.component';
import { PlantationComponent } from './content/sjc/pages/plantation/plantation/plantation.component';
import { ItComponent } from './content/sjc/pages/it/it/it.component';
import { CoreComponent } from './content/sjc/pages/core/core/core.component';
import { MediaPublicityComponent } from './content/sjc/pages/media-publicity/media-publicity/media-publicity.component';
import { LegalComponent } from './content/sjc/pages/legal/legal/legal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ChangepasswordComponent,
    PasswordresetComponent,
    EventComponent,
    DiscussionsComponent,
    StoriesComponent,
    PollsComponent,
    StatsComponent,
    ProfileComponent,
    UpdateprofileComponent,
    DisplayprofileComponent,
    HomeComponent,
    AddstoryComponent,
    StoryexcerptComponent,
    StoryComponent,
    AdddiscussionComponent,
    DiscussionexcerptComponent,
    DiscussionComponent,
    AddcommentComponent,
    CommentComponent,
    NoticeComponent,
    NoticesComponent,
    AddnoticeComponent,
    NoticeexcerptComponent,
    OverlayspinnerComponent,
    PhoneregisterComponent,
    DashboardComponent,
    SjcComponent,
    VideoplayerComponent,
    ChartComponent,
    GalleryComponent,
    UrlloginComponent,
    CredmessageComponent,
    CommitteeComponent,
    ThemesongComponent,
    IdentificationComponent,
    GoogleloginComponent,
    TeachersComponent,
    BatchrepresentativesComponent,
    EventManagementComponent,
    CulturalComponent,
    FinanceComponent,
    LiteraryComponent,
    ReceptionComponent,
    FoodCateringComponent,
    HealthWellnessComponent,
    TransportAccommodationComponent,
    SportsComponent,
    AuditComponent,
    PlantationComponent,
    ItComponent,
    CoreComponent,
    MediaPublicityComponent,
    LegalComponent   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    QuillModule.forRoot(),
    FormsModule,
    CommonModule, 
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    LightboxModule,
    SocialLoginModule,
    GoogleSigninButtonModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  },

  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '567509210686-rlr4i5s443hrb8oj6e8ignbadgrq09ve.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
