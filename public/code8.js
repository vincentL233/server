gdjs._25490_34892Code = {};
gdjs._25490_34892Code.localVariables = [];
gdjs._25490_34892Code.GDNewSpriteObjects1= [];
gdjs._25490_34892Code.GDNewSpriteObjects2= [];
gdjs._25490_34892Code.GDNewSpriteObjects3= [];
gdjs._25490_34892Code.GDNewTextObjects1= [];
gdjs._25490_34892Code.GDNewTextObjects2= [];
gdjs._25490_34892Code.GDNewTextObjects3= [];
gdjs._25490_34892Code.GDNewText2Objects1= [];
gdjs._25490_34892Code.GDNewText2Objects2= [];
gdjs._25490_34892Code.GDNewText2Objects3= [];
gdjs._25490_34892Code.GDNewText3Objects1= [];
gdjs._25490_34892Code.GDNewText3Objects2= [];
gdjs._25490_34892Code.GDNewText3Objects3= [];
gdjs._25490_34892Code.GDNewText4Objects1= [];
gdjs._25490_34892Code.GDNewText4Objects2= [];
gdjs._25490_34892Code.GDNewText4Objects3= [];
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1= [];
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects2= [];
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects3= [];
gdjs._25490_34892Code.GDNewText5Objects1= [];
gdjs._25490_34892Code.GDNewText5Objects2= [];
gdjs._25490_34892Code.GDNewText5Objects3= [];
gdjs._25490_34892Code.GDNewText6Objects1= [];
gdjs._25490_34892Code.GDNewText6Objects2= [];
gdjs._25490_34892Code.GDNewText6Objects3= [];
gdjs._25490_34892Code.GDNewText7Objects1= [];
gdjs._25490_34892Code.GDNewText7Objects2= [];
gdjs._25490_34892Code.GDNewText7Objects3= [];


gdjs._25490_34892Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._25490_34892Code.GDNewText5Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._25490_34892Code.GDNewText6Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._25490_34892Code.GDNewText7Objects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs._25490_34892Code.GDNewText5Objects2.length ;i < len;++i) {
    gdjs._25490_34892Code.GDNewText5Objects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("name").getAsString() + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25490_34892Code.GDNewText6Objects2.length ;i < len;++i) {
    gdjs._25490_34892Code.GDNewText6Objects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("name").getAsString() + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25490_34892Code.GDNewText7Objects2.length ;i < len;++i) {
    gdjs._25490_34892Code.GDNewText7Objects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("name").getAsString() + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("time").getAsNumber()));
}
}}

}


};gdjs._25490_34892Code.asyncCallback25590652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._25490_34892Code.localVariables);

{ //Subevents
gdjs._25490_34892Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._25490_34892Code.localVariables.length = 0;
}
gdjs._25490_34892Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._25490_34892Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs._25490_34892Code.asyncCallback25590652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._25490_34892Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs._25490_34892Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1[k] = gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level", false);
}}

}


};

gdjs._25490_34892Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25490_34892Code.GDNewSpriteObjects1.length = 0;
gdjs._25490_34892Code.GDNewSpriteObjects2.length = 0;
gdjs._25490_34892Code.GDNewSpriteObjects3.length = 0;
gdjs._25490_34892Code.GDNewTextObjects1.length = 0;
gdjs._25490_34892Code.GDNewTextObjects2.length = 0;
gdjs._25490_34892Code.GDNewTextObjects3.length = 0;
gdjs._25490_34892Code.GDNewText2Objects1.length = 0;
gdjs._25490_34892Code.GDNewText2Objects2.length = 0;
gdjs._25490_34892Code.GDNewText2Objects3.length = 0;
gdjs._25490_34892Code.GDNewText3Objects1.length = 0;
gdjs._25490_34892Code.GDNewText3Objects2.length = 0;
gdjs._25490_34892Code.GDNewText3Objects3.length = 0;
gdjs._25490_34892Code.GDNewText4Objects1.length = 0;
gdjs._25490_34892Code.GDNewText4Objects2.length = 0;
gdjs._25490_34892Code.GDNewText4Objects3.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects3.length = 0;
gdjs._25490_34892Code.GDNewText5Objects1.length = 0;
gdjs._25490_34892Code.GDNewText5Objects2.length = 0;
gdjs._25490_34892Code.GDNewText5Objects3.length = 0;
gdjs._25490_34892Code.GDNewText6Objects1.length = 0;
gdjs._25490_34892Code.GDNewText6Objects2.length = 0;
gdjs._25490_34892Code.GDNewText6Objects3.length = 0;
gdjs._25490_34892Code.GDNewText7Objects1.length = 0;
gdjs._25490_34892Code.GDNewText7Objects2.length = 0;
gdjs._25490_34892Code.GDNewText7Objects3.length = 0;

gdjs._25490_34892Code.eventsList2(runtimeScene);
gdjs._25490_34892Code.GDNewSpriteObjects1.length = 0;
gdjs._25490_34892Code.GDNewSpriteObjects2.length = 0;
gdjs._25490_34892Code.GDNewSpriteObjects3.length = 0;
gdjs._25490_34892Code.GDNewTextObjects1.length = 0;
gdjs._25490_34892Code.GDNewTextObjects2.length = 0;
gdjs._25490_34892Code.GDNewTextObjects3.length = 0;
gdjs._25490_34892Code.GDNewText2Objects1.length = 0;
gdjs._25490_34892Code.GDNewText2Objects2.length = 0;
gdjs._25490_34892Code.GDNewText2Objects3.length = 0;
gdjs._25490_34892Code.GDNewText3Objects1.length = 0;
gdjs._25490_34892Code.GDNewText3Objects2.length = 0;
gdjs._25490_34892Code.GDNewText3Objects3.length = 0;
gdjs._25490_34892Code.GDNewText4Objects1.length = 0;
gdjs._25490_34892Code.GDNewText4Objects2.length = 0;
gdjs._25490_34892Code.GDNewText4Objects3.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs._25490_34892Code.GDBlackDecoratedButtonObjects3.length = 0;
gdjs._25490_34892Code.GDNewText5Objects1.length = 0;
gdjs._25490_34892Code.GDNewText5Objects2.length = 0;
gdjs._25490_34892Code.GDNewText5Objects3.length = 0;
gdjs._25490_34892Code.GDNewText6Objects1.length = 0;
gdjs._25490_34892Code.GDNewText6Objects2.length = 0;
gdjs._25490_34892Code.GDNewText6Objects3.length = 0;
gdjs._25490_34892Code.GDNewText7Objects1.length = 0;
gdjs._25490_34892Code.GDNewText7Objects2.length = 0;
gdjs._25490_34892Code.GDNewText7Objects3.length = 0;


return;

}

gdjs['_25490_34892Code'] = gdjs._25490_34892Code;
