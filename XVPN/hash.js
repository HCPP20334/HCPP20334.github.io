let strBuffer = "123456789";
function genHash(str,len){
    let out_hash = '';
    for(let sz_str = 0;sz_str <= len;sz_str++){
        out_hash += str[Math.floor(Math.random() * str.length)];
        return out_hash;
    }
}
let hashData = getHash(strBuffer,128);
console.log(hashData);

