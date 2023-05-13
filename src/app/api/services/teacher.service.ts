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

import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTeacherIdGet
   */
  static readonly ApiTeacherIdGetPath = '/api/Teacher/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeacherIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeacherIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Teacher>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherService.ApiTeacherIdGetPath, 'get');
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
        return r as StrictHttpResponse<Teacher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeacherIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeacherIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Teacher> {

    return this.apiTeacherIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Teacher>) => r.body as Teacher)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeacherIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeacherIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Teacher>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherService.ApiTeacherIdGetPath, 'get');
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
        return r as StrictHttpResponse<Teacher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeacherIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTeacherIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Teacher> {

    return this.apiTeacherIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Teacher>) => r.body as Teacher)
    );
  }

  /**
   * Path part for operation apiTeacherPost
   */
  static readonly ApiTeacherPostPath = '/api/Teacher';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeacherPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTeacherPost$Plain$Response(params?: {
    body?: Teacher
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Teacher>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherService.ApiTeacherPostPath, 'post');
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
        return r as StrictHttpResponse<Teacher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeacherPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTeacherPost$Plain(params?: {
    body?: Teacher
  },
  context?: HttpContext

): Observable<Teacher> {

    return this.apiTeacherPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Teacher>) => r.body as Teacher)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTeacherPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTeacherPost$Json$Response(params?: {
    body?: Teacher
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Teacher>> {

    const rb = new RequestBuilder(this.rootUrl, TeacherService.ApiTeacherPostPath, 'post');
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
        return r as StrictHttpResponse<Teacher>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTeacherPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTeacherPost$Json(params?: {
    body?: Teacher
  },
  context?: HttpContext

): Observable<Teacher> {

    return this.apiTeacherPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Teacher>) => r.body as Teacher)
    );
  }

}
