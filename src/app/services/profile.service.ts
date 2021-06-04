import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CREATE_PROFILE, UPDATE_PROFILE } from 'src/app/endpoints';
import { IUserProfile } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  createProfile = async (data: IUserProfile) => {
    const response = await this.http.post(CREATE_PROFILE, data).toPromise() as IUserProfile;
    return response;
  };

  updateProfile = async (data: IUserProfile) => {
    const response = await this.http.post(UPDATE_PROFILE, data).toPromise() as IUserProfile;
    return response;
  };
}
