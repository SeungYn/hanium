export default class GroupService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  makeGroup(clubName, maximumCount, clubType) {
    const data = this.http.fetch(`/club`, {
      method: 'POST',
      body: JSON.stringify({ clubName, maximumCount, clubType }),
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
