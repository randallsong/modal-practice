var modal = document.getElementsByClassName("modal");
var closebutton = document.getElementsByClassName("close");

function timer(){
	modal[0].style.display = "block";
}

setTimeout(timer, 3000);

closebutton[0].onclick = function(){
	modal[0].style.display = "none";
}