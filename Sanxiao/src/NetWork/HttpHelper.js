
function  Http(){
    var _succCallback = function(){};//回调函数
    var _errCallback = function(){};//error function
}

function createXMLHttpRequest() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        if (xmlHttp.overrideMimeType)
            xmlHttp.overrideMimeType('text/xml');
    } else if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
            }
        }
    }
    return xmlHttp;
}

Http.prototype.getJSON = function(url,data,callBack,errorCallBack ){
    if(typeof (callBack) == "function"){
        this._succCallback = callBack;
    }else{
        this._succCallback = function(){}
    }
    if(typeof (errorCallBack) == "function"){
        this._errorCallBack = errorCallBack;
    }
    var xmlHttp = createXMLHttpRequest();
    if (data.constructor == Object) {
        var json = "{";
        for (var key in data) {
            var value = data[key];
            if (data[key].constructor == String) {
                value = "\"" + value + "\"";
            }else if(data[key].constructor == Array){
                value = "\[" +value + "\]" ;
            }
            if( key == "msgType"){
                json = json + "\"" + key + "\"" + ":" + value ;
            }else{
                json = json + "\"" + key + "\"" + ":" + value + ",";
            }
        }
        json = json + "}";
        data = json;
    }
    cc.log("send: " + data); 
    var datato2 = cc.loader._str2Uint8Array(data); //加密 [201,34,...]
    xmlHttp.open("POST", url+"?header=qqqq", true );//encodeURI(String(datato2)), true);
    xmlHttp.send(datato2); 
    Utils.showWaitting();
    var self = this;
    var callBack2 = callBack;
    
    var currentScene = cc.director.getRunningScene();
    xmlHttp.onreadystatechange = function(){ // ajax回调
        if (xmlHttp.status == 0) {
            Utils.showLowNet();
            self._succCallback("fail");
            return;
        }
        if(xmlHttp.readyState == 4){
            if( xmlHttp.status == 200 ){
                var strData = xmlHttp.response;
                if(strData.length>0){    //当内容为空时会有"[]"
                    cc.log("response: "+strData);
                    if (currentScene) {
                        Utils.removeLoadding();
                    }
                    self._succCallback(strData);
                }else{
                    cc.log("链接不畅，请检查网络");
                    Utils.showLowNet();
                    return;
                }
            }else{
                //网络错误处理
                if(self._errorCallBack) {
                    JSON.stringify(self._errorCallBack);
                    self._errorCallBack();
                    Utils.showLowNet();
                    cc.log("连接失败");
                }
            }
        }else{
            //网络错误处理
            if(self._errorCallBack) {
                self._errorCallBack();
                Utils.showLowNet();
                cc.log("连接失败");
            }
        }
    }
}

// Http.prototype.getIMG = function(url,callBack){
//     if(typeof (callBack) == "function"){
//         this._succCallback = callBack;
//     }else{
//         this._succCallback = function(){}
//     }
//     cc.log("url = "+url);
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send();
//     var self = this;
//     xmlHttp.onreadystatechange = function(){ //ajax回调
//         if(xmlHttp.readyState == 4){
//             if(xmlHttp.status == 200){
//                 var strData = xmlHttp.response;
//                 cc.log(strData);
//                 if(strData.length>0){    //当内容为空时会有"[]"
//                     self._succCallback(strData);
//                 }else{
//                     alert("链接不畅，请检查网络");
//                     cc.log("链接不畅，请检查网络");
//                     return;
//                 }
//             }
//             else{
//                 //网络错误处理
//                 cc.log("网络错误");
//                 alert("网络错误")
//             }
//         }else{
//             alert("链接失败")
//             cc.log("==连接失败==");
//         }
//     }
// }


Http.prototype.UInt8ArrayToString = function(uInt8Array) {
    var s = "";
    for (var i = 0; i < uInt8Array.length; i++) {
        if(i > 0)
            s += ",";
        s += uInt8Array[i];
    }
    return s;
}


