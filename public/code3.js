gdjs.Game_32Scene1Code = {};
gdjs.Game_32Scene1Code.localVariables = [];
gdjs.Game_32Scene1Code.GDMediumStarObjects1= [];
gdjs.Game_32Scene1Code.GDMediumStarObjects2= [];
gdjs.Game_32Scene1Code.GDMediumStarObjects3= [];
gdjs.Game_32Scene1Code.GDPoisonCastObjects1= [];
gdjs.Game_32Scene1Code.GDPoisonCastObjects2= [];
gdjs.Game_32Scene1Code.GDPoisonCastObjects3= [];
gdjs.Game_32Scene1Code.GDDinoVitaObjects1= [];
gdjs.Game_32Scene1Code.GDDinoVitaObjects2= [];
gdjs.Game_32Scene1Code.GDDinoVitaObjects3= [];
gdjs.Game_32Scene1Code.GDNewSprite2Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite2Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite2Objects3= [];
gdjs.Game_32Scene1Code.GDNewSprite3Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite3Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite3Objects3= [];
gdjs.Game_32Scene1Code.GDNewSprite4Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite4Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite4Objects3= [];
gdjs.Game_32Scene1Code.GDGemCounterTextObjects1= [];
gdjs.Game_32Scene1Code.GDGemCounterTextObjects2= [];
gdjs.Game_32Scene1Code.GDGemCounterTextObjects3= [];
gdjs.Game_32Scene1Code.GDNewSprite5Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite5Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite5Objects3= [];
gdjs.Game_32Scene1Code.GDNewSprite7Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite7Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite7Objects3= [];
gdjs.Game_32Scene1Code.GDNewSprite6Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite6Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite6Objects3= [];
gdjs.Game_32Scene1Code.GDNewSprite8Objects1= [];
gdjs.Game_32Scene1Code.GDNewSprite8Objects2= [];
gdjs.Game_32Scene1Code.GDNewSprite8Objects3= [];
gdjs.Game_32Scene1Code.GDNewSpriteObjects1= [];
gdjs.Game_32Scene1Code.GDNewSpriteObjects2= [];
gdjs.Game_32Scene1Code.GDNewSpriteObjects3= [];


gdjs.Game_32Scene1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "dark");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32Scene1Code.GDNewSprite8Objects1, gdjs.Game_32Scene1Code.GDNewSprite8Objects2);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "dark");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite8Objects2.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite8Objects2[i].activateBehavior("Platform", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "dark"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene1Code.GDNewSprite4Objects1 */
{gdjs.evtTools.camera.showLayer(runtimeScene, "dark");
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite4Objects1[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.Game_32Scene1Code.mapOfGDgdjs_9546Game_959532Scene1Code_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.Game_32Scene1Code.GDDinoVitaObjects1});
gdjs.Game_32Scene1Code.mapOfGDgdjs_9546Game_959532Scene1Code_9546GDMediumStarObjects1Objects = Hashtable.newFrom({"MediumStar": gdjs.Game_32Scene1Code.GDMediumStarObjects1});
gdjs.Game_32Scene1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene1Code.GDDinoVitaObjects2[k] = gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene1Code.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene1Code.GDDinoVitaObjects2[k] = gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene1Code.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene1Code.GDDinoVitaObjects2[k] = gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene1Code.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene1Code.GDDinoVitaObjects1[k] = gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene1Code.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Game_32Scene1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27404228);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GemCounterText"), gdjs.Game_32Scene1Code.GDGemCounterTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32Scene1Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32Scene1Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDGemCounterTextObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDGemCounterTextObjects1[i].getBehavior("Text").setText("剩下碎片：" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite3Objects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite4Objects1[i].activateBehavior("Platform", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27405908);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32Scene1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Game_32Scene1Code.GDNewSprite8Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite8Objects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDNewSprite4Objects1[i].activateBehavior("Platform", false);
}
}
{ //Subevents
gdjs.Game_32Scene1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MediumStar"), gdjs.Game_32Scene1Code.GDMediumStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene1Code.mapOfGDgdjs_9546Game_959532Scene1Code_9546GDDinoVitaObjects1Objects, gdjs.Game_32Scene1Code.mapOfGDgdjs_9546Game_959532Scene1Code_9546GDMediumStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27409460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GemCounterText"), gdjs.Game_32Scene1Code.GDGemCounterTextObjects1);
/* Reuse gdjs.Game_32Scene1Code.GDMediumStarObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene1Code.GDMediumStarObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDMediumStarObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Game_32Scene1Code.GDGemCounterTextObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene1Code.GDGemCounterTextObjects1[i].getBehavior("Text").setText("剩下碎片：" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Game_32Scene1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32Scene1Code.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i].getY() > 720 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene1Code.GDDinoVitaObjects1[k] = gdjs.Game_32Scene1Code.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Gameover");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Scene1Code.GDMediumStarObjects1.length = 0;
gdjs.Game_32Scene1Code.GDMediumStarObjects2.length = 0;
gdjs.Game_32Scene1Code.GDMediumStarObjects3.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects1.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects2.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects3.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects3.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects1.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects2.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects3.length = 0;

gdjs.Game_32Scene1Code.eventsList2(runtimeScene);
gdjs.Game_32Scene1Code.GDMediumStarObjects1.length = 0;
gdjs.Game_32Scene1Code.GDMediumStarObjects2.length = 0;
gdjs.Game_32Scene1Code.GDMediumStarObjects3.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects1.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects2.length = 0;
gdjs.Game_32Scene1Code.GDPoisonCastObjects3.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects1.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects2.length = 0;
gdjs.Game_32Scene1Code.GDDinoVitaObjects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite2Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite3Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite4Objects3.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects1.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects2.length = 0;
gdjs.Game_32Scene1Code.GDGemCounterTextObjects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite5Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite7Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite6Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSprite8Objects3.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene1Code.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['Game_32Scene1Code'] = gdjs.Game_32Scene1Code;
