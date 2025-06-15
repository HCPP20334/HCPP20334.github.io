
//
let t_px = 0;
let logs = document.getElementById("logs");  
function logL(t,m){
    let t_px_style = "color: #ffffff; font-family: monospace;transform: translateX(40px); margin: -16;";
    let t_px_style2 = "color: #010101; font-family: monospace;transform: translateX(40px); margin: -16;";
    t_px.style = new PXEngine_1_0().m_initLog ? t_px_style2 : t_px_style;  
    
    console.log(m ? t : "\n"+ t);
   // document.documentElement.removeChild(t_px);
   }
//
setInterval(function(){
    console.clear();
    logL("Console Cleaned");
},10000);
window.addEventListener("error",function(exception_){
    logL(exception_.error);
});

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
            PXENGINE_VERSION = "POWERED BY PWENGINEJS_1.0.4";
            API_KEY = 'https://api.2ip.io/?token=scbl9m73lqki9cr5&lang=ru';
            m_initLog = false;
            strmeta = [];
              
        videoPlayer;
        vid = 0;
        videoPlayer = "";
        playlist = [];
        videoLoaded = false;
        //
        str = {
            message:{
                error_init_player: "Ошибка Инизиализации Плеера!!",
                error_init_api: "Ошибка Инициализации API (PXEngine.js)",
                success_init_api: "API Инициализированно успешно!",
                error_audio_handle: "Переданный элемент не является <audio>",
                error_video_handle: "Переданный элемент не является видео!"
            }
        };
        status(st){
        if(st){
            this.videoPlayer.play();
          //  video_state.innerHTML = "Играет..";
        }
        if(!st){
            this.videoPlayer.pause();
          //  video_state.innerHTML = "Пауза";
        }
       }
       playVideo(){
        this.videoPlayer.play();
       }
       initPlayer(videoElement) {
        if (!(videoElement instanceof HTMLVideoElement)) {
            console.error(this.str.error_video_handle);
            return false;
        }
        this.videoPlayer = videoElement;
        return true;
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
       initVideoFromFile(file) {
        if (!this.videoPlayer) {
            console.error("Плеер не инициализирован!");
            return;
        }

        this.videoPlayer.loop = true;
        this.videoPlayer.src = file;
        this.videoPlayer.autoplay = true;
        this.videoPlayer.muted = true; // Разрешает автовоспроизведение в браузерах

        console.log("Файл:", this.videoPlayer.src);

        // Обработка ошибок
        this.videoPlayer.onerror = () => {
            console.error("Ошибка загрузки видео:", this.videoPlayer.error);
           // MessageLog("Video", `Ошибка: ${this.videoPlayer.error.message}`);
        };

        this.videoPlayer.oncanplay = () => {
            console.log("Видео готово к воспроизведению!");
          //  MessageLog("Video", "Видео загружено");
        };
    }
       volume(vOffset){
        this.videoPlayer.volume = vOffset;
        if(vOffset > 1){
            vOffset = 0;
            
        }
       }
       LoadModule(src , boolean_async, btag){
        if(this.PXENGINE_START){

        let module_ = document.createElement("script");
        boolean_async ? module_.async = "false" : module_.async = "true";
        let descriptors = {html: document.documentElement , body: document.body};
        if(btag == undefined){
            descriptors.html.appendChild(module_);
        }
        else{
            btag.appendChild(module_);
        }
    }
        if(!this.PXENGINE_START){
            alert("PXENGINE: Fatal Error!! Not Init();");
           }
       }
       init(){
        this.PXENGINE_START = true;
       logL("PXENGINE "+this.PXENGINE_VERSION + " status: OK"+"<br>github/hcpp20334<br>module: pxengine_1.0.js")
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
                if(!this.audioBuffer instanceof HTMLAudioElement){
                  console.error(this.str.error_audio_handle);
                }
                console.log("PXENGINE::audio init() ok");
                this.PXENGINE_START = true;
            }
            AudioLoad(idx){
                if(this.PXENGINE_START) 
                console.log("pxAudio init() ok");
                this.audioBuffer.src = this.playlist[idx];
                console.log(idx,".",this.playlist[idx]);
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
            pxPause(){
                if(this.PXENGINE_START)
                this.audioBuffer.pause();
                console.log("pxAudio play()");
                if(!this.PXENGINE_START){
                    alert("PXENGINE: Fatal Error!! Not InitAudio();");
                   }
            }
            volumeA(vOffset){
                this.audioBuffer.volume = vOffset;
                if(vOffset > 1){
                    vOffset = 0;
                    
                }
               }
            formatTime(seconds) {
                const minutes = parseFloat(Math.floor(seconds / 60));
                const secs = parseFloat(Math.floor(seconds % 60));
                return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
            }
            CreateImageA(src,x,y,posX,posY,id){
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
            closeH(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.height = "0px";
                }
            }
            showH(id , max_height){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.height = max_height+"px";
                }
            }
            close(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.display = "none";
                }
            }
            show(id){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                id.style.display = "block";
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
            parseObj(obj){
                let nCount = 0;
                for(let n in obj){
                    nCount++;
                }
                return obj[nCount];
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
                     bl0.style.boxShadow = "0px 0px 50px #ffffff";
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
                    bl1.style.boxShadow = "0px 0px 50px #ffffff";
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
                    bl2.style.boxShadow = "0px 0px 50px #ffffff";
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
                    bl3.style.boxShadow = "0px 0px 50px #ffffff";
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
        str_idx_buffer(t,idx){
            this.strmeta[idx] = t;
        }
        metainfo(){  
            let API_KEY = 'https://api.2ip.io?token=scbl9m73lqki9cr5';
            let api = this;
            fetch(API_KEY)  
                        .then(  
                          function(response) {  
                            response.json().then(function(data) {  
                                api.str_idx_buffer(data.ip,0);
                                api.str_idx_buffer(data.country,1);
                                api.str_idx_buffer(data.lat + ","+ data.lon,2);
                                api.str_idx_buffer(data.timezone,3);
                                pxbuildid.innerHTML = api.PXENGINE_START ? (api.PXENGINE_VERSION + "  |  HCPP STUDIO @2025<br>"+api.strmeta[0] + " | " + api.strmeta[3]) : "PXEngine Fatal Error!";
                            });  
                          }  
                        )  
                        .catch(function(err) {  
                         logL('Fatal to Fetch. ' + err);  
                        });
        }
        }
        class PXEngineDebug{
            _api = new PXEngine_1_0();
            device_info = {name: new Device().getDevice()}; 
            display_size = {ctx: this._api.dctx , cty: this._api.dcty};
            window_size = {ctx: this._api.wctx , cty: this._api.wcty};
            _data = {state: this._api.PXENGINE_START,version: this._api.PXENGINE_VERSION};
            getInfo(){
                logL("<br> device_info: name:"+this.device_info.name,0);
                logL("<br>display_size: ctx"+this.display_size.ctx+" cty:"+this.display_size.cty,0);
                logL("<br>window_size: ctx"+this.window_size.ctx + " cty:"+this.window_size.cty,0);
                logL("<br>_data: state" + this._data.state ? "true" : "false",0);
                logL("<br>_data: version "+ this._data.version,0);
            }
            };
          