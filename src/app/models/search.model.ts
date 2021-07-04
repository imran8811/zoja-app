export interface IPageData {
  gender: string;
  fullName: string;
  age: number;
  education: string;
  status: string;
  profession: string;
  cast: string;
  maslak: string;
  feet: number;
  inch: number;
}
export class PageData implements IPageData {
  gender = '';
  fullName = '';
  age = 0;
  education = '';
  status = '';
  profession = '';
  cast = '';
  maslak = '';
  feet = 0;
  inch = 0;
}
export interface ISearchResults {
  pageSize: number;
  total: number;
  data: IPageData[];
}

export class SearchResults implements ISearchResults {
  pageSize = 0;
  total = 0;
  data = [];
}
