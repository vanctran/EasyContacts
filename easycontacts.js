/**
 * Created by Van on 12/20/16.
 */
window.onload = function () {
    var emailArray = getEmails();
    document.write("Possible emails: \n");
    var i;
    for(i = 0; i < emailArray.length; ++i) {
        document.write(emailArray[i]);
    }
}

function getEmails() {

    var searchIn = document.body.innerHTML;
    var stringContext = searchIn.toString();

    var arrayMails = stringContext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return arrayMails;

    //return document.body.innerHTML.toString().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

/*
function getPhoneNumbers() {
    $('body').html( $('body').html().replace(/(\d\d\d-\d\d\d-\d\d\d\d)/g,'<a href="#">$1</a>') );
}*/