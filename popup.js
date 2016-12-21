/**
 * Created by Van on 12/20/16.
 */

//Send a message to the content script and then output the response as html content.
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