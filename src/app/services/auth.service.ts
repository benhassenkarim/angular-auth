import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
static authEmitter=new EventEmitter<boolean>();
  accessToken = '';

  constructor(private http:HttpClient) { }

  register(body:any){

    return this.http.post(environment.api+'/register',body);
  }
  login(body:any):Observable<any>{

    return this.http.post(environment.api+'/login',body);
  }
  authenticatorLogin(body:any):Observable<any>{

    return this.http.post(environment.api+'/two-factor',body,{withCredentials:true});
  }
  user(){

    return this.http.get(environment.api+'/user');
  }
  refresh(){

    return this.http.post(environment.api+'/refresh',{},{withCredentials:true});
  }
  logout(){

    return this.http.post(environment.api+'/logout',{},{withCredentials:true});
  }
}
