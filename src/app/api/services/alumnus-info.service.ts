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

import { AlumnusInfo } from '../models/alumnus-info';

@Injectable({
  providedIn: 'root',
})
export class AlumnusInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAlumnusInfoIdGet
   */
  static readonly ApiAlumnusInfoIdGetPath = '/api/AlumnusInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumnusInfoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumnusInfoIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlumnusInfo>> {

    const rb = new RequestBuilder(this.rootUrl, AlumnusInfoService.ApiAlumnusInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<AlumnusInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumnusInfoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumnusInfoIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlumnusInfo> {

    return this.apiAlumnusInfoIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlumnusInfo>) => r.body as AlumnusInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumnusInfoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumnusInfoIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlumnusInfo>> {

    const rb = new RequestBuilder(this.rootUrl, AlumnusInfoService.ApiAlumnusInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<AlumnusInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumnusInfoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlumnusInfoIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<AlumnusInfo> {

    return this.apiAlumnusInfoIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlumnusInfo>) => r.body as AlumnusInfo)
    );
  }

  /**
   * Path part for operation apiAlumnusInfoPost
   */
  static readonly ApiAlumnusInfoPostPath = '/api/AlumnusInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumnusInfoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumnusInfoPost$Plain$Response(params?: {
    body?: AlumnusInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AlumnusInfo>> {

    const rb = new RequestBuilder(this.rootUrl, AlumnusInfoService.ApiAlumnusInfoPostPath, 'post');
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
        return r as StrictHttpResponse<AlumnusInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumnusInfoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumnusInfoPost$Plain(params?: {
    body?: AlumnusInfo
  },
  context?: HttpContext

): Observable<AlumnusInfo> {

    return this.apiAlumnusInfoPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AlumnusInfo>) => r.body as AlumnusInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlumnusInfoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumnusInfoPost$Json$Response(params?:AlumnusInfo
): Observable<StrictHttpResponse<AlumnusInfo>> {

    const rb = new RequestBuilder(this.rootUrl, AlumnusInfoService.ApiAlumnusInfoPostPath, 'post');
    if (params) {
      rb.body(params, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AlumnusInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlumnusInfoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlumnusInfoPost$Json(params?: AlumnusInfo

): Observable<AlumnusInfo> {

    return this.apiAlumnusInfoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AlumnusInfo>) => r.body as AlumnusInfo)
    );
  }

}
