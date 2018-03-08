
var ChapterLayer = cc.Layer.extend({

    ctor:function () {
        this._super();
        this.initUI();
        this.registerEvent();

        return true;
    },
    initUI : function() {
        var size = cc.visibleSize;
     
        this.ccsNode = ccs.csLoader.createNode(res.ccs_ChapterScene);
        Utils.getChildrens(this.ccsNode,this); //挂载到self上
        this.addChild(this.ccsNode);  

        this.ccsAction = ccs.actionTimelineCache.createAction(res.ccs_ChapterScene);
        this.ccsNode.runAction(this.ccsAction);

        this.ScrollView.setScrollBarEnabled(false);
    },
    registerEvent :function(){
        Utils.btnClick(this.btn_back,function(){

            Utils.replayScene(MainScene);
        })

        Utils.btnClick(this.level_1,function(){
            NOW_LEVEL = 1;//当前第一关
            Utils.replayScene(GameScene);
        })
 
    },







});




var ChapterScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new ChapterLayer();
        this.addChild(layer);
    }
});

