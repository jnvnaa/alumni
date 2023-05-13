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

import { AlumnusDto } from '../models/alumnus-dto';
import { AlumnusUpdateRequestDto } from '../models/alumnus-update-request-dto';

@Injectable({
  providedIn: 'root',
})
export class AlumniService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAlumniGet
   */
  static readonly ApiAlumniGetPath = '/api/Alumni';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlumnusDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlumnusDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<AlumnusDto>> {

    return this.apiAlumniGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlumnusDto>>) => r.body as Array<AlumnusDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlumnusDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlumnusDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<AlumnusDto>> {

    return this.apiAlumniGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlumnusDto>>) => r.body as Array<AlumnusDto>)
    );
  }

  /**
   * Path part for operation apiAlumniPost
   */
  static readonly ApiAlumniPostPath = '/api/Alumni';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumniPost$Response(params?: {
    body?: AlumnusUpdateRequestDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiAlumniPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumniPost(params?: {
    body?: AlumnusUpdateRequestDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiAlumniPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAlumniIdGet
   */
  static readonly ApiAlumniIdGetPath = '/api/Alumni/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlumnusDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniIdGetPath, 'get');
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
        return r as StrictHttpResponse<AlumnusDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlumnusDto> {

    return this.apiAlumniIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlumnusDto>) => r.body as AlumnusDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlumnusDto>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniIdGetPath, 'get');
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
        return r as StrictHttpResponse<AlumnusDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlumnusDto> {

    return this.apiAlumniIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlumnusDto>) => r.body as AlumnusDto)
    );
  }

  /**
   * Path part for operation apiAlumniBatchBatchGet
   */
  static readonly ApiAlumniBatchBatchGetPath = '/api/Alumni/batch/{batch}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniBatchBatchGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniBatchBatchGet$Plain$Response(params: {
    batch: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlumnusDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniBatchBatchGetPath, 'get');
    if (params) {
      rb.path('batch', params.batch, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlumnusDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniBatchBatchGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniBatchBatchGet$Plain(params: {
    batch: string;
  },
  context?: HttpContext

): Observable<Array<AlumnusDto>> {

    return this.apiAlumniBatchBatchGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlumnusDto>>) => r.body as Array<AlumnusDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumniBatchBatchGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniBatchBatchGet$Json$Response(params: {
    batch: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AlumnusDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AlumniService.ApiAlumniBatchBatchGetPath, 'get');
    if (params) {
      rb.path('batch', params.batch, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AlumnusDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumniBatchBatchGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumniBatchBatchGet$Json(params: {
    batch: string;
  },
  context?: HttpContext

): Observable<Array<AlumnusDto>> {

    return this.apiAlumniBatchBatchGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AlumnusDto>>) => r.body as Array<AlumnusDto>)
    );
  }

}
