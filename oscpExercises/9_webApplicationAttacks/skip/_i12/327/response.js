var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:44 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 06 Aug 2018 19:33:28 GMT\x0aETag: \x223ce5-572c95a07b200-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-4637/4638\x0aContent-Length: 4638\x0aKeep-Alive: timeout=5, max=37\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/admin-bar.js\x0a */\x0a\x0a/* jshint loopfunc: true */\x0a// use jQuery and hoverIntent if loaded\x0aif ( typeof(jQuery) != \x27undefined\x27 ) {\x0a\x09if ( typeof(jQuery.fn.hoverIntent) == \x27undefined\x27 ) {\x0a\x09\x09/* jshint ignore:start */\x0a\x09\x09// hoverIntent v1.8.1 - Copy of wp-includes/js/hoverIntent.min.js\x0a\x09\x09!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e=\x22object\x22==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))\x3ce.sensitivity?(a(c).off(\x22mousemove.hoverIntent\x22,j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),\x22mouseenter\x22===b.type?(h=c.pageX,i=c.pageY,a(d).on(\x22mousemove.hoverIntent\x22,j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off(\x22mousemove.hoverIntent\x22,j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({\x22mouseenter.hoverIntent\x22:m,\x22mouseleave.hoverIntent\x22:m},e.selector)}}(jQuery);\x0a\x09\x09/* jshint ignore:end */\x0a\x09}\x0a\x09jQuery(document).ready(function($){\x0a\x09\x09var adminbar = $(\x27#wpadminbar\x27), refresh, touchOpen, touchClose, disableHoverIntent = false;\x0a\x0a\x09\x09/**\x0a\x09\x09 * Forces the browser to refresh the tabbing index.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @param {number}      i  The index of the HTML element to remove the tab index\x0a\x09\x09 *                         from. This parameter is necessary because we use this\x0a\x09\x09 *                         function in .each calls.\x0a\x09\x09 * @param {HTMLElement} el The HTML element to remove the tab index from.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09refresh = function(i, el){\x0a\x09\x09\x09var node = $(el), tab = node.attr(\x27tabindex\x27);\x0a\x09\x09\x09if ( tab )\x0a\x09\x09\x09\x09node.attr(\x27tabindex\x27, \x270\x27).attr(\x27tabindex\x27, tab);\x0a\x09\x09};\x0a\x0a\x09\x09/**\x0a\x09\x09 * Adds or removes the hover class on touch.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.5.0\x0a\x09\x09 *\x0a\x09\x09 * @param {boolean} unbind If true removes the wp-mobile-hover class.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09touchOpen = function(unbind) {\x0a\x09\x09\x09adminbar.find(\x27li.menupop\x27).on(\x27click.wp-mobile-hover\x27, function(e) {\x0a\x09\x09\x09\x09var el = $(this);\x0a\x0a\x09\x09\x09\x09if ( el.parent().is(\x27#wp-admin-bar-root-default\x27) && !el.hasClass(\x27hover\x27) ) {\x0a\x09\x09\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09\x09\x09adminbar.find(\x27li.menupop.hover\x27).removeClass(\x27hover\x27);\x0a\x09\x09\x09\x09\x09el.addClass(\x27hover\x27);\x0a\x09\x09\x09\x09} else if ( !el.hasClass(\x27hover\x27) ) {\x0a\x09\x09\x09\x09\x09e.stopPropagation();\x0a\x09\x09\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09\x09\x09el.addClass(\x27hover\x27);\x0a\x09\x09\x09\x09} else if ( ! $( e.target ).closest( \x27div\x27 ).hasClass( \x27ab-sub-wrapper\x27 ) ) {\x0a\x09\x09\x09\x09\x09// We\x27re dealing with an already-touch-opened menu genericon (we know el.hasClass(\x27hover\x27)),\x0a\x09\x09\x09\x09\x09// so close it on a second tap and prevent propag and defaults. See #29906\x0a\x09\x09\x09\x09\x09e.stopPropagation();\x0a\x09\x09\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09\x09\x09el.removeClass(\x27hover\x27);\x0a\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09if ( unbind ) {\x0a\x09\x09\x09\x09\x09$(\x27li.menupop\x27).off(\x27click.wp-mobile-hover\x27);\x0a\x09\x09\x09\x09\x09disableHoverIntent = false;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09});\x0a\x09\x09};\x0a\x0a\x09\x09/**\x0a\x09\x09 * Removes the hover class if clicked or touched outside the admin bar.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.5.0\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09touchClose = function() {\x0a\x09\x09\x09var mobileEvent = /Mobile\x5c/.+Safari/.test(navigator.userAgent) ? \x27touchstart\x27 : \x27click\x27;\x0a\x09\x09\x09// close any open drop-downs when the click/touch is not on the toolbar\x0a\x09\x09\x09$(document.body).on( mobileEvent+\x27.wp-mobile-hover\x27, function(e) {\x0a\x09\x09\x09\x09if ( !$(e.target).closest(\x27#wpadminbar\x27).length )\x0a\x09\x09\x09\x09\x09adminbar.find(\x27li.menupop.hover\x27).removeClass(\x27hover\x27);\x0a\x09\x09\x09});\x0a\x09\x09};\x0a\x0a\x09\x09adminbar.removeClass(\x27nojq\x27).removeClass(\x27nojs\x27);\x0a\x0a\x09\x09// If clicked on the adminbar add the hoverclass, if clicked outside it remove\x0a\x09\x09// it.\x0a\x09\x09if ( \x27ontouchstart\x27 in window ) {\x0a\x09\x09\x09adminbar.on(\x27touchstart\x27, function(){\x0a\x09\x09\x09\x09touchOpen(true);\x0a\x09\x09\x09\x09disableHoverIntent = true;\x0a\x09\x09\x09});\x0a\x09\x09\x09touchClose();\x0a\x09\x09} else if ( /IEMobile\x5c/[1-9]/.test(navigator.userAgent) ) {\x0a\x09\x09\x09touchOpen();\x0a\x09\x09\x09touchClose();\x0a\x09\x09}\x0a\x0a\x09\x09// Adds or removes the hover class based on the hover intent.\x0a\x09\x09adminbar.find(\x27li.menupop\x27).hoverIntent({\x0a\x09\x09\x09over: function() {\x0a\x09\x09\x09\x09if ( disableHoverIntent )\x0a\x09\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09\x09$(this).addClass(\x27hover\x27);\x0a\x09\x09\x09},\x0a\x09\x09\x09out: function() {\x0a\x09\x09\x09\x09if ( disableHoverIntent )\x0a\x09\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09\x09$(this).removeClass(\x27hover\x27);\x0a\x09\x09\x09},\x0a\x09\x09\x09timeout: 180,\x0a\x09\x09\x09sensitivity: 7,\x0a\x09\x09\x09interval: 100\x0a\x09\x09});\x0a\x0a\x09\x09// Prevents the toolbar from covering up content when a hash is present in the\x0a\x09\x09// URL.\x0a\x09\x09if ( window.location.hash )\x0a\x09\x09\x09window.scrollBy( 0, -32 );\x0a\x0a\x09\x09/**\x0a\x09\x09 * Handles the selected state of the Shortlink link.\x0a\x09\x09 *\x0a\x09\x09 * When the input is visible the link should be selected, when the input is\x0a\x09\x09 * unfocused the link should be unselected.\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The click event.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 **/\x0a\x09\x09$(\x27#wp-admin-bar-get-shortlink\x27).click(function(e){\x0a\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09$(this).addClass(\x27selected\x27).children(\x27.shortlink-input\x27).blur(function(){\x0a\x09\x09\x09\x09$(this).parents(\x27#wp-admin-bar-get-shortlink\x27).removeClass(\x27selected\x27);\x0a\x09\x09\x09}).focus().select();\x0a\x09\x09});\x0a\x0a\x09\x09/**\x0a\x09\x09 * Removes the hoverclass if the enter key is pressed.\x0a\x09\x09 *\x0a\x09\x09 * Makes sure the tab index is refreshed by refreshing each ab-item\x0a\x09\x09 * and its children.\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The keydown event.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09$(\x27#wpadminbar li.menupop \x3e .ab-item\x27).bind(\x27keydown.adminbar\x27, function(e){\x0a\x09\x09\x09// Key code 13 is the enter key.\x0a\x09\x09\x09if ( e.which != 13 )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09var target = $(e.target),\x0a\x09\x09\x09\x09wrap = target.closest(\x27.ab-sub-wrapper\x27),\x0a\x09\x09\x09\x09parentHasHover = target.parent().hasClass(\x27hover\x27);\x0a\x0a\x09\x09\x09e.stopPropagation();\x0a\x09\x09\x09e.preventDefault();\x0a\x0a\x09\x09\x09if ( !wrap.length )\x0a\x09\x09\x09\x09wrap = $(\x27#wpadminbar .quicklinks\x27);\x0a\x0a\x09\x09\x09wrap.find(\x27.menupop\x27).removeClass(\x27hover\x27);\x0a\x0a\x09\x09\x09if ( ! parentHasHover ) {\x0a\x09\x09\x09\x09target.parent().toggleClass(\x27hover\x27);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09target.siblings(\x27.ab-sub-wrapper\x27).find(\x27.ab-item\x27).each(refresh);\x0a\x09\x09}).each(refresh);\x0a\x0a\x09\x09/**\x0a\x09\x09 * Removes the hover class when the escape key is pressed.\x0a\x09\x09 *\x0a\x09\x09 * Makes sure the tab index is refreshed by refreshing each ab-item\x0a\x09\x09 * and its children.\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The keydown event.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09$(\x27#wpadminbar .ab-item\x27).bind(\x27keydown.adminbar\x27, function(e){\x0a\x09\x09\x09// Key code 27 is the escape key.\x0a\x09\x09\x09if ( e.which != 27 )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09var target = $(e.target);\x0a\x0a\x09\x09\x09e.stopPropagation();\x0a\x09\x09\x09e.preventDefault();\x0a\x0a\x09\x09\x09target.closest(\x27.hover\x27).removeClass(\x27hover\x27).children(\x27.ab-item\x27).focus();\x0a\x09\x09\x09target.siblings(\x27.ab-sub-wrapper\x27).find(\x27.ab-item\x27).each(refresh);\x0a\x09\x09});\x0a\x0a\x09\x09/**\x0a\x09\x09 * Scrolls to top of page by clicking the adminbar.\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The click event.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09adminbar.click( function(e) {\x0a\x09\x09\x09if ( e.target.id != \x27wpadminbar\x27 && e.target.id != \x27wp-admin-bar-top-secondary\x27 ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09adminbar.find( \x27li.menupop.hover\x27 ).removeClass( \x27hover\x27 );\x0a\x09\x09\x09$( \x27html, body\x27 ).animate( { scrollTop: 0 }, \x27fast\x27 );\x0a\x09\x09\x09e.preventDefault();\x0a\x09\x09});\x0a\x0a\x09\x09/**\x0a\x09\x09 * Sets the focus on an element with a href attribute.\x0a\x09\x09 *\x0a\x09\x09 * The timeout is used to fix a focus bug in WebKit.\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The keydown event.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09$(\x27.screen-reader-shortcut\x27).keydown( function(e) {\x0a\x09\x09\x09var id, ua;\x0a\x0a\x09\x09\x09if ( 13 != e.which )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09id = $( this ).attr( \x27href\x27 );\x0a\x0a\x09\x09\x09ua = navigator.userAgent.toLowerCase();\x0a\x0a\x09\x09\x09if ( ua.indexOf(\x27applewebkit\x27) != -1 && id && id.charAt(0) == \x27#\x27 ) {\x0a\x09\x09\x09\x09setTimeout(function () {\x0a\x09\x09\x09\x09\x09$(id).focus();\x0a\x09\x09\x09\x09}, 100);\x0a\x09\x09\x09}\x0a\x09\x09});\x0a\x0a\x09\x09$( \x27#adminbar-search\x27 ).on({\x0a\x09\x09\x09/**\x0a\x09\x09\x09 * Adds the adminbar-focused class on focus.\x0a\x09\x09\x09 *\x0a\x09\x09\x09 * @return {void}\x0a\x09\x09\x09 */\x0a\x09\x09\x09focus: function() {\x0a\x09\x09\x09\x09$( \x27#adminbarsearch\x27 ).addClass( \x27adminbar-focused\x27 );\x0a\x09\x09\x09/**\x0a\x09\x09\x09 * Removes the adminbar-focused class on blur.\x0a\x09\x09\x09 *\x0a\x09\x09\x09 * @return {void}\x0a\x09\x09\x09 */\x0a\x09\x09\x09}, blur: function() {\x0a\x09\x09\x09\x09$( \x27#adminbarsearch\x27 ).removeClass( \x27adminbar-focused\x27 );\x0a\x09\x09\x09}\x0a\x09\x09} );\x0a\x0a\x09\x09if ( \x27sessionStorage\x27 in window ) {\x0a\x09\x09\x09/**\x0a\x09\x09\x09 * Empties sessionStorage on logging out.\x0a\x09\x09\x09 *\x0a\x09\x09\x09 * @return {void}\x0a\x09\x09\x09 */\x0a\x09\x09\x09$(\x27#wp-admin-bar-logout a\x27).click( function() {\x0a\x09\x09\x09\x09try {\x0a\x09\x09\x09\x09\x09for ( var key in sessionStorage ) {\x0a\x09\x09\x09\x09\x09\x09if ( key.indexOf(\x27wp-autosave-\x27) != -1 )\x0a\x09\x09\x09\x09\x09\x09\x09sessionStorage.removeItem(key);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09} catch(e) {}\x0a\x09\x09\x09});\x0a\x09\x09}\x0a\x0a\x09\x09if ( navigator.userAgent && document.body.className.indexOf( \x27no-font-face\x27 ) === -1 &&\x0a\x09\x09\x09/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test( navigator.userAgent ) ) {\x0a\x0a\x09\x09\x09document.body.className += \x27 no-font-face\x27;\x0a\x09\x09}\x0a\x09});\x0a} else {\x0a\x09/**\x0a\x09 * Wrapper function for the adminbar that\x27s used if jQuery isn\x27t available.\x0a\x09 *\x0a\x09 * @param {Object} d The document object.\x0a\x09 * @param {Object} w The window object.\x0a\x09 *\x0a\x09 * @return {void}\x0a\x09 */\x0a\x09(function(d, w) {\x0a\x09\x09/**\x0a\x09\x09 * Adds an event listener to an object.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.1.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object}   obj  The object to add the event listener to.\x0a\x09\x09 * @param {string}   type The type of event.\x0a\x09\x09 * @param {function} fn   The function to bind to the event listener.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09var addEvent = function( obj, type, fn ) {\x0a\x09\x09\x09if ( obj && typeof obj.addEventListener === \x27function\x27 ) {\x0a\x09\x09\x09\x09obj.addEventListener( type, fn, false );\x0a\x09\x09\x09} else if ( obj && typeof obj.attachEvent === \x27function\x27 ) {\x0a\x09\x09\x09\x09obj.attachEvent( \x27on\x27 + type, function() {\x0a\x09\x09\x09\x09\x09return fn.call( obj, window.event );\x0a\x09\x09\x09\x09} );\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09aB, hc = new RegExp(\x27\x5c\x5cbhover\x5c\x5cb\x27, \x27g\x27), q = [],\x0a\x09\x09rselected = new RegExp(\x27\x5c\x5cbselected\x5c\x5cb\x27, \x27g\x27),\x0a\x0a\x09\x09/**\x0a\x09\x09 * Gets the timeout ID of the given element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.1.0\x0a\x09\x09 *\x0a\x09\x09 * @param {HTMLElement} el The HTML element.\x0a\x09\x09 *\x0a\x09\x09 * @return {number|boolean} The ID value of the timer that is set or false.\x0a\x09\x09 */\x0a\x09\x09getTOID = function(el) {\x0a\x09\x09\x09var i = q.length;\x0a\x09\x09\x09while ( i-- ) {\x0a\x09\x09\x09\x09if ( q[i] && el == q[i][1] )\x0a\x09\x09\x09\x09\x09return q[i][0];\x0a\x09\x09\x09}\x0a\x09\x09\x09return false;\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Adds the hoverclass to menu items.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.1.0\x0a\x09\x09 *\x0a\x09\x09 * @param {HTMLElement} t The HTML element.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09addHoverClass = function(t) {\x0a\x09\x09\x09var i, id, inA, hovering, ul, li,\x0a\x09\x09\x09\x09ancestors = [],\x0a\x09\x09\x09\x09ancestorLength = 0;\x0a\x0a\x09\x09\x09// aB is adminbar. d is document.\x0a\x09\x09\x09while ( t && t != aB && t != d ) {\x0a\x09\x09\x09\x09if ( \x27LI\x27 == t.nodeName.toUpperCase() ) {\x0a\x09\x09\x09\x09\x09ancestors[ ancestors.length ] = t;\x0a\x09\x09\x09\x09\x09id = getTOID(t);\x0a\x09\x09\x09\x09\x09if ( id )\x0a\x09\x09\x09\x09\x09\x09clearTimeout( id );\x0a\x09\x09\x09\x09\x09t.className = t.className ? ( t.className.replace(hc, \x27\x27) + \x27 hover\x27 ) : \x27hover\x27;\x0a\x09\x09\x09\x09\x09hovering = t;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09t = t.parentNode;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Removes any selected classes.\x0a\x09\x09\x09if ( hovering && hovering.parentNode ) {\x0a\x09\x09\x09\x09ul = hovering.parentNode;\x0a\x09\x09\x09\x09if ( ul && \x27UL\x27 == ul.nodeName.toUpperCase() ) {\x0a\x09\x09\x09\x09\x09i = ul.childNodes.length;\x0a\x09\x09\x09\x09\x09while ( i-- ) {\x0a\x09\x09\x09\x09\x09\x09li = ul.childNodes[i];\x0a\x09\x09\x09\x09\x09\x09if ( li != hovering )\x0a\x09\x09\x09\x09\x09\x09\x09li.className = li.className ? li.className.replace( rselected, \x27\x27 ) : \x27\x27;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Removes the hover class for any objects not in the immediate element\x27s ancestry.\x0a\x09\x09\x09i = q.length;\x0a\x09\x09\x09while ( i-- ) {\x0a\x09\x09\x09\x09inA = false;\x0a\x09\x09\x09\x09ancestorLength = ancestors.length;\x0a\x09\x09\x09\x09while( ancestorLength-- ) {\x0a\x09\x09\x09\x09\x09if ( ancestors[ ancestorLength ] == q[i][1] )\x0a\x09\x09\x09\x09\x09\x09inA = true;\x0a\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09if ( ! inA )\x0a\x09\x09\x09\x09\x09q[i][1].className = q[i][1].className ? q[i][1].className.replace(hc, \x27\x27) : \x27\x27;\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Removes the hoverclass from menu items.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.1.0\x0a\x09\x09 *\x0a\x09\x09 * @param {HTMLElement} t The HTML element.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09removeHoverClass = function(t) {\x0a\x09\x09\x09while ( t && t != aB && t != d ) {\x0a\x09\x09\x09\x09if ( \x27LI\x27 == t.nodeName.toUpperCase() ) {\x0a\x09\x09\x09\x09\x09(function(t) {\x0a\x09\x09\x09\x09\x09\x09var to = setTimeout(function() {\x0a\x09\x09\x09\x09\x09\x09\x09t.className = t.className ? t.className.replace(hc, \x27\x27) : \x27\x27;\x0a\x09\x09\x09\x09\x09\x09}, 500);\x0a\x09\x09\x09\x09\x09\x09q[q.length] = [to, t];\x0a\x09\x09\x09\x09\x09})(t);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09t = t.parentNode;\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Handles the click on the Shortlink link in the adminbar.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.1.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} e The click event.\x0a\x09\x09 *\x0a\x09\x09 * @return {boolean} Returns false to prevent default click behavior.\x0a\x09\x09 */\x0a\x09\x09clickShortlink = function(e) {\x0a\x09\x09\x09var i, l, node,\x0a\x09\x09\x09\x09t = e.target || e.srcElement;\x0a\x0a\x09\x09\x09// Make t the shortlink menu item, or return.\x0a\x09\x09\x09while ( true ) {\x0a\x09\x09\x09\x09// Check if we\x27ve gone past the shortlink node,\x0a\x09\x09\x09\x09// or if the user is clicking on the input.\x0a\x09\x09\x09\x09if ( ! t || t == d || t == aB )\x0a\x09\x09\x09\x09\x09return;\x0a\x09\x09\x09\x09// Check if we\x27ve found the shortlink node.\x0a\x09\x09\x09\x09if ( t.id && t.id == \x27wp-admin-bar-get-shortlink\x27 )\x0a\x09\x09\x09\x09\x09break;\x0a\x09\x09\x09\x09t = t.parentNode;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// IE doesn\x27t support preventDefault, and does support returnValue\x0a\x09\x09\x09if ( e.preventDefault )\x0a\x09\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09e.returnValue = false;\x0a\x0a\x09\x09\x09if ( -1 == t.className.indexOf(\x27selected\x27) )\x0a\x09\x09\x09\x09t.className += \x27 selected\x27;\x0a\x0a\x09\x09\x09for ( i = 0, l = t.childNodes.length; i \x3c l; i++ ) {\x0a\x09\x09\x09\x09node = t.childNodes[i];\x0a\x09\x09\x09\x09if ( node.className && -1 != node.className.indexOf(\x27shortlink-input\x27) ) {\x0a\x09\x09\x09\x09\x09node.focus();\x0a\x09\x09\x09\x09\x09node.select();\x0a\x09\x09\x09\x09\x09node.onblur = function() {\x0a\x09\x09\x09\x09\x09\x09t.className = t.className ? t.className.replace( rselected, \x27\x27 ) : \x27\x27;\x0a\x09\x09\x09\x09\x09};\x0a\x09\x09\x09\x09\x09break;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09return false;\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Scrolls to the top of the page.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.4.0\x0a\x09\x09 *\x0a\x09\x09 * @param {HTMLElement} t The HTML element.\x0a\x09\x09 *\x0a\x09\x09 * @return {void}\x0a\x09\x09 */\x0a\x09\x09scrollToTop = function(t) {\x0a\x09\x09\x09var distance, speed, step, steps, timer, speed_step;\x0a\x0a\x09\x09\x09// Ensure that the #wpadminbar was the target of the click.\x0a\x09\x09\x09if ( t.id != \x27wpadminbar\x27 && t.id != \x27wp-admin-bar-top-secondary\x27 )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09distance    = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;\x0a\x0a\x09\x09\x09if ( distance \x3c 1 )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09speed_step = distance \x3e 800 ? 130 : 100;\x0a\x09\x09\x09speed     = Math.min( 12, Math.round( distance / speed_step ) );\x0a\x09\x09\x09step      = distance \x3e 800 ? Math.round( distance / 30  ) : Math.round( distance / 20  );\x0a\x09\x09\x09steps     = [];\x0a\x09\x09\x09timer     = 0;\x0a\x0a\x09\x09\x09// Animate scrolling to the top of the page by generating steps to\x0a\x09\x09\x09// the top of the page and shifting to each step at a set interval.\x0a\x09\x09\x09while ( distance ) {\x0a\x09\x09\x09\x09distance -= step;\x0a\x09\x09\x09\x09if ( distance \x3c 0 )\x0a\x09\x09\x09\x09\x09distance = 0;\x0a\x09\x09\x09\x09steps.push( distance );\x0a\x0a\x09\x09\x09\x09setTimeout( function() {\x0a\x09\x09\x09\x09\x09window.scrollTo( 0, steps.shift() );\x0a\x09\x09\x09\x09}, timer * speed );\x0a\x0a\x09\x09\x09\x09timer++;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09addEvent(w, \x27load\x27, function() {\x0a\x09\x09\x09aB = d.getElementById(\x27wpadminbar\x27);\x0a\x0a\x09\x09\x09if ( d.body && aB ) {\x0a\x09\x09\x09\x09d.body.appendChild( aB );\x0a\x0a\x09\x09\x09\x09if ( aB.className )\x0a\x09\x09\x09\x09\x09aB.className = aB.className.replace(/nojs/, \x27\x27);\x0a\x0a\x09\x09\x09\x09addEvent(aB, \x27mouseover\x27, function(e) {\x0a\x09\x09\x09\x09\x09addHoverClass( e.target || e.srcElement );\x0a\x09\x09\x09\x09});\x0a\x0a\x09\x09\x09\x09addEvent(aB, \x27mouseout\x27, function(e) {\x0a\x09\x09\x09\x09\x09removeHoverClass( e.target || e.srcElement );\x0a\x09\x09\x09\x09});\x0a\x0a\x09\x09\x09\x09addEvent(aB, \x27click\x27, clickShortlink );\x0a\x0a\x09\x09\x09\x09addEvent(aB, \x27click\x27, function(e) {\x0a\x09\x09\x09\x09\x09scrollToTop( e.target || e.srcElement );\x0a\x09\x09\x09\x09});\x0a\x0a\x09\x09\x09\x09addEvent( document.getElementById(\x27wp-admin-bar-logout\x27), \x27click\x27, function() {\x0a\x09\x09\x09\x09\x09if ( \x27sessionStorage\x27 in window ) {\x0a\x09\x09\x09\x09\x09\x09try {\x0a\x09\x09\x09\x09\x09\x09\x09for ( var key in sessionStorage ) {\x0a\x09\x09\x09\x09\x09\x09\x09\x09if ( key.indexOf(\x27wp-autosave-\x27) != -1 )\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09sessionStorage.removeItem(key);\x0a\x09\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09} catch(e) {}\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09});\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( w.location.hash )\x0a\x09\x09\x09\x09w.scrollBy(0,-32);\x0a\x0a\x09\x09\x09if ( navigator.userAgent && document.body.className.indexOf( \x27no-font-face\x27 ) === -1 &&\x0a\x09\x09\x09\x09/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test( navigator.userAgent ) ) {\x0a\x0a\x09\x09\x09\x09document.body.className += \x27 no-font-face\x27;\x0a\x09\x09\x09}\x0a\x09\x09});\x0a\x09})(document, window);\x0a\x0a}\x0a'}