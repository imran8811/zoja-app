const baseRoute = 'http://localhost:3000/api';

//authentication
export const USER_SIGNUP = baseRoute+'/user/signup';
export const USER_LOGIN = baseRoute+'/login';

//profile
export const CREATE_PROFILE = baseRoute+'/profile/create';
export const GET_PROFILE = baseRoute+'/profile/:id';
export const UPDATE_PROFILE = baseRoute+'/profile/update/:id';
export const DELETE_PROFILE = baseRoute+'/profile/delete/:id';

export const SEARCH = baseRoute+'/profile/search';

