import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, iif } from 'rxjs';
import { stringify } from 'querystring';



@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'https://localhost:4800'
  authSubject = new BehaviorSubject(false);
  
  private token: string;


  constructor(private httpClient: HttpClient){
    this.token = '';

   }

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
    user).pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          // Guardar token 
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    )
  )
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          // Guardar token 
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    )
  )
  }

  logout(): void { 
    this.token = '';
    localStorage.removeItem("ACESSS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if(!this.token){
      this.token = (localStorage.getItem("ACCESS_TOKEN")|| " { } ");
    }
    return this.token;
  }
}
