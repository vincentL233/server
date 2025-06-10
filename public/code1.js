gdjs.levelCode = {};
gdjs.levelCode.localVariables = [];
gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final = [];

gdjs.levelCode.GDNewSprite2Objects1_1final = [];

gdjs.levelCode.GDlevlButton1Objects1_1final = [];

gdjs.levelCode.GDlevlButton2Objects1_1final = [];

gdjs.levelCode.GDlevlButton3Objects1_1final = [];

gdjs.levelCode.GDlevlButton4Objects1_1final = [];

gdjs.levelCode.GDNewSpriteObjects1= [];
gdjs.levelCode.GDNewSpriteObjects2= [];
gdjs.levelCode.GDlevlButton1Objects1= [];
gdjs.levelCode.GDlevlButton1Objects2= [];
gdjs.levelCode.GDlevlButton2Objects1= [];
gdjs.levelCode.GDlevlButton2Objects2= [];
gdjs.levelCode.GDlevlButton3Objects1= [];
gdjs.levelCode.GDlevlButton3Objects2= [];
gdjs.levelCode.GDlevlButton4Objects1= [];
gdjs.levelCode.GDlevlButton4Objects2= [];
gdjs.levelCode.GDNewSprite2Objects1= [];
gdjs.levelCode.GDNewSprite2Objects2= [];
gdjs.levelCode.GDBlackDecoratedButtonObjects1= [];
gdjs.levelCode.GDBlackDecoratedButtonObjects2= [];
gdjs.levelCode.GDBlackDecoratedButton2Objects1= [];
gdjs.levelCode.GDBlackDecoratedButton2Objects2= [];


gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.levelCode.GDNewSprite2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton1Objects2Objects = Hashtable.newFrom({"levlButton1": gdjs.levelCode.GDlevlButton1Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.levelCode.GDNewSprite2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton2Objects2Objects = Hashtable.newFrom({"levlButton2": gdjs.levelCode.GDlevlButton2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.levelCode.GDNewSprite2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton4Objects2Objects = Hashtable.newFrom({"levlButton4": gdjs.levelCode.GDlevlButton4Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.levelCode.GDNewSprite2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton3Objects2Objects = Hashtable.newFrom({"levlButton3": gdjs.levelCode.GDlevlButton3Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects = Hashtable.newFrom({"NewSprite2": gdjs.levelCode.GDNewSprite2Objects2});
gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDBlackDecoratedButtonObjects2Objects = Hashtable.newFrom({"BlackDecoratedButton": gdjs.levelCode.GDBlackDecoratedButtonObjects2});
gdjs.levelCode.eventsList0 = function(runtimeScene) {

{

gdjs.levelCode.GDNewSprite2Objects1.length = 0;

gdjs.levelCode.GDlevlButton1Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelCode.GDNewSprite2Objects1_1final.length = 0;
gdjs.levelCode.GDlevlButton1Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("levlButton1"), gdjs.levelCode.GDlevlButton1Objects2);
for (var i = 0, k = 0, l = gdjs.levelCode.GDlevlButton1Objects2.length;i<l;++i) {
    if ( gdjs.levelCode.GDlevlButton1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelCode.GDlevlButton1Objects2[k] = gdjs.levelCode.GDlevlButton1Objects2[i];
        ++k;
    }
}
gdjs.levelCode.GDlevlButton1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton1Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton1Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton1Objects1_1final.push(gdjs.levelCode.GDlevlButton1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("levlButton1"), gdjs.levelCode.GDlevlButton1Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects, gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDNewSprite2Objects1_1final.indexOf(gdjs.levelCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.levelCode.GDNewSprite2Objects1_1final.push(gdjs.levelCode.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton1Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton1Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton1Objects1_1final.push(gdjs.levelCode.GDlevlButton1Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelCode.GDNewSprite2Objects1_1final, gdjs.levelCode.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.levelCode.GDlevlButton1Objects1_1final, gdjs.levelCode.GDlevlButton1Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.levelCode.GDNewSprite2Objects1.length = 0;

gdjs.levelCode.GDlevlButton2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelCode.GDNewSprite2Objects1_1final.length = 0;
gdjs.levelCode.GDlevlButton2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("levlButton2"), gdjs.levelCode.GDlevlButton2Objects2);
for (var i = 0, k = 0, l = gdjs.levelCode.GDlevlButton2Objects2.length;i<l;++i) {
    if ( gdjs.levelCode.GDlevlButton2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelCode.GDlevlButton2Objects2[k] = gdjs.levelCode.GDlevlButton2Objects2[i];
        ++k;
    }
}
gdjs.levelCode.GDlevlButton2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton2Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton2Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton2Objects1_1final.push(gdjs.levelCode.GDlevlButton2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("levlButton2"), gdjs.levelCode.GDlevlButton2Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects, gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDNewSprite2Objects1_1final.indexOf(gdjs.levelCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.levelCode.GDNewSprite2Objects1_1final.push(gdjs.levelCode.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton2Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton2Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton2Objects1_1final.push(gdjs.levelCode.GDlevlButton2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelCode.GDNewSprite2Objects1_1final, gdjs.levelCode.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.levelCode.GDlevlButton2Objects1_1final, gdjs.levelCode.GDlevlButton2Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene1", false);
}}

}


{

gdjs.levelCode.GDNewSprite2Objects1.length = 0;

gdjs.levelCode.GDlevlButton4Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelCode.GDNewSprite2Objects1_1final.length = 0;
gdjs.levelCode.GDlevlButton4Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("levlButton4"), gdjs.levelCode.GDlevlButton4Objects2);
for (var i = 0, k = 0, l = gdjs.levelCode.GDlevlButton4Objects2.length;i<l;++i) {
    if ( gdjs.levelCode.GDlevlButton4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelCode.GDlevlButton4Objects2[k] = gdjs.levelCode.GDlevlButton4Objects2[i];
        ++k;
    }
}
gdjs.levelCode.GDlevlButton4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton4Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton4Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton4Objects1_1final.push(gdjs.levelCode.GDlevlButton4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("levlButton4"), gdjs.levelCode.GDlevlButton4Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects, gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton4Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDNewSprite2Objects1_1final.indexOf(gdjs.levelCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.levelCode.GDNewSprite2Objects1_1final.push(gdjs.levelCode.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton4Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton4Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton4Objects1_1final.push(gdjs.levelCode.GDlevlButton4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelCode.GDNewSprite2Objects1_1final, gdjs.levelCode.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.levelCode.GDlevlButton4Objects1_1final, gdjs.levelCode.GDlevlButton4Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene2", false);
}}

}


{

gdjs.levelCode.GDNewSprite2Objects1.length = 0;

gdjs.levelCode.GDlevlButton3Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelCode.GDNewSprite2Objects1_1final.length = 0;
gdjs.levelCode.GDlevlButton3Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("levlButton3"), gdjs.levelCode.GDlevlButton3Objects2);
for (var i = 0, k = 0, l = gdjs.levelCode.GDlevlButton3Objects2.length;i<l;++i) {
    if ( gdjs.levelCode.GDlevlButton3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelCode.GDlevlButton3Objects2[k] = gdjs.levelCode.GDlevlButton3Objects2[i];
        ++k;
    }
}
gdjs.levelCode.GDlevlButton3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton3Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton3Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton3Objects1_1final.push(gdjs.levelCode.GDlevlButton3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("levlButton3"), gdjs.levelCode.GDlevlButton3Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects, gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDlevlButton3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDNewSprite2Objects1_1final.indexOf(gdjs.levelCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.levelCode.GDNewSprite2Objects1_1final.push(gdjs.levelCode.GDNewSprite2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.levelCode.GDlevlButton3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDlevlButton3Objects1_1final.indexOf(gdjs.levelCode.GDlevlButton3Objects2[j]) === -1 )
            gdjs.levelCode.GDlevlButton3Objects1_1final.push(gdjs.levelCode.GDlevlButton3Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelCode.GDNewSprite2Objects1_1final, gdjs.levelCode.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.levelCode.GDlevlButton3Objects1_1final, gdjs.levelCode.GDlevlButton3Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene3", false);
}}

}


{

gdjs.levelCode.GDBlackDecoratedButtonObjects1.length = 0;

gdjs.levelCode.GDNewSprite2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final.length = 0;
gdjs.levelCode.GDNewSprite2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.levelCode.GDBlackDecoratedButtonObjects2);
for (var i = 0, k = 0, l = gdjs.levelCode.GDBlackDecoratedButtonObjects2.length;i<l;++i) {
    if ( gdjs.levelCode.GDBlackDecoratedButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.levelCode.GDBlackDecoratedButtonObjects2[k] = gdjs.levelCode.GDBlackDecoratedButtonObjects2[i];
        ++k;
    }
}
gdjs.levelCode.GDBlackDecoratedButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDBlackDecoratedButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final.indexOf(gdjs.levelCode.GDBlackDecoratedButtonObjects2[j]) === -1 )
            gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final.push(gdjs.levelCode.GDBlackDecoratedButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.levelCode.GDBlackDecoratedButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDNewSprite2Objects2Objects, gdjs.levelCode.mapOfGDgdjs_9546levelCode_9546GDBlackDecoratedButtonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.levelCode.GDBlackDecoratedButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final.indexOf(gdjs.levelCode.GDBlackDecoratedButtonObjects2[j]) === -1 )
            gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final.push(gdjs.levelCode.GDBlackDecoratedButtonObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.levelCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.levelCode.GDNewSprite2Objects1_1final.indexOf(gdjs.levelCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.levelCode.GDNewSprite2Objects1_1final.push(gdjs.levelCode.GDNewSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.levelCode.GDBlackDecoratedButtonObjects1_1final, gdjs.levelCode.GDBlackDecoratedButtonObjects1);
gdjs.copyArray(gdjs.levelCode.GDNewSprite2Objects1_1final, gdjs.levelCode.GDNewSprite2Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "排行", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.levelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.levelCode.GDNewSprite2Objects1[i].setX(gdjs.levelCode.GDNewSprite2Objects1[i].getX() - (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.levelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.levelCode.GDNewSprite2Objects1[i].setX(gdjs.levelCode.GDNewSprite2Objects1[i].getX() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.levelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.levelCode.GDNewSprite2Objects1[i].setY(gdjs.levelCode.GDNewSprite2Objects1[i].getY() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.levelCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.levelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.levelCode.GDNewSprite2Objects1[i].setY(gdjs.levelCode.GDNewSprite2Objects1[i].getY() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton2"), gdjs.levelCode.GDBlackDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.levelCode.GDBlackDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.levelCode.GDBlackDecoratedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.levelCode.GDBlackDecoratedButton2Objects1[k] = gdjs.levelCode.GDBlackDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.levelCode.GDBlackDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.levelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.levelCode.GDNewSpriteObjects1.length = 0;
gdjs.levelCode.GDNewSpriteObjects2.length = 0;
gdjs.levelCode.GDlevlButton1Objects1.length = 0;
gdjs.levelCode.GDlevlButton1Objects2.length = 0;
gdjs.levelCode.GDlevlButton2Objects1.length = 0;
gdjs.levelCode.GDlevlButton2Objects2.length = 0;
gdjs.levelCode.GDlevlButton3Objects1.length = 0;
gdjs.levelCode.GDlevlButton3Objects2.length = 0;
gdjs.levelCode.GDlevlButton4Objects1.length = 0;
gdjs.levelCode.GDlevlButton4Objects2.length = 0;
gdjs.levelCode.GDNewSprite2Objects1.length = 0;
gdjs.levelCode.GDNewSprite2Objects2.length = 0;
gdjs.levelCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.levelCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.levelCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.levelCode.GDBlackDecoratedButton2Objects2.length = 0;

gdjs.levelCode.eventsList0(runtimeScene);
gdjs.levelCode.GDNewSpriteObjects1.length = 0;
gdjs.levelCode.GDNewSpriteObjects2.length = 0;
gdjs.levelCode.GDlevlButton1Objects1.length = 0;
gdjs.levelCode.GDlevlButton1Objects2.length = 0;
gdjs.levelCode.GDlevlButton2Objects1.length = 0;
gdjs.levelCode.GDlevlButton2Objects2.length = 0;
gdjs.levelCode.GDlevlButton3Objects1.length = 0;
gdjs.levelCode.GDlevlButton3Objects2.length = 0;
gdjs.levelCode.GDlevlButton4Objects1.length = 0;
gdjs.levelCode.GDlevlButton4Objects2.length = 0;
gdjs.levelCode.GDNewSprite2Objects1.length = 0;
gdjs.levelCode.GDNewSprite2Objects2.length = 0;
gdjs.levelCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.levelCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.levelCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.levelCode.GDBlackDecoratedButton2Objects2.length = 0;


return;

}

gdjs['levelCode'] = gdjs.levelCode;
