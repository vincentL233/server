gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDYellowButtonObjects1_1final = [];

gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDYellowButtonObjects1= [];
gdjs.winCode.GDYellowButtonObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.winCode.GDYellowButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.winCode.GDYellowButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.winCode.GDYellowButtonObjects2);
for (var i = 0, k = 0, l = gdjs.winCode.GDYellowButtonObjects2.length;i<l;++i) {
    if ( gdjs.winCode.GDYellowButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.winCode.GDYellowButtonObjects2[k] = gdjs.winCode.GDYellowButtonObjects2[i];
        ++k;
    }
}
gdjs.winCode.GDYellowButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.winCode.GDYellowButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.winCode.GDYellowButtonObjects1_1final.indexOf(gdjs.winCode.GDYellowButtonObjects2[j]) === -1 )
            gdjs.winCode.GDYellowButtonObjects1_1final.push(gdjs.winCode.GDYellowButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.winCode.GDYellowButtonObjects1_1final, gdjs.winCode.GDYellowButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDYellowButtonObjects1.length = 0;
gdjs.winCode.GDYellowButtonObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDYellowButtonObjects1.length = 0;
gdjs.winCode.GDYellowButtonObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
