/**
 * Created by Van on 12/20/16.
 */

/*
function displayEmails(domContent) {
    $('#main').text(domContent);
     var emailArray = getEmails();
     document.write("Possible emails: \n");
     var i;
     for(i = 0; i < emailArray.length; ++i) {
     document.write(emailArray[i]);
     }
}


emailArray = [];

function getEmails(tabDOM) {

    var searchIn = tabDOM.innerHTML;
    var stringContext = searchIn.toString();
    emailArray = stringContext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return;

    //return document.body.innerHTML.toString().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, getEmails);
    chrome.browserAction.setPopup('popup.html');
});
    */