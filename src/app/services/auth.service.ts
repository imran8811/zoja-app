import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USER_SIGNUP, USER_LOGIN } from 'src/app/endpoints';
import { IApiResponse, IUserLogin } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp = async (data) => {
    const response = await this.http.post(USER_SIGNUP, data).toPromise() as IApiResponse;
    return response;
  };

  login = async (data: IUserLogin) => {
    const response = await this.http.post(USER_LOGIN, data).toPromise() as IUserLogin;
    return response;
  };
}
