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
    console.log(data);
    return data;
  }

  //물건 등록하기
  async postItem(formData, type) {
    const data = this.http.fetch(`/user/post`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: new URLSearchParams({
        postReq: {
          title: '둔렴팔아',
        },
        images: ['img1', 'img2'],
      }),
    });
    console.log(data);
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
