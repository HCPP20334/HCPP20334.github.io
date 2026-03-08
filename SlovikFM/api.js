var p_buffer = "";
function initDebugger(id){
  p_buffer = id;
}
function debug_message(id,str,color = "#ff0090"){
  id.innerHTML = str;
  id.style.color = color;
}
var g_iID = 0;
var color = {green: "#00ff30",red: "#ff0090"};
var player = {
    audio: "",
    play: "",
    random:"",
    volume:"",
    state: false,
    id_file: 0,
    playAudio: function(){
        this.state = !this.state;
    this.state ?  this.audio.play() : this.audio.pause();
    },
    setID: function(id_audio,src){
      this.id_file = id_audio;
      this.audio.src = "audios/"+src[id_audio];
      //2b2bcb
     // debug_message(p_buffer,src[id_audio]);
      selected(g_iID);
      this.audio.play();
    },
    init: function(id)
    {
        
        if(id instanceof HTMLAudioElement){
            this.audio = id;
            debug_message(p_buffer,id.id+" Успешно Инициализирован",color.green);
        }else{
            debug_message(p_buffer,id.id+" Не является <audio>",color.red);
        }
    }
};

//
function selected(id_audio){
 for(var d = 0; d < document.getElementsByClassName("audio_track").length; d++){
    document.getElementsByClassName("audio_track")[d].style.background = (player.id_file ==  d) ? "#2b2bcb" : "#070709";
 }

}
var g_sAudioFilesArray = ["Boys in the guardhouse.mp3","E777 - Слоновые сказки.mp3","Green Money.mp3","One way ticket to Berdyansk.mp3","Если б не было говна.mp3","Зелёный Вагон.mp3","Малафья_Пыялася_OST_Слово_Братишки.mp3","Пахом с Болот.mp3","Ремейк слоновых частушек _ MMV.mp3","Слоник Гумми.mp3","Слоник нас связал.mp3","Слоновые музыканты 1ый выпуск _ MMV.mp3","Слоновый Альянс - На Гауптвахте.mp3","Ямамото Давай.mp3"];
var g_iAudioFilesArraySize32 = 0;
var g_bLoaded = {state: false, msg: ""};
async function get_file_list() {
    var apireqs = {files: "127.0.0.1:777/api/files"};
    var req = {
        api: await fetch(apireqs.files),
        code: this.api.status, 
        status: {
            REQ_OK: 200,
            REQ_ERROR: 404,
            REQ_NET_ERROR: 503
        }
    };
    if(req.code == req.status.REQ_OK){
        g_bLoaded.state = true;
        g_bLoaded.msg = "Загружено Успешно!!";
       g_sAudioFilesArray = await req.api.arrayBuffer();
       debug_message(p_buffer,g_bLoaded.msg,color.green);
       if(g_sAudioFilesArray.length == 0){
        g_iAudioFilesArraySize32 = 0;
       }else{
        g_iAudioFilesArraySize32 = (g_sAudioFilesArray.length - 1);
       }
    }
    else{
        g_bLoaded.state = false;
        g_bLoaded.msg = "Ошибка подключение к API!!";
        debug_message(p_buffer,g_bLoaded.msg,color.red);
    }
}
function lenArray(array){
    var count = 0;
    for(var a = 0; a < array.length + 20;a++){
        if(array[a] != undefined){
         count++;
        }
    }
    return count;
}
function loadPlayList(playlist){
 //  get_file_list();
    for(var i = 0; i < g_sAudioFilesArray.length; i++){
        var list = "<div class='audio_track' onclick='player.setID("+i+",g_sAudioFilesArray);g_iID="+i+"'>"+
        "<p class='audio_track_name'>"+g_sAudioFilesArray[i]+"</p>"+
        "</div>";
        playlist.innerHTML += list;
    }
}
