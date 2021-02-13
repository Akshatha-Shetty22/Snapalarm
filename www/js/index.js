document.getElementById("b1").addEventListener("click",fun);
document.getElementById("setbutton").addEventListener("click",fun1);

document.getElementById("b5").addEventListener("click",snooze);
document.getElementById("back").addEventListener("click",fun2);
document.getElementById("cancel").addEventListener("click",cancelAlaram);
function fun()
{
    document.getElementById("Firstpage").style.display='none';
    document.getElementById("Secondpage").style.display='';
}
function fun2()
{
    document.getElementById("Secondpage").style.display='none';
    document.getElementById("Firstpage").style.display='';
}
 var alarmSound=new Audio();
alarmSound.src="/android_asset/www/music/wakeup.mp3";

    

function fun1()
{
    var ms=document.getElementById("setalarm").valueAsNumber;
    if(isNaN(ms))
        {
            alert("INVALID DATE");
            return;
        }
    var alarm=new Date(ms);
    var alarmTime=new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
    var differenceInMs=alarmTime.getTime()-(new Date()).getTime();
    if(differenceInMs<0)
        {
            alert("Specified time is already Passed!!!!!");
            return;
        }
    else{
        alert("Alarm Set");
    }
    setInterval(initAlarm,differenceInMs);
    setTimeout(changePages,differenceInMs);
    
};
function changePages()
{
   document.getElementById("Secondpage").style.display="none";
    
    document.getElementById("Thirdpage").style.display=''; 
};
function initAlarm()
{
   
    alarmSound.play();
    
};
document.addEventListener("deviceready",onDeviceReady);
function onDeviceReady()
{
    console.log(navigator.camera);
    document.getElementById("b6").addEventListener("click",stopAlarm);
}

function stopAlarm()
{
    alert("To stop the alarm Snap something,so that we know you are wide awake :)");
     navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
   });

   function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
    
     document.getElementById("Thirdpage").style.display="none";
    document.getElementById("Secondpage").style.display='';
    alarmSound.pause();
    alarmSound.src=""; 
    
};

function snooze()
{
    alert("Alarm Snoozed for 2 Minutes!!")
     document.getElementById("Thirdpage").style.display="none";
    document.getElementById("Secondpage").style.display='';
    alarmSound.pause();
    alarmSound.src="";
    setTimeout(snoozeTime,120000);
    
};
function snoozeTime()
{
     document.getElementById("Secondpage").style.display="none";
    document.getElementById("Thirdpage").style.display=''; 
    alarmSound.src="/android_asset/www/music/wakeup.mp3";
}
function cancelAlaram()
{
    alert("Alarm Cancelled!!!");
     document.getElementById("Thirdpage").style.display="none";
    document.getElementById("Secondpage").style.display='';
    alarmSound.src="";
   
}