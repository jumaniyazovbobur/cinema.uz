import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonConstant} from "../../common/CommonConstant";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  public login(json: string): Observable<any> {
    let headers = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.post<any>(CommonConstant.URL.concat('auth/login'), json, {headers: headers});
  }
}
