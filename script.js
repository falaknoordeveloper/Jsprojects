function getComputerChoice(){
    var arr=["Rock","Paper","Scissor"];
    var rand=Math.floor(Math.random()*arr.length);
    return arr[rand];
    // console.log(arr[rand]);
}
function UserChoice(user){
    var computerChoice=getComputerChoice()
if(computerChoice==="Rock"){
    if(user==="Paper"){
     alert("user win")   
    }
}
else{
    if(computerChoice===user){
        alert("draw")
    }
    else{
        alert("computer win")
    }
}
}