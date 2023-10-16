'use strict';




let score=20;
let highscore=0;
//type of user input will be string !!
let secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);

// if there is not input
if(!guess){
    document.querySelector('.message').textContent='⛔ No Nuumber !'
    document.querySelector('.score').textContent=score;

}
//if guess is correct
//to set anything in the DOM ,used the "="sign
else if(guess===secretNumber){
    
    document.querySelector('.message').textContent='🎉 Correct Guess !!'
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#1bdc18';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('.number').style.backgroundColor='#1bdc18';
    document.querySelector('.number').style.color='#ffffff';
    if(score>highscore){
highscore=score;
document.querySelector('.highscore').textContent=highscore;

    }


}
//if guess is high
else if(guess>secretNumber){
    document.querySelector('.message').textContent='❌ Too High !'

}
//if guess is low
else if(guess<secretNumber){
    document.querySelector('.message').textContent='❌ Too Low !'

}
//is guess not correct
if(guess!=secretNumber){
   
    if(score>1){
        score--;
        document.querySelector('.score').textContent=score;
        

    }
    else{
        document.querySelector('.score').textContent=0;
        document.querySelector('.guess').value=null;

        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.backgroundColor='#e41313';
        document.querySelector('.number').style.color='#ffffff';
        document.querySelector('.message').textContent='😔You lost the game!\n🏃Try again'
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
 
      document.querySelector('.message').textContent='Start guessing ..';

      document.querySelector('.number').textContent='??';
      document.querySelector('.number').style.backgroundColor='#ffffff';
      document.querySelector('.number').style.color='#000000';
      document.querySelector('body').style.backgroundColor='#ffffff';


      secretNumber=Math.trunc(Math.random()*20+1);
      console.log(secretNumber);






    });
  
    
