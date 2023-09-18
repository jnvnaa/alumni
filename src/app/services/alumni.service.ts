import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnusDto, AlumnusInfo } from '../api/models';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {

  baseUrl = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private _http:HttpClient, private urls:UrlService) {

    this.baseUrl = urls.getBaseUrl();

  }

  getAllAlumni() : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni");

  }

  getAllAlumniExtra() : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/extra");

  }

  getAllGf() : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/gf");

  }

  getGfByPhone(phone:string) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/gf/" + phone);

  }

  getAlumniStats() : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/stats");

  }

  updateAlumni(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/alumni",obj,this.httpOptions);

  }

  updateAlumniInfo(obj:any) : Observable<any>
  {
    var formData = new FormData();
    formData.append("image",obj.image);
    formData.append("alumnusId",obj.alumnusId);
    formData.append("aboutMe",obj.aboutMe);
    formData.append("address",obj.address);
    formData.append("houseInJNV",obj.houseInJNV);
      return this._http.post(this.baseUrl + "api/alumnusinfo",formData);

  }

  updateProfessionalInfo(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/professionalinfo",obj,this.httpOptions);

  }

  updateSocialInfo(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/socialinfo",obj,this.httpOptions);

  }

  getAlumniInfo(id: number) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumnusinfo/" + id);

  }

  getProfessionalInfo(id: number) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/professionalinfo/" + id);

  }

  getSocialInfo(id: number) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/socialinfo/" + id);

  }

  getQr(id: number) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/qr/" + id);
  }

  getAlumniById(id: number) : Observable<any>
  {
      return this._http.get(this.baseUrl + "api/alumni/" + id);
  }

  updatePassword(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/auth/change-password",obj,this.httpOptions);

  }

  sendCred(id:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/alumni/creds/" + id,null);
  }

  getCredMessage(id:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/alumni/cred-message/" + id,this.httpOptions);
  }

  disable(id:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/alumni/disable/" + id,null);
  }

  registerPhone(obj:any) : Observable<any>
  {
      return this._http.post(this.baseUrl + "api/alumni/phone-registration",obj,this.httpOptions);
  }
}
