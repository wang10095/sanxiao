
//服务器接口地址
// var serverAddr = 'http://123.57.172.138/gamedata.py';//正式线上
var serverAddr = 'http://123.206.33.176/gamedata.py';//正式线上

// var Localserver = 'http://123.57.172.138/static/archer';//客户端地址
// var Localserver = 'http://192.168.1.121:8090/Sites';//局域网
var Localserver = 'http://localhost:8000/';   //本地

var serverSDK = 'http://m.888.qq.com/m_qq/active/lg.gameHall.nocache.html?mobile=1&mdebug=1&gameId=woshijianshou&callBackUrl='+Localserver;

//具体方法实现方法
var NetManager = {
    /**
     * 通用获取数据方法getMessage
     * @param successCallBack 成功后回调函数
     * @param errorCallBack  失败后回调函数(默认不填) 
     */
    getMessage: function(data,successCallBack) {
        var http = new Http();
        http.getJSON(serverAddr, data, successCallBack, null);        
    },
    
    // getIMG: function(url,successCallBack) {
    //     var http = new Http();
    //     http.getIMG(url, successCallBack);
    // }
};



