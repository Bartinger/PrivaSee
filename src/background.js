// Copyright 2012, PrivaSee: License details can be found in LICENSE.markdown.
var safeModeEnabled = false;
var onHttpRequest = function onHttpRequest(details) {
   // TODO: block only sites which have a cookie stored?
   // TODO: whitelisting
   console.log('blocking');
   console.log(details);

   return {
      cancel: true
   };
};

var onMessage = function onMessage(request, sender) {
// TODO: change icon color accordingly
   if (safeModeEnabled) {
      var extras = ['blocking'];
      var requestFilter = {
         urls: ['http://*/*'],
         types: ['xmlhttprequest', 'script', 'object', 'image', 'other', 'stylesheet', 'sub_frame', 'main_frame']
      };

      chrome.webRequest.onBeforeRequest.addListener(
      onHttpRequest, requestFilter, extras);
   } else {
      chrome.webRequest.onBeforeRequest.removeListener(onHttpRequest);
   }
};

var onBrowserActionClick = function onBrowserActionClick() {
   safeModeEnabled = !safeModeEnabled;

   var icon = {
      path: safeModeEnabled ? '../icons/16-good.png' : '../icons/16-bad.png'
// TODO: change icon per-tab
   };
   chrome.browserAction.setIcon(icon);

   onMessage();
}

chrome.browserAction.onClicked.addListener(onBrowserActionClick);
chrome.extension.onMessage.addListener(onMessage); 
