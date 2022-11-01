export default class GroupService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  /**
   *
   * @param {string} clubName 그룹이름
   * @param {number} maximumCount 최대 인원수
   * @param {string} clubType 그룹 타입
   * @returns data 그룹
   */
  makeGroup(clubName, maximumCount, clubType) {
    const data = this.http.fetch(`/club`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ clubName, maximumCount, clubType }),
    });

    return data;
  }

  /**
   *
   * @param {number} groupId
   * @returns []
   */
  joinGroup(groupId) {
    const data = this.http.fetch(`/club/${groupId}`, {
      method: 'POST',
      headers: this.getHeaders(),
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
