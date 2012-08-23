function toggleBlock(enabled) {
   chrome.extension.sendMessage({enabled: enabled});
}

function onFieldFocus(event){
	$(event.target).after("<div class='pw-hint'><h2>Warning!</h2>You're entering a password on a site which isn't secured by HTTPS (<a href='chrome-extension://ojbegobhciacikcafiomhinpcjhibkgg/src/about-https.html'>?</a>). Others might be able to see your password!</div>");
}

function onFieldFBlur(event){
	$(".pw-hint").remove();
}

$(document).ready(function(){
	if(window.location.protocol == "http:"){
		$("input[type='password']").focus(onFieldFocus);
		$("input[type='password']").blur(onFieldFBlur);
	}
});


