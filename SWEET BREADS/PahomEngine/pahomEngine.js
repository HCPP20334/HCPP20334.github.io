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
    audioFile = ["assets/kurlik.mp3", "assets/вода.mp3"];
    
    start(idfilearray) {
        this.audioHandle.src = this.audioFile[idfilearray];
        this.audioHandle.play();
        this.audioHandle.volume = 0.3;
    }
}

class ENGINE_1_0 {
    ctxp = 0;
    ctyp = 640;
    mapMaxCtx = window.innerWidth - 258; // Исправлено на innerWidth
    mapMaxCty = window.innerHeight - 258; // Исправлено на innerHeight
    spriteHandle = document.getElementById("sprite_pahom");
    spriteHandleBread = document.getElementById("sprite_bread");
    GameMenu = document.getElementById("menu");
    menuSettings = document.getElementById("menuSettings");
    audioEngine = new KurlikAudio();
    breadSpeed = 5; // Уменьшенная скорость
    playerWidth = 256; // Ширина игрока
    playerHeight = 256; // Высота игрока
    breadSize = 30; // Размер хлеба

    initGame() {
        this.updatePlayerPosition();
        this.resetBreadPosition();
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.mapMaxCtx = window.innerWidth - 258;
        this.mapMaxCty = window.innerHeight - 258;
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
        this.GameMenu.style.transform = `translate(${parseInt(window.screen.width - 300) / 2}px, ${parseInt(window.screen.height - 300) / 2}px)`;
    }
    closeMenu(){
        this.GameMenu.style.display = "none";
    }
    showSettings(){
        this.menuSettings.style.display = "block";
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

    updateGame() {
        // Обновление позиции хлеба
        if (fCrY >= this.mapMaxCty) {
            this.resetBreadPosition();
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
