import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public getLoggedInName = new Subject<any>();

  constructor(private _http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  onLogin(obj:any) : Observable<any>
  {
      return this._http.post("https://jnvnaa-alumni-service.azurewebsites.net/api/auth",obj,this.httpOptions);
  }

  emit(id:any)
  {
    this.getLoggedInName.next(id);
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("token");
  }
}
