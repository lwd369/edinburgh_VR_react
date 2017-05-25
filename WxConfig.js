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
          url: location.href
        })
        .end((err, res) => {
          const data = JSON.parse(res.text);
          resolve(data.signature);
        });
    });
  }

  static configWeChat() {
    const wx = window.wx;
    WxConfig.getSignature().then(signature => {
      wx.config({
        debug: false,
        appId: 'wxb93373b6d87d985d',
        timestamp: '1414587457',
        nonceStr: '20160229',
        signature: signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
      })
    });

    wx.ready(() => {
      document.getElementById('bgm-audio').play();

      wx.onMenuShareTimeline({
        title: '「爱丁堡双飞往返机票」，送给最懂爱的你',
        link: location.href,
        imgUrl: 'http://wap.yeahstation.com/loveinedinburgh/static_assets/logo.png',
        success: function () { }
      });
      wx.onMenuShareAppMessage({
        title: '「爱丁堡双飞往返机票」，送给最懂爱的你',
        desc: '我们以爱的名义，诚邀大家上传你最有爱的故事，并配上你最爱的旅途风景，分享给我们。最受大家喜爱的故事发送者，将赢得我们提供的爱丁堡双飞往返机票。',
        link: location.href,
        imgUrl: 'http://wap.yeahstation.com/loveinedinburgh/static_assets/logo.png',
        type: '',
        dataUrl: '',
        success: function () { }
      });
    });
  }
}