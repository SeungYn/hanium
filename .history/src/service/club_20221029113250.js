export default class GroupService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  /**
   *
   * @param {string} clubName
   * @param {number} maximumCount
   * @param {string} clubType
   * @returns
   */
  makeGroup(clubName, maximumCount, clubType) {
    const data = this.http.fetch(`/club`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ clubName, maximumCount, clubType }),
    });

    return data;
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
