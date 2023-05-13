/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SocialInfo } from '../models/social-info';

@Injectable({
  providedIn: 'root',
})
export class SocialInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSocialInfoIdGet
   */
  static readonly ApiSocialInfoIdGetPath = '/api/SocialInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSocialInfoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSocialInfoIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SocialInfo>> {

    const rb = new RequestBuilder(this.rootUrl, SocialInfoService.ApiSocialInfoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SocialInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSocialInfoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSocialInfoIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SocialInfo> {

    return this.apiSocialInfoIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SocialInfo>) => r.body as SocialInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSocialInfoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSocialInfoIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SocialInfo>> {

    const rb = new RequestBuilder(this.rootUrl, SocialInfoService.ApiSocialInfoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SocialInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSocialInfoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSocialInfoIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SocialInfo> {

    return this.apiSocialInfoIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SocialInfo>) => r.body as SocialInfo)
    );
  }

  /**
   * Path part for operation apiSocialInfoPost
   */
  static readonly ApiSocialInfoPostPath = '/api/SocialInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSocialInfoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSocialInfoPost$Plain$Response(params?: {
    body?: SocialInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SocialInfo>> {

    const rb = new RequestBuilder(this.rootUrl, SocialInfoService.ApiSocialInfoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SocialInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSocialInfoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSocialInfoPost$Plain(params?: {
    body?: SocialInfo
  },
  context?: HttpContext

): Observable<SocialInfo> {

    return this.apiSocialInfoPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SocialInfo>) => r.body as SocialInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSocialInfoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSocialInfoPost$Json$Response(params?: {
    body?: SocialInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SocialInfo>> {

    const rb = new RequestBuilder(this.rootUrl, SocialInfoService.ApiSocialInfoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SocialInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSocialInfoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSocialInfoPost$Json(params?: {
    body?: SocialInfo
  },
  context?: HttpContext

): Observable<SocialInfo> {

    return this.apiSocialInfoPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SocialInfo>) => r.body as SocialInfo)
    );
  }

}
