
// var audioEngine = cc.Audio;
var AudioManager = cc.Class.extend({

    _canPlayAudio : true,
    /**
     * 初使化声音引擎
     * @return {Boolean}
     */
    init:function(){
        cc.audioEngine.setMusicVolume(0.5);
        cc.audioEngine.setEffectsVolume(0.5);
        //如果第一次安装游戏，设置声音为打开状态

        return true;
    },
    /**
     * 播放背景音乐
     */
    play_music_bg_forres:function(res){
        if(G_BG_MUSIC_IS_OPEN){
            var sys = cc.sys;
            if (sys.os === sys.OS_ANDROID) {
                //TODO 安卓不播放背景音乐
                //var audio = document.getElementById(res);
                //audio.play();
            } else{
                cc.audioEngine.playMusic(res, true);
            }
        }
    },

    /**
     * 停止播放背景音乐
     */
    stop_music_bg_forres:function(){
        cc.audioEngine.stopMusic(true);
    },

    /**
     *播放自定义音效文件
     */
    play_effect_forres:function(file){

        if(G_BG_MUSIC_IS_OPEN){
            var sys = cc.sys;
            if (sys.os === sys.OS_ANDROID) {
                var audio = document.getElementById(file);
                audio.play();
            } else{
                cc.audioEngine.playEffect(file);
            }

        }
    }
});

AudioManager.s_SharedAudioManager = null;

AudioManager.getInstance = function () {

    if (!this.s_SharedAudioManager) {
        this.s_SharedAudioManager = new AudioManager();
        this.s_SharedAudioManager.init();
    }
    return this.s_SharedAudioManager;
};
