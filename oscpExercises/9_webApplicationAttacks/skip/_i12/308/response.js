var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:55:24 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Wed, 30 Jan 2019 14:12:52 GMT\x0aETag: \x2261c-580ad81630100-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-750/751\x0aContent-Length: 751\x0aKeep-Alive: timeout=5, max=66\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(a){a.PluginManager.add(\x22wpemoji\x22,function(b){function c(a){a.className=\x22emoji\x22,a.setAttribute(\x22data-mce-resize\x22,\x22false\x22),a.setAttribute(\x22data-mce-placeholder\x22,\x221\x22),a.setAttribute(\x22data-wp-emoji\x22,\x221\x22)}function d(a){var b={\x22data-mce-resize\x22:\x22false\x22,\x22data-mce-placeholder\x22:\x221\x22,\x22data-wp-emoji\x22:\x221\x22};g.emoji.parse(a,{imgAttr:b})}function e(a){var c,e;a&&window.twemoji&&window.twemoji.test(a.textContent||a.innerText)&&(i.webkit&&(c=b.selection,e=c.getBookmark()),d(a),i.webkit&&c.moveToBookmark(e))}var f,g=window.wp,h=window._wpemojiSettings,i=a.Env,j=window.navigator.userAgent,k=j.indexOf(\x22Windows\x22)\x3e-1,l=function(){var a=j.match(/Windows NT 6\x5c.(\x5cd)/);return!!(a&&a[1]\x3e1)}();g&&g.emoji&&!h.supports.everything&&(l?b.on(\x22keyup\x22,function(a){231===a.keyCode&&e(b.selection.getNode())}):k||(b.on(\x22keydown keyup\x22,function(a){f=\x22keydown\x22===a.type}),b.on(\x22input\x22,function(){f||e(b.selection.getNode())})),b.on(\x22setcontent\x22,function(a){var c=b.selection,e=c.getNode();window.twemoji&&window.twemoji.test(e.textContent||e.innerText)&&(d(e),i.ie&&i.ie\x3c9&&a.load&&e&&\x22BODY\x22===e.nodeName&&c.collapse(!0))}),b.on(\x22PastePostProcess\x22,function(d){window.twemoji&&a.each(b.dom.$(\x22img.emoji\x22,d.node),function(a){a.alt&&window.twemoji.test(a.alt)&&c(a)})}),b.on(\x22postprocess\x22,function(a){a.content&&(a.content=a.content.replace(/\x3cimg[^\x3e]+data-wp-emoji=\x22[^\x3e]+\x3e/g,function(a){var b=a.match(/alt=\x22([^\x22]+)\x22/);return b&&b[1]?b[1]:a}))}),b.on(\x22resolvename\x22,function(a){\x22IMG\x22===a.target.nodeName&&b.dom.getAttrib(a.target,\x22data-wp-emoji\x22)&&a.preventDefault()}))})}(window.tinymce);'}