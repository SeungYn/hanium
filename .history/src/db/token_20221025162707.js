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
  }

  getUser() {
    localStorage.getItem(USER);
  }

  clearToken() {
    console.log('토큰삭제');
    localStorage.clear(TOKEN);
  }
  clearUserId() {
    console.log('유저아이디삭제');
    localStorage.clear(USERID);
  }
  clearUserNickName() {
    console.log('유저닉네임삭제');
    localStorage.clear(USERNICKNAME);
  }
}
