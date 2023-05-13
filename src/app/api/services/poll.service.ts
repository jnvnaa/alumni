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

import { Poll } from '../models/poll';

@Injectable({
  providedIn: 'root',
})
export class PollService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPollGet
   */
  static readonly ApiPollGetPath = '/api/Poll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * Path part for operation apiPollPost
   */
  static readonly ApiPollPostPath = '/api/Poll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollPost$Plain$Response(params?: {
    body?: Poll
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Poll>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollPostPath, 'post');
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
        return r as StrictHttpResponse<Poll>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollPost$Plain(params?: {
    body?: Poll
  },
  context?: HttpContext

): Observable<Poll> {

    return this.apiPollPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Poll>) => r.body as Poll)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollPost$Json$Response(params?: {
    body?: Poll
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Poll>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollPostPath, 'post');
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
        return r as StrictHttpResponse<Poll>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollPost$Json(params?: {
    body?: Poll
  },
  context?: HttpContext

): Observable<Poll> {

    return this.apiPollPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Poll>) => r.body as Poll)
    );
  }

  /**
   * Path part for operation apiPollIdGet
   */
  static readonly ApiPollIdGetPath = '/api/Poll/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Poll>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollIdGetPath, 'get');
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
        return r as StrictHttpResponse<Poll>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Poll> {

    return this.apiPollIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Poll>) => r.body as Poll)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Poll>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollIdGetPath, 'get');
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
        return r as StrictHttpResponse<Poll>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Poll> {

    return this.apiPollIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Poll>) => r.body as Poll)
    );
  }

  /**
   * Path part for operation apiPollAlumnusIdGet
   */
  static readonly ApiPollAlumnusIdGetPath = '/api/Poll/alumnus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollAlumnusIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollAlumnusIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollAlumnusIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollAlumnusIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollAlumnusIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollAlumnusIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * Path part for operation apiPollAlumnusIdAllGet
   */
  static readonly ApiPollAlumnusIdAllGetPath = '/api/Poll/alumnus/{id}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollAlumnusIdAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdAllGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollAlumnusIdAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdAllGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollAlumnusIdAllGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollAlumnusIdAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdAllGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Poll>>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Poll>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollAlumnusIdAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollAlumnusIdAllGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Poll>> {

    return this.apiPollAlumnusIdAllGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Poll>>) => r.body as Array<Poll>)
    );
  }

  /**
   * Path part for operation apiPollDisableIdPost
   */
  static readonly ApiPollDisableIdPostPath = '/api/Poll/disable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollDisableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollDisableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollDisableIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollDisableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollDisableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPollDisableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPollEnableIdPost
   */
  static readonly ApiPollEnableIdPostPath = '/api/Poll/enable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollEnableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollEnableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PollService.ApiPollEnableIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollEnableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollEnableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPollEnableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
