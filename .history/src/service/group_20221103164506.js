export default class GroupService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  //강퇴하기
  kickMember(club_id, memberId) {
    const data = this.http.fetch(`/user/club/${club_id}/kick-out`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ memberId, maximumCount, clubType }),
    });

    return data;
  }

  /**
   *
   * @param {string} clubName 그룹이름
   * @param {number} maximumCount 최대 인원수
   * @param {string} clubType 그룹 타입
   * @returns data 그룹
   */
  makeGroup(clubName, maximumCount, clubType) {
    const data = this.http.fetch(`/user/club`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ clubName, maximumCount, clubType }),
    });

    return data;
  }

  /**
   *
   * @param {number} groupId
   * @returns {Object}
   */
  joinGroup(groupId) {
    const data = this.http.fetch(`/user/club/${groupId}`, {
      method: 'POST',
      headers: this.getHeaders(),
    });

    return data;
  }

  leaveGroup(groupId) {
    console.log(groupId);
    const data = this.http.fetch(`/user/club/leave/${groupId}`, {
      method: 'POST',
      headers: this.getHeaders(),
    });
    return data;
  }

  deleteGroup(groupId) {
    const data = this.http.fetch(`/user/club/${groupId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }

  getGroupByType(groupType) {
    const data = this.http.fetch(`/user/clubs/${groupType}`, {
      method: 'GET',
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
