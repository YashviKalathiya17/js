let count=0;
let value=document.getElementById("count").innerHTML;
console.log(value);
let counter=setInterval(()=>{
    count++;
    document.getElementById("count").innerHTML=count;
    if(count===Number(value)){
        count=0;
    }
},10);

//count2:
let count2=0;
let value2=document.getElementById("count2").innerHTML;
console.log(value2);
let counter2=setInterval(()=>{
    count2++;
    document.getElementById("count2").innerHTML=count2;
    if(count2===Number(value2)){
        count2=0;
    }
},10);

//count3:
let count3=0;
let value3=document.getElementById("count3").innerHTML;
console.log(value3);    
let counter3=setInterval(()=>{
    count3++;
    document.getElementById("count3").innerHTML=count3;
    if(count3===Number(value3)){
        count3=0;
    }
},10);

//count4:
let count4=0;
let value4=document.getElementById("count4").innerHTML;
console.log(value4);
let counter4=setInterval(()=>{
    count4++;
    document.getElementById("count4").innerHTML=count4;
    if(count4===Number(value4)){
        count4=0;
    }
},10);