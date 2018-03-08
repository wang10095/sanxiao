
var GameLayer = cc.Layer.extend({

    gemTable:[], //存放宝石的数组 {...}
    gemBigTable:[],//存放所有可以消除的宝石数组 {{},{},{} ...}
    gemCanXiaochu : [], //  {...}
    key : 0,
    canLineDrop : true,//当竖直方向下落完成后 水平方向可以下落了

    lastSelcetGem : null,//第一个选中的gem
    nextSelectGem : null,//第二个选中的gem

    particleTable : [],//消除特效数组


    xiaochuNum : 0,//消除数量
    stepNumDown : false,//是否可以消除 +分  -步数了


    ctor:function () {

        this._super();
        this.initUI();
        this.registerEvent();

        return true;
    },
    initUI : function() {
        var size = cc.visibleSize;
        cc.spriteFrameCache.addSpriteFrames("res/media/game/CellSprite.plist", "res/media/game/CellSprite.png");

        this.ccsNode = ccs.csLoader.createNode(res.ccs_GameScene);
        Utils.getChildrens(this.ccsNode,this); //挂载到this上
        this.addChild(this.ccsNode);  
        this.ccsAction = ccs.actionTimelineCache.createAction(res.ccs_GameScene);
        this.ccsNode.runAction(this.ccsAction);

        this.text_score.setString("0");// 分数
        this.lab_stepnum.setString(LEVEL_STEP[NOW_LEVEL]);
        this.initGems();



    },
    initGems : function(){

        //清空所有数据
        for(var key in this.gemTable){
            this.gemTable[key].removeFromParent(true);
        }
        this.gemTable = [];
        //所有宝石均是以左上角为锚点   从左到右        从上到下
        var layer = this.tileMap.getLayer("layer1");
        var mapNum = this.tileMap.getMapSize(); //8 9
        var tileSize = this.tileMap.getTileSize();//80 80

        MAX_LINE = mapNum.height;
        MAX_COLUMN = mapNum.width;
        for(var i=0;i<mapNum.width;i++){
            for(var j=0;j<mapNum.height;j++){
                var gemBox = layer.getTileAt(cc.p(i,j));
                if (gemBox) {
                    var pos = [];
                    pos.x = parseInt(i * tileSize.width+tileSize.width/2);
                    pos.y = parseInt((MAX_COLUMN-j) * tileSize.height + tileSize.height/2);
                    var gem = this.createNewGems(pos);
                    gem.rechangeTagXY();//设定tag
                    this.gemTable[i*10+j] = gem; //插入宝石数组

                }
            }
        }
        cc.log("=====gemTablegemTable==1==="+this.gemTable.length);

        //禁止触摸
        this.Panel_touch.setVisible(true);
        //开始检测消除
        this.schedule(this.judgeXiaochu, 1);
    },
    registerEvent :function(){
        Utils.btnClick(this.btn_back,function(){
            Utils.replayScene(ChapterScene);
        });

        var self = this;
        Utils.btnClick(this.btn_start,function(){
            cc.director.resume();
            self.Panel_touch.setVisible(false);
            self.btn_start.setVisible(false);
            self.btn_stop.setVisible(true);
        });

        Utils.btnClick(this.btn_stop,function(){

            cc.director.pause();
            self.Panel_touch.setVisible(true);
            self.btn_start.setVisible(true);
            self.btn_stop.setVisible(false);
        });
    },
    judgeXiaochu : function(){
        cc.log("====================开始检测消除=========================");
        this.canLineDrop = true;
        this.unschedule(this.judgeXiaochu);
        this.gemBigTable = [];//所有可以消除的放在这里
        for(var key in  this.gemTable){
            //上下左右开始判断是否有同色的宝石
            // cc.log("==========开始检测======================="+key+"  "+typeof(key));
            this.gemCanXiaochu = [];//每次检索到可以消除的宝石
            this.gemCanXiaochu.push(this.gemTable[parseInt(key)]);
            this.key = parseInt(key); //把string转化为int
            this.judgeCommonColor("right",parseInt(key));
        }
        cc.log("======找到几组==="+this.gemBigTable.length);

        if(this.gemBigTable.length > 0){
            this.lastSelcetGem = null;
            this.nextSelectGem = null;

            var xiaochuGems = [];//所有要消除的宝石 {...};
            for (var k in this.gemBigTable){
                for(var n in this.gemBigTable[k]){
                    xiaochuGems.push(this.gemBigTable[k][n]);
                }
            }
            //记录相同宝石的位置  选其一
            var seemNum = [];
            for (var i=0;i<xiaochuGems.length;i++){
                for (var j=i+1;j<xiaochuGems.length;j++){
                    if(xiaochuGems[i].tagx == xiaochuGems[j].tagx && xiaochuGems[i].tagy == xiaochuGems[j].tagy){
                        cc.log(i+"==seem====="+j);
                        seemNum.push(i);
                    }
                }
            }
            //删除相同的宝石
            for(var key in seemNum){
                xiaochuGems.splice(seemNum[key],1);
            }
            cc.log("===去除相同的宝石后==xiaochuGems length======"+xiaochuGems.length);

            //排序 按照 tagx 从小到大的顺序
            for (var i=0;i<xiaochuGems.length;i++){
                for(var j=i+1;j<xiaochuGems.length;j++){

                    if( parseInt(xiaochuGems[i].tagx) > parseInt(xiaochuGems[j].tagx) ){
                        var t = xiaochuGems[i];
                        xiaochuGems[i] = xiaochuGems[j];
                        xiaochuGems[j] = t;
                    }
                }
            }

            //DISPLAY
            // cc.log("=====xiaochuGemsxiaochuGemsxiaochuGems===");
            // for (var key in xiaochuGems){
            //     cc.log("===="+xiaochuGems[key].tagx,xiaochuGems[key].tagy);
            // }
            //对去除相同宝石后的xiaochuGems 每一列 编织一个数组
            var elimateGems = []; //存储所有在同一竖直方向的宝石 {{},{},{}...};
            for (var i=0;i<xiaochuGems.length;i++ ){
                if(xiaochuGems[i-1] && xiaochuGems[i-1].tagx == xiaochuGems[i].tagx){
                    continue;
                }
                var shuGms = [];
                elimateGems.push(shuGms);

                shuGms.push(xiaochuGems[i]);
                for (var j=i+1;j<xiaochuGems.length;j++){
                    if(xiaochuGems[i].tagx == xiaochuGems[j].tagx){
                        shuGms.push(xiaochuGems[j]);
                    }
                }
            }
            cc.log("===最后形成的竖直方向的数组个数为====="+elimateGems.length);

            //开始按列消除
            for (var key in elimateGems){
                this.xiaochuGems(elimateGems[key]);
            }

            //进行下一次检测消除
            var nextFunc = function () {
                this.unschedule(nextFunc);
                this.jiaozhunTagGemTable();//校准 tag值
                this.judgeXiaochu();//再次判断有无可消除的宝石  知道没有为止
            }
            this.schedule(nextFunc,1);

        }else{
            if(this.lastSelcetGem && this.nextSelectGem){
                cc.log("======交换后不能消除 交换回来=======");
                var self = this;
                this.changePosition(this.lastSelcetGem,this.nextSelectGem,function(){
                    self.selectGems();
                });
                this.lastSelcetGem = null;
                this.nextSelectGem = null;
            }else{

                this.stepNumDown = true;
                //没有可以消除的宝石则启动手动消除
                cc.log("=====没有可以消除的宝石  可以手动消除==== ");

                var score = parseInt(this.text_score.getString());
                if(score >= LEVEL_SCORE[NOW_LEVEL]){
                    cc.log("======================恭喜过关====================");
                    cc.log("========================||====================");
                    cc.log("========================||=======================");
                    cc.log("======================进入下一关====================");

                    var text = ccui.Label(" 恭喜过关 ","",100);
                    text.anchorX = 0.5;
                    text.anchorX = 0.5;
                    text.x = cc.visibleSize.width/2;
                    text.y = cc.visibleSize.height/2;
                    this.addChild(text,999);

                    Utils.delayTimeFunc(this,function () {
                        Utils.replayScene(ChapterLayer);
                    },3);

                    return;
                }else{
                    var stepnum = parseInt(this.lab_stepnum.getString());
                    if (stepnum == 0){
                        cc.log("======================非常遗憾====================");
                        cc.log("========================||====================");
                        cc.log("======================未通过====================");
                        var text = ccui.Label(" 过关失败 ","",100);
                        text.anchorX = 0.5;
                        text.anchorX = 0.5;
                        text.x = cc.visibleSize.width/2;
                        text.y = cc.visibleSize.height/2;
                        this.addChild(text,999);

                        Utils.delayTimeFunc(this,function () {
                            Utils.replayScene(ChapterLayer);
                        },3);

                        return;
                    }

                }
                this.selectGems();
            }
        }
    },
    judgeCommonColor : function (direction,key) {
        // cc.log("===direction====="+direction+"  key ="+key);
        switch (direction) {
            case "right":
                if(this.gemTable[this.key].canRight == false){
                    break;
                }
                if ( parseInt(key/10)< MAX_COLUMN && this.gemTable[key+10] && this.gemTable[key+10].idx == this.gemTable[key].idx){
                    this.gemCanXiaochu.push(this.gemTable[key+10]);
                    this.judgeCommonColor("right",key+10);
                }else {
                    if(this.gemCanXiaochu.length >= 3){
                        this.gemBigTable.push(this.gemCanXiaochu);//存入大的消除数组中
                        cc.log(" 》》》》》》》》》》》》》》》》》   ===有可消除的宝石  "+ this.key);
                        for(var nn = 1;nn<=this.gemCanXiaochu.length-3;nn++){
                            cc.log("===this.key+nn=="+(this.key+nn*10)+"不能right");
                            this.gemTable[this.key+nn*10].canRight = false;
                        }
                        this.gemCanXiaochu = [];
                        this.gemCanXiaochu.push(this.gemTable[this.key]);
                        this.judgeCommonColor("down",this.key);
                        break;
                    }
                    this.gemCanXiaochu = [];
                    this.gemCanXiaochu.push(this.gemTable[this.key]);
                    this.judgeCommonColor("down",this.key);
                }
                break;
            case "down":
                if(this.gemTable[this.key].canDown == false){
                    break;
                }
                if (key%10< MAX_LINE && this.gemTable[key+1] && this.gemTable[key+1].idx == this.gemTable[key].idx){
                    this.gemCanXiaochu.push(this.gemTable[key+1]);
                    this.judgeCommonColor("down",key+1);
                }else{
                    if(this.gemCanXiaochu.length >= 3){
                        this.gemBigTable.push(this.gemCanXiaochu);//存入大的消除数组中
                        cc.log(" 》》》》》》》》》》》》》》》》》   ===有可消除的宝石  "+ this.key);
                        for(var nn = 1;nn<=this.gemCanXiaochu.length-3;nn++){
                            cc.log("===this.key+nn=="+(this.key+nn)+"不能down");
                            this.gemTable[this.key+nn].canDown = false;
                        }
                        break;
                    }
                    this.gemCanXiaochu = [];
                }
                break;

            default:
                break
        }
    },
    xiaochuGems: function(shuGem){
        for(var key in shuGem){
            var particle_gem_xiaochu = res["particle_gem_xiaochu_"+shuGem[key].idx];
            var particleSystem = cc.ParticleSystem.create(particle_gem_xiaochu);
            particleSystem.resetSystem();
            particleSystem.x = shuGem[key].x;
            particleSystem.y = shuGem[key].y;
            this.tileMap.addChild(particleSystem,100);

            this.particleTable.push(particleSystem);
            shuGem[key].removeSelf();
        }

        this.dropGems(shuGem);
    },
    dropGems:function (shuGem) {
        if(this.stepNumDown == true){
            var score = parseInt(this.text_score.getString());
            score += shuGem.length * GEM_SCORE;
            this.text_score.setString(score);
        }

        cc.log("===========开始下落===================");
        //排序 按照tagy 从小到大
        for(var i =0;i<shuGem.length;i++){
            for(var j=i+1;j<shuGem.length;j++){
                if(shuGem[i].tagy >shuGem[j].tagy ){
                    var t = shuGem[i];
                    shuGem[i] = shuGem[j];
                    shuGem[j] = t;
                }
            }
        }

        var Scount = shuGem.length;
        var tagxx = parseInt(shuGem[0].tagx);//本列所在x位置

        //判断最上方可放置宝石的位置
        var count = 0;
        for (var i = 0; i<MAX_LINE; i++){
            i = parseInt(i);
            if(this.gemTable[tagxx*10+i]){
                break;
            }else {
                cc.log("======count+1====");
                ++count;
            }
        }

        cc.log("================最上方空着的格子===="+count);

        var DropGems = [];
        for(var i=0;i<Scount;i++){
            DropGems[i]=[];
        }
        for(var i=0+count;i<=shuGem[shuGem.length-1].tagy;i++){
            if(this.gemTable[tagxx*10+i] && this.gemTable[tagxx*10+i].isExist==true){
                cc.log("==插入数组=DropGems="+tagxx,i,this.gemTable[tagxx*10+i].y);
                DropGems.push(this.gemTable[tagxx*10+i]);
                cc.log("=DropGems==="+DropGems.length);
            }
        }
        for(var i=0;i<Scount;i++){
            var pos = [];
            pos.x = shuGem[0].x;
            pos.y = BOX_SIZE * MAX_LINE + BOX_SIZE*(Scount-i-1)+ BOX_SIZE/2 - BOX_SIZE*count;
            cc.log("=添加新的宝石="+pos.y,tagxx,0+count+i);
            var newGem = this.createNewGems(pos);
            DropGems[i] = newGem;
        }
        cc.log("====DropGems is ok======"+DropGems.length);

        //校对key值
        var Dcount = 0;
        for(var i=0+count;i<=shuGem[shuGem.length-1].tagy;i++){
            if(this.gemTable[tagxx*10+i]){
                cc.log("===赋值=="+Dcount);
                this.gemTable[tagxx*10+i] = DropGems[Dcount];
                ++Dcount;
            }
        }

        for (i=0+count;i<=shuGem[shuGem.length-1].tagy;i++){
            if(this.gemTable[tagxx*10+i]){
                var nowyy = this.gemTable[tagxx*10+i].y; //当前的位置
                var endyy = (MAX_LINE-i)*BOX_SIZE-BOX_SIZE/2; //目标位置
                var dcount = ((nowyy-endyy)/BOX_SIZE).toFixed(0);
                cc.log("===============key==down===="+(tagxx*10+i),dcount);
                var time = 0.1*dcount;
                var moveDown = cc.moveBy(time,cc.p(0,-BOX_SIZE*dcount));
                var EaseOut =  cc.EaseSineIn.create(moveDown, time);
                this.gemTable[tagxx*10+i].runAction(EaseOut);
            }else{
                cc.log("==不存在=="+(tagxx*10+i));
            }
        }



    },
    createNewGems : function(pos){
        // cc.log("=new=="+pos.x,pos.y,tagx,tagy);
        var gem = new RedGem();
        gem.x = pos.x;
        gem.y = pos.y;
        this.tileMap.addChild(gem,1);

        return gem;
    },
    changePosition : function(lastSelcetGem,nextSelectGem,callback){ //交换两个宝石的位置 包括gemTable数组内的位置
        cc.log("===changePosition====");
        var tagx = parseInt(lastSelcetGem.tagx);
        var tagy = parseInt(lastSelcetGem.tagy);
        var tagxx = parseInt(nextSelectGem.tagx);
        var tagyy = parseInt(nextSelectGem.tagy);

        this.gemTable[tagxx*10+tagyy] = lastSelcetGem;
        this.gemTable[tagx*10+tagy] = nextSelectGem;

        var pos = lastSelcetGem.getPosition();
        lastSelcetGem.runAction(cc.moveTo(0.1,nextSelectGem.getPosition()));


        var easein = cc.EaseIn.create(cc.moveTo(0.1,pos),0.1)

        var  seq = cc.sequence(easein,cc.delayTime(0.1),cc.callFunc(function () {
            lastSelcetGem.rechangeTagXY();
            nextSelectGem.rechangeTagXY();

            // this.displayGemTable();
            callback();
        },this));
        nextSelectGem.runAction(seq);

        // lastSelcetGem.setPosition(nextSelectGem.getPosition());
        // nextSelectGem.setPosition(pos);

    },
    jiaozhunTagGemTable : function () {
        cc.log("======校准tagXY值========");
        for (var key in this.gemTable){
            key = parseInt(key);
            this.gemTable[key].rechangeTagXY();
        }
    },
    displayGemTable : function () {//打印gemtable
        cc.log("=====displayGemTable=========");
        for (var key in this.gemTable){
            key = parseInt(key);
            var tagx = parseInt(this.gemTable[key].tagx);
            var tagy = parseInt(this.gemTable[key].tagy);
            var idx = parseInt(this.gemTable[key].idx);
            cc.log(key+"======="+tagx,tagy,idx);
            if (key != tagx*10+tagy){
                cc.log("==不一致="+key,(tagx*10+tagy));
                // alert("bug key和tag不一致======"+key,tagx,tagy,idx);
            };

        }
    },
    selectGems : function () {
        //   开始手动消除之前     清除    particleTable
        for (var key in this.particleTable){
            this.particleTable[key].removeFromParent(true);
        }
        this.particleTable = [];


        this.Panel_touch.setVisible(false);//解除禁止触摸
        this.lastSelcetGem = null;
        this.nextSelectGem = null;
        this.schedule(this.touchGems,0.1);
    },

    touchGems: function(){

        for (var key in this.gemTable){
            key = parseInt(key); //string-> int

            var canChange = false;
            if(this.gemTable[key].isSelected == true ){
                if(this.lastSelcetGem == null ){
                    this.lastSelcetGem = this.gemTable[key];
                    cc.log("==选择last  第一个==="+this.lastSelcetGem.tagx,this.lastSelcetGem.tagy);
                }else{
                    this.nextSelectGem = this.gemTable[key];

                    var tagx = parseInt(this.lastSelcetGem.tagx); //1
                    var tagy = parseInt(this.lastSelcetGem.tagy);//1
                    var tagxx = parseInt(this.nextSelectGem.tagx);//1
                    var tagyy = parseInt(this.nextSelectGem.tagy);//2

                    if(  ( tagx==tagxx && (tagy==tagyy-1 ||  tagy==tagyy+1 )) ||( tagy==tagyy && (tagx==tagxx-1 ||  tagx==tagxx+1 ))    ){
                        var tagx = this.lastSelcetGem.tagx;
                        cc.log("==========选择了两个宝石 开始进行检测=========");
                        //点击了第二个宝石  开始交换位置 并检测是否可以消除 如果不能消除 则换回位置
                        if(this.lastSelcetGem.tagx == this.nextSelectGem.tagx || this.lastSelcetGem.tagy ==this.nextSelectGem.tagy){

                            this.unschedule(this.touchGems);
                            //解除粒子特效
                            this.lastSelcetGem.removeSelectParticle();
                            this.nextSelectGem.removeSelectParticle();
                            this.lastSelcetGem.isSelected = false;
                            this.nextSelectGem.isSelected = false;
                            this.Panel_touch.setVisible(true);//屏蔽

                            canChange = true;
                        }

                    }else if( tagx==tagxx && tagy==tagyy){
                        cc.log("===重复=="+this.gemTable[key].tagx,this.gemTable[key].tagy);
                        this.nextSelectGem = null;
                    } else {
                        cc.log("=======选择的两个宝石不在一起 则第二个转为第一个==============");
                        this.lastSelcetGem.isSelected = false;//第一个取消选中
                        this.lastSelcetGem.removeSelectParticle();//取消选中特效
                        this.lastSelcetGem = this.nextSelectGem; //将第二个转给第一个 第二个的isSelected true  选中特效开始
                        this.nextSelectGem = null;
                    }

                }
            }else if(this.gemTable[key].toDirection != ""){
                cc.log("==有方向==滑动");
                this.lastSelcetGem = this.gemTable[key];
                switch (this.lastSelcetGem.toDirection){
                    case "up" :
                        cc.log("==up=");
                        if (this.gemTable[key-1]){
                            this.nextSelectGem =  this.gemTable[key-1];
                        }else{
                            this.lastSelcetGem.toDirection = "";
                            this.lastSelcetGem = null;
                        }
                        break;
                    case "down" :

                        if (this.gemTable[key+1]){
                            cc.log("==down="+(key+1));
                            this.nextSelectGem =  this.gemTable[key+1];
                        }else{
                            cc.log("==down=no"+(key+1));
                            this.lastSelcetGem.toDirection = "";
                            this.lastSelcetGem = null;
                        }
                        break;
                    case "right" :

                        if (this.gemTable[key+10]){
                            cc.log("==right="+(key+10));
                            this.nextSelectGem =  this.gemTable[key+10];
                        }else{
                            cc.log("==right=NO"+(key+10));
                            this.lastSelcetGem.toDirection = "";
                            this.lastSelcetGem = null;
                        }
                        break;
                    case "left" :
                        if (this.gemTable[key-10]){
                            cc.log("==left=");
                            this.nextSelectGem =  this.gemTable[key-10];
                        }else {
                            cc.log("==left=NO");
                            this.lastSelcetGem.toDirection = "";
                            this.lastSelcetGem = null;
                        }
                        break;
                    default :
                        break;

                }

                if(this.lastSelcetGem && this.nextSelectGem){
                    cc.log("=====开始检测==move==");
                    this.unschedule(this.touchGems);
                    this.lastSelcetGem.toDirection = "";
                    this.lastSelcetGem.isSelected = false;
                    this.nextSelectGem.isSelected = false;
                    this.Panel_touch.setVisible(true);//屏蔽

                    canChange = true;

                }
            }


            //可以交换位置
            if(canChange == true){
                var self = this;
                this.changePosition(this.lastSelcetGem,this.nextSelectGem,function(){
                    //开始检测消除
                    if(self.stepNumDown == true){ //步数 --`
                        var lab_stepnum = parseInt(self.lab_stepnum.getString()) ;
                        --lab_stepnum;
                        self.lab_stepnum.setString(lab_stepnum);
                    }
                    self.schedule(self.judgeXiaochu,0.2);
                });
            }






        }
    },
    onExit:function(){
        this.unscheduleAllCallbacks();
        this.gemTable=[]; //存放宝石的数组
        this.gemBigTable=[];//存放所有可以消除的宝石数组
        this.gemCanXiaochu = [];
        this.key = 0;
        this.canLineDrop = true;//当竖直方向下落完成后 水平方向可以下落了

        this.lastSelcetGem = null;//第一个选中的gem
        this.nextSelectGem = null;//第二个选中的gem
    }
});


var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

