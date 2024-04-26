if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    const mobilecss = document.createElement("link");
    mobilecss.href = "css/mobilestyle.css";
    mobilecss.rel = "sytlesheet";
    document.head.appendChild(mobilecss);
}
else
{
    const pccss = document.createElement("link");
    pccss.href = "css/pcstyle.css";
    pccss.rel = "sytlesheet";
    document.head.appendChild(pccss);
}
