
$(document).ready(function(){
	if(window.location.protocol == "http:"){
		$("input[type='password']").focus(onFieldFocus);
		$("input[type='password']").blur(onFieldFBlur);
	}
});

function onFieldFocus(event){
	$(event.target).after("<div class='pw-hint'><h2>Warning!</h2>You're entering a password on a site which doesn't use HTTPS(<a href='#'>?</a>). This isn't secure!</div>");
}

function onFieldFBlur(event){
	$(".pw-hint").remove();
}	


