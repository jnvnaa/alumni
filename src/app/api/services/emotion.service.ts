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

import { Emotion } from '../models/emotion';

@Injectable({
  providedIn: 'root',
})
export class EmotionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEmotionIdGet
   */
  static readonly ApiEmotionIdGetPath = '/api/Emotion/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Emotion>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionIdGetPath, 'get');
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
        return r as StrictHttpResponse<Emotion>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Emotion> {

    return this.apiEmotionIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Emotion>) => r.body as Emotion)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Emotion>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionIdGetPath, 'get');
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
        return r as StrictHttpResponse<Emotion>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Emotion> {

    return this.apiEmotionIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Emotion>) => r.body as Emotion)
    );
  }

  /**
   * Path part for operation apiEmotionIdDelete
   */
  static readonly ApiEmotionIdDeletePath = '/api/Emotion/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiEmotionIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiEmotionIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEmotionAlumnusIdGet
   */
  static readonly ApiEmotionAlumnusIdGetPath = '/api/Emotion/alumnus/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionAlumnusIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionAlumnusIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionAlumnusIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionAlumnusIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionAlumnusIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionAlumnusIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionAlumnusIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionAlumnusIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionAlumnusIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionAlumnusIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionAlumnusIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * Path part for operation apiEmotionStoryIdGet
   */
  static readonly ApiEmotionStoryIdGetPath = '/api/Emotion/story/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionStoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionStoryIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionStoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionStoryIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionStoryIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionStoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionStoryIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionStoryIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionStoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionStoryIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionStoryIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * Path part for operation apiEmotionCommentIdGet
   */
  static readonly ApiEmotionCommentIdGetPath = '/api/Emotion/comment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionCommentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionCommentIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionCommentIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionCommentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionCommentIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionCommentIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionCommentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionCommentIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Emotion>>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionCommentIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<Emotion>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionCommentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmotionCommentIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<Emotion>> {

    return this.apiEmotionCommentIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Emotion>>) => r.body as Array<Emotion>)
    );
  }

  /**
   * Path part for operation apiEmotionPost
   */
  static readonly ApiEmotionPostPath = '/api/Emotion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmotionPost$Plain$Response(params?: {
    body?: Emotion
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Emotion>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionPostPath, 'post');
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
        return r as StrictHttpResponse<Emotion>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmotionPost$Plain(params?: {
    body?: Emotion
  },
  context?: HttpContext

): Observable<Emotion> {

    return this.apiEmotionPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Emotion>) => r.body as Emotion)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmotionPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmotionPost$Json$Response(params?: {
    body?: Emotion
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Emotion>> {

    const rb = new RequestBuilder(this.rootUrl, EmotionService.ApiEmotionPostPath, 'post');
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
        return r as StrictHttpResponse<Emotion>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEmotionPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmotionPost$Json(params?: {
    body?: Emotion
  },
  context?: HttpContext

): Observable<Emotion> {

    return this.apiEmotionPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Emotion>) => r.body as Emotion)
    );
  }

}
