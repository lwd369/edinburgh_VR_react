import request from 'superagent';
const wx = window.wx;

export default class WxConfig {
  static console() {
    console.log(wx);
  }

  static getSignature() {
    return new Promise((resolve, reject) => {
      request
        .get('http://api.yeahstation.com:84/Hdr_Oauth.ashx?Action=share')
        .query({
          noncestr: '20160229',
          timestamp: '1414587457',
          url: 'http://wap.yeahstation.com/loveinedinburgh/'
        })
        .end((err, res) => {
          const data = JSON.parse(res.text);
          console.log(data.signature);
          resolve(data.signature);
        });
    });
  }

  static configWeChat() {
    WxConfig.getSignature().then(signature => {
      window.wx.config({
        debug: true,
        appId: 'wxb93373b6d87d985d',
        timestamp: '1414587457',
        nonceStr: '20160229',
        signature: signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      })
    });

    window.wx.ready(() => {
      console.log('ready');
    });

    window.wx.error(function (res) {
      console.log('error');
    });
  }

  config() {
    wx.config({
      debug: false,
      appId: 'wxb93373b6d87d985d',
      timestamp: '1414587457',
      nonceStr: '20160229',
      signature: response.data.signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    })
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: 'Salvatore Ferragamo 全年开业喊你来领小样啦',
        link: location.href,
        imgUrl: '',
        success: function () { }
      })
      wx.onMenuShareAppMessage({
        title: 'Salvatore Ferragamo 全年开业喊你来领小样啦',
        desc: '',
        link: location.href,
        imgUrl: '',
        type: '',
        dataUrl: '',
        success: function () { }
      })
    })
  }

}