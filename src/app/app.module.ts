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
    GalleryComponent   

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
    LightboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
