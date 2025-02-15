function sum(){
    let a =document.getElementById("valueofA").value;
    let b=document.getElementById("valueofB").value;
    console.log(Number(a)+Number(b));
    document.getElementById("result").innerHTML=(Number(a)+Number(b));
 }
 
 function sub(){
     let a =document.getElementById("valueofA").value;
     let b=document.getElementById("valueofB").value;
     console.log(Number(a)-Number(b));
     document.getElementById("result").innerHTML=(Number(a)-Number(b));
  }
 
  function mul(){
     let a =document.getElementById("valueofA").value;
     let b=document.getElementById("valueofB").value;
     console.log(Number(a)*Number(b));
     document.getElementById("result").innerHTML=(Number(a)*Number(b));
  }
 
  function div(){
     let a =document.getElementById("valueofA").value;
     let b=document.getElementById("valueofB").value;
     console.log(Number(a)/Number(b));
     document.getElementById("result").innerHTML=(Number(a)/Number(b));
  }
 
  function mod(){
     let a =document.getElementById("valueofA").value;
     let b=document.getElementById("valueofB").value;
     console.log(Number(a)%Number(b));
     document.getElementById("result").innerHTML=(Number(a)%Number(b));
  }