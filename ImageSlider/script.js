let flag = 0;

slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide');
    slides[num].style.display = "block";
    for(let i = 0; i < slides.length ; i++){
        if(i!=num){
            slides[i].style.display = "none";
        }
    }    
}

let leftarrow = document.getElementById('leftarrow');
let rightarrow = document.getElementById('rightarrow');

rightarrow.addEventListener('click',function(){
    if(flag + 1 > 3){
        flag = 0;
        slideshow(flag);
    }else{
        slideshow(++flag);
    }
});
leftarrow.addEventListener('click',function(){
    if(flag - 1 < 0){
        flag = 3;
        slideshow(flag);
    }else{
        slideshow(--flag);
    }
});