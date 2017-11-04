// JavaScript source code
function processSelection(info, tab) {
    console.log(tab);
    chrome.tabs.sendRequest(tab.id, { method: "getSelection" }, function (response) {
        sendServiceRequest(response.data);
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