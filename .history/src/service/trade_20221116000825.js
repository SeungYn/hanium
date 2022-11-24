export default class TradeService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  //타입 별로 물건리스트 가져오기 나눔, 거래, 대여
  async getItemListByType() {
    const data = this.http.fetch(`/user/post?dealType=${trade}`, {
      method: 'GET',
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
