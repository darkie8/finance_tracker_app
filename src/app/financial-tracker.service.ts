import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/toPromise';
import { Cookie } from '../../node_modules/ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class FinancialTrackerService {


  private url = 'http://35.198.199.255:8080';
  constructor(private http: HttpClient) { }

  /**
   * login
  */
  public login(body): Observable<any> {
    return this.http.post(`${this.url}/getlogintoken.json`, body);
  }

  /**
   * getdashboardInfo
  */
  public getdashboardInfo(token): Observable<any> {
    return this.http.get(`${this.url}/user/dashboard.json`, { headers: { 'Authorization' : token , 'Content-Type' : 'application/json'} });
  }
}
