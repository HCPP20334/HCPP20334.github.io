let ina = [ 13,45,155,400,900 ];
const ELC = {
    watt2amper: function(u , p){
        return (p / u);
    },
    amper2watt: function(u , i){
        return (u * i);
    },
    om2volt: function(u , r){
        return (u / r);//fAmper = fVoltage / fResistor;
    },
    power2thermal: function(u,r){
        //fValue = (fVolt * fVolt) / fR;
        return (u * u) / r;
    },
    diametr2section:function(dia){
      return ((dia / 2) * (dia / 2) * Math.PI);
    },
    nominalAutomat: function(an,k){
       
        // rs = ((float)ina / 100) * an + an;
        //fStrNominal = std::to_string(rs);
        let rs = (parseFloat(ina[nk]) / 100) * parseFloat(an) + parseFloat(an);
        frontend.string.log("[debug] an:"+an+" k:"+k + "ina["+nk+"]:"+ina[nk]+" rs:"+rs);
        return rs;
    },
    balastCap: function(u0,u1,i){
        //fCoutData = (3200 * fIdata / fUoutData);
        //u1 - u power
        // u0 - u in
        let udata = fUoutData = Math.sqrt(Math.pow(u0, 2) - Math.pow(u1, 2));
        let cdata = parseFloat(3200 * i / udata);
        return cdata;
    }
};

let inastr = ["1.13","1.45","2.55","5.00","10.0"];
function getIna(idx){
    return inastr[idx];
}
let nk = 0;
let defauit_color = "#404060";
let selected_color = "#1234f5";
let defauit_color_shadow = "none";
let selected_color_shadow = "0px 0px 20px #1234f5";
let bnarray = [ "#bn0","#bn1","#bn2","#bn3","#bn4"];
function setPercentN(idx,idbutton){
    nk = idx;
    getItem(bnarray[0]).style.background = (idx == 0 ? selected_color : defauit_color);
    getItem(bnarray[1]).style.background = (idx == 1 ? selected_color : defauit_color);
    getItem(bnarray[2]).style.background = (idx == 2 ? selected_color : defauit_color);
    getItem(bnarray[3]).style.background = (idx == 3 ? selected_color : defauit_color);
    getItem(bnarray[4]).style.background = (idx == 4 ? selected_color : defauit_color);
    //
    getItem(bnarray[0]).style.boxShadow = (idx == 0 ? selected_color_shadow : defauit_color_shadow);
    getItem(bnarray[1]).style.boxShadow = (idx == 1 ? selected_color_shadow : defauit_color_shadow);
    getItem(bnarray[2]).style.boxShadow = (idx == 2 ? selected_color_shadow : defauit_color_shadow);
    getItem(bnarray[3]).style.boxShadow = (idx == 3 ? selected_color_shadow : defauit_color_shadow);
    getItem(bnarray[4]).style.boxShadow = (idx == 4 ? selected_color_shadow : defauit_color_shadow);
}
const floatoffsets = {
    fu: 0.0,
    fw: 0.0,
    fu2: 0.0,
    fa: 0.0,
    fna: 0.0,
    frv: 0.0,
    fuv: 0.0,
    fRmm2: 0.0,
    fbcapu0: 0.0,
    fbcapu1: 0.0,
    fbcapu2: 0.0
}

const textBuffers = {
    setText:function(id,text){
       id.innerHTML = text.toFixed(2);
    },
    fwua: getItem("#fwua"),
    fau: getItem("#fau"),
    anbf: getItem("#anbf"),
    frb: getItem("#frb"),
    fsec: getItem("#fsec"),
    acap: getItem("#acap"),
};

const inputs_elc= {
    watt2amperInput0: getItem("#winput"),
    watt2amperInput1: getItem("#uinput"),
    amper2wattInput0: getItem("#a2input"),
    amper2wattInput1: getItem("#u2input"),
    nominalAutomatInput0: getItem("#aninput"),
    Voltage2OMInput0: getItem("#rinput"),//u3input
    Voltage2OMInput1: getItem("#u3input"),
    DiaInput0: getItem("#diainput"),
    balastCapInput0: getItem("#uoutinput"),
    balastCapInput1: getItem("#uininput"),
    balastCapInput2: getItem("#iinput")
};
inputs_elc.watt2amperInput0.oninput = function(){
    floatoffsets.fw = this.value;
}
inputs_elc.watt2amperInput1.oninput = function(){
    floatoffsets.fu = this.value;
}
inputs_elc.amper2wattInput0.oninput = function(){
    floatoffsets.fa = this.value;
}
inputs_elc.amper2wattInput1.oninput = function(){
    floatoffsets.fu2 = this.value;
}
inputs_elc.nominalAutomatInput0.oninput = function(){
    floatoffsets.fna = this.value;
   
}
inputs_elc.Voltage2OMInput0.oninput = function(){
    floatoffsets.frv = this.value;
}
inputs_elc.Voltage2OMInput1.oninput = function(){
    floatoffsets.fuv = this.value;
}
inputs_elc.DiaInput0.oninput = function(){
    floatoffsets.fRmm2 = this.value;
}
inputs_elc.balastCapInput0.oninput = function(){
    floatoffsets.fbcapu0 = this.value;
}
inputs_elc.balastCapInput1.oninput = function(){
    floatoffsets.fbcapu1 = this.value;
}
inputs_elc.balastCapInput2.oninput = function(){
    floatoffsets.fbcapu2 = this.value;
}