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
/*
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
        console.log(msg.emails);
        //var searchIn = msg.emails;
        //var emailArray = searchIn.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        $('#main').text(msg.emails);
        sendResponse({result: msg.emails});
    });
*/
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {request: "emails"}, function (response) {
        var emails = response.emails;
        var str = "";
        var i;
        for(i = 0; i < emails.length; ++i) {
            str += (i+1) + ". " + emails[i] + "<br>";
        }
        $('#data').html("<p>" + str + "</p>");
    });
});