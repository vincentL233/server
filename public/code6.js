gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.GDGreyButtonWithShadowObjects1_1final = [];

gdjs.GameoverCode.GDNewSpriteObjects1= [];
gdjs.GameoverCode.GDNewSpriteObjects2= [];
gdjs.GameoverCode.GDGreyButtonWithShadowObjects1= [];
gdjs.GameoverCode.GDGreyButtonWithShadowObjects2= [];
gdjs.GameoverCode.GDVerticalBubblesObjects1= [];
gdjs.GameoverCode.GDVerticalBubblesObjects2= [];


gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.GameoverCode.GDGreyButtonWithShadowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameoverCode.GDGreyButtonWithShadowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.GameoverCode.GDGreyButtonWithShadowObjects2);
for (var i = 0, k = 0, l = gdjs.GameoverCode.GDGreyButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.GameoverCode.GDGreyButtonWithShadowObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameoverCode.GDGreyButtonWithShadowObjects2[k] = gdjs.GameoverCode.GDGreyButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.GameoverCode.GDGreyButtonWithShadowObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameoverCode.GDGreyButtonWithShadowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameoverCode.GDGreyButtonWithShadowObjects1_1final.indexOf(gdjs.GameoverCode.GDGreyButtonWithShadowObjects2[j]) === -1 )
            gdjs.GameoverCode.GDGreyButtonWithShadowObjects1_1final.push(gdjs.GameoverCode.GDGreyButtonWithShadowObjects2[j]);
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
gdjs.copyArray(gdjs.GameoverCode.GDGreyButtonWithShadowObjects1_1final, gdjs.GameoverCode.GDGreyButtonWithShadowObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level", false);
}}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameoverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameoverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameoverCode.GDVerticalBubblesObjects1.length = 0;
gdjs.GameoverCode.GDVerticalBubblesObjects2.length = 0;

gdjs.GameoverCode.eventsList0(runtimeScene);
gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameoverCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.GameoverCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.GameoverCode.GDVerticalBubblesObjects1.length = 0;
gdjs.GameoverCode.GDVerticalBubblesObjects2.length = 0;


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
