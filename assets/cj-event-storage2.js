var referralPeriod = 365;
var urlCJ = window.location.href;
var cjEvent;
var isCjCookiePresent = false;

if (urlCJ.includes("cjevent")){
    var start = urlCJ.indexOf("cjevent");
    var end = urlCJ.length;
    var query = urlCJ.substring(start,end);
    var newEnd = query.indexOf("&");
    if (newEnd == -1) {newEnd = query.length};
    cjEvent = query.substring(8,newEnd);
    console.log("found cjevent in URL: " + cjEvent);
    checkForCjCookie();
} else {
    checkForCjCookie();
};

function checkForCjCookie() {
    var name = "cjevent=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            var value = (c.substring(name.length));
            if (cjEvent != undefined) {
                console.log("Found CJ Cookie");
                isCjCookiePresent = true;
                updateCookie();
            } else if (value != undefined){
                console.log("Found CJ Cookie, even though nothing in URL");
                setCjCookie("cjevent", value, referralPeriod);
            } else { // console.log(i);
                17
            }
        }
    }
    if (cjEvent && !isCjCookiePresent) {
        console.log("cjevent in URL but no cookie");
        setCjCookie("cjevent", cjEvent, referralPeriod);
    }
}

function setCjCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=."+location.hostname.replace(/^www\./i,"");
    console.log("Cj Cookie Set")
}

function updateCookie(){
    if (isCjCookiePresent) {
        console.log("Deleting cookie");
        setCjCookie("cjevent","",-1);
        console.log("Adding new cookie");
        setCjCookie("cjevent", cjEvent, referralPeriod);
    }
}
