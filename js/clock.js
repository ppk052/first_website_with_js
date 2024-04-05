const clock = document.getElementById("clock");

function setclock()
{
    const date = new Date();
    const hour = date.getHours();
    if(hour>12)
    {
        clock.innerText = String(hour-12)+":"+String(date.getMinutes()).padStart(2,"0")+":"+String(date.getSeconds()).padStart(2,"0");
    }
    else
    {
        clock.innerText = String(hour)+":"+String(date.getMinutes()).padStart(2,"0")+":"+String(date.getSeconds()).padStart(2,"0");
    }
}

function startclock()
{
    setclock();
    setInterval(setclock,1000);
}

setclock();
setTimeout(startclock,1000-parseInt(new Date().getMilliseconds(),10));
