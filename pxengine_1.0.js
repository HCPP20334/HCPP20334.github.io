let bl0 = document.getElementById("bl0");
let bl1 = document.getElementById("bl1");
let bl2 = document.getElementById("bl2");
let bl3 = document.getElementById("bl3");
        class PXEngine{
            PXENGINE_START = false;
            init(){
                this.PXENGINE_START = true;
                console.log("PXENGINE init() ok!!");
            }
            asp = 0;
            frame_st = 0;
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