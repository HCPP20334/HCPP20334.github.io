let buffer_t = document.getElementById("buffer_t");
let fB_ReadOk = document.getElementById("rdok");
let size_t = document.getElementById("size_buffer_t");
let fW_OpenFile = document.getElementById("wtext");
let fB_OpenFile = document.getElementById("open");
let fC_txSize = "";
let fB_fileBtn = document.getElementById("file_t");
let fB_SettingsBtn = document.getElementById("settings_t");
let fB_AboutBtn = document.getElementById("about_t");
let fW_fileFrame = document.getElementById("file_menu");
let fW_SetFrame = document.getElementById("set_menu");
let fW_AboutFrame = document.getElementById("about_menu");
let fW_txbuffer = document.getElementById("file_name");
let fW_fontType = document.getElementById("font_type");
let fW_fontSize = document.getElementById("font_size");
let fW_App = document.documentElement;
let fW_debugButton = document.getElementById("DEBUG_t");
let fW_debugFrame = document.getElementById("debug-frame");
let fW_debugJScode = document.getElementById("js-code");
let fD_fileId  = document.getElementById("file");
let fC_txBuffer = "";
let fD_logData = "";
function rt_data(){
}
function readFile(object,buf) {
  var file = object.files[0]
  var reader = new FileReader()
  reader.onload = function() {
    buf.innerHTML = reader.result
  }
  reader.readAsText(file);
  fD_fileName = file;
  localStorage.filesRecent += file.files;
  
}
//
fB_ReadOk.onclick = function(){
    readFile(fD_fileId,buffer_t);
    fW_OpenFile.style.height = "0px";
    fD_fileId.files[0] = "";
}
let file_tl = document.getElementById("file_tl")
let fB_cl0 = document.getElementById("cnsl");
let fB_cl1 = document.getElementById("cnsl1");
let fB_cl2 = document.getElementById("cnsl2");
let fB_cl3 = document.getElementById("cnsl3");
let fB_cl4 = document.getElementById("cnsl4");
let fBarLoad = document.getElementById("bar");
let fFnt_sz = document.getElementById("fntsz");
let fFnt = document.getElementById("fnt");
//
let fW_fontsMenu = document.getElementById("fontsmenu");
let fD_fileName = "";
let fW_loader = document.getElementById("loader");
let fW_testtx = document.getElementById("testtx");
//
let fW_jsCodeBuffer = "";
let consoleData = document.getElementById("console-log");
let strDataArray = ["нет имени","Шрифты"];
//----------------------0---------1-----------2------------3----------4----
let fC_fontsArray = ["pixl","Verdana","Comic Sans MS","Arial","WR"];
//let fW_fontsInfo = document.getElementById("fontsinfo");
fB_OpenFile.onclick = function(){
    fW_OpenFile.style.height = "200px";
    fD_fileId.click();
}
fB_cl3.onclick = function(){
    fW_debugFrame.style.display = "none";
}
fB_cl4.onclick = function(){
    dbgjs(fW_jsCodeBuffer);
    fD_logData += fW_jsCodeBuffer;
}
fW_debugButton.onclick = function(){
    fW_debugFrame.style.display = "block";
}
fW_debugJScode.oninput = function(){
    fW_jsCodeBuffer = this.value;
}
window.addEventListener('error', function (e) {
    var error = "\n" + e.error;
   consoleData.innerHTML += error + "<br>";
   logw(error+"<br>");
});
function dbgjs(code){
  let jsBuffer = document.createElement("script");
  fW_App.appendChild(jsBuffer);
  jsBuffer.innerHTML = code;
}
setTimeout("loadClose()",4000);
function LightTheme(){
    fW_App.style = "background:#909090;";
    buffer_t.style = "background:#404040;";
    fW_fileFrame.style= "background:#404040;";
    fW_SetFrame.style = "background:#404040;";
    fW_AboutFrame.style = "background:#404040;";
    document.getElementById("params").style = "background:#404040;";
    document.getElementById("nav").style = "background:#404040;";
}
function loadClose(){
    fW_loader.style.height = "0px";
}
function load(){
    fW_loader.style.height = "100%";
}
fFnt_sz.oninput = function(){
    buffer_t.style = "font-size:"+this.value+"px";
    fW_testtx.style = "font-size:"+this.value+"px";
    fW_fontSize.innerHTML = "Размер Шрифта:"+this.value;
    if(this.value == 0){
        buffer_t.style = "font-size:12px";
    fW_testtx.style = "font-size:12px";
    fW_fontSize.innerHTML = "Размер Шрифта:12";
    }
}

function loadFont(id){
    buffer_t.style = "font-family:'"+fC_fontsArray[id]+"'";
    fW_testtx.style = "font-family:'"+fC_fontsArray[id]+"'";
    fW_fontType.innerHTML = "шрифт:"+fC_fontsArray[id];
    if(fC_fontsArray[id] == ""){
        buffer_t.style = "font-family:'pixl'";
    fW_testtx.style = "font-family:'pixl'";
    fW_fontType.innerHTML = "шрифт:pixl";
    }
}
fW_loader.onclick = function(){
    loadClose();
}
file_tl.oninput = function(){
    fD_fileName = this.value;
    document.getElementById("titlenuf").innerHTML ="Блокнот:"+fD_fileName;
    fW_txbuffer.innerHTML = "файл:"+fD_fileName;
    if(fD_fileName.length < 1){
        fW_txbuffer.innerHTML = "файл:нет имени";
        document.getElementById("titlenuf").innerHTML ="Блокнот: нет имени";
    }
}
//
let wndTx = document.getElementById("wndtx");
let wBuffer = document.getElementById("wbuffer");
function logw(text){
    wndTx.style.display = "block";
    wBuffer.innerHTML = text;
    setTimeout("wndTx.style.display = 'none';",1000);
}
document.getElementById("save").onclick = function(){
    if(fD_fileName.length < 1){
        logw("Ошибка!! Не задано имя файла!");
        fW_txbuffer.innerHTML = "нет имени";
        document.getElementById("titlenuf").innerHTML ="Блокнот: нет имени";
    }
    else{
        fBarLoad.style.width = "100px";
    setTimeout("fBarLoad.style.width = '0px';",1000);
    //fW_txbuffer.innerHTML = fD_fileName + "Saved!! size:"+C_txBuffer.length;
    pixliteFile(fD_fileName,fC_txBuffer);
    }
}
fB_cl0.onclick = function(){
    fW_fileFrame.style.display = "none";
}
fB_cl1.onclick = function(){
    fW_SetFrame.style.display = "none";
}
fB_cl2.onclick = function(){
    fW_AboutFrame.style.display = "none";
}
fB_fileBtn.onclick = function(){
    fW_fileFrame.style.display = "block";
    fW_SetFrame.style.display = "none";
    fW_AboutFrame.style.display = "none";
}
fB_SettingsBtn.onclick = function(){
    fW_SetFrame.style.display = "block";
    fW_fileFrame.style.display = "none";
    fW_AboutFrame.style.display = "none";
}
fB_AboutBtn.onclick = function(){
    fW_AboutFrame.style.display = "block";
    fW_fileFrame.style.display = "none";
    fW_SetFrame.style.display = "none";
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
buffer_t.oninput = function(){
    fC_txBuffer = this.value;
    fC_txSize = fC_txBuffer.length;
    size_t.innerHTML = "Кол.Символ:"+fC_txSize;
     
}