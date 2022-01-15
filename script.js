let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);


if(!guess){
    displayMessage('No Number!');
}else if(guess === secretNumber){
    displayMessage('Correct Answer');
    document.querySelector('.number').textContent =secretNumber;
    document.querySelector('body').style.backgroundColor ='#60b347';
    document.querySelector('.number').style.width='30rem';

    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }
}else if(guess !== secretNumber){
    if(guess > secretNumber){
        displayMessage("Too High");
    }else if(guess < secretNumber){
        displayMessage("Too Low");
    }
    score =score -1;
    document.querySelector('.score').textContent =score;
}



});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber =Math.trunc(Math.random()*20)+1;
    displayMessage("Start Guessing....");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value ='';


    document.querySelector('.body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width='15rem';
});
