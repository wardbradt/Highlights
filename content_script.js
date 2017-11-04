// JavaScript source code
// Content Script
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getSelection") {
        console.log(window.getSelection().anchorNode);
        sendResponse({
            data: window.getSelection().toString(),
            parentNode: window.getSelection().anchorNode.parentNode.nodeName
        });
        // Create div

    }
    else
        sendResponse({}); // snub them.
});