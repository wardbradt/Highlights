// JavaScript source code
function processSelection(info, tab) {
    chrome.tabs.sendRequest(tab.id, { method: "getSelection" }, function (response) {
        sendServiceRequest(response.data);
        console.log(response.parentNode);

    });
}


function sendServiceRequest(selectedText) {
    console.log(selectedText);
}

chrome.contextMenus.create({
    title: "Add Comment",
    contexts: ["selection"],
    onclick: processSelection,
});