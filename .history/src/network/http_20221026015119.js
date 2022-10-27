export default class HttpClient {
  constructor(baseURL, authErrorEventBus, tokenStorage) {
    this.baseURL = baseURL;
    this.authErrorEventBus = authErrorEventBus;
    this.tokenStorage = tokenStorage;
  }

  async fetch(url, options) {
    console.log(`${this.baseURL}${url}`);
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    console.log(res.headers.get('Authorization').split(' ')[1]);
    //console.log(res.headers.get('Authorization'));
    // if ('Authoization' in res.headers) {
    //   console.log('header');
    //   this.tokenStorage.saveToken(
    //     res.headers.get('Authorization').split(' ')[1]
    //   );
    // }
    let data;
    console.log(res.headers);
    try {
      data = await res.json();
    } catch (error) {
      console.error('데이터 없어서 에러');
    }
    console.log(res);
    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : 'Something went wrong! 🤪';

      let error = new Error(message);

      if (res.status === 401) {
        console.log('401에러');
        error = new Error('로그인 정보가 잘 못 됐습니다.');
        this.authErrorEventBus.notify(error);
        return;
      }
      if (res.status === 400) {
        error.name = data.code ? data.code : '에러코드 등록 필요';
        console.log(error.message);
        throw error;
      }
      throw error;
    }

    return data;
  }
}
