gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDMediumStarObjects1= [];
gdjs.Game_32SceneCode.GDMediumStarObjects2= [];
gdjs.Game_32SceneCode.GDMediumStarObjects3= [];
gdjs.Game_32SceneCode.GDPoisonCastObjects1= [];
gdjs.Game_32SceneCode.GDPoisonCastObjects2= [];
gdjs.Game_32SceneCode.GDPoisonCastObjects3= [];
gdjs.Game_32SceneCode.GDSmallStarObjects1= [];
gdjs.Game_32SceneCode.GDSmallStarObjects2= [];
gdjs.Game_32SceneCode.GDSmallStarObjects3= [];
gdjs.Game_32SceneCode.GDDinoVitaObjects1= [];
gdjs.Game_32SceneCode.GDDinoVitaObjects2= [];
gdjs.Game_32SceneCode.GDDinoVitaObjects3= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite2Objects3= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite3Objects3= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite4Objects3= [];
gdjs.Game_32SceneCode.GDGemCounterTextObjects1= [];
gdjs.Game_32SceneCode.GDGemCounterTextObjects2= [];
gdjs.Game_32SceneCode.GDGemCounterTextObjects3= [];
gdjs.Game_32SceneCode.GDNewSprite7Objects1= [];
gdjs.Game_32SceneCode.GDNewSprite7Objects2= [];
gdjs.Game_32SceneCode.GDNewSprite7Objects3= [];
gdjs.Game_32SceneCode.GDNewTextObjects1= [];
gdjs.Game_32SceneCode.GDNewTextObjects2= [];
gdjs.Game_32SceneCode.GDNewTextObjects3= [];
gdjs.Game_32SceneCode.GDNewText2Objects1= [];
gdjs.Game_32SceneCode.GDNewText2Objects2= [];
gdjs.Game_32SceneCode.GDNewText2Objects3= [];
gdjs.Game_32SceneCode.GDNewText3Objects1= [];
gdjs.Game_32SceneCode.GDNewText3Objects2= [];
gdjs.Game_32SceneCode.GDNewText3Objects3= [];
gdjs.Game_32SceneCode.GDNewText4Objects1= [];
gdjs.Game_32SceneCode.GDNewText4Objects2= [];
gdjs.Game_32SceneCode.GDNewText4Objects3= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(gdjs.Game_32SceneCode.GDNewSprite3Objects1, gdjs.Game_32SceneCode.GDNewSprite3Objects2);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "dark");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite3Objects2[i].activateBehavior("Platform", true);
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
/* Reuse gdjs.Game_32SceneCode.GDNewSprite4Objects1 */
{gdjs.evtTools.camera.showLayer(runtimeScene, "dark");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDinoVitaObjects1Objects = Hashtable.newFrom({"DinoVita": gdjs.Game_32SceneCode.GDDinoVitaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMediumStarObjects1Objects = Hashtable.newFrom({"MediumStar": gdjs.Game_32SceneCode.GDMediumStarObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDinoVitaObjects2[k] = gdjs.Game_32SceneCode.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDinoVitaObjects2[k] = gdjs.Game_32SceneCode.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDinoVitaObjects2[k] = gdjs.Game_32SceneCode.GDDinoVitaObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDinoVitaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDinoVitaObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDinoVitaObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDinoVitaObjects1[k] = gdjs.Game_32SceneCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDinoVitaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects1[i].getBehavior("Animation").setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDinoVitaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDinoVitaObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Game_32SceneCode.asyncCallback25683532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback25683532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Game_32SceneCode.asyncCallback27308836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(3)), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback27308836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27295028);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GemCounterText"), gdjs.Game_32SceneCode.GDGemCounterTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32SceneCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Game_32SceneCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGemCounterTextObjects1[i].getBehavior("Text").setText("剩下碎片：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite3Objects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].activateBehavior("Platform", true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewText4Objects1[i].getBehavior("Text").setText("Time：" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.Game_32SceneCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewText4Objects1[i].getBehavior("Text").setText("Time：" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer"))));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27298188);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Game_32SceneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32SceneCode.GDNewSprite4Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite3Objects1[i].activateBehavior("Platform", false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSprite4Objects1[i].activateBehavior("Platform", false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("MediumStar"), gdjs.Game_32SceneCode.GDMediumStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDinoVitaObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMediumStarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27301684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GemCounterText"), gdjs.Game_32SceneCode.GDGemCounterTextObjects1);
/* Reuse gdjs.Game_32SceneCode.GDMediumStarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMediumStarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMediumStarObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGemCounterTextObjects1[i].getBehavior("Text").setText("剩下碎片：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.Game_32SceneCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDinoVitaObjects1[i].getY() > 750 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDinoVitaObjects1[k] = gdjs.Game_32SceneCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Gameover");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GemCounterText"), gdjs.Game_32SceneCode.GDGemCounterTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGemCounterTextObjects1[i].getBehavior("Text").getText() == "剩下碎片：0" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGemCounterTextObjects1[k] = gdjs.Game_32SceneCode.GDGemCounterTextObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25444476);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("time").setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer"));
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDMediumStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDMediumStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDMediumStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects1.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects2.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects3.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects1.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects2.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects3.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects3.length = 0;

gdjs.Game_32SceneCode.eventsList6(runtimeScene);
gdjs.Game_32SceneCode.GDMediumStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDMediumStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDMediumStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects1.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects2.length = 0;
gdjs.Game_32SceneCode.GDPoisonCastObjects3.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmallStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects1.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects2.length = 0;
gdjs.Game_32SceneCode.GDDinoVitaObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite4Objects3.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDGemCounterTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewSprite7Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText2Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText3Objects3.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects1.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects2.length = 0;
gdjs.Game_32SceneCode.GDNewText4Objects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
