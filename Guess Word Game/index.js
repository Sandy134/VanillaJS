const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randomWords = "";
let sWords = ['India','China','Japan','USA','Canada','Germany','Poland','Italy','Singapore','UAE','Mexico','Argentina','Brazil','Russia'];

const createNewWords = ()=>{
    let ranNum = Math.floor(Math.random() * sWords.length);
    // console.log(ranNum);

    let newTempSwords = sWords[ranNum];
    console.log(newTempSwords);
    return newTempSwords;
};

const scrambleWords = (arr) => {
    for(let i = arr.length - 1; i > 0 ; i--){
        let temp = arr[i];
        console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        console.log(i);
        console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
};

btn.addEventListener('click',function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split('')).join('');
        msg.innerHTML = `Guess The Word: ${randomWords}`;
    }else{

        let tempWord = guess.value;
        if(newWords === tempWord){
            console.log("Correct");
            play = false;
            msg.innerHTML = `Awesome It's Correct . It is ${newWords}`;
            btn.innerHTML = "Start again";
            guess.classList.toggle('hidden');
            

        }else{
            msg.innerHTML = `Sorry Boss!! Its Incorrect. Plz try Again ${randomWords}`;
            console.log('incorrect');
        }
    }
});