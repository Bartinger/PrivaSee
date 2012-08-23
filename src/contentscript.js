function toggleBlock(enabled) {
   chrome.extension.sendMessage({enabled: enabled});
}

function onFieldFocus(event){
	$(event.target).after("<div class='pw-hint'><h2>Warning!</h2>You're entering a password on a site which doesn't use HTTPS(<a href='#'>?</a>). This isn't secure!</div>");
	chrome.pageAction.setIcon("icons/16-good.png");
}

function onFieldFBlur(event){
	$(".pw-hint").remove();
	console.log(chrome);
	chrome.pageAction.setIcon("icons/16-bad.png");
}

$(document).ready(function(){
	if(window.location.protocol == "http:"){
		$("input[type='password']").focus(onFieldFocus);
		$("input[type='password']").blur(onFieldFBlur);
	}
});
