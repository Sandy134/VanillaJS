const button = document.querySelector('.container button');

const jokeText = document.querySelector('.container .joke p');

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers : {
            'Accept':'application/json',

        }
    });
    const jokeObj = await jokeData.json();
    // console.log(jokeObj);
    jokeText.innerHTML = jokeObj.joke;
}

button.addEventListener('click',getJoke);
