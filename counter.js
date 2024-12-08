let number=document.querySelector('.num1')
let num=0;
number.innerHTML=num
function increase(){
    num++;
    number.innerHTML=num
}
function decrease(){
    num--;
    number.innerHTML=num
}
function reset(){
    num=0;
    number.innerHTML=num
}
