var randomColorHaxValues = Math.floor(Math.random()*16777215).toString(16);

$('git1').css('color',randomColorHaxValues);

var randomColorRgbValues = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';




function gity1() {
	var elements = document.getElementsByClassName("gitgit");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : black ; background : red";
	}
}

function gity0() {
	var elements = document.getElementsByClassName("gitgit");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : white ; background : transparent";
	}
}

function iny1() {
	var elements = document.getElementsByClassName("gitin");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : black ; background : red";
	}
}

function iny0() {
	var elements = document.getElementsByClassName("gitin");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : white ; background : transparent";
	}

}

function mail1() {
	var elements = document.getElementsByClassName("gitmail");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : black ; background : red ; transform: rotate3d(0, 0, 1, 180deg);";
	}
}

function mail0() {
	var elements = document.getElementsByClassName("gitmail");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : white ; background : transparent ; transform: rotate3d(0, 0, 0, 0deg);";
	}

}

function disc1() {
	var elements = document.getElementsByClassName("githi");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : black ; background : red ; transform: rotate3d(1, 0, 0, 180deg);";
	}
}

function disc0() {
	var elements = document.getElementsByClassName("githi");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "color : white ; background : transparent ; transform: rotate3d(0, 0, 0, 0deg);";
	}

}


//Coppy clipboard
function clipmail() {
navigator.clipboard.writeText("marchidoniulian@yahoo.com");
}

function clipdisc() {
navigator.clipboard.writeText("Marchiz#8229");
}

function tcb1() {
	var elements = document.getElementsByClassName("toolclipboard");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "opacity:1;";
	}
}

function tcb0() {
	var elements = document.getElementsByClassName("toolclipboard");
	for(var i = 0; i < elements.length; i++){
			elements[i].style= "opacity:0;";
	}

}