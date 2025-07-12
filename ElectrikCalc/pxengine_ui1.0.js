// window ui api

//
let id_hash = "";
let chars = 'qwertyuiopasdfghjklzxcvbnm'; 
let _cnk = 0;
let charsOffsetSize = chars.length;
//
class px_window{
    api_last_module;
    line_exception;
    buffer_out;
    api = this;
    MessageBoxMainTag;
    MessageBoxSizeAuto;
    api_init_flag = false;
    api_version = "1.0.223";
    newId;
    px = {
        mainDocument:{
         bodyHandle: document.body,
         htmlHandle: document.documentElement,
         styleHandle: document.querySelector("#main_style")
        },
        device:{
         wctx: window.innerWidth,
         wcty: window.innerHeight
        },
        ui:{
            borderSize: 1 + "px",
            borderColor: "#535353",
            backgroundColor: "#010101",
            windowSize:{
                x: 530,
                y: 800
            },
    
        }
    };
    init(){
        this.api_init_flag = true;
        console.log("PXEngineUI:: "+this.api_version + " status: OK"+"\ngithub/hcpp20334\nmodule: pxengine_ui1.0.js");
    }
    GetWindowWidth(){
        return window.innerWidth;
    }
    GetWindowHeight(){
        return window.innerHeight;
    }
    FrameClose(id){
        id.style.display = "none";
    }
    FrameInlineBlock(id){
        id.style.display = "inline-block";
    }
    FrameBlock(id){
        id.style.display = "block";
    }
    //GetItem(d) - Get you Element Example: api.GetItem("#my_item");
    GetItem(d)
    {
        return document.querySelector(d);
    }
    InitConsoleBuffer(buf_id){
        buffer_out = buf_id;
    }
    ConsoleLog(t){
        buffer_out.textContent  = t;
    }
    Exception(error_id){
        let error_callbacks = { 
        api_error_null: "",
        api_error: "Fatal Error to Javascript line:",
        api_error_create_window: "Error to CreateWindow!!  line:",
        api_error_load_module: "Fatal Error: to load you module "+this.api_last_module,
        };
        let error_str = "";
        //errors
        if (error_id == 0){error_str =  error_callbacks.api_error; }
        if (error_id == 1){error_str =  error_callbacks.api_error_create_window; }
        if (error_id == 2){error_str =  error_callbacks.api_error_load_module; }
        this.MessageBox("PXEngineUI",error_str);
    }
    GetError(){
        window.addEventListener("error",function(pxui_exception){
            this.MessageBox("Oops!!","stack_error:<br>"+pxui_exception.error +" [line:"+pxui_exception.lineno+"]",1000); 
        });
    }
    genUUID(size){
        id_hash = "";
        for(let UUID_OFFSET = 0; UUID_OFFSET <= size; UUID_OFFSET++){
            id_hash = id_hash + chars[parseInt(Math.random((charsOffsetSize)) * 10)];;
            _cnk++; 
            if(_cnk >= 4){
                _cnk = 0;
                if(UUID_OFFSET >= size)
                {
                    id_hash = id_hash;
                }
                else{
                    id_hash += "-"; 
                }
                
            }
        }
        return id_hash.toUpperCase(); 
    }
    
    SwapAppendId(id){
        this.newId = id;
    }
    createWindow(_main,title,data,styleData){
      let titleHandle = document.createElement("p");
      let newWindow =document.createElement("div");
      newWindow.appendChild(titleHandle);
      titleHandle.textContent = title;
      titleHandle.style.color = "#ffffff";
      titleHandle.style.fontFamily = "roboto Mono";
      titleHandle.style.transform = "translate(10px,10px)"
      titleHandle.style.fontSize = 12;
      newWindow.id = _main; 
      newWindow.innerHTML += data;
      if(styleData == null && styleData == undefined){
      newWindow.style = 
      "background:"+this.px.ui.backgroundColor+";"
      +"border:"+this.px.ui.borderSize + "solid" + this.px.ui.borderColor+";";
      }else{
        newWindow.style.styleData;
      }
      this.newId.appendChild(newWindow);
    }
    CreateItem(tag){
        return document.createElement(tag);
    }
    addTagToWindow(data,styleData,tagType,idToAppend,id){
        let currentTag = document.createElement(tagType);
        currentTag.style = styleData;
        currentTag.textContent = data;
        this.px.mainDocument.styleHandle.innerHTML += "#"+id+"{\n"+ styleData + "\n}";
        currentTag.id= id;
        idToAppend.appendChild(currentTag);

    }
    deleteTag(id,idToAppend){
        idToAppend.removeChild(id);
    }
    SetWindowSize(id,x,y){
        id.style.width = x + "px";
        id.style.height = y + "px";
    }
    SetPosCenter(id){
        id.style.transform = "translate("+(this.px.device.wctx - parseInt(id.style.width)) / 2 +"px,"+(this.px.device.wcty - parseInt(id.style.height)) / 2+"px)";
    }
    SetPosCenterX(id){
        id.style.transform = "translateX("+(this.px.device.wctx - parseInt(id.style.width)) / 2 +"px)";
    }
    destroyWindow(uuid){
        this.px.mainDocument.htmlHandle.removeChild(uuid);
    }
   GetMessageBoxInit(AppendToId){
    this.MessageBoxMainTag = AppendToId;
   }
   //
   SizeWH = {
    x: 0,
    y: 0
   }
   MsgStyleText = undefined;
   //
   MessageBoxSize(x,y){
    this.MessageBoxSizeAuto = true;
    this.SizeWH.x = x;
    this.SizeWH.y = y;
   }
   // Set Style To Window
   MessageBoxStyleWindow(CssStr){
    this.MsgStyleText = CssStr;
   }
   MessageBox(title_text, msg_text, d,callback,callback2,style) {
    let MessageBoxOffsets = {
        window: document.createElement("div"),
        windowTitle: document.createElement("div"),
        windowTitleText: document.createElement("p"),
        windowButtonOK: document.createElement("button"),
        windowButtonCancel: document.createElement("button"),
        styleWindow: "",
        styleText: "",
        styleWindowTitle: "",
        size: { x: 320, y: 220 },
        colors: { background: "#010101", text: "#ffffff" },
        Delay: 0,
        AppendToId: this.MessageBoxMainTag,
        wd: { x: window.innerWidth, y: window.innerHeight },
        MessageText: document.createElement("p") 
    };
    if(this.MessageBoxSizeAuto){
        MessageBoxOffsets.size.x = this.SizeWH.x;
        MessageBoxOffsets.size.y = this.SizeWH.y;
    }
    // Delay
    MessageBoxOffsets.Delay = (!d) ? 10000 : d;

    // Стили для текста
    MessageBoxOffsets.MessageText.innerHTML = msg_text + "<br>";
    MessageBoxOffsets.MessageText.style.cssText = `
        color: #ffffff;
        font-family: SFBold;
        font-size: 18px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        width: 100%;
        transition: .4s;
    `;

    // Стили для кнопки
    MessageBoxOffsets.windowButtonOK.style.cssText = `
        background: #ff0070;
        border: 1px solid #191919;
        width: 100px;
        height: 30px;
        color: #ffffff;
        font-size: 18px;
        font-family: 'Roboto Mono';
        display : inline-block;
        margin: auto;transform: translate(-20px,50px);
    `;
    MessageBoxOffsets.windowButtonCancel.style.cssText = `
    background: #ff0070; 
    border: 1px solid #191919;
    width: 100px;
    height: 30px;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Roboto Mono';transform: translate(20px,50px); 
    display: inline-block;
    margin: 10px;
    transition: background 0.3s, color 0.3s; /* Плавный переход для эффекта */
`;

// Обработчики для hover
MessageBoxOffsets.windowButtonCancel.addEventListener('mouseover', function() {
    this.style.background = '#fff';
    this.style.color = '#070707';
});

MessageBoxOffsets.windowButtonCancel.addEventListener('mouseout', function() {
    this.style.background = '#ff0070';
    this.style.color = '#ffffff';
});
MessageBoxOffsets.windowButtonOK.addEventListener('mouseover', function() {
    this.style.background = '#fff';
    this.style.color = '#070707';
});

MessageBoxOffsets.windowButtonOK.addEventListener('mouseout', function() {
    this.style.background = '#ff0070';
    this.style.color = '#ffffff';
});
    // Стили для заголовка
    MessageBoxOffsets.styleWindowTitle = `
        border-bottom: 1px solid #191919;
        width: 100%;
        height: 20px;
        background: #010101;
    `;
    MessageBoxOffsets.styleText = `
        color: #ffffff;
        font-family: SFBold;
        font-size: 18px;
        text-align: center;
        transform: translateY(-8px)
    `;

    // Сборка структуры
    MessageBoxOffsets.AppendToId.appendChild(MessageBoxOffsets.window);
    MessageBoxOffsets.window.appendChild(MessageBoxOffsets.windowTitle);
    MessageBoxOffsets.windowTitle.appendChild(MessageBoxOffsets.windowTitleText);
    MessageBoxOffsets.window.appendChild(MessageBoxOffsets.MessageText);
    MessageBoxOffsets.MessageText.appendChild(MessageBoxOffsets.windowButtonOK);
    MessageBoxOffsets.MessageText.appendChild(MessageBoxOffsets.windowButtonCancel);

    // Стили для окна
    let translateY = (MessageBoxOffsets.wd.y - MessageBoxOffsets.size.y) / 2;
    translateY = Math.max(0, translateY) * -1.5; // Избегаем отрицательного смещения
    if(this.MsgStyleText == undefined){
    MessageBoxOffsets.window.style.cssText = `
        display: block;
        min-width: ${MessageBoxOffsets.size.x}px;
        min-height: ${MessageBoxOffsets.size.y}px;
        width: auto;
        height: auto;
        position: absolute; /* Изменено с absolute на fixed */
        z-index: 2;
        transform: translate(
            ${(MessageBoxOffsets.wd.x - MessageBoxOffsets.size.x) / 2}px,
            ${translateY}px
        );
        background: ${MessageBoxOffsets.colors.background};
        border: 1px solid #191919;

    `;   
    }
    else{
        MessageBoxOffsets.window.style.cssText = this.MsgStyleText;
    }
    MessageBoxOffsets.windowTitle.style = MessageBoxOffsets.styleWindowTitle;
    MessageBoxOffsets.windowTitleText.style = MessageBoxOffsets.styleText;
    MessageBoxOffsets.windowTitleText.textContent = title_text;
    MessageBoxOffsets.windowButtonOK.textContent = "OK";
    MessageBoxOffsets.windowButtonCancel.textContent = "Cancel";
    // Таймер для удаления окна
    // Обработчики событий для кнопок
    if (typeof callback === 'function') {
        MessageBoxOffsets.windowButtonOK.onclick = function() {
            callback(); // Вызываем переданный callback
            MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window); // Удаляем окно
        };
        MessageBoxOffsets.windowButtonCancel.onclick = function() {
            callback2(); // Вызываем переданный callback
            MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window); // Удаляем окно
        };
    } else {
        MessageBoxOffsets.windowButtonOK.onclick = function() {
            MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window); // Удаляем окно без callback
        };
        MessageBoxOffsets.windowButtonCancel.onclick = function() {
            MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window); // Удаляем окно без callback
        };
    }
 
    MessageBoxOffsets.windowButtonCancel.onclick = function() {
        MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window); // Удаляем окно при клике на Cancel
    };
    if(style){
        let timeout = setTimeout(function () {
            MessageBoxOffsets.AppendToId.removeChild(MessageBoxOffsets.window);
            clearTimeout(timeout);
        }, MessageBoxOffsets.Delay);
    }
   
}
}