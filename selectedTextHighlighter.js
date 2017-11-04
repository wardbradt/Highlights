function highlightSelectedTest(jsonObj) {
    var json = JSON.parse(jsonObj);
    var wordCount = {};
    var max = 1;
    for (var i in json) {
        if (!i["nodeName"] in wordCount) {
            wordCount[i["nodeName"]] = [1, i["text"]];
        }
        else {
            wordCount[i["nodeName"]][0] += 1;
            if (wordCount[i["nodeName"]][0] > max)
                max = wordCount[i["nodeName"]][0];
        }
    }

    var opacityScalar = 0.75 / max;

    for (var tag in wordCount) {
        selectedText = $('body').find(tag).filter(':contains(' + wordCount[tag][1] + ')');
        selectedText.css("background-color", "rgba(255,255,0," +
            opacityScalar * wordCount[tag][0] + "))");
    }
}