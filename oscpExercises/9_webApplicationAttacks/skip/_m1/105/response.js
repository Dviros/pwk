var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:32 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 10 Jan 2008 17:35:48 GMT\x0aETag: \x22d81-44361a3edc500-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1017/1018\x0aContent-Length: 1018\x0aKeep-Alive: timeout=5, max=53\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a\x0a(function($){$.scheduler=function(){this.bucket={};return;};$.scheduler.prototype={schedule:function(){var ctx={\x22id\x22:null,\x22time\x22:1000,\x22repeat\x22:false,\x22protect\x22:false,\x22obj\x22:null,\x22func\x22:function(){},\x22args\x22:[]};function _isfn(fn){return(!!fn&&typeof fn!=\x22string\x22&&typeof fn[0]==\x22undefined\x22&&RegExp(\x22function\x22,\x22i\x22).test(fn+\x22\x22));};var i=0;var override=false;if(typeof arguments[i]==\x22object\x22&&arguments.length\x3e1){override=true;i++;}\x0aif(typeof arguments[i]==\x22object\x22){for(var option in arguments[i])\x0aif(typeof ctx[option]!=\x22undefined\x22)\x0actx[option]=arguments[i][option];i++;}\x0aif(typeof arguments[i]==\x22number\x22||(typeof arguments[i]==\x22string\x22&&arguments[i].match(RegExp(\x22^[0-9]+[smhdw]$\x22))))\x0actx[\x22time\x22]=arguments[i++];if(typeof arguments[i]==\x22boolean\x22)\x0actx[\x22repeat\x22]=arguments[i++];if(typeof arguments[i]==\x22boolean\x22)\x0actx[\x22protect\x22]=arguments[i++];if(typeof arguments[i]==\x22object\x22&&typeof arguments[i+1]==\x22string\x22&&_isfn(arguments[i][arguments[i+1]])){ctx[\x22obj\x22]=arguments[i++];ctx[\x22func\x22]=arguments[i++];}\x0aelse if(typeof arguments[i]!=\x22undefined\x22&&(_isfn(arguments[i])||typeof arguments[i]==\x22string\x22))\x0actx[\x22func\x22]=arguments[i++];while(typeof arguments[i]!=\x22undefined\x22)\x0actx[\x22args\x22].push(arguments[i++]);if(override){if(typeof arguments[1]==\x22object\x22){for(var option in arguments[0])\x0aif(typeof ctx[option]!=\x22undefined\x22&&typeof arguments[1][option]==\x22undefined\x22)\x0actx[option]=arguments[0][option];}\x0aelse{for(var option in arguments[0])\x0aif(typeof ctx[option]!=\x22undefined\x22)\x0actx[option]=arguments[0][option];}\x0ai++;}\x0actx[\x22_scheduler\x22]=this;ctx[\x22_handle\x22]=null;var match=String(ctx[\x22time\x22]).match(RegExp(\x22^([0-9]+)([smhdw])$\x22));if(match&&match[0]!=\x22undefined\x22&&match[1]!=\x22undefined\x22)\x0actx[\x22time\x22]=String(parseInt(match[1])*{s:1000,m:1000*60,h:1000*60*60,d:1000*60*60*24,w:1000*60*60*24*7}[match[2]]);if(ctx[\x22id\x22]==null)\x0actx[\x22id\x22]=(String(ctx[\x22repeat\x22])+\x22:\x22\x0a+String(ctx[\x22protect\x22])+\x22:\x22\x0a+String(ctx[\x22time\x22])+\x22:\x22\x0a+String(ctx[\x22obj\x22])+\x22:\x22\x0a+String(ctx[\x22func\x22])+\x22:\x22\x0a+String(ctx[\x22args\x22]));if(ctx[\x22protect\x22])\x0aif(typeof this.bucket[ctx[\x22id\x22]]!=\x22undefined\x22)\x0areturn this.bucket[ctx[\x22id\x22]];if(!_isfn(ctx[\x22func\x22])){if(ctx[\x22obj\x22]!=null&&typeof ctx[\x22obj\x22]==\x22object\x22&&typeof ctx[\x22func\x22]==\x22string\x22&&_isfn(ctx[\x22obj\x22][ctx[\x22func\x22]]))\x0actx[\x22func\x22]=ctx[\x22obj\x22][ctx[\x22func\x22]];else\x0actx[\x22func\x22]=eval(\x22function () { \x22+ctx[\x22func\x22]+\x22 }\x22);}\x0actx[\x22_handle\x22]=this._schedule(ctx);this.bucket[ctx[\x22id\x22]]=ctx;return ctx;},reschedule:function(ctx){if(typeof ctx==\x22string\x22)\x0actx=this.bucket[ctx];ctx[\x22_handle\x22]=this._schedule(ctx);return ctx;},_schedule:function(ctx){var trampoline=function(){var obj=(ctx[\x22obj\x22]!=null?ctx[\x22obj\x22]:ctx);(ctx[\x22func\x22]).apply(obj,ctx[\x22args\x22]);if(typeof(ctx[\x22_scheduler\x22]).bucket[ctx[\x22id\x22]]!=\x22undefined\x22&&ctx[\x22repeat\x22])\x0a(ctx[\x22_scheduler\x22])._schedule(ctx);else\x0adelete(ctx[\x22_scheduler\x22]).bucket[ctx[\x22id\x22]];};return setTimeout(trampoline,ctx[\x22time\x22]);},cancel:function(ctx){if(typeof ctx==\x22string\x22)\x0actx=this.bucket[ctx];if(typeof ctx==\x22object\x22){clearTimeout(ctx[\x22_handle\x22]);delete this.bucket[ctx[\x22id\x22]];}}};$.extend({scheduler$:new $.scheduler(),schedule:function(){return $.scheduler$.schedule.apply($.scheduler$,arguments)},reschedule:function(){return $.scheduler$.reschedule.apply($.scheduler$,arguments)},cancel:function(){return $.scheduler$.cancel.apply($.scheduler$,arguments)}});$.fn.extend({schedule:function(){var a=[{}];for(var i=0;i\x3carguments.length;i++)\x0aa.push(arguments[i]);return this.each(function(){a[0]={\x22id\x22:this,\x22obj\x22:this};return $.schedule.apply($,a);});}});})(jQuery);'}