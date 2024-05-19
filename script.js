
function round() {
    let number = document.getElementById("input").value;
    if (isNaN(number))
        alert("Enter A Number In Input Field")
    else if (number == "")
        alert("Enter A Numer in Input Field")
    else {

        document.getElementById("output").innerHTML = Math.round(number)
    }

}
function ceil() {
    let number = document.getElementById("input").value;
    if (isNaN(number))
        alert("Enter A Number In Input Field")
    else if (number == "")
        alert("Enter A Numer in Input Field")
    else {

        document.getElementById("output").innerHTML = Math.ceil(number)
    }
}

function floor() {
    let number = document.getElementById("input").value;
    if (isNaN(number))
        alert("Enter A Number In Input Field")
    else if (number == "")
        alert("Enter A Numer in Input Field")
    else {

        document.getElementById("output").innerHTML = Math.floor(number)
    }
}
function random() {
    document.getElementById("output").innerHTML = Math.random();
}
function dice() {
    let dice = Math.random() * 6 + 1;
    document.getElementById("output").innerHTML = Math.floor(dice);

}
function password() {
  let length=document.getElementById("input").value;
  
  if(length==""){

      alert("Please Enter Lenght");
      
  }
else{
    if(isNaN(length))
alert("Enter A number")
else
{
    let strPass="";  
  let capalpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallalpha="abcdefghijklmnopqrstuvwxyz";
  let numbers="0123456789";
  let symbols="!@#$%^&*()_";
  let passwords=capalpha+smallalpha+numbers+symbols;
    for(let index=0;index<length;index++)
    {
        let randomNum=Math.random();
         strPass =strPass+passwords.charAt(Math.floor(randomNum*passwords.length))
    }
    document.getElementById("output").innerHTML=strPass;
}

}
}
function converting(){
let number=document.getElementById("input").value;
if(number=="")
alert("Enter Value in Input Field") 
else{


let intNum=parseInt(number)
let floatNum=parseFloat(number)
document.getElementById("output").innerHTML="<p>This Is String Value = "+number+"<br><p>This Is Integer Value = "+intNum+"<br><p>This Is Floating Value = "+floatNum

}
}
function controlling(){

    let number=document.getElementById("input").value;
    if(number=="")
    alert("input a number")
else{
    if(isNaN(number))
    alert("input only digits")
else{
    number=Number(number)
    number=number.toFixed(2);
    document.getElementById("output").innerHTML="Decimal is fixed to 2 digit in length <br>"+number;
}

}
}

function outputclear() {
    document.getElementById("output").innerHTML="";

} 
function inputclear() {     
    document.getElementById("input").value="";

} 
function gst(){
    let price=document.getElementById("input").value;
    price=Number(price);
    if(price=="")
    alert("Input a Number")
else{
    if(isNaN(price))
    alert("Enter a Digit")
else{
    let gst=(price*17)/100;
    let newprice=gst+price;
    document.getElementById("output").innerHTML="Old Price = "+price+"<br> GST = "+gst+"<br> New Price = "+newprice;
}
}
} 


