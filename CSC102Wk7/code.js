function countdownTimer(){
    //countdownTimer will go from 50 to 0 by 5
    console.log("countdownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

     //35 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

     //30 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

     //25 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

     //20 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

     //15 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

     //10 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

     //5 sec display
     setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function() {
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff!!!";
    }, 50000);
}

function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;

    //check if craps (7 or 11)
    var sum = die1 + die2
    if(sum == 7 || sum == 11){
        console.lof("you lose!!!!!");
        document.getElementById("gameRes").innerHTML = "you lose!!!!!";
         //check for win
    }else if (die1 % 2 == 0 && die1 == die2){
        console.log("you win!!!!");
        document.getElementById("gameRes").innerHTML = "you win!!!!";
        //check for tie
    }else{
        console.log("you did not win or lose.");
        document.getElementById("gameRes").innerHTML = "You did not win try again";
    }

}

//btrCountdownTimer() created to fulfil assignment Assignment: Efficiency at Mission Control
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            //what we do each iteration
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("countDis").innerHTML = "Blastoff!!";
            }
            currTime = currTime -5;
        }, i * 5000 )
    }
}

function chgBtrCountdownTimer() {
    console.log("chgBtrCountdownTimer() started");
    var currTime = 50;
    var ogCurrTime = currTime;

    for(var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            if(currTime == 0){
                //when we finishing counting down
                document.getElementById("countDis").innerHTML = "Blastoff!!";
            } else if (currTime < 0.5 * ogCurrTime){
                 //less than 1/2 left
                 document.getElementById("countDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime - 5;
        }, i * 5000 )
    }
}

function startFun(){
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable (disable!) stop button
    document.getElementById("stopButton").disabled = false;
    chgBtrCountdownTimer()
}

function stopFun(){
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;

    //enable (disable) start button
    document.getElementById("startButton").disabled = false;
}
