/**
 * Created by yangshengjiepro on 15/4/23.
 */

var NetToData = function () {
    this.flag = 0;
};

NetToData.parsUserData = function(data){
    var userjsondata = JSON.parse(data);
    UserData.userId = userjsondata["accountId"]; //qq账号
    UserData.remainMoney = userjsondata["balance"];//账户余额
    UserData.userName = userjsondata["usernick"];//昵称
    UserData.fistLogin = userjsondata["fistLogin"];
    UserData.firstSpinWheel = userjsondata["showBonusGuide"];
    UserData.currentAccScore = userjsondata["currentAccScore"];

};
//解析网络数据
NetToData.parsData = function(data){
	var userjsondata = JSON.parse(data);
	UserData.arrowHoop = userjsondata["scoreList"];
	UserData.remainMoney = userjsondata["balance"];
	UserData.rewardCoins = userjsondata["rewardCoins"];
	UserData.costCoins = userjsondata["costCoins"];
	UserData.gameId = userjsondata["gameId"];
	UserData.prizeMultiple = userjsondata["prizeMultiple"];
	UserData.tenScoreList = userjsondata["tenScoreList"];
	UserData.currentAccScore = userjsondata["currentAccScore"];
    UserData.treasurePrize = userjsondata["treasurePrize"];

    //环数 从小到大排序
    UserData.arrowHoop.sort(function(a,b){
    	return a>b?1:-1;
    })
    UserData.tenScoreList.sort(function(a,b){
    	return a>b?1:-1;
    })
};

NetToData.parseScoreData = function(data){
    var userjsondata = JSON.parse(data);
    UserData.remainMoney = userjsondata["balance"];
}


NetToData.parseBraveGame = function(data){
	var userjsondata = JSON.parse(data);
	UserData.pokerShowList = userjsondata["pokerShowList"];
	
};

NetToData.parseBraveGameResult = function(data){
	var userjsondata = JSON.parse(data);
	UserData.remainMoney = userjsondata["balance"];
	UserData.rewardCoins = userjsondata["rewardCoins"];
}
