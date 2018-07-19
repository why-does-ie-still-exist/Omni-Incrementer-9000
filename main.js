/* Made with love by Michael Owens, 2018*/

var regex = /[^\D.]+/u;
var num = 1

function incrementHref(first) {
    if (first === undefined) first = 1;
    if (Number.isSafeInteger(first)) first = parseInt(first);
    var str = decodeURI(window.location.href);
    cpy = str;
    for (i = first; i > 1; i--) {
        cpy = removeNumber(cpy)
    }
    var index = getValidIndex(cpy) + str.length - cpy.length
    var newbeginning = str.substring(0, index);
    var newend = str.substring(index);
    newend = incrementNumber(newend);
    window.location.href = newbeginning + newend;
}

function decrementHref(first) {
    if (first === undefined) first = 1;
    var str = decodeURI(window.location.href);
    cpy = str;
    for (i = first; i > 1; i--) {
        cpy = removeNumber(cpy)
    }
    var index = getValidIndex(cpy) + str.length - cpy.length
    var newbeginning = str.substring(0, index);
    var newend = str.substring(index);
    newend = decrementNumber(newend);
    window.location.href = newbeginning + newend;
}

function checkNum(numstring) {
    return (numstring.charCodeAt(0) < 58 && numstring.charCodeAt(0) > 47);
}

function getValidIndex(str) {
    return (regex.exec(str).index);
}

function getRegexNum(str) {
    if (test(str)) {
        return (parseInt(regex.exec(str)[0], 10));
    }
    throw (new RangeError);
}

function getRegexLen(str) {
    if (test(str)) {
        return (regex.exec(str)[0].length);
    }
    throw (new RangeError);
}

function test(str) {
    return (regex.test(str));
}

function removeNumber(str) {
    beginning = getValidIndex(str)
    end = beginning + getRegexLen(str);
    return (str.substring(0, beginning) + str.substring(end));
}

function incrementNumber(str) {
    beginning = getValidIndex(str)
    end = beginning + Math.floor(Math.log10(getRegexNum(str))) + 1;
    return (str.substring(0, beginning) + (getRegexNum(str) + 1).toString() + str.substring(end));
}

function decrementNumber(str) {
    beginning = getValidIndex(str)
    end = beginning + Math.floor(Math.log10(getRegexNum(str))) + 1;
    return (str.substring(0, beginning) + (getRegexNum(str) - 1).toString() + str.substring(end));
}

hotkeys('alt+1,alt+2,alt+3,alt+4,alt+5,alt+6,alt+7,alt+8,alt+9,alt+shift+1,alt+shift+2,alt+shift+3,alt+shift+4,alt+shift+5,alt+shift+6,alt+shift+7,alt+shift+8,alt+shift+9', function (event, handler) {
    switch (handler.key) {
        case "alt+1": incrementHref(1); break;
        case "alt+2": incrementHref(2); break;
        case "alt+3": incrementHref(3); break;
        case "alt+4": incrementHref(4); break;
        case "alt+5": incrementHref(5); break;
        case "alt+6": incrementHref(6); break;
        case "alt+7": incrementHref(7); break;
        case "alt+8": incrementHref(8); break;
        case "alt+9": incrementHref(9); break;
        case "alt+shift+1": decrementHref(1); break;
        case "alt+shift+2": decrementHref(2); break;
        case "alt+shift+3": decrementHref(3); break;
        case "alt+shift+4": decrementHref(4); break;
        case "alt+shift+5": decrementHref(5); break;
        case "alt+shift+6": decrementHref(6); break;
        case "alt+shift+7": decrementHref(7); break;
        case "alt+shift+8": decrementHref(8); break;
        case "alt+shift+9": decrementHref(9); break;
    }
});
