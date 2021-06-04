export interface IUserLogin {
  email: string;
  password: string;
  message: string;
  type: string;
}

export class UserLogin implements IUserLogin {
  email = '';
  password = '';
  message: '';
  type: '';
}
