export default class GroupService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  //강퇴하기
  async kickMember(club_id, memberId) {
    const data = await this.http.fetch(`/user/club/${club_id}/kick-out`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ memberId }),
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
  async makeGroup(clubName, maximumCount, clubType) {
    const data = await this.http.fetch(`/user/club`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ clubName, maximumCount, clubType }),
    });

    return data;
  }

  //현재 그룹 정보 가져오기
  getGroupInfo(club_id) {
    const data = 1;
  }

  /**
   *
   * @param {number} groupId
   * @returns {Object}
   */
  async joinGroup(groupId) {
    const data = await this.http.fetch(`/user/club/${groupId}`, {
      method: 'POST',
      headers: this.getHeaders(),
    });

    return data;
  }

  async leaveGroup(groupId) {
    console.log(groupId);
    const data = await this.http.fetch(`/user/club/leave/${groupId}`, {
      method: 'POST',
      headers: this.getHeaders(),
    });
    return data;
  }

  async deleteGroup(groupId) {
    const data = await this.http.fetch(`/user/club/${groupId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }

  getGroupByType(groupType) {
    const data = this.http.fetch(`/user/clubs/${groupType}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    console.log(data);
    return data;
  }
  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
