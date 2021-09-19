
var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    ms = 0;
    sec = 0;
    min = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('ms').innerHTML = "00";
}

function stopwatch(){
    if(timer==true){
        ms += 1;
        if(ms > 99){
            sec++;
            ms = 0;
        }
        if(sec > 59){
            min++;
            sec = 0;
        }
        if(min > 59){
            hr++;
            min = 0;
        }
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var msString = ms;

        if(hr<10){
            hrString = "0"+hrString;
        }
        if(min<10){
            minString = "0"+minString;
        }
        if(sec<10){
            secString = "0"+secString;
        }
        if(ms<10){
            msString = "0"+msString;
        }


        document.getElementById('ms').innerHTML = msString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('hr').innerHTML = hrString;
        setTimeout("stopwatch()",10);   
    }
}