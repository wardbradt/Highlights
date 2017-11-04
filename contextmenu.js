// JavaScript source code
function processSelection(info, tab) {
    alert("CONTEXT MENU");
}

chrome.contextMenus.create({
    title: "Add Comment",
    contexts: ["selection"],
    onclick: processSelection,
});