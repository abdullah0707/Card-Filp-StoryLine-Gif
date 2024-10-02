window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script22 = function()
{
  var player = GetPlayer();

var timer_action_animat = player.GetVar("Time_Animation");

setTimeout(() => {
timer_action_animat++;

	player.SetVar("Time_Animation", timer_action_animat);

}, 500);
}

window.Script23 = function()
{
  var player = GetPlayer();

var timer_back_wrong_animat = player.GetVar("Time_Back_wrong");

setTimeout(() => {
timer_back_wrong_animat++;

	player.SetVar("Time_Back_wrong", timer_back_wrong_animat);

}, 900);
}

};
