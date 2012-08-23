// Copyright 2012, <OWNER>: License details can be found in LICENSE.markdown.

function onClick() {
   chrome.extension.sendMessage({action: 'toggleSafeMode'});
}
