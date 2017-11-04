function sendAPIRequest(theUrl, method, callback, postdata) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open(method, theUrl, true); // true for asynchronous 
    if (method == "POST") {
        xmlHttp.setRequestHeader("Content-Type", "application/json");
    }

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.send(postdata);
}


document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var submitForm = document.createElement( 'div' );
//submitForm.action = "https://localhost:8000/api/comment/";
//submitForm.method = "post";
submitForm.style.margin = '0 auto';
submitForm.style.border = "1px solid black";

var comment = document.createElement('textarea');
comment.type = 'textarea';
comment.cols = '80';
comment.rows = '5';
comment.id = 'comment';
comment.name = 'comment_field';
comment.display = "inline-block";
comment.placeholder = 'Write your thoughts';
comment.style.width = '35%';
var submitButton = document.createElement( 'button' );
submitButton.innerHTML = 'Submit';
submitButton.onclick = function () {
    postdata = {};
    postdata["text"] = document.getElementById("comment").innerHTML;
    postdata["selectedText"] = document.getSelection().toString();
    postdata["webpage"] = window.location.href;
    sendAPIRequest("https://localhost:8000/api/comment/", "POST", function (responseText) {
        console.log(responseText);
    }, JSON.stringify(postdata));
};

//append all elements
document.body.appendChild( div );

//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '0%';
div.style.left = '60%';
div.style.width = '40%';
div.style.height = '100%';
div.style.backgroundColor = 'lightblue';
div.style.opacity = 0;
div.style.transition = "opacity 1s";
div.style.zIndex = 2147483647;


//set attributes for btn
// "btn.removeAttribute( 'style' );
// submitButton.type = 'button';
// submitButton.value = 'hello';
// submitButton.style.position = 'absolute';
// submitButton.style.top = '50%';
// submitButton.style.left = '50%';

// append new message box

// create a div that holds everyting that this function creates
var messageHolder = document.createElement('div');
messageHolder.style.overflowY = 'auto';
messageHolder.style.height = '80%';
for (var i = 99; i >= 0; i--) {
  var tempDiv = document.createElement('div');
  var tempText = document.createElement('p');
  tempText.id = 'text'+ (i);
  tempText.innerHTML = "";
  tempText.style.paddingTop = "5px";
  tempText.style.paddingLeft = "5px";
  tempText.style.paddingRight = "5px";
  tempText.style.paddingBottom = "5px";
  tempDiv.style.height = '50%';
  tempDiv.style.width = '95%';
  tempDiv.style.border = 'solid';
  tempDiv.style.borderWidth = '1px';
  tempDiv.style.margin = '0 auto';
  tempDiv.appendChild(tempText);
  messageHolder.appendChild(tempDiv);
}
div.appendChild(messageHolder)
var messageContainer = document.createElement( 'div' );
var exit = document.createElement('div');
var exitButton = document.createElement('button');
exitButton.innerHTML = 'Exit';
exitButton.onclick = function() {
  div.style.opacity = 0; div.style.transition = "opacity 1s"; clearThread();
};
exit.style.float = 'right';
exit.appendChild(exitButton);
div.appendChild(exit);
div.appendChild(messageContainer);
messageContainer.appendChild( submitForm );
submitForm.appendChild( comment );
submitForm.appendChild( submitButton );
messageContainer.style.bottom = 0;
messageContainer.style.position = 'fixed';
messageContainer.style.width = '100%';
messageHolder.scrollTop = messageHolder.scrollHeight;


//set attributes for submitForm
//submitForm.action = '';
function appendMessage(message, order)
{
  document.getElementById("text" + order).innerHTML = message;
}

function update(json)
{
  var objs  = json.objects;
  var comments = [];
  for (var i = 0; i < 100 && i < json.length; i++) {
    appendMessage(json[json.length-1-i].text,i);
  }
  // text
  // selectedText
  // webpage
}

var json = [ {'text': 'Using overflow with a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.Using overflow with a value other than visible (the default) creates a new block formatting context. '}, {'text': 'qwerty'}, {'text': 'asdf'}];

var json = [];
for (var i =0; i < 2000; i++)
  json.push({'text': i + ' Using overflow with a value other than visible (the default) creates a new block formatting context. This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.Using overflow with a value other than visible (the default) creates a new block formatting context.'});

update(json);


function clearThread(){
  for (var i = 99; i >= 0; i--) {
    document.getElementById("text" + i).innerHTML = '';
  }
}



// update(json);
