import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export default class StompDI {
  constructor(baseURL, getAccessToken) {
    this.baseURL = baseURL + '/ws-stomp';
    this.getAccessToken = getAccessToken;
    console.log(this.baseURL, '클래스 url');
    this.sockjs = null;
    this.client = null;
  }

  connectState() {
    console.log(
      'connect State',
      this.client ? this.client.connected : this.client
    );
    return this.client ? this.client.connected : false;
  }

  onConnect(callback) {
    this.sockjs = new SockJS(this.baseURL);
    this.client = Stomp.over(this.sockjs);

    console.log('연결하기');
    try {
      this.client.connect(
        {
          Authorization: 'Bearer ' + this.getAccessToken(),
        },
        (s) => {
          console.log('서버와 연결되었습니다.');

          callback();
        },
        (e) => {
          console.log('서버와 연결이 안됩니다.');
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  onSend(path, data) {
    console.log(this.client);
    this.client.send(
      path,
      { Authorization: 'Bearer ' + this.getAccessToken() },
      JSON.stringify(data)
    );
  }

  onDisConnect(stateCallback) {
    console.log('연결종료');
    this.client.disconnect(() => {
      console.log('연결종료');
      stateCallback();
    });
  }

  onSubscribe(id, path, callback) {
    let sub = null;
    console.log(id, path, callback);
    // if (!this.client.connected) {
    //   console.log('체크123123123213체크');
    //   this.onConnect();
    // }
    console.log(callback);
    console.log('subscribe', this.client);
    try {
      sub = this.client.subscribe(`${path}${id}`, callback);
    } catch (e) {
      console.log(e);
    }
    return () => {
      sub.unsubscribe();
    };
  }
}
