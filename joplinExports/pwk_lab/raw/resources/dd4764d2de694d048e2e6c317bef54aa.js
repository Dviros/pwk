﻿var sillydate = 0;
var sillyvar = 0;

function StringArray(_0x5b7ex4) {
    this['length'] = _0x5b7ex4;
    for (var _0x5b7ex5 = 1; _0x5b7ex5 <= _0x5b7ex4; _0x5b7ex5++) {
        this[_0x5b7ex5] = ' ';
    };
};
image = new StringArray(10);
image[0] = 'offsecphun1.gif';
image[1] = 'offsecphun2.png';
image[2] = 'offsecphun1.gif';
image[3] = 'offsecphun2.png';
image[4] = 'offsecphun1.gif';
image[5] = 'offsecphun2.png';
image[6] = 'offsecphun1.gif';
image[7] = 'offsecphun2.png';
image[8] = 'offsecphun2.png';
image[9] = 'offsecphun2.png';
var ran = 60 / image['length'];

function _0x5491() {
    sillydate = new Date();
    sillyvar = sillydate['getSeconds']();
    sillyvar = Math['floor'](sillyvar / ran);
    return (image[sillyvar]);
};

function _0x5499(_0x4499) {
        var hmmmm = document.createElement("img");
        hmmmm.src = "/" + _0x4499;
        document.body.appendChild(hmmmm);
    } //_0x5499('1f2e73705207bd'+'d6467e109c1606ed29'+'-'+'21213/'+_0x5491());
document['write']('<img src=\'' + _0x5491() + '\'>');