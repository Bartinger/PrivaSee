function toggleBlock(enabled) {
   chrome.extension.sendMessage({enabled: enabled});
}

if (window.location.protocol == 'http:' && document.querySelector("input[type='password']")) {
   toggleBlock(true);

   // allow unblock via extension popup
   // red colored extension icon
} else {
   toggleBlock(false);
}
