function save(){
    let read=document.querySelector("#inp1").vlue;
let read2=document.querySelector("inp2").Value;
let read3=document.querySelector("inp3").value;



    let clonevalue=document.querySelector("#submit").cloneNode(true);
    clonevalue.innerHTML=read;
    let clonevalue2=document.querySelector("#submit").cloneNode(true);
    clonevalue2.innerHTML=read2;
    let clonevalue3=document.querySelector("#submit").cloneNode(true);
    clonevalue3.innerHTML=read3;

    let read=document.querySelector("#inp1").vlue="";
    let read2=document.querySelector("inp2").Value="";
    let read3=document.querySelector("inp3").value="";
    

    let submitdiv=document.querySelector("#savehere");

    submitdiv.insertBefore
}