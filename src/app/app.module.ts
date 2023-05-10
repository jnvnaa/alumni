import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { ChangepasswordComponent } from './auth/changepassword/changepassword.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { EventComponent } from './content/event/event.component';
import { DiscussionsComponent } from './content/discussions/discussions.component';
import { StoriesComponent } from './content/stories/stories.component';
import { PollsComponent } from './content/polls/polls.component';
import { StatsComponent } from './content/stats/stats.component';
import { ProfileComponent } from './alumni/profile/profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomInterceptor } from './services/custom.interceptor';

import { DataTablesModule } from "angular-datatables"

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
