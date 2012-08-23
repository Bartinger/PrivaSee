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

console.log('listening');

      chrome.webRequest.onBeforeRequest.addListener(
         onHttpRequest,
         requestFilter,
         extras
      );
   } else {
      chrome.webRequest.onBeforeRequest.removeListener(onHttpRequest);
   }
};

chrome.extension.onMessage.addListener(onMessage);
