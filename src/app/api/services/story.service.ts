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

import { Story } from '../models/story';

@Injectable({
  providedIn: 'root',
})
export class StoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiStoryTypeTypeGet
   */
  static readonly ApiStoryTypeTypeGetPath = '/api/Story/type/{type}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryTypeTypeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryTypeTypeGet$Plain$Response(params: {
    type: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryTypeTypeGetPath, 'get');
    if (params) {
      rb.path('type', params.type, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryTypeTypeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryTypeTypeGet$Plain(params: {
    type: string;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryTypeTypeGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryTypeTypeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryTypeTypeGet$Json$Response(params: {
    type: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryTypeTypeGetPath, 'get');
    if (params) {
      rb.path('type', params.type, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryTypeTypeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryTypeTypeGet$Json(params: {
    type: string;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryTypeTypeGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * Path part for operation apiStoryIdGet
   */
  static readonly ApiStoryIdGetPath = '/api/Story/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Story>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Story>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Story> {

    return this.apiStoryIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Story>) => r.body as Story)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Story>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Story>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Story> {

    return this.apiStoryIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Story>) => r.body as Story)
    );
  }

  /**
   * Path part for operation apiStoryAlumnusIdGet
   */
  static readonly ApiStoryAlumnusIdGetPath = '/api/Story/alumnus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryAlumnusIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryAlumnusIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryAlumnusIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryAlumnusIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryAlumnusIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryAlumnusIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * Path part for operation apiStoryAlumnusIdAllGet
   */
  static readonly ApiStoryAlumnusIdAllGetPath = '/api/Story/alumnus/{id}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryAlumnusIdAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdAllGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryAlumnusIdAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdAllGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryAlumnusIdAllGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryAlumnusIdAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdAllGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Story>>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryAlumnusIdAllGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Story>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryAlumnusIdAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryAlumnusIdAllGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Story>> {

    return this.apiStoryAlumnusIdAllGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Story>>) => r.body as Array<Story>)
    );
  }

  /**
   * Path part for operation apiStoryPost
   */
  static readonly ApiStoryPostPath = '/api/Story';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoryPost$Plain$Response(params?: {
    body?: Story
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Story>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryPostPath, 'post');
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
        return r as StrictHttpResponse<Story>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoryPost$Plain(params?: {
    body?: Story
  },
  context?: HttpContext

): Observable<Story> {

    return this.apiStoryPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Story>) => r.body as Story)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoryPost$Json$Response(params?: {
    body?: Story
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Story>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryPostPath, 'post');
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
        return r as StrictHttpResponse<Story>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStoryPost$Json(params?: {
    body?: Story
  },
  context?: HttpContext

): Observable<Story> {

    return this.apiStoryPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Story>) => r.body as Story)
    );
  }

  /**
   * Path part for operation apiStoryDisableIdPost
   */
  static readonly ApiStoryDisableIdPostPath = '/api/Story/disable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryDisableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryDisableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryDisableIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStoryDisableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryDisableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiStoryDisableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiStoryEnableIdPost
   */
  static readonly ApiStoryEnableIdPostPath = '/api/Story/enable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStoryEnableIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryEnableIdPost$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StoryService.ApiStoryEnableIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiStoryEnableIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStoryEnableIdPost(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiStoryEnableIdPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
