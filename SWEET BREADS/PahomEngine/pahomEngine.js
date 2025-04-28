const info = document.getElementById("fps");
const score = document.getElementById("score");
let scoreCount0 = 0;
let frameCounta = 0;
let lastTime = performance.now();
let fps = 0;
let fCrX = 0;
let fCrY = 0;
let startEngine = document.getElementById("startEngine");
let SettingsEngine = document.getElementById("SettingsEngine");

class KurlikAudio {
    audioHandle = document.getElementById("kurlik_Engine");
    audioFile = ["PahomEngine/assets/kurlik.mp3", "PahomEngine/assets/вода.mp3"];
    
    start(idfilearray) {
        this.audioHandle.src = this.audioFile[idfilearray];
        this.audioHandle.play();
        this.audioHandle.volume = 0.3;
    }
}
var audioOkState = 0;
var toBeLoadedNumberAudio = new KurlikAudio().audioFile.length;
class ENGINE_1_0 {
    ctxp = 0;
    ctyp = 640;
    mapMaxCtx = window.innerWidth - 258; // Исправлено на innerWidth
    mapMaxCty = window.innerHeight - 258; // Исправлено на innerHeight
    spriteHandle = document.getElementById("sprite_pahom");
    spriteHandleBread = document.getElementById("sprite_bread");
    GameMenu = document.getElementById("menu");
    menuSettings = document.getElementById("menuSettings");
    loadEngineFrame = document.getElementById("loadEngine");
    audioEngine = new KurlikAudio();
    breadSpeed = 5; // Уменьшенная скорость
    playerWidth = 256; // Ширина игрока
    playerHeight = 256; // Высота игрока
    breadSize = 30; // Размер хлеба
    pahomEngineState = true;
    sv_d = 0;
    img;
    thread = false;
    A_bar = document.getElementById("A_bar");
    ToCenterDiv(x,y,id){
        id.style.transform = `translate(${parseInt(window.screen.width - x) / 2}px, ${parseInt(window.screen.height - y) / 2}px)`;
    }
    log(text){
        let dw = document.getElementById("dwindow");
        setTimeout(function(){
            dw.style.height = "40px";

        },100);
        let d = document.getElementById("dtext");
        d.style.color = "#ffffff";
        d.innerHTML = "[pahomEngine.js_0.9012da2] "+ text;
        setTimeout(function(){
            dw.style.height = "0px";
        },5000);
    }

   preloadImages(urls, allImagesLoadedCallback){
    new ENGINE_1_0().spriteHandleBread.style.display = "none";
    new ENGINE_1_0().spriteHandle.style.display = "none";
        var loadedCounter = 0;
      var toBeLoadedNumber = urls.length;
      var imgBool;
      new Audio().src = "PahomEngine/assets/kurlik.mp3";
      urls.forEach(function(url){
        var img = new Image();
        img.src = url;
        document.getElementById("loadEngine").style.transform = `translate(${parseInt(window.screen.width - 330) / 2}px, ${parseInt(window.screen.height - 330) / 2}px)`;
        imgBool = img.onload =  function(){
            (imgBool ? new ENGINE_1_0().log(url +  " OK") : new ENGINE_1_0().log(url + " Error!!"));
            loadedCounter++;
            document.getElementById("as").innerHTML = "Загрузка спрайтов..";
            document.getElementById("currentFile").innerHTML = url + "["+loadedCounter+"]";
            document.getElementById("A_bar").style.width=(loadedCounter * 33)+"%";
            document.getElementById("menuSettings").style.display = 'none';
                console.log('Number of loaded images: ' + loadedCounter);
                
          if(loadedCounter == toBeLoadedNumber){
            new ENGINE_1_0().log("Files Loaded!!");
            new ENGINE_1_0().spriteHandleBread.style.display = "block";
            new ENGINE_1_0().spriteHandle.style.display = "block";
            document.getElementById("gameframe").style.width = "100%";
            document.getElementById("gameframe").style.height = "100%";
            this.pahomEngineState = false;allImagesLoadedCallback();
          }
        };
      });
    }
   
    // Let's call it:
    initGame() {
        this.updatePlayerPosition();
        this.resetBreadPosition();
        window.addEventListener('resize', () => this.handleResize());
    }
    handleResize() {
        this.mapMaxCtx = window.innerWidth - 258;
        this.mapMaxCty = window.innerHeight - 258;
    }
    benchMarkCPU() {
        this.log("Bench Started!!");
        var ot = performance.now();
        this.thread = setInterval(() => { // Стрелочная функция сохраняет контекст
          const img = document.createElement("img"); // Локальная переменная
          img.src = "PahomEngine/assets/bread.png";
          img.style.width = "128px";
          img.style.height = "128px";
          
          img.style.transform = `translate(
            ${Math.floor(Math.random() * this.mapMaxCtx)}px,
            ${Math.floor(Math.random() * this.mapMaxCty)}px
          )`;
      
          document.getElementById("gameframe").appendChild(img);
          
          setTimeout(() => {
            img.remove(); // Удаляем конкретное изображение
            clearInterval(this.thread);
            this.log("Bench Stoped! last ms"+ (ot).toFixed(4,"2") +" ms");
          }, 1000);
          
        }, 1);
      }
    stopBench(){
        clearInterval(this.thread);
    }
    updatePlayerPosition() {
        this.spriteHandle.style.transform = `translate(${this.ctxp}px, ${this.ctyp}px)`;
    }

    resetBreadPosition() {
        fCrX = Math.floor(Math.random() * this.mapMaxCtx);
        fCrY = 0;
        this.updateBreadPosition();
    }

    updateBreadPosition() {
        this.spriteHandleBread.style.transform = `translate(${fCrX}px, ${fCrY}px)`;
    }

    moveRight() {
        this.ctxp = Math.min(this.ctxp + fps, this.mapMaxCtx);
        this.updatePlayerPosition();
    }

    moveLeft() {
        this.ctxp = Math.max(this.ctxp - fps, 0);
        this.updatePlayerPosition();
    }
    showMenu(){
        this.GameMenu.style.display = "block";
        this.GameMenu.style.transform = `translate(${parseInt(window.screen.width - 300) / 2}px, ${parseInt(window.screen.height - 400) / 2}px)`;
    }
    closeMenu(){
        this.GameMenu.style.display = "none";
    }
    showSettings(){
        this.menuSettings.style.display = "block";
        this.audioEngine.start(1);
        this.menuSettings.style.transform = `translate(${parseInt(window.screen.width - 300) / 2}px, ${parseInt(window.screen.height - 300) / 2}px)`;
    }
    closeSettings(){
        this.menuSettings.style.display = "none";
        this.GameMenu.style.display = "block";
    }
    checkCollision() {
        // Хитбокс игрока
        const playerBox = {
            x: this.ctxp,
            y: this.ctyp,
            width: this.playerWidth,
            height: this.playerHeight
        };

        // Хитбокс хлеба
        const breadBox = {
            x: fCrX,
            y: fCrY,
            width: this.breadSize,
            height: this.breadSize
        };

        // Проверка пересечения
        return (
            playerBox.x < breadBox.x + breadBox.width &&
            playerBox.x + playerBox.width > breadBox.x &&
            playerBox.y < breadBox.y + breadBox.height &&
            playerBox.y + playerBox.height > breadBox.y
        );
    }
    save(){
        this.log("Result Saved!! count" + this.sv_d + "SizeSlot:"+localStorage.score.length);
        localStorage.score = 'session:' + new Date().getDate() + ':'+new Date().getMonth() + ':'+new Date().getFullYear()+'-'+new Date().getHours()+':'+new Date().getMinutes()  + 'score: '+scoreCount0;
    }
    updateGame() {
        // Обновление позиции хлеба
        if (fCrY >= this.mapMaxCty) {
            this.resetBreadPosition();
            alert("Пидорас Обосрался!!");
            EngineStop = true;
            this.showMenu();
            
            //this.log("Result Saved!! count" + this.sv_d + "SizeSlot:"+localStorage.score.length);

            scoreCount0 = 0;
        } else {
            fCrY += this.breadSpeed;
        }
        // Проверка столкновения
        if (this.checkCollision()) {
            scoreCount0++;
            score.innerHTML = scoreCount0;
            this.audioEngine.start(0);
            this.resetBreadPosition();
        }
        this.updateBreadPosition();
    }
}
