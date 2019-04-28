
var i=0;
var images=[];
var time=5000;
images[0]='HI.jpg';
images[1]='amazing-2451327.jpg';
images[2]='background-beach-daylight-1451360.jpg';
 function changeImg(){
document.slide.src=images[i];
if(i<images.length-1)
{
i++;
}
else
{
i=0;
}
setTimeout("changeImg()",time);
}
window.onload=changeImg;
