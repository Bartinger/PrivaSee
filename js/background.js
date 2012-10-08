//Copyright 2012, PrivaSee: License details can be found in LICENSE.markdown.
var safeModeEnabled = false;
var ruleId = -1;

var onMessage = function onMessage(request, sender) {
	// TODO: change icon color accordingly
	if (safeModeEnabled) {
		var rule = {
			conditions : [ new chrome.declarativeWebRequest.RequestMatcher({
				url : {
					schemes : [ 'http' ]
				}
			}) ],
			actions : [ new chrome.declarativeWebRequest.RedirectByRegEx({
				from : '.*',
				to : chrome.extension.getURL('blocked.html') + '#$0'
			}) ]
		};

		chrome.declarativeWebRequest.onRequest.addRules([ rule ], function(
				rules) {
			ruleId = rules[0].id;
		});
	} else {
		chrome.declarativeWebRequest.onRequest.removeRules([ ruleId ]);
	}
};

var onBrowserActionClick = function onBrowserActionClick() {
	safeModeEnabled = !safeModeEnabled;

	var icon = {
		path : safeModeEnabled ? '../icons/19-good.png' : '../icons/19-bad.png'
	};
	chrome.browserAction.setIcon(icon);

	onMessage();
};

chrome.browserAction.onClicked.addListener(onBrowserActionClick);
chrome.extension.onMessage.addListener(onMessage);
