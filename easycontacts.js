/**
 * Created by Van on 12/20/16.
 */
window.document.onload = function () {
    getEmails();

}

function getEmails() {

    var search_in = document.body.innerHTML;
    string_context = search_in.toString();

    array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return array_mails;

}