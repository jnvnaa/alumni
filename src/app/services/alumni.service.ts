import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  constructor(private _http:HttpClient) {

  }

  getAllAlumni() : Observable<any>
  {
      return this._http.get("https://jnvnaa-alumni-service.azurewebsites.net/api/alumni");

  }
}
