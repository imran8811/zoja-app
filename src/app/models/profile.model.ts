export interface IUserProfile {
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

export class UserProfile implements IUserProfile {
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
