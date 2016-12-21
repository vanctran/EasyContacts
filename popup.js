/**
 * Created by Van on 12/20/16.
 */

/*
document.addEventListener('DOMContentLoaded', function () {
    var bg = chrome.extension.getBackgroundPage();
    var emailArray = bg.emailArray;
    document.write("Possible emails: \n");
    var i;
    for(i = 0; i < emailArray.length; ++i) {
        document.write(emailArray[i]);
    }

});
*/

/*
function getEmails(tabDOM) {

    var searchIn = tabDOM.innerHTML;
    var stringContext = searchIn.toString();
    emailArray = stringContext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return;

    //return document.body.innerHTML.toString().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
*/

chrome.runtime.onMessage.addListener(function(tabDOM, sender, sendResponse) {
    var emailArray = tabDOM.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    $("#main").text(emailArray);
    sendResponse("SUCCESS!");
});