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
    console.log(!!images);
    const form = new FormData();
    form.append(
      'postReq',
      new Blob([JSON.stringify(postReq)], { type: 'application/json' })
    );

    for (let img of images) {
      console.log(images);
      console.log(img);
      form.append('images', img);
    }
    // if (images.length === 0) {
    //   form.append('images', []);
    // }
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

  //물건 검색
  async getSearchItem(value) {
    console.log(value);
    const data = await this.http.fetch(`/user/post/search?value=${value}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    console.log(data);
    return data;
  }

  //쪽지목록 가져오기
  async getNoteList() {
    const data = await this.http.fetch(`/user/note`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    return data;
  }

  //해당 물건 쪽지 내용 가져오기
  async getNoteById(id) {
    const data = await this.http.fetch(`/user/note/${id}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    return data;
  }

  async postNote(post_id, message) {
    const data = await this.http.fetch(`/user/post${post_id}/note`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ message }),
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
