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
      console.log('wx ready');
      document.getElementById('bgm-audio').play();

      wx.onMenuShareTimeline({
        title: '爱在爱丁堡VR体验',
        link: location.href,
        imgUrl: '',
        success: function () { }
      })
      wx.onMenuShareAppMessage({
        title: '爱在爱丁堡VR体验',
        desc: '',
        link: location.href,
        imgUrl: '',
        type: '',
        dataUrl: '',
        success: function () { }
      })
    });
  }