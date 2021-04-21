const right1 = document.getElementById("right1");
const right2 = document.getElementById("right2");
const right3 = document.getElementById("right3");
const right4 = document.getElementById("right4");

window.onload = function(){
	const menu_right = document.getElementsByClassName("menu-right");
	for (i=0; i<menu_right.length; i++){
		menu_right[i].style.fontSize = "30px";
	}
	right1.style.transitionDelay = "0.3s";
	right2.style.transitionDelay = "0.6s";
	right3.style.transitionDelay = "0.9s";
	right4.style.transitionDelay = "1.2s";
}
