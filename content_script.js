// JavaScript source code
// Content Script
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getSelection") {
        sendResponse({ data: window.getSelection().toString() });
        // Create div
    }
    else
        sendResponse({}); // snub them.
});