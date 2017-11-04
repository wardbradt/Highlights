function sendAPIRequest(theUrl, method, callback, postdata)
{
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open(method, theUrl, true); // true for asynchronous 
    if (method == "POST") {
        xmlHttp.setRequestHeader("Content-Type", "application/json");
    }
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.send(postdata);
}

// JavaScript source code
function processSelection(info, tab) {
    chrome.tabs.sendRequest(tab.id, { method: "getSelection" }, function (response) {
        sendServiceRequest(response.data);
    });
}


function sendServiceRequest(selectedText) {
    console.log(selectedText);
    sendAPIRequest("https://localhost:8000/api/comment/", "GET", function (responseText) {
        console.log(responseText);
    }, null);
}

chrome.contextMenus.create({
    title: "Add Comment",
    contexts: ["selection"],
    onclick: processSelection,
});