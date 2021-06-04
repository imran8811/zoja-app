export interface IApiResponse {
  message: string;
  type: string;
}

export class ApiRes implements IApiResponse {
  message = '';
  type = '';
}
