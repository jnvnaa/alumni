import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  baseUrl = "http://localhost:5024/";

  //baseUrl = "https://jnvnaa-alumni-service.azurewebsites.net/";

  getBaseUrl()
  {
    return this.baseUrl;

  }
}
