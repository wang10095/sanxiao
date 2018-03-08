
var MainLayer = cc.Layer.extend({
    sprite:null,

    ctor:function () {
        // 1. super init first
        this._super();
        var size = cc.visibleSize;
    
        this.ccsNode = ccs.csLoader.createNode(res.ccs_MainScene);
        Utils.getChildrens(this.ccsNode,this); //挂载到this上
        this.addChild(this.ccsNode);        

        this.ccsAction = ccs.actionTimelineCache.createAction(res.ccs_MainScene);
        this.ccsNode.runAction(this.ccsAction);

        
        Utils.btnClick(this.btn_start,function(){
            Utils.replayScene(ChapterScene);
        })
        

        // var helloLabel = new cc.LabelTTF("H", "Arial", 38);

        return true;
    },
   







});




var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

