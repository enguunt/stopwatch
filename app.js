function hello(){
	console.log("hello");
}
// setTimeout -> 1udaa ashiglaj bolno
setTimeout(hello,2000);
// setInterval -> hyzgaargui ajilna
//setInterval(hello,1000);

// define
var time = document.getElementsByTagName('h1')[0];
var doli=0,second=0, minute=0; hour=0; 
var ol = document.getElementsByTagName('ol')[0];
// function
function watch(){
	doli++;
	if(doli==100){
		second++;
		doli=0;
		}
	if(second==60){
		minute++;
		second=0;
		if(minute==60){
			hour++;
			minute=0;
		}
		
	}
	// ternary operator ?:
	var d = doli<10 ? "0"+doli : doli;
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText = h+":"+m+":"+s+":"+d;
}
var up;
function start(){
	up=setInterval(watch,10);
	
}
//clearInterval
function stop (){
	clearInterval(up);
}

function lap(){
	// shineer tag uusgeh :document.createElement('tagName');
	var li= document.createElement('li');
	li.innerText=(time.innerText);
	console.log(li);
	// .append() -> tag dotor oor neg nag nemeh
	ol.append(li);
}
function restart(){
	doli=0;
	second=0;
	minute=0;
	hour=0;
	time.innerText="00:00:00:00";
	ol.innerText="";
}