var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:43 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Sat, 07 Nov 2015 12:37:26 GMT\x0aETag: \x223e5-523f29f58ad80-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-569/570\x0aContent-Length: 570\x0aKeep-Alive: timeout=5, max=94\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Effects Drop 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/drop-effect/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22,\x22./effect\x22],a):a(jQuery)}(function(a){return a.effects.effect.drop=function(b,c){var d,e=a(this),f=[\x22position\x22,\x22top\x22,\x22bottom\x22,\x22left\x22,\x22right\x22,\x22opacity\x22,\x22height\x22,\x22width\x22],g=a.effects.setMode(e,b.mode||\x22hide\x22),h=\x22show\x22===g,i=b.direction||\x22left\x22,j=\x22up\x22===i||\x22down\x22===i?\x22top\x22:\x22left\x22,k=\x22up\x22===i||\x22left\x22===i?\x22pos\x22:\x22neg\x22,l={opacity:h?1:0};a.effects.save(e,f),e.show(),a.effects.createWrapper(e),d=b.distance||e[\x22top\x22===j?\x22outerHeight\x22:\x22outerWidth\x22](!0)/2,h&&e.css(\x22opacity\x22,0).css(j,\x22pos\x22===k?-d:d),l[j]=(h?\x22pos\x22===k?\x22+=\x22:\x22-=\x22:\x22pos\x22===k?\x22-=\x22:\x22+=\x22)+d,e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){\x22hide\x22===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})}});'}