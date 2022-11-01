import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export default class StompDI {
  constructor(baseURL, getAccessToken) {
    this.baseURL = baseURL + '/ws-stomp';
    this.getAccessToken = getAccessToken;
    console.log(this.baseURL, '클래스 url');
    this.sockjs = null;
    this.client = null;

    // this.client.reconnect_delay = 5000;
    // console.log('stomp class');
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
    this.client.connect(
      {
        Authorization: 'Bearer ' + this.getAccessToken(),
      },
      (s) => {
        console.log('서버와 연결되었습니다.');
        console.log(callback);
        callback();
        console.log(s);
      },
      (e) => {
        console.log(e);
        console.log('서버와 연결이 안됩니다.');
      }
    );
  }

  onDisConnect() {
    console.log('연결종료');
    this.client.disconnect(() => {
      console.log('연결종료');
    });
  }

  onSubscribe(id, path, callback) {
    let sub = null;

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
