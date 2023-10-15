//H8.js by HCPP 
//                                              |func_name     id div obj , Text|
//                                               CreateAboutText('div_id','Hello');
document.addEventListener("DOMContentLoaded", function() {
    console.log('H8.js Loaded!!');});
function CreateAboutText(fdiv_id,pId,fSText) 
{
	document.getElementById(fdiv_id).onmouseover = function()
    {
        Message(pId,fSText);
    }
}
// to p objects style 
// font-family: 'White Rabbit';
//font-size: 20px;
//color:white;padding: 5px;
//display: block;
//position: absolute;
//background-color: #1b1b1e;margin:auto;border: 2px solid #636974; 
//
function Message(pId,text)
{
    document.getElementById('pId').style.display = 'block';
    pId.innerHTML = text;
	setTimeout("pId.style.display = 'none';",1000);
}