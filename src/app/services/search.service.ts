import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SEARCH } from 'src/app/endpoints';
import { ISearchResults } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  search = async (data) => {
    const response = await this.http.post(SEARCH, data).toPromise() as ISearchResults;
    return response;
  };
}
