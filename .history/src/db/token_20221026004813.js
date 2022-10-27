const TOKEN = 'token';
const USER = 'user';
const USERNICKNAME = 'userNickName';
export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  saveUser(user) {
    localStorage.setItem(USER, user);
    console.log(localStorage.getItem(USER));
  }

  getUser() {
    localStorage.getItem(USER);
  }

  clearToken() {
    console.log('토큰삭제');
    localStorage.clear(TOKEN);
  }
  clearUser() {
    console.log('유저삭제');
    localStorage.clear(USER);
  }
}
