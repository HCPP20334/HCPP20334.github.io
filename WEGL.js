

function setup()
{
    let canvas = createCanvas(300,600,WEBGL);
    
    canvas.style("display","block");
    canvas.style("margin","auto");
    canvas.style("width","100%");
    canvas.style("height","100%");
    
    
}
function SetTx(data)
{
    let bufferDebug = document.createElement("p");
    bufferDebug.style = "position:absolute;z-index:-1;color:white;font-family:'WR';transform:translate(0px,400px)";
    
    bufferDebug.innerHTML = data;
    console.log(data);
}
function draw()
{
    
    let rd = 100;
    let x,y;
    x++;
    y++;
    let flX = sin(frameCount * 0.04) * 20;
    let flY = sin(frameCount * 0.04) * 20;
    background('rgba(255,255,255, 0)');
    ambientLight(0,255/4,0);
    directionalLight(0,0,255,-1,0,0);
   // spotLight(0, 0, 255, flX, flY,250);
    pointLight(0, 0, 255, flX, flY,250);
push();
translate(flX,flY);
rotateX(frameCount / 100);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
translate(flX,flY);
rotateZ(frameCount / rd);
rotateX(frameCount / rd);
ambientMaterial(250);
specularMaterial (250);
box(50,50,50,50);
const PLAPImem = performance.memory;
const PLmemoryUsed  = (PLAPImem.usedJSHeapSize / 1024) / 1024;
const PLmemoryTotal = (PLAPImem.totalJSHeapSize / 1024);
const PLmemoryJsHeapSize  = (PLAPImem.jsHeapSizeLimit / 1024) / 1024;
//
debugData.style.color="white";
debugData.style ="transform: translateY(100px);"
debugData.style.fontFamily="WR";
debugData.innerHTML = "X:"+parseInt(sin(frameCount * 0.04) * 20)+" Y :"+parseInt(sin(frameCount * 0.04) * 20)+" fps:"+parseInt(frameRate())+" mem:"+parseInt(PLmemoryUsed);
console.log("X:"+sin(frameCount * 0.04) * 20+"Y:"+sin(frameCount * 0.04) * 20+" fps:"+frameCount);
}