var over = false;
var focused = false;

function toggleBlock(enabled) {
   chrome.extension.sendMessage({enabled: enabled});
}

function onFieldFocus(event){
	focused = true;
	$(event.target).after("<div class='pw-hint'><h2>Warning!</h2>You're entering a password on a site which isn't secured by HTTPS (<a href='javascript:void(0)'>?</a>). Others might be able to see your password!</div>");
	$("div.pw-hint").mouseenter(onMouseOver);
	$("div.pw-hint").mouseleave(onMouseOut);
	$("div.pw-hint a").click(function(){
		window.location.href = chrome.extension.getURL("about-https.html");
	});
}


function onFieldFBlur(event){
	focused = false;
	if(!over){
		$(".pw-hint").remove();
	}
}

function onMouseOver(event){
	over = true;
}

function onMouseOut(event){
	over = false;
	if(!focused){
		$(".pw-hint").remove();
	}
}

$(document).ready(function(){
	if(window.location.protocol == "http:"){
		$("input[type='password']").focus(onFieldFocus);
		$("input[type='password']").blur(onFieldFBlur);
	}
});


