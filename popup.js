/**
 * Created by Van on 12/20/16.
 */

document.addEventListener('DOMContentLoaded', function () {
    var bg = chrome.extension.getBackgroundPage();
    var emailArray = bg.emailArray;
    document.write("Possible emails: \n");
    var i;
    for(i = 0; i < emailArray.length; ++i) {
        document.write(emailArray[i]);
    }

});