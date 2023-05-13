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
import { StoryComponent } from './content/stories/story/story.component'

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
    StoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
