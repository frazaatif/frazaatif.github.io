var gcused = 0;
var numGC = prompt("How many Gold Coins to Use?");
var greens = 0, blues = 0, purps = 0, yellows = 0, orngs = 0, reds = 0;
var canvas = document.querySelector("#board");
var ctx = canvas.getContext("2d");
function drawBox() {
	if(numGC < 10) {
		clearInterval(id);
	}
	gcused += 10;
	document.getElementById("gcused").innerHTML = "Gold Coins Used: " + gcused;
	var now = Math.floor(Math.random()*100000) + 1;
	console.log("Work");
	var nowcolor = "obs";
	var delay = 500;
	if(now == 10) {
		nowcolor = "red";
		++reds;
		delay = 4000;
		document.getElementById("red").innerHTML = reds;
	}else if(now <= 500) {
		nowcolor = "orange";
		++orngs;
		delay = 2000;
		document.getElementById("orng").innerHTML = orngs;
	}else if(now <= 1000) {
		nowcolor = "gold";
		++yellows;
		delay = 1000;
		document.getElementById("yell").innerHTML = yellows;
	}else if(now <= 9000) {
		nowcolor = "purple";
		++purps;
		delay = 700;
		document.getElementById("purp").innerHTML = purps;
	}else if(now <= 40000) {
		nowcolor = "blue";
		++blues;
		document.getElementById("blu").innerHTML = blues;
	}else {
		nowcolor = "green";
		++greens;
		document.getElementById("grn").innerHTML = greens;
	}
	var nowX = Math.floor((Math.random()*(canvas.width - 10)));
	var nowY = Math.floor(Math.random()*(canvas.height - 10)) ;
	ctx.fillStyle = nowcolor;
	ctx.fillRect(nowX,nowY,10,10);
	console.log(numGC);
	numGC -= 10;
	window.setTimeout(function(){clearbox(nowX,nowY);},delay);

}
function clearbox(nowX,nowY) {
	ctx.fillStyle = "#dfd8d8";
	ctx.fillRect(nowX,nowY,10,10);
}
var id  = window.setInterval(drawBox,100);
/*setInterval(drawBox,10000);*/
