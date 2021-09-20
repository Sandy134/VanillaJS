const form  = document.querySelector('form');
const factdiv = document.querySelector('.number-fact');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const number = e.target.querySelector('#inputBox').value;
    const loadText = 'Wait a little Bit';
    factdiv.innerHTML = loadText;
    getFact(number);

})

async function getFact(number){
    const url = 'http://numbersapi.com/';
    const res = await fetch(url+number)
    const text =await res.text();
    factdiv.innerHTML = text;
}