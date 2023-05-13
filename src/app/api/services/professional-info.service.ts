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

import { ProfessionalInfo } from '../models/professional-info';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProfessionalInfoIdGet
   */
  static readonly ApiProfessionalInfoIdGetPath = '/api/ProfessionalInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfessionalInfoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfessionalInfoIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfessionalInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ProfessionalInfoService.ApiProfessionalInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<ProfessionalInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfessionalInfoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfessionalInfoIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ProfessionalInfo> {

    return this.apiProfessionalInfoIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfessionalInfo>) => r.body as ProfessionalInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfessionalInfoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfessionalInfoIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfessionalInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ProfessionalInfoService.ApiProfessionalInfoIdGetPath, 'get');
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
        return r as StrictHttpResponse<ProfessionalInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfessionalInfoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfessionalInfoIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ProfessionalInfo> {

    return this.apiProfessionalInfoIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfessionalInfo>) => r.body as ProfessionalInfo)
    );
  }

  /**
   * Path part for operation apiProfessionalInfoPost
   */
  static readonly ApiProfessionalInfoPostPath = '/api/ProfessionalInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfessionalInfoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfessionalInfoPost$Plain$Response(params?: {
    body?: ProfessionalInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfessionalInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ProfessionalInfoService.ApiProfessionalInfoPostPath, 'post');
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
        return r as StrictHttpResponse<ProfessionalInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfessionalInfoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfessionalInfoPost$Plain(params?: {
    body?: ProfessionalInfo
  },
  context?: HttpContext

): Observable<ProfessionalInfo> {

    return this.apiProfessionalInfoPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfessionalInfo>) => r.body as ProfessionalInfo)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfessionalInfoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfessionalInfoPost$Json$Response(params?: {
    body?: ProfessionalInfo
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProfessionalInfo>> {

    const rb = new RequestBuilder(this.rootUrl, ProfessionalInfoService.ApiProfessionalInfoPostPath, 'post');
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
        return r as StrictHttpResponse<ProfessionalInfo>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfessionalInfoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfessionalInfoPost$Json(params?: {
    body?: ProfessionalInfo
  },
  context?: HttpContext

): Observable<ProfessionalInfo> {

    return this.apiProfessionalInfoPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProfessionalInfo>) => r.body as ProfessionalInfo)
    );
  }

}
