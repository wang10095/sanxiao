var load = {
	//加载界面
};

var audio = {
	defaule_sound_effect : "res/audio/bn_pressed.ogg",

};


var res = {
	ccs_MainScene : "res/MainScene.json",
	ccs_ChapterScene : "res/ChpterScene.json",
	ccs_GameScene : "res/GameScene.json",

	ccs_RedGem : "res/cell_red_gem.json",

	particle_gem_xiaochu_1 : "res/media/particle/boom_crystal_1.plist",
	particle_gem_xiaochu_2 : "res/media/particle/boom_crystal_2.plist",
	particle_gem_xiaochu_3 : "res/media/particle/boom_crystal_3.plist",
	particle_gem_xiaochu_4 : "res/media/particle/boom_crystal_4.plist",
	particle_gem_xiaochu_5 : "res/media/particle/boom_crystal_5.plist",
	particle_gem_xiaochu_6 : "res/media/particle/boom_crystal_6.plist",

	particle_gem_select : "res/media/particle/ice_fly.plist",



};

cc.loader.resPath = "";
cc.loader.audioPath = "";

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
