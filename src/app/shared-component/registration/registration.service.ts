import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommonConstant} from "../../common/CommonConstant";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  public registration(json: string): Observable<any> {
    let headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.post<any>(CommonConstant.URL.concat('auth/registration'), json, {headers: headers});
  }
}
