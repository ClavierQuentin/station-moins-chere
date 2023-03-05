import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class DataGouvService {

  private _baseUrl = baseUrl;

  public getCityList$(department:string):Observable<any>{
    let url = this._baseUrl + `&refine.dep_name=${department}&rows=10000`;
    return this._http.get<any>(url);
  }

  constructor(private _http:HttpClient) { }
}
