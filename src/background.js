// Copyright 2012, <OWNER>: License details can be found in LICENSE.markdown.
var onHttpRequest = function onHttpRequest(details) {
   console.log('blocking');
   console.log(details);

   // TODO: block only external things
   return {
      cancel: true
   };
};
var onMessage = function onMessage(request, sender) {
   console.log('sent');
   console.log(request);

   if (request.enabled) {
  console.log(sender.tab);

      var extras = ["blocking"];
      var requestFilter = {
         urls: [sender.tab.url],
         tabId: sender.tab.id,
         types: ['xmlhttprequest', 'script', 'object']
      };

console.log(chrome);
      
      chrome.webRequest.onBeforeRequest.addListener(
         onHttpRequest,
         requestFilter,
         extras
      );
   } else {
      // TODO: create unique callback functions per tab (current implementation removes all listeners for all tabs at once!)
      chrome.webRequest.onBeforeRequest.removeListener(onHttpRequest);
   }
};

chrome.extension.onMessage.addListener(onMessage);
