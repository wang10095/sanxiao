
var RedGem = cc.Sprite.extend({
    sprite:null,
    tagx : 0,
    tagy : 0,
    idx : 0, //颜色类型  红黄绿蓝白紫
    isSelected : false,
    particleSystemSelect : null,

    canRight : true,
    canDown : true,
    toDirection : "",

    isExist : true,

    ctor:function () {
        this._super();
        this.initUI();
        this.registerEvent();
        
        return true;
    },
    initUI : function() {
        var size = cc.visibleSize;
        this.ccsNode = ccs.csLoader.createNode(res.ccs_RedGem);
        Utils.getChildrens(this.ccsNode,this);
        this.addChild(this.ccsNode);

        this.ccsAction = ccs.actionTimelineCache.createAction(res.ccs_RedGem);
        this.ccsNode.runAction(this.ccsAction);

        var idx = parseInt(Math.random()*(MAX_GEM-MIN_GEM+1)+MIN_GEM);
        this.idx = idx;
        var randomGemPng = "#cell_sprite_"+ idx +".png";
        this.sprite = cc.Sprite.create(randomGemPng);
        this.addChild(this.sprite,-1);

        // var randomGem = cc.textureCache.getTextureForKey(randomGemPng);

        if(this.cell_sprite){
            this.cell_sprite.removeFromParent(true);
        }



    },
    registerEvent : function(){
        this.btn_touch.addTouchEventListener(function(sender,type){
            switch (type) {
                case ccui.Widget.TOUCH_BEGAN:

                    break;

                case ccui.Widget.TOUCH_MOVED:

                    break;

                case ccui.Widget.TOUCH_ENDED:
                    var beganPos = sender._touchBeganPosition;
                    var endPos =  sender._touchEndPosition;

                    if (Math.abs(endPos.x - beganPos.x) > 5 || Math.abs(endPos.y - beganPos.y) > 5 ){
                        if(Math.abs(endPos.x - beganPos.x)  > Math.abs(endPos.y - beganPos.y) ){
                            cc.log("==水平方向=");
                            if(endPos.x - beganPos.x >0){
                                cc.log("===向右滑=");
                                this.toDirection = "right";
                            }else{
                                cc.log("===向左滑=");
                                this.toDirection = "left";
                            }
                        }else{
                            cc.log("=====竖直方向=====");
                            if(endPos.y - beganPos.y >0){
                                cc.log("===向上滑=");
                                this.toDirection = "up";
                            }else{
                                cc.log("===向下滑=");
                                this.toDirection = "down";
                            }

                        }

                        this.isSelected = false;
                        this.removeSelectParticle();
                    }else{
                        cc.log("==该宝石已被选中"+this.tagx,this.tagy);
                        this.isSelected = true;
                        this.addPartiSelect();
                    }
                    break;
                case ccui.Widget.TOUCH_CANCELED:
                    //当滑动划出宝石 也可以滑动有效
                    var beganPos = sender._touchBeganPosition;
                    var endPos =  sender._touchEndPosition;
                    if (Math.abs(endPos.x - beganPos.x) > 5 || Math.abs(endPos.y - beganPos.y) > 5 ){
                        if(Math.abs(endPos.x - beganPos.x)  > Math.abs(endPos.y - beganPos.y) ){
                            if(endPos.x - beganPos.x >0){
                                cc.log("===水平方向===向右滑=");
                                this.toDirection = "right";
                            }else{
                                cc.log("====水平方向==向左滑=");
                                this.toDirection = "left";
                            }
                        }else{
                            if(endPos.y - beganPos.y >0){
                                cc.log("=====竖直方向=====向上滑=");
                                this.toDirection = "up";
                            }else{
                                cc.log("=====竖直方向=====向下滑=");
                                this.toDirection = "down";
                            }
                        }
                        this.isSelected = false;
                        this.removeSelectParticle();
                    }

                    break;
                default:
                    break;
            }
        },this);


    },
    rechangeTagXY : function () {

        var xxx = this.tagx;
        var yyy = this.tagy;


        var tagxx = ((this.x+BOX_SIZE/2)/BOX_SIZE -1).toFixed(0);
        tagxx = Math.abs(tagxx);
        var tagyy = ( MAX_LINE -  (this.y+BOX_SIZE/2)/BOX_SIZE ).toFixed(0);
        tagyy = Math.abs(tagyy);

        if( parseInt(this.tagx) !=tagxx || parseInt(this.tagy) != tagyy){
            this.tagx = tagxx;
            this.tagy = tagyy;
            // cc.log( parseInt(this.tagx)*10+parseInt(this.tagy)+"==将原来的tag=="+xxx+","+yyy+" 修改为 == ",this.tagx,this.tagy);
        }

    },
    addPartiSelect : function () {
        //被选中特效
        if(this.particleSystemSelect == null){
            this.particleSystemSelect = cc.ParticleSystem.create(res.particle_gem_select);
            this.particleSystemSelect.resetSystem();
            this.particleSystemSelect.x = 0;
            this.particleSystemSelect.y = 0;
            this.addChild(this.particleSystemSelect,100);
        }
    },
    removeSelectParticle:function(){
        if ( this.particleSystemSelect){
            this.particleSystemSelect.removeFromParent(true);
        }
        this.particleSystemSelect = null;
    },
    removeSelf : function () {
        this.isExist = false;
        this.removeFromParent(true);
    },

    onExit : function () {

    },









});



