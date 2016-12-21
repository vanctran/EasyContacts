/**
 * Created by Van on 12/20/16.
 */

var tabDOM = document.getElementsByTagName('html').innerHTML;
    tabDOM = tabDOM.toString();

chrome.runtime.sendMessage({tabDOM: tabDOM}, function(response) {
    console.log(response);
});

/*
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.text === 'report_back') {
        sendResponse(document.all[0].outerHTML);
    }
});
*/