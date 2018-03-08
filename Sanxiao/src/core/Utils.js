var  Utils = Utils || {};


Utils.replayScene = function(scene){
    cc.director.runScene(new scene());
};

Utils.getChildrens = function(node,ccsnode){
    var allNode = node.getChildren();

    for (var i = 0; i < allNode.length; i++) {
        // cc.log(allNode[i]._name);
        ccsnode[allNode[i]._name] = allNode[i];
     
        if (allNode[i].getChildren().length > 0) {
            Utils.getChildrens(allNode[i],ccsnode);
        };

    };
};


Utils.btnClick = function(button,callback,sound){
    button.addTouchEventListener(function(sender,type){
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                break;

            case ccui.Widget.TOUCH_MOVED:
                break;

            case ccui.Widget.TOUCH_ENDED:
                // if (sound) {
                //     AudioManager.getInstance().play_effect_forres(sound);
                // }else{
                //     AudioManager.getInstance().play_effect_forres(audio.defaule_sound_effect);
                // };

                callback();
                break;

            case ccui.Widget.TOUCH_CANCELED:
                break;

            default:
                break;
        }
    },this);

};


Utils.delayTimeFunc = function (node,callback,time){
    var delayTime = cc.delayTime(time);
    var callback = cc.callFunc(callback);
    var seq = cc.sequence(delayTime,callback);
    node.runAction(seq);
}







