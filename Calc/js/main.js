const buttons_id = [
 "#watt_to_amper",
 "#amper_to_om",
 "#diametr_to_section",
 "#power_to_thermal",
 "#nomival_automat",
 "#balast_cap",
 "#phase_cap",
 "#amper_to_ompower",
 "#voltage_diode_boost",
 "#price_to_minute",
];
const frames_id = [
 "#window_watt_to_amper",
 "#window_amper_to_om",
 "#window_diametr_to_section",
 "#window_power_to_thermal",
 "#window_nomival_automat",
 "#window_balast_cap",
 "#window_phase_cap",
 "#window_amper_to_ompower",
 "#window_voltage_diode_boost",
 "#window_price_to_minute"
];
document.documentElement.style.zoom = "75%";
function getItem(id_class){
    return document.querySelector(id_class);
   }
const main = {
 version: 0.5,
 app_window: document.querySelector(".main"),
 app_button:{
    watt_to_amper      :getItem(buttons_id[0]),
    amper_to_om        :getItem(buttons_id[1]),
    diametr_to_section :getItem(buttons_id[2]),
    power_to_thermal   :getItem(buttons_id[3]),
    nomival_automat    :getItem(buttons_id[4]),
    balast_cap         :getItem(buttons_id[5]),
    phase_cap          :getItem(buttons_id[6]),
    amper_to_ompower   :getItem(buttons_id[7]),
    voltage_diode_boost:getItem(buttons_id[8]),
    price_to_minute    :getItem(buttons_id[9])

 },
 app_windows:{
    watt_to_amper      :getItem(frames_id[0]),
    amper_to_om        :getItem(frames_id[1]),
    diametr_to_section :getItem(frames_id[2]),
    power_to_thermal   :getItem(frames_id[3]),
    nomival_automat    :getItem(frames_id[4]),
    balast_cap         :getItem(frames_id[5]),
    phase_cap          :getItem(frames_id[6]),
    amper_to_ompower   :getItem(frames_id[7]),
    voltage_diode_boost:getItem(frames_id[8]),
    price_to_minute    :getItem(frames_id[9])

 },
};
const frontend = {
    iKeyPresed: 0,
    stringBufferLogger: document.querySelector(".log_buffer"),
    string:{
    log:function(t,cl){
        document.querySelector(".log_buffer").innerHTML += "<br>"+t;
    }
    },
    frame: function(id, state) {
      id.style.display = "block";
      let iWidth =  (state ? 100 : 0);
      let i = setInterval(function(){
         if(id.style.width == "0px"){
            id.style.display = "none";
            clearInterval(i);
         }
         if(id.style.width == "100%"){
           
            clearInterval(i);
         }
           
         },1);
          id.style.width = iWidth + (state ? "%" : "px"); // Устанавливаем ширину в процентах
     
  }
    
};
window.addEventListener("keypress",function(key){
    frontend.iKeyPresed = key.code;
    if(key.code == "Slash"){
        frontend.frame(getItem(".logger"),1);//////
        frontend.string.log("Список команд<br> -version - версия проекта <br> -clearWindow - закрывает все окна <br> exit - закрывает консоль<br> getErrors - Показывает количество критических ошибок");
    }
    //frontend.string.log("[app] key presed : "+key.code);
  });
  let runtime_errors_count = 0;
  window.addEventListener("error",function(exception){
    runtime_errors_count++;
    frontend.string.log("[Fatal Error] exception:  main.js ->"+exception.error + " line:"+exception.lineno);
  });

//
main.app_button.watt_to_amper.onclick = function(){
   frontend.frame(main.app_windows.watt_to_amper,1);
}
main.app_button.amper_to_om.onclick = function(){
    frontend.frame(main.app_windows.amper_to_om,1);
 }
 main.app_button.diametr_to_section.onclick = function(){
    frontend.frame(main.app_windows.diametr_to_section,1);
 }
 main.app_button.power_to_thermal.onclick = function(){
    frontend.frame(main.app_windows.power_to_thermal,1);
 }
 main.app_button.nomival_automat.onclick = function(){
    frontend.frame(main.app_windows.nomival_automat,1);
 }
 main.app_button.balast_cap.onclick = function(){
    frontend.frame(main.app_windows.balast_cap,1);
 }
 main.app_button.phase_cap.onclick = function(){
    frontend.frame(main.app_windows.phase_cap,1);
 }
 main.app_button.amper_to_ompower.onclick = function(){
    frontend.frame(main.app_windows.amper_to_ompower,1);
 }
 main.app_button.voltage_diode_boost.onclick = function(){
    frontend.frame(main.app_windows.voltage_diode_boost,1);
 }
 main.app_button.price_to_minute.onclick = function(){
    frontend.frame(main.app_windows.price_to_minute,1);
 }
 function closeWindow(){
    frontend.frame(main.app_windows.watt_to_amper      ,0);
    frontend.frame(main.app_windows.amper_to_om        ,0);
    frontend.frame(main.app_windows.diametr_to_section ,0);
    frontend.frame(main.app_windows.power_to_thermal   ,0);
    frontend.frame(main.app_windows.nomival_automat    ,0);
    frontend.frame(main.app_windows.balast_cap         ,0);
    frontend.frame(main.app_windows.phase_cap          ,0);
    frontend.frame(main.app_windows.amper_to_ompower   ,0);
    frontend.frame(main.app_windows.voltage_diode_boost,0);
    frontend.frame(main.app_windows.price_to_minute    ,0);
 }
 let debugTools = {
    commandLineInputBuffer: getItem("#command_line"),
    commandSend           : getItem(".send_coomand"),
    commandStr: "",
    commandProcessor:function(command){
        if(command == "-clearWindow"){
            closeWindow();
        }
       
        if(command == "-version"){
            frontend.string.log("[debug] Elc version"+main.version);
        }
        if(command == "exit"){
            frontend.frame(getItem(".logger"),0);//////
        }
        if(command =="getErrors"){
            frontend.string.log("[debug] Критических ошибок:"+runtime_errors_count);
        }
    }
 };
 debugTools.commandLineInputBuffer.oninput = function(){
    commandStr = this.value;
 }
 debugTools.commandSend.onclick = function(){
    debugTools.commandProcessor(commandStr);
 }
// create frames 
