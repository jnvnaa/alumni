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

import { PollOptions } from '../models/poll-options';

@Injectable({
  providedIn: 'root',
})
export class PollOptionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPollOptionsIdGet
   */
  static readonly ApiPollOptionsIdGetPath = '/api/PollOptions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollOptions>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsIdGetPath, 'get');
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
        return r as StrictHttpResponse<PollOptions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PollOptions> {

    return this.apiPollOptionsIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollOptions>) => r.body as PollOptions)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollOptions>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsIdGetPath, 'get');
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
        return r as StrictHttpResponse<PollOptions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PollOptions> {

    return this.apiPollOptionsIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollOptions>) => r.body as PollOptions)
    );
  }

  /**
   * Path part for operation apiPollOptionsIdDelete
   */
  static readonly ApiPollOptionsIdDeletePath = '/api/PollOptions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPollOptionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPollOptionsIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPollOptionsPollIdGet
   */
  static readonly ApiPollOptionsPollIdGetPath = '/api/PollOptions/poll/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsPollIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsPollIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PollOptions>>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsPollIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<PollOptions>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsPollIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsPollIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<PollOptions>> {

    return this.apiPollOptionsPollIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PollOptions>>) => r.body as Array<PollOptions>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsPollIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsPollIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PollOptions>>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsPollIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<PollOptions>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsPollIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollOptionsPollIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<PollOptions>> {

    return this.apiPollOptionsPollIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PollOptions>>) => r.body as Array<PollOptions>)
    );
  }

  /**
   * Path part for operation apiPollOptionsPost
   */
  static readonly ApiPollOptionsPostPath = '/api/PollOptions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollOptionsPost$Plain$Response(params?: {
    body?: PollOptions
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollOptions>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsPostPath, 'post');
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
        return r as StrictHttpResponse<PollOptions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollOptionsPost$Plain(params?: {
    body?: PollOptions
  },
  context?: HttpContext

): Observable<PollOptions> {

    return this.apiPollOptionsPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollOptions>) => r.body as PollOptions)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollOptionsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollOptionsPost$Json$Response(params?: {
    body?: PollOptions
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollOptions>> {

    const rb = new RequestBuilder(this.rootUrl, PollOptionsService.ApiPollOptionsPostPath, 'post');
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
        return r as StrictHttpResponse<PollOptions>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollOptionsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollOptionsPost$Json(params?: {
    body?: PollOptions
  },
  context?: HttpContext

): Observable<PollOptions> {

    return this.apiPollOptionsPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollOptions>) => r.body as PollOptions)
    );
  }

}
