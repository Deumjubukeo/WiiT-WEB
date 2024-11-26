import cookie from "js-cookie";

class Cookie {
   getCookie(key){
    return cookie.get(key);
  }

   setCookie(key, value) {
    cookie.set(key, value);
  }

   removeCookie(key) {
    cookie.remove(key);
  }
}

export default new Cookie();