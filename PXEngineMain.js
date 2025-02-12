console.log("module PXEngineMain.js loaded");
class PXEngine2D_Audio{
    PX_audioEngine =  document.getElementById('audio_id');
    filesArray = '';
    EngineInitLogs(msg_code){
    msgCount2++;
    logInitData.innerHTML += "\n"+msgCount2+">>[PXEngine2D_Audio.js] "+ msg_code+"\n------------------------------------";
    strConsole += "\n"+msgCount2+">>[PXEngine2D_Audio.js] "+ msg_code+"\n------------------------------------";
    
    if(msgCount2 >= 3){
        logInitData.style.height= 200+"px";
        logInitData.style.overflowY = "scroll";
        logInitData.style.overflowX = "hidden";
    }
    if(msgCount2 >= 5){
        logInitData.innerHTML = "";
        logInitData.style.overflowY = "hidden";
        logInitData.style.overflowX = "hidden";
        msgCount2 = 0;
    }
    }
    loadToFile(file){
        this.filesArray = file;
    }
    initAudio(){
    console.log("Audio Device Init OK!");
    console.log("file:"+this.filesArray);
    this.PX_audioEngine.src = this.filesArray;
    //this.PX_audioEngine.loop = false;
    this.PX_audioEngine.onload = console.log("loaded Audio");this.PX_audioEngine.pause();
    }
    PXPlay(){
        console.log("Audio Device->play()");
        this.PX_audioEngine.play();
    }
    PXStop(){
        console.log("Audio Device->pause()");
        this.PX_audioEngine.pause();
    }
    mute(b){
        if(!b){
            this.PX_audioEngine.mute = false; 
        }
        if(b){
            this.PX_audioEngine.mute = true; 
        }
    }
}