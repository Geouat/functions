function newAlert()
{
    alert("On the right track")
   
}

function upDate()
{   var Dice1  = Math.ceil(Math.random() *6);
    var Dice2  = Math.ceil(Math.random() *6);
    var Dice3  = Math.ceil(Math.random() *6);
    var sum = Dice1 + Dice2 + Dice3;

    if (Dice1 % 2==0 && Dice2 % 4==0 && Dice3 % 6==0)    
    { 
        document.getElementById("result").innerHTML = " you win"
    } 
    
    else if (Dice1==1 ||Dice2==3||Dice3==5)
       
    { 
        document.getElementById("result").innerHTML = "you lose"
    }
    else
        (Dice1==1 ||Dice2==1||Dice3==1)
    {
        
        document.getElementById("result").innerHTML = " no win/no loss"
    
    }
    document.getElementById("Dice1").innerHTML = "Dice1 = " + Dice1;
    document.getElementById("Dice2").innerHTML = "Dice2 = " + Dice2;
    document.getElementById("Dice3").innerHTML = "Dice3 = " + Dice3;
}
