let fRegKey = 0;
var fGameWindow = document.getElementById('game-window');
var fLBottom =  document.getElementById('bottom-window');
var fImageSprites = [ 'test.png','p1.png','p2.png'];
let fFrames = 0;


function fEngine()
{ 
     fFrames++;
	if(fFrames == 0){fLBottom.src = fImageSprites[1];}
	if(fFrames == 1){fLBottom.src = fImageSprites[2];}
	if(fFrames == 2){fLBottom.src = fImageSprites[3];}
}