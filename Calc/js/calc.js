let loadData = document.getElementById("main_preloader");
//
let txDataHash = document.getElementById("txhash");
let txDataHash2 = document.getElementById("txhash2");
let build_number = '1.1.D.5';
function hashData(){
    let hash_offset = 0;
    let hash_seedChars = '1234567890qwertyuiopasdfgfhjklzxcvbnm';
    let hash_size = hash_seedChars.length;
    let hash_strKey = '';
    for(hash_offset = 0;hash_offset < 14;hash_offset++){
        hash_strKey += hash_seedChars[Math.floor(Math.random() * hash_size)];
    }
   // return hash_strKey;
    txDataHash.innerHTML = "Сборка "+build_number+"<br>HCPP STUDIO | session_id:"+hash_strKey;
    txDataHash2.innerHTML = build_number;
}
hashData();
//document.getElementById("logo").style.transform = "translateY("+parseFloat((window.screen.height - 64) / 2)+"px)";
setTimeout("loadData.style.height = '0px';",2000);
//setTimeout("document.getElementById('donate').style.display= 'block';",5000);
var fC_wattIn = document.getElementById("w_value2");
var fC_amperIn = document.getElementById("a_value");
var fC_voltIn = document.getElementById("v_value");
var fC_voltIn2 = document.getElementById("v_value2");
var fC_buttonCalc = document.getElementById("calc");
var fC_buttonCalc2 = document.getElementById("calc3");
var fC_watt2amp = document.getElementById("watt2amp");
var fC_amp2watt = document.getElementById("amp2watt");
var fC_sec2dia = document.getElementById("sec2diaBtn");
var fC_Srub2Rrub = document.getElementById("srub2rrub");
var fC_Wframe = document.getElementById("calc_frameW");
var fC_Aframe = document.getElementById("calc_frameA");
var fC_menu  = document.getElementById("menu");
var fC_buf2   = document.getElementById("out_value2");
var fC_buf3   = document.getElementById("out_value3");
var fC_buf   = document.getElementById("out_value");
var fC_Sframe = document.getElementById("sec2dia");
var fC_buttonCalc3 = document.getElementById("calc3");
var fC_buttonCalc4 = document.getElementById("calc4");
var fC_buttonCalc5 = document.getElementById("calc5");
var ftext_rub = document.getElementById("rub_text");
var fCalcSecWatt = document.getElementById("calc_amp");
var fCalcSecFrame = document.getElementById("watt_sec");
var btn_w2s = document.getElementById("watt2sec");
var in_watt = document.getElementById("inwatt");
var in_sec = document.getElementById("insec");
var in_volt = document.getElementById("involt");
var fSecBuf = document.getElementById("out_amp");
var fsecamp = document.getElementById("sec2amp");
var fDataWatt = 0;
var fDataVolt = 0;
var fDataSec = 0;
var rand = 0 ;
var r,g,b;
let htmlTag = document.documentElement;
let windowY = "";
// calc C to motor
let fCalcCMframe = document.getElementById("calcCMframe");
let fCalcCMbtn = document.getElementById("calcCM");
let fCalc_CM = document.getElementById("calc_CM");
let fC_VM = document.getElementById("VM_val");
let fC_IM = document.getElementById("IM_val");
let f4800 = document.getElementById("4800_p");
let f2800 = document.getElementById("2800_p");
let fC_value = document.getElementById("cmval");
let fDI = 0;
let fMtype = 0;
let fDV = 0;
let tm_bool = 0;
let fImgReScreen = document.getElementById('img1');
let fImgState = 0;
let fAllDivsFrames = document.getElementsByTagName('div');
let fAllPTags = document.getElementsByTagName('p');
let fAllButtonsFrames = document.getElementsByTagName('button');
let fThemeSelector = document.getElementById('theme-change');
//
let fDebugStrData = document.getElementById('tx1');
let debug_data = true;
fThemeSelector.click();
function loadDebugInfo(str){
    str.style.color = "#ffffff";
    str.style.fontSize = "12px";
    str.style.fontFamily = "monospace";
    str.style.display = "inline-block";
    str.innerHTML = "div_frames:"+fAllDivsFrames.length+" buttons:"+fAllButtonsFrames.length+"<br>p_tagText:"+fAllPTags.length;
}
function msgDebug(str,data){
    str.style.color = "#ffffff";
    str.style.fontSize = "12px";
    str.style.fontFamily = "monospace";
    str.style.display = "inline-block";
    str.style.overflow = "scroll";
    str.innerHTML += data;
}
//debug_data = setInterval("loadDebugInfo(fDebugStrData);",100);
fThemeSelector.onclick = function(){
    tm_bool++;
    if(tm_bool > 1){
        tm_bool = 0;
    }
    if(!tm_bool){
        //
        fThemeSelector.innerHTML = "Сменить тему: Светлая";
        document.documentElement.style.background = '#ffffff';
        for(let i = 0; i < document.getElementsByTagName('input').length;i++){
            document.getElementsByTagName('input')[i].style.background = '#aaaaaa';
        document.getElementsByTagName('input')[i].style.border = '1px solid #010409';
        }
        for (var i = 0; i < fAllDivsFrames.length; i++) {
            
            fAllDivsFrames[i].style.background = '#aaaaaa';
        }
        for (var i = 0; i < fAllButtonsFrames.length; i++) {
            fAllButtonsFrames[i].style.background = '#aaaaaa';
            fAllButtonsFrames[i].style.border = '1px solid #010409';
        }
        for (var i = 0; i < fAllPTags.length; i++) {
            fAllPTags[i].style.color  = '#ffffff';
        }
    }
    if(tm_bool){
        //
        for(let i = 0; i < document.getElementsByTagName('input').length;i++){
            document.getElementsByTagName('input')[i].style.background = '#0e0f11';
        document.getElementsByTagName('input')[i].style.border = '1px solid #5c5e63';
        }
        fThemeSelector.innerHTML = "Сменить тему: Темная";
        document.documentElement.style.background = '#010409';
         for (var i = 0; i < fAllDivsFrames.length; i++) {
            fAllDivsFrames[i].style.background = '#0e0f11';
            //fAllDivsFrames[i].style.border = '1px solid #5c5e63';
        }
        for (var i = 0; i < fAllButtonsFrames.length; i++) {
            fAllButtonsFrames[i].style.background = '#0e0f11';
            fAllButtonsFrames[i].style.border = '1px solid #5c5e63';
        }
        for (var i = 0; i < fAllPTags.length; i++) {
            fAllPTags[i].style.color  = '#ffffff';
        }
    }
}

fImgReScreen.onclick = function(){
    fImgState++;
    if(fImgState > 1){
        fImgState = 0;
    }
    if(!fImgState){
        imgTableFrame.style.maxWidth = "580px";
        imgTableFrame.style.maxHeight = "600px";
        fImgReScreen.style = " display:block;margin: auto;background: #0e0f11;width: 478px;border: none;height: 398px;border: 1px solid #5c5e63;transition:.4s;";
    }
    if(fImgState){
        imgTableFrame.style.maxWidth = "100%";
        imgTableFrame.style.maxHeight = "100%";
        fImgReScreen.style = "width:100%;height:100%;";
    }
}
fC_IM.oninput = function(){
    fDI = parseFloat(this.value);
}
fC_VM.oninput = function(){
    fDV = parseFloat(this.value);
}
f4800.onclick = function(){
    fMtype = 4800;
}
f2800.onclick = function(){
    fMtype = 2800;
}
fCalc_CM.onclick = function(){
    fC_value.innerHTML = parseFloat(fMtype * fDI / fDV) + " мкф";
}
function screenUpdate(){
    if(window.screen.width < 500){
        document.documentElement.style.zoom = '85%';
    }
    if(window.screen.width > 500){
        document.documentElement.style.zoom = '200%';
    }
}
setInterval("screenUpdate()",100);
fCalcCMbtn.onclick = function(){
    imgTableFrame.style.display = "none";
    fCANframe.style.display = "none";
    fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "none";
 fCalcHeater.style.display = "none";
 fCapFrame.style.display = "none";
 fCalcFrameS.style.display = "none";
 fCalcCMframe.style.display = "block";
}
//
var userDeviceArray = [
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
var platform = navigator.userAgent;
function GDevice() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform))
         {
            return userDeviceArray[i].device;
          }
        }
}
//

//
let fCalcFrameS = document.getElementById("calcSframe");
let fCalcSBtn  = document.getElementById("calcSb");
let fCalcS = document.getElementById("calcS");
fCalcSBtn.onclick = function(){
    imgTableFrame.style.display = "none";
    fCANframe.style.display = "none";
    fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "none";
 fCalcHeater.style.display = "none";
 fCapFrame.style.display = "none";
 fCalcFrameS.style.display = "block";
 fCalcCMframe.style.display = "none";
}
let fA_in = 0;
let fB_in = 0;
let fS = 0;
let Abuf  =  document.getElementById("A_val");
let Bbuf  =  document.getElementById("B_val");
let fSbuf =  document.getElementById("Sbuf");
Abuf.oninput = function(){
    fA_in = parseFloat(this.value);
}
Bbuf.oninput = function(){
    fB_in = parseFloat(this.value);
}
fCalcS.onclick =  function()
{
    fS = parseFloat(fA_in * fB_in);
    fSbuf.innerHTML = fS + " M2";
}
// calc P heater
let fPV = 0;
let fPR = 0;
var fCalcHeater =document.getElementById("calc_framePheater");
var fCalcHeaterBtn = document.getElementById("calcPheat");
var fCalcP = document.getElementById("calcP");
var fHvolt = document.getElementById("Pvolt");
var fHRes = document.getElementById("Pres");
var fPbuf  = document.getElementById("Pbuf");
fHRes.oninput = function()
{
    fPR = parseFloat(this.value);
}
fHvolt.oninput = function()
{
    fPV = parseFloat(this.value);
}
fCalcP.onclick = function()
{
    fPbuf.innerHTML = parseFloat(fPV * fPV / fPR);
}

//
fsecamp.onclick = function()
{
    loadSAframe();
}
in_watt.oninput=function()
{
fDataWatt = parseFloat(this.value);
}
in_sec.oninput=function()
{
fDataSec = parseFloat(this.value);
}
in_volt.oninput=function()
{
fDataVolt = parseFloat(this.value);
}
fCalcSecWatt.onclick = function()
{
    fSecBuf.innerHTML = parseInt( (fDataWatt * fDataSec) / (fDataVolt * 1)) + "А";
}

function bkg()
{
    console.clear();
        rand = Math.random() * 360;
        r = Math.random() * 320;
        g = Math.random() * 500;
        fC_Sframe.style.width= r+"px;";
        fC_Sframe.style.height= g+"px;"
     console.log(rand+"\n"+fC_Sframe.style.background);
     console.log("red_c:"+r+"\n"+"green_c:"+g+"\n"+"blue_c:"+b);
    
}
var fCb_1;
var fCdata1 = 0;;
var fCdata2 = 0;
var fCalc = false;
var fV;
var fA;
var fW;
var fR_mm2 = 0;
var fDia_value = 0;
var fDiaIn = document.getElementById("dia_value2");
var fPi = 3.14;
var fCalcSovRub = true;
var fSovietRub = 0;
var fRusRub = 0;
var fReverbBtn = document.getElementById("reverb");
var fOutRubBuf = document.getElementById("data_rub");
var fCalcRubFrame = document.getElementById("calc_rub");
var fC_buttonCalc5 = document.getElementById("calc5");
var fOutRubResult = document.getElementById("out_rub");
var fStateCrub= 0;
//img table code
var imgTableFrame = document.getElementById("table_img");
var imgShowBtn = document.getElementById("tableBtn");
imgShowBtn.onclick = function()
{
    openTableFrame();
}
function openTableFrame()
{
    fCANframe.style.display = "none";
    imgTableFrame.style.display = "block";
    imgTableFrame.style.maxWidth = "580px";
    imgTableFrame.style.maxHeight = "600px";
    imgTableFrame.style.width = "100%";
    imgTableFrame.style.height = "100%";
    imgTableFrame.style.backgroundColor = "#0e0f11";
    imgTableFrame.style.margin="auto";
    imgTableFrame.style.zoom = "70%";
    imgTableFrame.style.borderTop = "1px solid #5c5e63";
    imgTableFrame.style.borderBottom = "1px solid #5c5e63";
//
}
//R calc
var fPvalue =  document.getElementById("p_val");
var fIvalue =  document.getElementById("l_val");
var fSvalue =  document.getElementById("S_val");
var fCalcRframe =  document.getElementById("calc_Rwire");
var fRcalcButton =  document.getElementById("calcR");
var fRbuf =  document.getElementById("Rvalue");
var fCalcRbtn =   document.getElementById("calcRbtn");
var fWp_data = 0;
var fWi_data = 0;
var fWs_data = 0;

fPvalue.oninput = function()
{
    fWp_data = parseFloat(this.value);
}
fIvalue.oninput = function()
{
    fWi_data = parseFloat(this.value);
}
fSvalue.oninput = function()
{
    fWs_data = parseFloat(this.value);
}
fRcalcButton.onclick = function()
{
    fRbuf.innerHTML = (fWp_data * fWi_data) / fWs_data;
}
fCalcRbtn.onclick = function()
{
    loadPwireFrame();
}

//
//calc nominal calcAutomat
var fCANframe = document.getElementById("calc_Automat");
var fCANcalc = document.getElementById("calcA");
var fCANominal = document.getElementById("NomValue");
var fC13 = document.getElementById("13_p");
var fC45 = document.getElementById("45_p");
var fC155 = document.getElementById("155_p");
var fC400 = document.getElementById("400_p");
var fC900 = document.getElementById("900_p");
var fCbuf3 = document.getElementById("Nvalue");
var fC_AutoNominal  = document.getElementById("calcAutomatN");
let fProcentArray = [13,45,155,400,900];
let fNdata = 0;
let fCPoint = 0;
var fCout = 0;
//
fCANominal.oninput = function()
{
    fNdata = parseFloat(this.value);
    
    
}
fC13.onclick = function(){
    fCPoint = 0;
    fC13.style.border="1px solid #20ff80";
    fC45.style.border="1px solid #010409";
    fC155.style.border="1px solid #010409";
    fC900.style.border="1px solid #010409";
    fC400.style.border="1px solid #010409";
}
fC45.onclick = function(){
    fCPoint = 1;
    fC13.style.border="1px solid #010409";
    fC45.style.border="1px solid #20ff80";
    fC155.style.border="1px solid #010409";
    fC900.style.border="1px solid #010409";
    fC400.style.border="1px solid #010409";
    
}
fC155.onclick = function(){
    fCPoint = 2;
    fC13.style.border="1px solid #010409";
    fC45.style.border="1px solid #010409";
    fC155.style.border="1px solid #20ff80";
    fC900.style.border="1px solid #010409";
    fC400.style.border="1px solid #010409";
}
fC400.onclick = function(){fCPoint = 3;
    fC13.style.border="1px solid #010409";
    fC45.style.border="1px solid #010409";
    fC155.style.border="1px solid #010409";
    fC400.style.border="1px solid #20ff80";
    fC900.style.border="1px solid #010409";
    
}
fC900.onclick = function(){fCPoint = 4;
    fC13.style.border="1px solid #010409";
    fC45.style.border="1px solid #010409";
    fC155.style.border="1px solid #010409";
    fC900.style.border="1px solid #20ff80";
    fC400.style.border="1px solid #010409";
}
fCANcalc.onclick = function()
{
    fCout =  parseInt(fNdata) + (parseInt(fNdata) * (fProcentArray[fCPoint] / 100));
    fCbuf3.innerHTML = fCout;
}

fC_AutoNominal.onclick = function()
{
    loadANframe();
}
//calc cap
let C = 0;
let U1 = 0;
let U2 = 0;
let Usum = 0;
let It = 0;
//decriptors
const fCalcCap =  document.getElementById("capcalc");
const fCapFrame =  document.getElementById("capFrc");
var fCapBuf =  document.getElementById("capbuf");
let fU1input =  document.getElementById("capU1");
let fU2input =  document.getElementById("capU2");
let fIinput =  document.getElementById("capI");
const fCalcCapitulator =  document.getElementById("calcCapitulaor");
fU1input.oninput = function(){U1 = parseFloat(this.value);}
fU2input.oninput = function(){U2 = parseFloat(this.value);}
fIinput.oninput = function(){It = parseFloat(this.value);}
fCalcCapitulator.onclick = function()
{
    loadCframe();
}
fCalcCap.onclick = function()
{
    Usum = Math.sqrt((U1 * U1)-(U2 * U2));
    C = parseInt(3200 * It / Usum);
    fCapBuf.innerHTML = C +"мкф";
}
//
function loadANframe()
{
    imgTableFrame.style.display = "none";
    fCANframe.style.display = "block";
    fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "none";
 fCalcHeater.style.display = "none";
 fCapFrame.style.display = "none";
 fCalcFrameS.style.display = "none";
 fCalcCMframe.style.display = "none";
}

//
setTimeout("fReverbBtn.click();",1);
fReverbBtn.onclick = function()
{
    fStateCrub++;
    if(fStateCrub > 1)
    {
        fStateCrub = 0;
    }
    if(fStateCrub)
    {
        fCalcSovRub = false;
        ftext_rub.innerHTML = "Сов.руб в рос.руб";
        fSovietRub = 0;
    }
    if(!fStateCrub)
    {
        fCalcSovRub = true;
        ftext_rub.innerHTML = "рос.руб в Сов.руб";
        fRusRub = 0;
    }
    
}
fDiaIn.oninput = function()
{
    fDia_value =  parseFloat(this.value);
}
fC_voltIn.oninput = function()
{
fV =parseFloat(this.value);
}
fC_voltIn2.oninput = function()
{
fV =parseFloat(this.value);
}
fC_wattIn.oninput = function()
{
fW = parseFloat(parseFloat(this.value));
}
fC_amperIn.oninput = function()
{
fA = parseFloat(parseFloat(this.value));
}
fOutRubBuf.oninput = function()
{
    if(!fCalcSovRub)
    {
        fOutRubResult.innerHTML =(parseFloat(this.value) * 275);
    }
    if(fCalcSovRub)
{
        fOutRubResult.innerHTML = (parseFloat(this.value) / 275);
    }
    
}
fC_buttonCalc.onclick = function()
{
    fCdata1 = fA * fV;
fC_buf.innerHTML = fCdata1;
}
fC_buttonCalc2.onclick = function()
{
    
fC_buf2.innerHTML = fCdata2;
fCdata2= fW / fV;
//alert("unit:"+fCdata2 + "\nd0:"+fW+"\nd1:"+fV);
}
fC_buttonCalc4.onclick = function()
{
    fR_mm2 = ((fDia_value / 2) * (fDia_value / 2) * fPi);
    fC_buf3.innerHTML = fR_mm2;
}
fC_sec2dia.onclick = function()
{
    loadSframe();
}
fC_watt2amp.onclick = function()
{
loadWframe();
}
fC_amp2watt.onclick = function()
{
loadAframe();
}
fC_Srub2Rrub.onclick = function()
{
    loadRframe();
}
fCalcCapitulator.onclick = function()
{
    loadCframe();
}
fCalcHeaterBtn.onclick = function()
{
    loadPheatFrame();
}

function loadPheatFrame()
{
    fCapFrame.style.display = "none";
    imgTableFrame.style.display = "none";
    fCANframe.style.display = "none";
    fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "none";fCalcFrameS.style.display = "none";
 fCalcHeater.style.display = "block";
 fCalcCMframe.style.display = "none";
}
function loadCframe()
{
    fCapFrame.style.display = "block";
    imgTableFrame.style.display = "none";
    fCANframe.style.display = "none";
    fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "none";fCalcFrameS.style.display = "none";
 fCalcHeater.style.display = "none";
 fCalcCMframe.style.display = "none";
}
function loadWframe()
{
imgTableFrame.style.display = "none";
fCalcHeater.style.display = "none";
fC_Wframe.style.display = "block";fCalcFrameS.style.display = "none";
fC_Aframe.style.display = "none";
fC_menu.style.display = "none";
fC_Sframe.style.display = "none";
fCalcRubFrame.style.display = "none";
fCalc = true;
fCalcSecFrame.style.display = "none";
fCANframe.style.display = "none";
fCapFrame.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadAframe()
{
imgTableFrame.style.display = "none";
fCalcHeater.style.display = "none";
fC_Aframe.style.display = "block";
fC_Wframe.style.display = "none";
fC_menu.style.display = "none";
fC_Sframe.style.display = "none";fCalcFrameS.style.display = "none";
fCalcRubFrame.style.display = "none";
fCapFrame.style.display = "none";
fCalc = false;
fW = 0;
fV = 0;
fCalcSecFrame.style.display = "none";
fCANframe.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadSframe()
{
    imgTableFrame.style.display = "none";
    fCalcHeater.style.display = "none";
fC_Aframe.style.display = "none";
fC_Wframe.style.display = "none";
fC_menu.style.display = "none";fCalcFrameS.style.display = "none";
fC_Sframe.style.display = "block";
fCalcRubFrame.style.display = "none";
fCalc = false;
fW = 0;
fV = 0;
fCalcSecFrame.style.display = "none";
fCANframe.style.display = "none";
fCapFrame.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadSAframe()
{
    imgTableFrame.style.display = "none";
    fC_menu.style.display = "none";
fC_Aframe.style.display = "none";fCalcFrameS.style.display = "none";
fC_Wframe.style.display = "none";
fC_Sframe.style.display = "none";
document.getElementById("download_panel").style.display= "none";
fCalcRubFrame.style.display = "none";
fCalcHeater.style.display = "none";
fCalcSecFrame.style.display = "block";
fCANframe.style.display = "none";
fCapFrame.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadRframe()
{
    imgTableFrame.style.display = "none";
fC_menu.style.display = "none";
fC_Aframe.style.display = "none";
fC_Wframe.style.display = "none";fCalcFrameS.style.display = "none";
fCalcHeater.style.display = "none";
fC_Sframe.style.display = "none";
document.getElementById("download_panel").style.display= "none";
fCalcRubFrame.style.display = "block";
fCalcSecFrame.style.display = "none";
fCANframe.style.display = "none";
fCapFrame.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadMframe()
{
 //window.ysdk.adv.showFullscreenAdv({});
imgTableFrame.style.display = "none";
fC_menu.style.display = "block";
fC_Aframe.style.display = "none";fCalcFrameS.style.display = "none";
fC_Wframe.style.display = "none";
fC_Sframe.style.display = "none";
fCalcHeater.style.display = "none";
document.getElementById("download_panel").style.display= "none";
fCalcRubFrame.style.display = "none";
fCalcSecFrame.style.display = "none";
fCalcRframe.style.display = "none";
fCANframe.style.display = "none";
fCapFrame.style.display = "none";
fCalcCMframe.style.display = "none";
}
function loadPwireFrame()
{
    imgTableFrame.style.display = "none";
 fC_menu.style.display = "none";
 fC_Aframe.style.display = "none";
 fCalcHeater.style.display = "none";fCalcFrameS.style.display = "none";
 fC_Wframe.style.display = "none";
 fC_Sframe.style.display = "none";
 document.getElementById("download_panel").style.display= "none";
 fCalcRubFrame.style.display = "none";
 fCalcSecFrame.style.display = "none";
 fCalcRframe.style.display = "block";
 fCANframe.style.display = "none";
 fCapFrame.style.display = "none";
 fCalcCMframe.style.display = "none";
}
