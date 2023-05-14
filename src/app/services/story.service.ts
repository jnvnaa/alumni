import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { AlumniService } from './alumni.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  baseUrl = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private _http:HttpClient, private urls:UrlService) {

    this.baseUrl = urls.getBaseUrl();

  }


  getStories(type:any) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/story/type/" + type);

  }

  getStoryById(id:any) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/story/" + id);

  }

  getAllCommentsByStory(id:any) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/comment/story/" + id);

  }

  updateStory(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/story",obj,this.httpOptions);
  }

  addComment(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/comment",obj,this.httpOptions);
  }

}
