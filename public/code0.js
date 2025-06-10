gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewSprite4Objects1_1final = [];

gdjs.startCode.GDRedButtonWithShadowObjects1_1final = [];

gdjs.startCode.GDWhiteSleekButtonObjects1_1final = [];

gdjs.startCode.GDNewTiledSpriteObjects1= [];
gdjs.startCode.GDNewTiledSpriteObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];
gdjs.startCode.GDNewParticlesEmitterObjects1= [];
gdjs.startCode.GDNewParticlesEmitterObjects2= [];
gdjs.startCode.GDBlueExplosionObjects1= [];
gdjs.startCode.GDBlueExplosionObjects2= [];
gdjs.startCode.GDWhiteSleekButtonObjects1= [];
gdjs.startCode.GDWhiteSleekButtonObjects2= [];
gdjs.startCode.GDRedButtonWithShadowObjects1= [];
gdjs.startCode.GDRedButtonWithShadowObjects2= [];
gdjs.startCode.GDNewSprite4Objects1= [];
gdjs.startCode.GDNewSprite4Objects2= [];
gdjs.startCode.GDNewTextInputObjects1= [];
gdjs.startCode.GDNewTextInputObjects2= [];


gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDWhiteSleekButtonObjects2Objects = Hashtable.newFrom({"WhiteSleekButton": gdjs.startCode.GDWhiteSleekButtonObjects2});
gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDNewSprite4Objects2Objects = Hashtable.newFrom({"NewSprite4": gdjs.startCode.GDNewSprite4Objects2});
gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.startCode.GDNewSprite4Objects1.length = 0;

gdjs.startCode.GDWhiteSleekButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.startCode.GDNewSprite4Objects1_1final.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.startCode.GDWhiteSleekButtonObjects2);
for (var i = 0, k = 0, l = gdjs.startCode.GDWhiteSleekButtonObjects2.length;i<l;++i) {
    if ( gdjs.startCode.GDWhiteSleekButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.startCode.GDWhiteSleekButtonObjects2[k] = gdjs.startCode.GDWhiteSleekButtonObjects2[i];
        ++k;
    }
}
gdjs.startCode.GDWhiteSleekButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.startCode.GDWhiteSleekButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.startCode.GDWhiteSleekButtonObjects1_1final.indexOf(gdjs.startCode.GDWhiteSleekButtonObjects2[j]) === -1 )
            gdjs.startCode.GDWhiteSleekButtonObjects1_1final.push(gdjs.startCode.GDWhiteSleekButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.startCode.GDNewSprite4Objects2);
gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.startCode.GDWhiteSleekButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDWhiteSleekButtonObjects2Objects, gdjs.startCode.mapOfGDgdjs_9546startCode_9546GDNewSprite4Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.startCode.GDNewSprite4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.startCode.GDNewSprite4Objects1_1final.indexOf(gdjs.startCode.GDNewSprite4Objects2[j]) === -1 )
            gdjs.startCode.GDNewSprite4Objects1_1final.push(gdjs.startCode.GDNewSprite4Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.startCode.GDWhiteSleekButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.startCode.GDWhiteSleekButtonObjects1_1final.indexOf(gdjs.startCode.GDWhiteSleekButtonObjects2[j]) === -1 )
            gdjs.startCode.GDWhiteSleekButtonObjects1_1final.push(gdjs.startCode.GDWhiteSleekButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.startCode.GDNewSprite4Objects1_1final, gdjs.startCode.GDNewSprite4Objects1);
gdjs.copyArray(gdjs.startCode.GDWhiteSleekButtonObjects1_1final, gdjs.startCode.GDWhiteSleekButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level", false);
}}

}


{

gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.startCode.GDRedButtonWithShadowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.startCode.GDRedButtonWithShadowObjects2);
for (var i = 0, k = 0, l = gdjs.startCode.GDRedButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.startCode.GDRedButtonWithShadowObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.startCode.GDRedButtonWithShadowObjects2[k] = gdjs.startCode.GDRedButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.startCode.GDRedButtonWithShadowObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.startCode.GDRedButtonWithShadowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.startCode.GDRedButtonWithShadowObjects1_1final.indexOf(gdjs.startCode.GDRedButtonWithShadowObjects2[j]) === -1 )
            gdjs.startCode.GDRedButtonWithShadowObjects1_1final.push(gdjs.startCode.GDRedButtonWithShadowObjects2[j]);
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
gdjs.copyArray(gdjs.startCode.GDRedButtonWithShadowObjects1_1final, gdjs.startCode.GDRedButtonWithShadowObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.startCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSprite4Objects1[i].setX(gdjs.startCode.GDNewSprite4Objects1[i].getX() - (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.startCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSprite4Objects1[i].setX(gdjs.startCode.GDNewSprite4Objects1[i].getX() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.startCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSprite4Objects1[i].setY(gdjs.startCode.GDNewSprite4Objects1[i].getY() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.startCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.startCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.startCode.GDNewSprite4Objects1[i].setY(gdjs.startCode.GDNewSprite4Objects1[i].getY() - (10));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.startCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDNewTextInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDNewTextInputObjects1[k] = gdjs.startCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.startCode.GDNewTextInputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("name").setString((( gdjs.startCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.startCode.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.startCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.startCode.GDBlueExplosionObjects1.length = 0;
gdjs.startCode.GDBlueExplosionObjects2.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewTextInputObjects1.length = 0;
gdjs.startCode.GDNewTextInputObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;
gdjs.startCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.startCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.startCode.GDBlueExplosionObjects1.length = 0;
gdjs.startCode.GDBlueExplosionObjects2.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.startCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.startCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.startCode.GDNewSprite4Objects1.length = 0;
gdjs.startCode.GDNewSprite4Objects2.length = 0;
gdjs.startCode.GDNewTextInputObjects1.length = 0;
gdjs.startCode.GDNewTextInputObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
