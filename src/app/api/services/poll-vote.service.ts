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

import { PollVote } from '../models/poll-vote';

@Injectable({
  providedIn: 'root',
})
export class PollVoteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPollVoteIdGet
   */
  static readonly ApiPollVoteIdGetPath = '/api/PollVote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVoteIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollVote>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVoteIdGetPath, 'get');
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
        return r as StrictHttpResponse<PollVote>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVoteIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PollVote> {

    return this.apiPollVoteIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollVote>) => r.body as PollVote)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVoteIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollVote>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVoteIdGetPath, 'get');
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
        return r as StrictHttpResponse<PollVote>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVoteIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PollVote> {

    return this.apiPollVoteIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollVote>) => r.body as PollVote)
    );
  }

  /**
   * Path part for operation apiPollVoteIdDelete
   */
  static readonly ApiPollVoteIdDeletePath = '/api/PollVote/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVoteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVoteIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPollVoteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVoteIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPollVoteIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPollVotePolloptionIdGet
   */
  static readonly ApiPollVotePolloptionIdGetPath = '/api/PollVote/polloption/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVotePolloptionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVotePolloptionIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PollVote>>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVotePolloptionIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<PollVote>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVotePolloptionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVotePolloptionIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<PollVote>> {

    return this.apiPollVotePolloptionIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PollVote>>) => r.body as Array<PollVote>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVotePolloptionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVotePolloptionIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PollVote>>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVotePolloptionIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<PollVote>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVotePolloptionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPollVotePolloptionIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<PollVote>> {

    return this.apiPollVotePolloptionIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PollVote>>) => r.body as Array<PollVote>)
    );
  }

  /**
   * Path part for operation apiPollVotePost
   */
  static readonly ApiPollVotePostPath = '/api/PollVote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVotePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollVotePost$Plain$Response(params?: {
    body?: PollVote
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollVote>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVotePostPath, 'post');
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
        return r as StrictHttpResponse<PollVote>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVotePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollVotePost$Plain(params?: {
    body?: PollVote
  },
  context?: HttpContext

): Observable<PollVote> {

    return this.apiPollVotePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollVote>) => r.body as PollVote)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPollVotePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollVotePost$Json$Response(params?: {
    body?: PollVote
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PollVote>> {

    const rb = new RequestBuilder(this.rootUrl, PollVoteService.ApiPollVotePostPath, 'post');
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
        return r as StrictHttpResponse<PollVote>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPollVotePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPollVotePost$Json(params?: {
    body?: PollVote
  },
  context?: HttpContext

): Observable<PollVote> {

    return this.apiPollVotePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PollVote>) => r.body as PollVote)
    );
  }

}
