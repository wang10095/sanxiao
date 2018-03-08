

cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : true);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.SHOW_ALL);

    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        Utils.replayScene(MainScene);
    }, this);
};


cc.game.run();