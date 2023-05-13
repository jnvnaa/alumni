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

import { UpcomingEventInfo } from '../models/upcoming-event-info';

@Injectable({
  providedIn: 'root',
})
export class UpcomingEventInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUpcomingEventInfoIdGet
   */
  static readonly ApiUpcomingEventInfoIdGetPath = '/api/UpcomingEventInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUpcomingEventInfoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUpcomingEventInfoIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UpcomingEventInfo>> {

    const rb = new RequestBuilder(this.rootUrl, UpcomingEventInfoService.ApiUpcomingEventInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<UpcomingEventInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUpcomingEventInfoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUpcomingEventInfoIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<UpcomingEventInfo> {

    return this.apiUpcomingEventInfoIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<UpcomingEventInfo>) => r.body as UpcomingEventInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUpcomingEventInfoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUpcomingEventInfoIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UpcomingEventInfo>> {

    const rb = new RequestBuilder(this.rootUrl, UpcomingEventInfoService.ApiUpcomingEventInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<UpcomingEventInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUpcomingEventInfoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUpcomingEventInfoIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<UpcomingEventInfo> {

    return this.apiUpcomingEventInfoIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<UpcomingEventInfo>) => r.body as UpcomingEventInfo)
    );
  }

  /**
   * Path part for operation apiUpcomingEventInfoPost
   */
  static readonly ApiUpcomingEventInfoPostPath = '/api/UpcomingEventInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUpcomingEventInfoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUpcomingEventInfoPost$Plain$Response(params?: {
    body?: UpcomingEventInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UpcomingEventInfo>> {

    const rb = new RequestBuilder(this.rootUrl, UpcomingEventInfoService.ApiUpcomingEventInfoPostPath, 'post');
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
        return r as StrictHttpResponse<UpcomingEventInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUpcomingEventInfoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUpcomingEventInfoPost$Plain(params?: {
    body?: UpcomingEventInfo
  },
  context?: HttpContext

): Observable<UpcomingEventInfo> {

    return this.apiUpcomingEventInfoPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<UpcomingEventInfo>) => r.body as UpcomingEventInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUpcomingEventInfoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUpcomingEventInfoPost$Json$Response(params?: {
    body?: UpcomingEventInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UpcomingEventInfo>> {

    const rb = new RequestBuilder(this.rootUrl, UpcomingEventInfoService.ApiUpcomingEventInfoPostPath, 'post');
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
        return r as StrictHttpResponse<UpcomingEventInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUpcomingEventInfoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUpcomingEventInfoPost$Json(params?: {
    body?: UpcomingEventInfo
  },
  context?: HttpContext

): Observable<UpcomingEventInfo> {

    return this.apiUpcomingEventInfoPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<UpcomingEventInfo>) => r.body as UpcomingEventInfo)
    );
  }

}
