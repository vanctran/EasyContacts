/**
 * Created by Van on 12/20/16.
 */

//Get the DOM of the current active tab.
var tabDOM = document.getElementsByTagName('html')[0].innerHTML;
stringDOM = tabDOM.toString();
var emailArray = stringDOM.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

//Remove duplicate emails.
var i;
for(i = 0; i < emailArray.length; ++i) {
    var j;
    for(j = i + 1; j < emailArray.length; ++j) {
        if(emailArray[i] === emailArray[j]) {
            emailArray.splice(j, 1);
        }
    }
}

//Set to listen for messages from the popup extension
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.request === 'emails') {
        sendResponse({emails: emailArray});
    }
});