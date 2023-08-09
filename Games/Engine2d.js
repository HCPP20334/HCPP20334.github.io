var fBstart_engine = document.getElementById('start_engine');


fBstart_engine.onclick = function()
{
	Game(300,300,true);

}
function Game(fEn_X,fEn_Y,EnState)
{
	console.log("Engine Starting ..");
	console.log("XY:"+fEn_X+":"+fEn_Y);
}