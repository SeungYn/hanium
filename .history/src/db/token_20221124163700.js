const TOKEN = 'token';
const USER = 'user';
const USERNICKNAME = 'userNickName';
export default class TokenStorage {
  saveToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
    //return 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4b2FsczQzNDAiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY5NTQwMzY2fQ.DusRc9KZfiSdpc9ePFUGN4E1mkpYfSkJvp4fIjcXn8svtFHWuhQCkxlDZGCCLfnI6bgg377Toc7sTpHtEpSQnA';
  }

  saveUser(user) {
    console.log(user);
    localStorage.setItem(USER, JSON.stringify(user));
    console.log(localStorage.getItem(USER));
  }

  getUser() {
    return JSON.parse(localStorage.getItem(USER));
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
