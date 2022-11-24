export default class TradeService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  //타입 별로 물건리스트 가져오기 나눔, 거래, 대여
  async getItemListByType(type) {
    const data = await this.http.fetch(`/user/post?dealType=${type}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    console.log(data);
    return data;
  }

  //물건 등록하기
  async postItem(formData) {
    const { images, ...postReq } = formData;
    const data = await this.http.fetch(
      `/user/post`,
      {
        method: 'POST',
        headers: this.getHeaders(),
        body: new URLSearchParams({
          postReq,
          images,
        }),
      },
      'multipart/form-data'
    );
    console.log(data);
  }

  //물건 상세정보가져오기
  async getPostedItemById(id) {
    const data = await this.http.fetch(`/user/post/${id}`, {
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
