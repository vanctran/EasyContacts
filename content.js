/**
 * Created by Van on 12/20/16.
 */

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.text === 'report_back') {
        sendResponse(document.all[0].outerHTML);
    }
});