import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./user";
import {LoginRequest} from "./login-request";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURLLogin:string = 'http://localhost:8080/users/login'
  private apiURLRegister:string = 'http://localhost:8080/users/create'

  constructor(private http : HttpClient) { }

  public registerUser(userData : User){
    return this.http.post<User>(this.apiURLRegister,userData)
  }

  public loginUser (userData : LoginRequest){
    return this.http.post<boolean>(this.apiURLLogin, userData)
  }

}
