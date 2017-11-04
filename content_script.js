

// JavaScript source code
// Content Script
// Runs on the page
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getSelection") {
        console.log(window.getSelection().anchorNode);
        sendResponse({
            data: window.getSelection().toString(),
            parentNode: window.getSelection().anchorNode.parentNode.nodeName
        });
        // Create div

        document.getElementById("myDivId").style.opacity = "0.9";
    }
    else
        sendResponse({}); // snub them.
});

