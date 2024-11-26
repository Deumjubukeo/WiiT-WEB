import cookie from "./cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token.constants";

class Token {
  getToken(key) {
    return cookie.getCookie(key);
  }

    setToken(key, token) {
    cookie.setCookie(key, token);
  }

    clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}
const token = new Token();
export default token;