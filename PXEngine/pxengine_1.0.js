let bl0 = document.getElementById("bl0");
let bl1 = document.getElementById("bl1");
let bl2 = document.getElementById("bl2");
let bl3 = document.getElementById("bl3");
//
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
              
        videoPlayer;
        vid = 0;
        videoPlayer = "";
        playlist = [];
        status(st){
        if(st){
            this.videoPlayer.play();
           // video_state.innerHTML = "Играет..";
        }
        if(!st){
            this.videoPlayer.pause();
            //video_state.innerHTML = "Пауза";
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
       init(){
        this.videoPlayer.loop = true;
        this.videoPlayer.src = this.playlist[this.vid];
       }
       volume(vOffset){
        this.videoPlayer.volume = vOffset;
        if(vOffset > 1){
            vOffset = 0;
            
        }
       }
       playVideo(){
        this.VideoBuffer.play();
       }
       pauseVideo(){
        this.VideoBuffer.pause();
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
            init(){
                this.PXENGINE_START = true;
                console.log("PXENGINE init() ok!!");
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
            addLink(link){
                if(!this.PXENGINE_START){
                    alert("PXEngine: Fatal Error!! Please add Init() you code");
                }
                if(this.PXENGINE_START){
                    window.open(link,0);
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