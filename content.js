document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var submitForm = document.createElement( 'form' );
// submitForm.action = "";
submitForm.method = "post";
submitForm.style.margin = '0 auto';
submitForm.style.border = "1px solid black";

var comment = document.createElement( 'input' );
comment.type = 'text';
comment.id = 'comment';
comment.name = 'comment_field';
// comment.placeholder = 'Write your thoughts';

var submitButton = document.createElement( 'input' );
submitButton.type = 'submit';
submitButton.value = 'Submit';

//append all elements
document.body.appendChild( div );
div.appendChild( submitForm );
submitForm.appendChild( comment );
submitForm.appendChild( submitButton );
//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '0%';
div.style.left = '60%';
div.style.width = '40%';
div.style.height = '100%';
div.style.backgroundColor = 'white';
div.style.opacity = 0.9;

//set attributes for submitForm
submitForm.action = '';

//set attributes for btn
// "btn.removeAttribute( 'style' );
// submitButton.type = 'button';
// submitButton.value = 'hello';
// submitButton.style.position = 'absolute';
// submitButton.style.top = '50%';
// submitButton.style.left = '50%';