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

import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCommentIdGet
   */
  static readonly ApiCommentIdGetPath = '/api/Comment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Comment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentIdGetPath, 'get');
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
        return r as StrictHttpResponse<Comment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Comment> {

    return this.apiCommentIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Comment>) => r.body as Comment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Comment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentIdGetPath, 'get');
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
        return r as StrictHttpResponse<Comment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Comment> {

    return this.apiCommentIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Comment>) => r.body as Comment)
    );
  }

  /**
   * Path part for operation apiCommentAlumnusIdGet
   */
  static readonly ApiCommentAlumnusIdGetPath = '/api/Comment/alumnus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAlumnusIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentAlumnusIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentAlumnusIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAlumnusIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentAlumnusIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentAlumnusIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * Path part for operation apiCommentStoryIdGet
   */
  static readonly ApiCommentStoryIdGetPath = '/api/Comment/story/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentStoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentStoryIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentStoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentStoryIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentStoryIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentStoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentStoryIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentStoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentStoryIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentStoryIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * Path part for operation apiCommentAlumnusIdAllGet
   */
  static readonly ApiCommentAlumnusIdAllGetPath = '/api/Comment/alumnus/{id}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAlumnusIdAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdAllGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentAlumnusIdAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdAllGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentAlumnusIdAllGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAlumnusIdAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdAllGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Comment>>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Comment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentAlumnusIdAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentAlumnusIdAllGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Comment>> {

    return this.apiCommentAlumnusIdAllGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Comment>>) => r.body as Array<Comment>)
    );
  }

  /**
   * Path part for operation apiCommentPost
   */
  static readonly ApiCommentPostPath = '/api/Comment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentPost$Plain$Response(params?: {
    body?: Comment
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Comment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentPostPath, 'post');
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
        return r as StrictHttpResponse<Comment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentPost$Plain(params?: {
    body?: Comment
  },
  context?: HttpContext

): Observable<Comment> {

    return this.apiCommentPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Comment>) => r.body as Comment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentPost$Json$Response(params?: {
    body?: Comment
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Comment>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentPostPath, 'post');
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
        return r as StrictHttpResponse<Comment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCommentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentPost$Json(params?: {
    body?: Comment
  },
  context?: HttpContext

): Observable<Comment> {

    return this.apiCommentPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Comment>) => r.body as Comment)
    );
  }

  /**
   * Path part for operation apiCommentEnableIdPost
   */
  static readonly ApiCommentEnableIdPostPath = '/api/Comment/enable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentEnableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentEnableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentEnableIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCommentEnableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentEnableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCommentEnableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCommentDisableIdPost
   */
  static readonly ApiCommentDisableIdPostPath = '/api/Comment/disable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentDisableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentDisableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentDisableIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCommentDisableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCommentDisableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCommentDisableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
