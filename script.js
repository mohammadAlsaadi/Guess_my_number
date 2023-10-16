'use strict';




let score=20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
const displaySecretNumber=function(num){
    document.querySelector('.number').textContent=num;
}
const changeBackgroundColor=function(className,colorValue){
    document.querySelector(`${className}`).style.backgroundColor=colorValue;
}
//type of user input will be string !!
let secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);

// if there is not input
if(!guess){
    displayMessage('⛔ No Nuumber !');
    document.querySelector('.score').textContent=score;

}
//if guess is correct
//to set anything in the DOM ,used the "="sign
else if(guess===secretNumber){
    
    displayMessage('🎉 Correct Guess !!');
    document.querySelector('.score').textContent=score;
    changeBackgroundColor('body','#1bdc18');

    document.querySelector('.number').textContent=secretNumber;
    changeBackgroundColor('.number','#1bdc18');
    document.querySelector('.number').style.color='#ffffff';
    if(score>highscore){
highscore=score;
document.querySelector('.highscore').textContent=highscore;

    }


}

else if(guess!=secretNumber){
   
    if(score>1){
        score--;
        document.querySelector('.score').textContent=score;
        displayMessage(guess>secretNumber?'❌ Too High !' :'❌ Too Low !');
        

    }
    else{
        document.querySelector('.score').textContent=0;
        document.querySelector('.guess').value=null;

        displaySecretNumber(secretNumber);
        changeBackgroundColor('.number','#e41313');

        document.querySelector('.number').style.color='#ffffff';
        displayMessage('😔You lost the game!\n🏃Try again');
    }

}
   
    });

  // Add this code to your script.js file

    const againButton = document.querySelector(".again");
  
    againButton.addEventListener("click", function () {
        score=20;
      document.querySelector('.score').textContent=score;
      document.querySelector('.guess').value='';

    //   document.querySelector('body').backgroundColor='#ffffff';
 
      displayMessage('Start guessing ..');

      displaySecretNumber('??');
      changeBackgroundColor('.number','#ffffff');

      document.querySelector('.number').style.color='#000000';
      changeBackgroundColor('body','#ffffff');


      secretNumber=Math.trunc(Math.random()*20+1);
      console.log(secretNumber);






    });
  
    
