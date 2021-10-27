let txtarea = document.querySelector('textarea');
let showTime = document.getElementById('showTime');
let a=0,b=0;
function checkTime(){
    if(b!=2)
        a++;
    showTime.innerHTML = a+' sec';
    if(a==5){
        b=2
        txtarea.disabled=true;
        showTime.innerHTML = 'Times up';
        return;
    }
}
txtarea.addEventListener("keypress",(event) =>{
    if(b==0){
        var time = setInterval(checkTime,1000);
        b=1;}
}
)