let fScrX = 0;
let fScrY = 0;
let fMaxSize = 0;
let fMaxLoop = 0;

function GetScreenSize()
{
    fScrX = window.screen.width;
    fScrY = window.screen.height;
}
document.addEventListener('keydown', function(event) {if(event.code == ENTER)
{
  Message('PEngine:'+fScrX+':'+fScrY);
  Message('Error!!MaxLoopLimit = 0!');
  if(fMaxSize == 0)
  {
    Message('Error!!Size = 0!');
  }
  frameCount = 0;
  fBtnPl.innerHTML = "Benchmarking..";
 loop();fBtnPl.style.animation = 'Re_ColorText 200ms infinite';
 setTimeout("noLoop();fBtnPl.innerHTML = 'Start Benchmark'; fBtnPl.style.animation = 'none';clear(); ",1000);
  }
});
setTimeout("GetScreenSize();",100);
function setup() {
  createCanvas(1920, 1080);
  noLoop();
}
function draw() {

    fill((Math.random() * 255),(Math.random() * 255),(Math.random() * 255));
 for( let fRenderPartical = 1;fRenderPartical <= fMaxLoop;fRenderPartical++)
 {
    
    GetScreenSize();
    fTx.innerHTML = 'Frames:'+frameCount+'/1s'+ ' Loop:'+fRenderPartical+'/'+fMaxLoop+' MaxSize:'+fMaxSize;
    ellipse((Math.random() * fScrX), (Math.random() * fRenderPartical) + (Math.random() * fScrY), fMaxSize, fMaxSize);
 }
}
