/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlumniService } from './services/alumni.service';
import { AlumnusInfoService } from './services/alumnus-info.service';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { EmotionService } from './services/emotion.service';
import { PollService } from './services/poll.service';
import { PollOptionsService } from './services/poll-options.service';
import { PollVoteService } from './services/poll-vote.service';
import { ProfessionalInfoService } from './services/professional-info.service';
import { SocialInfoService } from './services/social-info.service';
import { StoryService } from './services/story.service';
import { TeacherService } from './services/teacher.service';
import { UpcomingEventInfoService } from './services/upcoming-event-info.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlumniService,
    AlumnusInfoService,
    AuthService,
    CommentService,
    EmotionService,
    PollService,
    PollOptionsService,
    PollVoteService,
    ProfessionalInfoService,
    SocialInfoService,
    StoryService,
    TeacherService,
    UpcomingEventInfoService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
