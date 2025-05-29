let bl0 = document.getElementById("bl0");
let bl1 = document.getElementById("bl1");
let bl2 = document.getElementById("bl2");
let bl3 = document.getElementById("bl3");
//
let t_px = 0;
function logL(t,m){
    let t_px_style = "color: #ffffff; font-family: monospace;transform: translateX(40px); margin: -16;";
    let t_px_style2 = "color: #010101; font-family: monospace;transform: translateX(40px); margin: -16;";
    t_px = document.createElement('p'); 
    t_px.id = "logs";
    t_px.style = new PXEngine_1_0().m_initLog ? t_px_style2 : t_px_style;  
    main_container.appendChild(t_px);
    m ? t_px.innerHTML = t :  t_px.innerHTML += "<br>"+t ;
   // document.documentElement.removeChild(t_px);
   }
//
function dox(ip){  
    let logs = document.getElementById("logs");  
    let API_KEY = 'https://api.2ip.io/'+ip+'?token=scbl9m73lqki9cr5&lang=ru';
    fetch(API_KEY)  
                .then(  
                  function(response) {  
                    if (response.status !== 200) {  
                      logL('Looks like there was a problem. Status Code: ' +  
                        response.status);  
                        
                      return;  
                    }
              
                    // Examine the text in the response  
                    response.json().then(function(data) {  
                        
                        gtST("YOU DOXSED");
                        logL("IP:"+data.ip);   
                        logL("country:"+data.country);
                        logL("lat:"+data.lat);
                        logL("lon:"+data.lon);
                        logL("timezone:"+data.timezone); 
                        console.log(data);
                        putTextToDox(data.ip);
                        logs.style = t_px_style;   
                    });  
                  }  
                )  
                .catch(function(err) {  
                  this.log('Fetch Error :-S' + err);  
                });
}
let userDeviceArray = [
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
  let  platform = navigator.userAgent;
      class Device{
    getDevice() {
        for (var i in userDeviceArray) {
            if (userDeviceArray[i].platform.test(platform))
             {
                return userDeviceArray[i].device;
              }
            }
    }
  }
 
        class PXEngine_1_0{
            PXENGINE_START = false;
            spriteFiles;
            backgroundFiles;
            GameWindowX;
            GameWindowY;
            VideoBuffer;
            MainWindow;
            dctx = window.screen.width;
            dcty = window.screen.height;
            wctx = window.innerWidth;
            wcty = window.innerHeight;
            PXENGINE_VERSION = "1.0.3";
            API_KEY = 'https://api.2ip.io/?token=scbl9m73lqki9cr5&lang=ru';
            m_initLog = false;
              
        videoPlayer;
        vid = 0;
        videoPlayer = "";
        playlist = [];
        status(st){
        if(st){
            this.videoPlayer.play();
            video_state.innerHTML = "Играет..";
        }
        if(!st){
            this.videoPlayer.pause();
            video_state.innerHTML = "Пауза";
        }
       }
        initPlayer(id){
            this.videoPlayer = id;
        }
        select(idv){
            this.vid = idv;
            if(idv > this.playlist.length){
                this.vid  = 0;
            }
            if(idv < 0){
                this.vid  = this.playlist.length;
            }
        }
       initVideo(){
        this.videoPlayer.loop = true;
        this.videoPlayer.src = this.playlist[this.vid];
       }
       volume(vOffset){
        this.videoPlayer.volume = vOffset;
        if(vOffset > 1){
            vOffset = 0;
            
        }
       }
       log(t,m){
        let t_px_style = "color: #ffffff; font-family: monospace;transform: translateX(40px); margin: -16;";
        let t_px_style2 = "color: #010101; font-family: monospace;transform: translateX(40px); margin: -16;";
        let t_px = document.createElement('p');
        t_px.style = this.m_initLog ? t_px_style2 : t_px_style; 
        main_container.appendChild(t_px);
        m ? t_px.innerHTML = t :  t_px.innerHTML += "<br>"+t ;
       // document.documentElement.removeChild(t_px);
       }
       init(){
        this.PXENGINE_START = true;
        this.log("PXENGINE "+this.PXENGINE_VERSION + " status: OK"+"<br>github/hcpp20334<br>module: pxengine_1.0.js")
       }
       reFillMain(){ 
        let fOpacity_offset = 0.0;
        let self = this;
        let tr_0 =  setInterval(() => {
        fOpacity_offset = fOpacity_offset + 0.1;
        document.documentElement.style.background = "rgba(1,1,1,"+fOpacity_offset+")"; 
        //self.log("func reFillMain() -> started" + fOpacity_offset,0);
        if (fOpacity_offset >= 1.0) {
            document.getElementById("doxid").style.display = "block";
            clearInterval(tr_0);
        }}, 100);
       }
            initAudio(id){
                this.audioBuffer  = id;
                console.log("PXENGINE::audio init() ok");
                this.PXENGINE_START = true;
            }
            pxLoadFile(file){
                if(this.PXENGINE_START)
               this.audioFile = file;
               console.log("PXENGINE::audio load file"+file);
               if(!this.PXENGINE_START){
                alert("PXENGINE::audio: Fatal Error!! Not InitAudio();");
               }
            }
            AudioLoad(){
                if(this.PXENGINE_START) 
                console.log("pxAudio init() ok");
                this.audioBuffer.src = this.audioFile;
                if(!this.PXENGINE_START){
                    alert("PXENGINE: Fatal Error!! Not InitAudio();");
                   }
            }
            pxPlay(){
                if(this.PXENGINE_START)
                this.audioBuffer.play();
                console.log("pxAudio play()");
                if(!this.PXENGINE_START){
                    alert("PXENGINE: Fatal Error!! Not InitAudio();");
                   }
            }
            CreateImage(src,x,y,posX,posY,id){
             this.VideoBuffer.src = src;
             this.VideoBuffer.style.width = x+"px";
             this.VideoBuffer.style.height= y+"px";
             this.VideoBuffer.style.transform = "translate("+posX+"px,"+posY+"px)";
             this.MainWindow.appendChild(this.VideoBuffer);
            }
            deleteImage(){
                this.VideoBuffer.src = "";
            }
            aFadeinImg(id,timeInterval){
                id.style.opacity = "100px";
                setTimeout(function(){
                id.style.opacity = "none";
                },timeInterval);
            }
            injectToImg(gameframe,idimg){
                gameframe.appendChild(idimg);
            }
            asp = 0;
            frame_st = 0;
            x = window.screen.width;
            y = window.screen.height;
            //
            g = 0;
            close(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.height = "0px";
                }
            }
            show(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.height = "500px";
                }
            }
            mobile(){
              if(device.getDevice() == 'Android'){
                document.documentElement.style.zoom = "150%";
              }
              if(device.getDevice() == 'iPhone'){
                document.documentElement.style.zoom = "150%";
              }
            }
            loadModule(src){
                let pxmodule = document.createElement("script");
                pxmodule.src = src;
                document.body.appendChild(pxmodule);
            }
            frame(id,state){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
            if(state > 1){
                alert("PXEngine: Fatal Error!! Frame not > 2 line 176")
            }
             if(!state){
                id.style.display = "none";
             }
             if(state){
                id.style.display = "block";
             }
            }
            }
            getIPinfo(){
                api.PXDEBUG.getInfo();
                this.log("Get IP Info...");
                fetch(this.API_KEY)  
                .then(  
                  function(response) {  
                    if (response.status !== 200) {  
                      logL('Looks like there was a problem. Status Code: ' +  
                        response.status);  
                        
                      return;  
                    }
              
                    // Examine the text in the response  
                    response.json().then(function(data) {  
                        gtST("YOU DOXSED");
                        // logL("IP:"+data.ip);   
                        // logL("country:"+data.country);
                        // logL("lat:"+data.lat);
                        // logL("lon:"+data.lon);
                        // logL("timezone:"+data.timezone); 
                        console.log(data);
                        putTextToDox(data.ip);
                        dox(data.ip);
                        this.m_initLog = false; 
                    });  
                  }  
                )  
                .catch(function(err) {  
                  this.log('Fetch Error :-S' + err);  
                });
                
            }
            addLink(link){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                    window.open(link,0);
                }
            }
            openFrameToCenter(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                    id.style.position = "absolute";
                    id.style.height = "500px";
                    id.style.transform = "transform("+parseFloat(window.screen.width - id.style.width / 2)+"px,"+parseFloat(window.screen.height - id.style.height / 2)+"px)";
                }
            }
            animload(){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                 this.asp++;
                 if(this.asp > 3){
                    this.asp  = 0;
                 }
                 if(!this.asp){
                     bl0.style.boxShadow = "0px 0px 50px #0040ff";
                     bl1.style.boxShadow = "none";
                     bl2.style.boxShadow = "none";
                     bl3.style.boxShadow = "none";
                    //
                    bl0.style.transform = "translate(220px,64px)";
                    bl1.style.transform = "translate(220px,0px)";
                    bl2.style.transform = "translate(220px,0px)";
                    bl3.style.transform = "translate(220px,0px)";
                   
                 }
                 if(this.asp){
                    bl1.style.boxShadow = "0px 0px 50px #0040ff";
                     bl0.style.boxShadow = "none";
                     bl2.style.boxShadow = "none";
                     bl3.style.boxShadow = "none";
                    //
                    bl1.style.transform = "translate(220px,64px)";
                    bl0.style.transform = "translate(220px,0px)";
                    bl2.style.transform = "translate(220px,0px)";
                    bl3.style.transform = "translate(220px,0px)";
                    
                 }
                 if(this.asp == 2){
                    bl2.style.boxShadow = "0px 0px 50px #0040ff";
                     bl1.style.boxShadow = "none";
                     bl0.style.boxShadow = "none";
                     bl3.style.boxShadow = "none";
                    //
                    bl2.style.transform = "translate(220px,64px)";
                    bl1.style.transform = "translate(220px,0px)";
                    bl0.style.transform = "translate(220px,0px)";
                    bl3.style.transform = "translate(220px,0px)";
                 }
                 if(this.asp == 3){
                    bl3.style.boxShadow = "0px 0px 50px #0040ff";
                     bl1.style.boxShadow = "none";
                     bl2.style.boxShadow = "none";
                     bl0.style.boxShadow = "none";
                    //
                    bl3.style.transform = "translate(220px,64px)";
                    bl1.style.transform = "translate(220px,0px)";
                    bl2.style.transform = "translate(220px,0px)";
                    bl0.style.transform = "translate(220px,0px)";
                 }
            }
        }
        }
        class PXEngineDebug{
            _api = new PXEngine_1_0();
            device_info = {name: new Device().getDevice()}; 
            display_size = {ctx: this._api.dctx , cty: this._api.dcty};
            window_size = {ctx: this._api.wctx , cty: this._api.wcty};
            _data = {state: this._api.PXENGINE_START,version: this._api.PXENGINE_VERSION};
            getInfo(){
                this._api.log("<br> device_info: name:"+this.device_info.name,0);
                this._api.log("<br>display_size: ctx"+this.display_size.ctx+" cty:"+this.display_size.cty,0);
                this._api.log("<br>window_size: ctx"+this.window_size.ctx + " cty:"+this.window_size.cty,0);
                this._api.log("<br>_data: state" + this._data.state ? "true" : "false",0);
                this._api.log("<br>_data: version "+ this._data.version,0);
            }
            };
          