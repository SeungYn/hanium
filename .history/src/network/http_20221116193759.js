export default class HttpClient {
  constructor(baseURL, authErrorEventBus, tokenStorage) {
    this.baseURL = baseURL;
    this.authErrorEventBus = authErrorEventBus;
    this.tokenStorage = tokenStorage;
  }

  async fetch(url, options, contextType = undefined) {
    console.log(`${this.baseURL}${url}`);
    console.log(contextType || 'application/json');

    const headers = { ...options.headers };

    // if (contextType) {
    //   contextType = null;
    // } else {
    //   contextType = 'application/json';
    //   headers['Content-Type'] = false;
    // }

    let res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': contextType || 'application/json',
        ...options.headers,
      },
      //headers,
    });

    if (res.headers.get('Authorization')) {
      this.tokenStorage.saveToken(
        res.headers.get('Authorization').split(' ')[1]
      );
    }

    let data;

    try {
      data = await res.json();
    } catch (error) {
      console.error('데이터 없어서 에러');
    }
    console.log(res);
    if (res.status > 299 || res.status < 200) {
      console.log(data);
      const message =
        data && data.message ? data.message : 'Something went wrong! 🤪';

      let error = new Error(message);

      if (res.status === 401) {
        console.log('401에러');
        error = new Error('로그인 정보가 잘 못 됐습니다.');
        this.authErrorEventBus.notify(error);
      }
      if (res.status === 400) {
        error.name = data.code ? data.code : '에러코드 등록 필요';
        console.log(error.message);
      }
      throw error;
    }

    return data;
  }
}
