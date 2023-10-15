'use strict';



// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct guessing !';
// console.log(document.querySelector('.message').textContent);
// let valueOfGuess=document.querySelector('.guess').value;
// let message=document.querySelector('.message').textContent;
let counterOfGuessing=0;
document.querySelector('.check').addEventListener('click',function(){
    if(document.querySelector('.guess').value==9){
        document.querySelector('.message').textContent ='correct guessing !';
       console.log(document.querySelector('.guess').value);

    }
    else if(document.querySelector('.guess').value>9&&document.querySelector('.guess').value<14){
        document.querySelector('.message').textContent ='a little high !';
        console.log(document.querySelector('.guess').value);

1   
    }
    else if(document.querySelector('.guess').value<9&&document.querySelector('.guess').value>5){
        document.querySelector('.message').textContent ='a little low !';
        console.log(document.querySelector('.guess').value);


    }
    else if(document.querySelector('.guess').value<5){
        document.querySelector('.message').textContent ='Too low !';
        console.log(document.querySelector('.guess').value);


    }
    else if(document.querySelector('.guess').value>14){
        document.querySelector('.message').textContent='Too high !';
        console.log(document.querySelector('.guess').value);

    }});

    document.querySelector('.again').addEventListener('click',function(){

        document.querySelector('.guess').value=null;
        document.querySelector('.message').textContent ='Start guessing again 😜';

    })

    document.querySelector('.check').addEventListener('click',function(){

        if (document.querySelector('.guess').value!=9){
            counterOfGuessing++;

        }
        else{
            document.querySelector('.lable-score').textContent=counterOfGuessing.toString;
        }
    })