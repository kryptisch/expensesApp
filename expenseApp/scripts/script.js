// 'use strict';

let income = prompt("Please enter imcome", "1500");
    // let income = prompt("Please enter income", "1500");
    var incomefix=income;
    document.getElementById("income-number").innerHTML=incomefix;


let sno=0;
let totalAmount=0;
let remaining=0;
const addexpense = document.querySelector('.submit-btn')
const addsno = document.querySelector('#sno-td')
const additem = document.querySelector('#item-td')
const addprice = document.querySelector('#price-td')
const addquantity = document.querySelector('#quantity-td')
const addamount = document.querySelector('#amount-td')
const tbodyv = document.getElementById('tbody')


addexpense.addEventListener('click',(event) =>{


    const item = document.getElementById('item').value;
    const price = Number (document.getElementById('price').value);
    const quantity = Number (document.getElementById('quantity').value);
    if ((price >0) && (quantity>0))  
    {
        sno +=1;
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const dateTime = date+ '<br> '+time;
        const amount = price*quantity;
        totalAmount += amount;
        remaining = income-totalAmount;
        let newline =tbodyv.innerHTML;
        newline += '<tr>'+'<td>'+sno+'</td>'+'<td>'+dateTime+'</td>'+'<td>'+item+'</td>'+'<td>'+price+'</td>'+'<td>'+quantity+'</td>'+'<td>'+amount+'</td>'+'</tr>';
        tbodyv.innerHTML=newline;
        document.getElementById("totalItems").innerHTML=sno;
        if(remaining<0){
            alert("Your running out of money");
            document.querySelector("#remainingAmount").style.color="red";
    
        }
        document.getElementById("totalExpenses").innerHTML=totalAmount;
        document.getElementById("remainingAmount").innerHTML=remaining;
    }
    else{
        // alert("Price and Quantity must be a number and greater than 0!!!")
        let message="Please enter valid number in Price and Quantity";
        document.getElementsByClassName("message").innerHTML=message;
        document.querySelector(".message-box").style.display="flex";

    }


})


document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".input-pop").style.display="block";
    document.querySelector(".input-pop").style.transition= "all 0.5s ease-in-out";
    document.querySelector("#overlay").style.opacity="1";
})
document.querySelector(".input-pop-close").addEventListener("click",function(){
    // document.querySelector(".input-popdown").style.animation=" popdown .5s";
    document.querySelector(".input-pop").style.display="none";
    document.querySelector("#overlay").style.opacity="0";
})
document.querySelector(".message-close").addEventListener("click",function(){
    document.querySelector(".message-box").style.display="none";
    // document.querySelector("#overlay").style.opacity="0";
})
document.querySelector("#overlay").addEventListener("click",function(){
    document.querySelector(".input-pop").style.display="none";
    document.querySelector("#overlay").style.opacity="0";
})


