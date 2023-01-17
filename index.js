let element=document.getElementById('element')
let code=document.getElementById('code')
let inputs=document.querySelectorAll('.slider input');
let bgcolor=document.getElementById('bg-color').value
inputs.forEach((inp)=>inp.addEventListener('input',genShadow));

function genShadow(){
    let hshadow=document.getElementById('h-shadow').value;
    let vshadow=document.getElementById('v-shadow').value;
    let bradius=document.getElementById('b-radius').value;
    let sradius=document.getElementById('s-radius').value;
    let copacity=document.getElementById('c-opacity').value;
    let scolor=document.getElementById('s-color').value;
    let bgcolor=document.getElementById('bg-color').value;

    let sh_inset=document.getElementById('in-shadow').checked;

    let boxShadow=sh_inset
    ?`inset ${hshadow}px ${vshadow}px ${bradius}px ${sradius}px ${hex2rgb(scolor,copacity)}`
    :`${hshadow}px ${vshadow}px ${bradius}px ${sradius}px ${hex2rgb(scolor,copacity)}`;


    element.style.boxShadow=boxShadow;
    element.style.backgroundColor=boxcolor(bgcolor);
    code.textContent=`box-shadow:${boxShadow};`;
    code2.textContent=`background-color:${boxcolor(bgcolor)}`
}

function hex2rgb(scolor,copacity){
   let r=parseInt(scolor.substr(1,2),16);
   let g=parseInt(scolor.substr(3,2),16);
   let b=parseInt(scolor.substr(5,2),16);

return `rgba(${r},${g},${b},${copacity})`

}

// To change the box bg color

function boxcolor(bgcolor){
   let r=parseInt(bgcolor.substr(1,2),16);
   let g=parseInt(bgcolor.substr(3,2),16);
   let b=parseInt(bgcolor.substr(5,2),16);
   return `rgb(${r},${g},${b})`;
}


//to coyy the code written  in textarea

function copycode(){
    code.select();
    document.execCommand("copy")
    alert("code copied to the clipboard")
}
function copycode2(){
    code2.select();
    document.execCommand("copy")
    alert("code copied to the clipboard")
}

window.onload=genShadow();