let fKernelFakeLoader = document.getElementById("loadedKernel");
let logStr = '';
function KernelLog(log){
    fKernelFakeLoader.innerHTML += "<br>[PXEngine]->"+log;
    console.log("\n[PXEngine]->"+log);
    fKernelFakeLoader.style.width = "auto";
    logStr += "\n[PXEngine]->"+log;
}
KernelLog("module PXEngineMain.js loaded");
let fBNav0 = document.getElementById("bv0");
        let fBNav1 = document.getElementById("bv1");
        let fBNav2 = document.getElementById("bv2");
        let fBNav3 = document.getElementById("bv3");
        let fBNav4 = document.getElementById("bv4");
        let fBNav5 = document.getElementById("bv5");
        let fBNav6 = document.getElementById("bv6");
class App{
    st = 0;
    call_count = 0;
    ShowWindow(id_handle,cmdShow){
        if(cmdShow){
            id_handle.style.display = "block";
        }
        else{
            id_handle.style.display = "none";
        }
    }
    switchBool(f){
      this.st = f;
    }
    changeBackground(id){
     if(this.st > 1){
        this.st = 0;
     }
     KernelLog("changeBackground()->"+this.st);
     switch(this.st){
        case 0:
            id.style.background = "#000003";
            KernelLog("changeBackground()->Fill Background to #010409 color offset");
     document.getElementById("pageid").style.borderBottom  = "1px solid #3a3939";
     break;
        case 1:
            KernelLog("changeBackground()->load image code.png");
            id.style.backgroundImage = "url('code.png')";
            document.getElementById("pageid").style.borderBottom  = "none";
        break;
     }
    }
    ReSizeWindow(id){
        this.call_count++;
        if(this.call_count > 1){
            this.call_count = 0;
        }
        if(!this.call_count){
            id.style.height = "100px";
        }
        if(this.call_count){
            id.style.height = "auto";
        }
    }
    minSizeWindow(id){
        id.style.height = "100px";
    }
    to_float(int_v){
        return parseFloat(int_v);
    }
    redirect(url){
        window.open(url);
    }
}
class PXEngineMainDevice{
    displayX = window.screen.width;
    displayY = window.screen.height;
    fDeviceHandle = 0;
    userDeviceArray = [
        {device: 'Android', platform: /Android/},
        {device: 'iPhone', platform: /iPhone/},
        {device: 'iPad', platform: /iPad/},
        {device: 'Symbian', platform: /Symbian/},
        {device: 'Windows Phone', platform: /Windows Phone/},
        {device: 'Tablet OS', platform: /Tablet OS/},
        {device: 'Linux', platform: /Linux/},
        {device: 'Windows', platform: /Windows NT/},
        {device: 'Macintosh', platform: /Macintosh/}
    ];
     platform = navigator.userAgent;
    initUserAgent(){
           
            for (var i in this.userDeviceArray) {
                if (this.userDeviceArray[i].platform.test(this.platform))
                 {
                    return this.userDeviceArray[i].device;
                  }
                }
                
    }
    fDeviceHandle = this.initUserAgent();
    init(){
        KernelLog("module PXEngineMainDevice inizilization!");
        KernelLog("Device:"+this.fDeviceHandle + "<br> Display Init:"+this.displayX+":"+this.displayY);
    }
    scaleWindowToDevice(app_handle){
        
        if(this.fDeviceHandle == 'Android'){
            app_handle.style.zoom = "50%";
            KernelLog("Zoomed to Mobile: Zoom 60%");
        }
        if(this.fDeviceHandle == 'iPhone'){
            app_handle.style.zoom = "50%";
            KernelLog("Zoomed to Mobile: Zoom 60%");
        }
        if(this.fDeviceHandle == 'Windows'){
            app_handle.style.zoom = "100%";
            KernelLog("Zoomed to Desktop: Zoom 100%");
        }
        if(this.fDeviceHandle == 'Linux'){
            app_handle.style.zoom = "100%";
            KernelLog("Zoomed to Desktop: Zoom 100%");
        }
        if(this.fDeviceHandle == 'Macintosh'){
            app_handle.style.zoom = "100%";
            KernelLog("Zoomed to Desktop: Zoom 100%");
        }
    }
}
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
    KernelLog("Audio Device Init OK!");
    KernelLog("file:"+this.filesArray);
    this.PX_audioEngine.src = this.filesArray;
    //this.PX_audioEngine.loop = false;
    this.PX_audioEngine.onload = KernelLog("loaded Audio");this.PX_audioEngine.pause();
    }
    PXPlay(){
        KernelLog("Audio Device->play()");
        this.PX_audioEngine.play();
    }
    PXStop(){
        KernelLog("Audio Device->pause()");
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