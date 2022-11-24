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
    console.log(formData);
    const { images, ...postReq } = formData;
    const test = new URLSearchParams({
      postReq,
      images,
    });
    console.log(test.entries());
    const form = new FormData();
    form.append('postReq', postReq);
    form.append('images', images);
    const data = await this.http.fetch(
      `/user/post`,
      {
        method: 'POST',
        headers: this.getHeaders(),
        // body: new URLSearchParams({
        //   postReq,
        //   images,
        // }),
        body: form,
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
