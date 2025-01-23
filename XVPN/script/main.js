let stringData = [
 "XVPN БАЗОВАЯ",//0
 "XVPN ПРО",//1
 "XVPN МАКС",//2
 "@Все права Защищены 2025",//3
 "Гитхаб",//4
 "Донат",//5
 "Работает на Любых устроиствах",//6
 "Ограничение 10 МБИТ",//7
 "Ограничение 100 МБИТ",//8
 "Ограничение 200 МБИТ",//9
 " ПРОТОКОЛ VLESS , ШИФРОВАНИЕ REALITY",//10
 "3$/400 RUB в месяц",//11
 "6$/600 RUB в месяц",//12
 "10$/1000 RUB в месяц",//13
 "XVPN BASE",//14
 "XVPN BASE+",//15
 "XVPN PRO",//16
 "@All Right Copyright 2025",//17
 "Speed Limit to 10 MBIT",//18
 "Speed Limit to 100 MBIT",//19
 "Speed Limit to 200 MBIT",//20
 "Work Only Devices",//21
 " PROTOCOL VLESS , CRYPTO REALITY",//22
 "PRICE: 3$/400 RUB per month",//23
 "PRICE: 6$/600 RUB per month",//24
 "PRICE: 10$/1000 RUB per month",//25
];
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
let  cssLoader = document.getElementById("cssdata");
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
let DeviceInfo = new Device();
class AppUI{
  AppInit(){
    let ctx_display = window.screen.width;
    let cty_display = window.screen.height;
    let bMobile = false;
    console.log("[main.js] init class AppUI");
    console.log("[device.js] display size offset: "+ctx_display +"x"+cty_display);
    if(DeviceInfo.getDevice() == 'Android'){
      console.log("[device.js] device : Android");
      bMobile = true;
    }
    if(DeviceInfo.getDevice() == 'iPhone'){
      console.log("[device.js] device : iPhone");
      bMobile = true;
    }
    if(bMobile){
      console.log("[main.js] loaded css main_mobile.css");
      cssLoader.rel = "stylesheet";
      cssLoader.href = "././css/main_mobile.css";
    }
    if(DeviceInfo.getDevice() == 'Windows'){
      bMobile = false; 
      console.log("[device.js] device : Windows");
    }
    if(DeviceInfo.getDevice() == 'Linux'){
      bMobile = false;
       console.log("[device.js] device : Linux");
    }
    if(!bMobile){
      console.log("[device.js] device :"+DeviceInfo.getDevice());
      if(ctx_display < 1920){
        document.getElementById("contentframeid").style.overflowY = "scroll";
        document.getElementById("contentframeid").style.overflowX = "hidden";
        console.log("[device.js] you display size offset: ctx_display:"+ctx_display+" < 1920");
        console.log("[main.js] Enable Scroll");
      }
    }
  }
   LangUI(id_lang){
    if(!id_lang){langButton.innerHTML = "RU";
      tx_0.innerHTML = stringData[0];
    tx_1.innerHTML = stringData[6];
    tx_2.innerHTML = stringData[7];
    tx_3.innerHTML = stringData[10];
    tx_4.innerHTML = stringData[11];
    tx_5.innerHTML = stringData[1];
    tx_6.innerHTML = stringData[6];
    tx_7.innerHTML = stringData[8];
    tx_8.innerHTML = stringData[10];
    tx_9.innerHTML = stringData[11];
    tx_A0.innerHTML = stringData[2];
    tx_A1.innerHTML = stringData[6];
    tx_A2.innerHTML = stringData[9];
    tx_A3.innerHTML = stringData[10];
    tx_A4.innerHTML = stringData[12];
    }
    if(id_lang){langButton.innerHTML = "EN";
      tx_0.innerHTML = stringData[14];
    tx_1.innerHTML = stringData[21];
    tx_2.innerHTML = stringData[18];
    tx_3.innerHTML = stringData[22];
    tx_4.innerHTML = stringData[23];
    tx_5.innerHTML = stringData[15];
    tx_6.innerHTML = stringData[21];
    tx_7.innerHTML = stringData[19];
    tx_8.innerHTML = stringData[22];
    tx_9.innerHTML = stringData[24];
    tx_A0.innerHTML = stringData[16];
    tx_A1.innerHTML = stringData[21];
    tx_A2.innerHTML = stringData[20];
    tx_A3.innerHTML = stringData[22];
    tx_A4.innerHTML = stringData[25];
    }
   }
   buttonBuyUI(id){
    window.open("https://t.me/hcppstudio");
   }
}
let tx_0 = document.getElementById("t0data");
let tx_1 = document.getElementById("t1data");
let tx_2 = document.getElementById("t2data");
let tx_3 = document.getElementById("t3data");
let tx_4 = document.getElementById("t4data");
let tx_5 = document.getElementById("t5data");
let tx_6 = document.getElementById("t6data");
let tx_7 = document.getElementById("t7data");
let tx_8 = document.getElementById("t8data");
let tx_9 = document.getElementById("t9data");
let tx_A0 = document.getElementById("tA0data");
let tx_A1 = document.getElementById("tA1data");
let tx_A2 = document.getElementById("tA2data");
let tx_A3 = document.getElementById("tA3data");
let tx_A4 = document.getElementById("tA4data");
//
let langButton = document.getElementById("lang_btnid");

let AppHandle = new AppUI();
let langId = 0;
langButton.onclick = function(){
  langId++;
  if(langId > 1){
    langId = 0;
  }
  AppHandle.LangUI(langId);
}
