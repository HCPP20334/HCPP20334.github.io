window.addEventListener('error', function (e) {
  mainLog("[error]"+e.error);
 });

let doLoadTimeMs = new Float64Array();
doLoadTimeMs = parseFloat(new Date().getMilliseconds());
let toLoadTimeMs = new Float64Array();
let stringData = [
 "XVPN БАЗА",//0
 "XVPN про",//1
 "XVPN ультра   ",//2
 "@Все права Защищены 2025",//3
 "Гитхаб",//4
 "Донат",//5
 "",//6
 "10 МБИТ ",//7
 "1 ГБИТ  ",//8
 "500 МБИТ",//9
 "VLESS | REALITY",//10
 "  200.0 RUB",//11
 "600.0 RUB",//12
 "1000.0RUB",//13
 "XVPN BASE ",//14
 "XVPN BASE+",//15
 "XVPN PRO  ",//16
 "@All Right Copyright 2025",//17
 "10 MBIT",//18
 "1 GBIT",//19
 "500 MBIT",//20
 "",//21
 "VLESS | REALITY",//22
 "2.00$",//23
 "6.00$",//24
 "10.0$",//25
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
var  main_logStr = '';
let cntmsg = 0;
let consoleBuffer = document.getElementById("con_log");
let cmd = document.getElementById("cmdjs");
let cmdData = '';
let sendCmd = document.getElementById("inject");
cmd.oninput = function(){
  cmdData = this.value;
}
let vmjs = document.createElement("script");
vmjs.async = "";
document.body.appendChild(vmjs);
sendCmd.onclick = function(){
  vmjs.innerHTML += cmdData;
  mainLog(">"+cmdData);
  vmjs.innerHTML += "";
  cmdData = "";
}
let d = new Date();
function mainLog(data){
  cntmsg++;
  consoleBuffer.innerHTML += '<br>'+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+data;
  console.log("\n"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+data);
  main_logStr += "\n"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+data;
  localStorage.consoleLogs += main_logStr;
  if(cntmsg >= 20){
    consoleBuffer.innerHTML = "Auto Clean Console!!";
    cntmsg = 0;
    consoleBuffer.innerHTML = "";
  }
}
function SaveLog(){
  pixliteFile("XVPN_PXngineLog.txt",main_logStr);
}
function pixliteFile(name, value)
{
       var val = value;
      if (value === undefined) {
      val = "";
       }
      var download = document.createElement("a");
      download.href = "data:text/plain;content-disposition=attachment;filename=file," + val;
      download.download = name;
      download.style.display = "none";
      download.id = "download"; document.body.appendChild(download);
      document.getElementById("download").click();
      document.body.removeChild(download);
}
mainLog("module main.js loaded "+doLoadTimeMs+"ms");
function mainLogClear(){
  consoleBuffer.innerHTML = "";
  cntmsg = 0;
  console.clear();
}
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
let AppInit = false;
class AppUI{
  CSSReset(){
    cssLoader.rel = "stylesheet";
    cssLoader.href = "";
    setTimeout(function(){
      cssLoader.href =  "././css/main.css";
    },100);
  }
  AppShutdown(dbg_sw,mainContent,consoleContent){
    switch(dbg_sw){
      case 0:
        mainContent.style.display = "block";
        consoleContent.style.display = "none";
        break;
      case 1:
        mainContent.style.display = "none";
        consoleContent.style.display = "block";
      break;
  }
}
  displayParse(){
    if(window.screen.width > window.screen.width){
      this.AppInit();
    }
    if(window.screen.height > window.screen.height){
      this.AppInit();
    }
  }
  AppInit(){
    //mainLogClear();
    let ctx_display = window.screen.width;
    let cty_display = window.screen.height;
    let bMobile = false;
    AppInit = true;
    mainLog("[main.js] init class AppUI");
    mainLog("[device.js] display size offset: "+ctx_display +"x"+cty_display);
    mainLog("[main,js] loaded data:");
   let   fAllDivsFrames = document.getElementsByTagName('div');
   let   fAllPTags = document.getElementsByTagName('h1');
   let   fAllButtonsFrames = document.getElementsByTagName('button');
    mainLog("[main.js]divs:"+fAllDivsFrames.length+"=====================\n");
    mainLog("[main.js]h:"+(fAllPTags.length + document.getElementsByTagName('h2').length)+"=====================\n");
    mainLog("[main.js]buttons:"+fAllButtonsFrames.length+"=====================\n");
    if(DeviceInfo.getDevice() == 'Android'){
      mainLog("[device.js] device : Android");
      bMobile = true;
    }
    if(DeviceInfo.getDevice() == 'iPhone'){
      mainLog("[device.js] device : iPhone");
      bMobile = true;
    }
    if(bMobile){
      mainLog("[main.js] loaded css main_mobile.css");
      cssLoader.rel = "stylesheet";
      cssLoader.href = "././css/main.css";
      document.getElementById("contentframeid").style.overflowY = "scroll";
      document.getElementById("contentframeid").style.overflowX = "hidden";
      mainLog("[main.js] Enable Scroll");
    }
    if(DeviceInfo.getDevice() == 'Windows'){
      bMobile = false; 
      mainLog("[device.js] device : Windows");
    }
    if(DeviceInfo.getDevice() == 'Linux'){
      bMobile = false;
       mainLog("[device.js] device : Linux");
    }
    if(!bMobile){
      mainLog("[device.js] device :"+DeviceInfo.getDevice());
      if(ctx_display < 1920){
        document.getElementById("contentframeid").style.overflowY = "scroll";
        document.getElementById("contentframeid").style.overflowX = "hidden";
        mainLog("[device.js] you display size offset: ctx_display:"+ctx_display+" < 1920");
        mainLog("[main.js] Enable Scroll");
      }
    }
    this.toLoadTimeMs = parseFloat(new Date().getMilliseconds());
    mainLog("[main.js] App init time "+(doLoadTimeMs)+"ms");
  }
   LangUI(id_lang){
    if(!AppInit){
      id_lang= undefined;
      alert("Fatal Error: main.js AppInit not initilizeted!");
      window.location.href = "";
    }
    if(!id_lang){langButton.innerHTML = "RU";
      mainLog("[main.js] lang selected: RU");
      tx_0.innerHTML = stringData[0];
    //tx_1.innerHTML = stringData[6];
    tx_2.innerHTML = stringData[7];
    tx_3.innerHTML = stringData[10];
    tx_4.innerHTML = stringData[11];
    tx_5.innerHTML = stringData[1];
  //  tx_6.innerHTML = stringData[6];
    tx_7.innerHTML = stringData[8];
    tx_8.innerHTML = stringData[10];
    tx_9.innerHTML = stringData[13];
    tx_A0.innerHTML = stringData[2];
    //tx_A1.innerHTML = stringData[6];
    tx_A2.innerHTML = stringData[9];
    tx_A3.innerHTML = stringData[10];
    tx_A4.innerHTML = stringData[12];
    }
    if(id_lang){langButton.innerHTML = "EN";
      mainLog("[main.js] lang selected: EN");
      tx_0.innerHTML = stringData[14];
    //tx_1.innerHTML = stringData[21];
    tx_2.innerHTML = stringData[18];
    tx_3.innerHTML = stringData[22];
    tx_4.innerHTML = stringData[23];
    tx_5.innerHTML = stringData[15];
    //tx_6.innerHTML = stringData[21];
    tx_7.innerHTML = stringData[19];
    tx_8.innerHTML = stringData[22];
    tx_9.innerHTML = stringData[25];
    tx_A0.innerHTML = stringData[16];
    //tx_A1.innerHTML = stringData[21];
    tx_A2.innerHTML = stringData[20];
    tx_A3.innerHTML = stringData[22];
    tx_A4.innerHTML = stringData[24];
    }
   }
   bodyDataLast = document.body.outerHTML;
   buttonBuyUI(id){
    mainLog("[main.js] buy_window id:"+id);
    document.getElementById("payment_data").style.display = "block";
    document.getElementById("payment_data").style.width  = 609+"px";
    document.getElementById("payment_data").style.height  = 196+"px";
    document.getElementById("payment_data").style.transform = "translate("+(( window.screen.width / 2 ) / 2)+"px,"+(( window.screen.height / 2) / 2)+"px)";
    mainLog("[main.js] payment_data: window id to "+"translate("+(( window.screen.width / 2 ) / 2)+"px,"+(( window.screen.height / 2) / 2)+"px)");
    //window.open("https://t.me/hcppstudio");
   }
}
document.getElementById("payment_data").onclick = function(){
  document.getElementById("payment_data").style.width  = 0+"px";
    document.getElementById("payment_data").style.height  = 0+"px";
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
//
let consoleHandle = document.getElementById("console");
let mainHandle = document.getElementById("contentframeid");
let conState = document.getElementById("conState");
let cssReload = document.getElementById("css_reload");
let jsReload = document.getElementById("js_reload");
conState.onclick = function(){
  AppHandle.AppShutdown(0,mainHandle,consoleHandle);
}

cssReload.onclick = function(){
  AppHandle.CSSReset();
}
jsReload.onclick = function(){
  document.getElementById("module").src = "";
  setTimeout(function(){
    document.getElementById("module").src = "main.js";
    document.getElementById("module").onload = AppHandle.AppInit();
  },100);
  mainLog("[swap_js] reload javascript");
}
let conState1 = document.getElementById("conOn");
conState1.onclick = function(){
  AppHandle.AppShutdown(1,mainHandle,consoleHandle);
}
let langId = 0;
langButton.onclick = function(){
  langId++;
  if(langId > 1){
    langId = 0;
  }
  AppHandle.LangUI(langId);
}
setInterval(function(){
  AppHandle.displayParse();
},10);
