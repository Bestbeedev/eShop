import {jwtDecode} from "jwt-decode";
type tokenPayLoad = {
  email: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
};

export const useDecodeToken = (token: string): tokenPayLoad | null => {
  try {
    return jwtDecode<tokenPayLoad>(token);
  } catch (error) {
    console.log(error);
    return null;
  }
};
