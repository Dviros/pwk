var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Fri, 19 Jun 2020 12:51:27 GMT\x0aServer: Apache/2.2.22 (Ubuntu)\x0aLast-Modified: Sun, 21 Aug 2016 15:21:43 GMT\x0aETag: \x2224a-562c-53a967d3298ce\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-6015/6016\x0aContent-Length: 6016\x0aKeep-Alive: timeout=5, max=18\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/* ------------------------------------------------------------------------\x0a\x09Class: prettyPhoto\x0a\x09Use: Lightbox clone for jQuery\x0a\x09Author: Stephane Caron (http://www.no-margin-for-errors.com)\x0a\x09Version: 3.1.5\x0a------------------------------------------------------------------------- */\x0a(function(e){function t(){var e=location.href;hashtag=e.indexOf(\x22#prettyPhoto\x22)!==-1?decodeURI(e.substring(e.indexOf(\x22#prettyPhoto\x22)+1,e.length)):false;return hashtag}function n(){if(typeof theRel==\x22undefined\x22)return;location.hash=theRel+\x22/\x22+rel_index+\x22/\x22}function r(){if(location.href.indexOf(\x22#prettyPhoto\x22)!==-1)location.hash=\x22prettyPhoto\x22}function i(e,t){e=e.replace(/[\x5c[]/,\x22\x5c\x5c[\x22).replace(/[\x5c]]/,\x22\x5c\x5c]\x22);var n=\x22[\x5c\x5c?&]\x22+e+\x22=([^&#]*)\x22;var r=new RegExp(n);var i=r.exec(t);return i==null?\x22\x22:i[1]}e.prettyPhoto={version:\x223.1.5\x22};e.fn.prettyPhoto=function(s){function g(){e(\x22.pp_loaderIcon\x22).hide();projectedTop=scroll_pos[\x22scrollTop\x22]+(d/2-a[\x22containerHeight\x22]/2);if(projectedTop\x3c0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(\x22.pp_content\x22).animate({height:a[\x22contentHeight\x22],width:a[\x22contentWidth\x22]},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a[\x22containerWidth\x22]/2\x3c0?0:v/2-a[\x22containerWidth\x22]/2,width:a[\x22containerWidth\x22]},settings.animation_speed,function(){$pp_pic_holder.find(\x22.pp_hoverContainer,#fullResImage\x22).height(a[\x22height\x22]).width(a[\x22width\x22]);$pp_pic_holder.find(\x22.pp_fade\x22).fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])==\x22image\x22){$pp_pic_holder.find(\x22.pp_hoverContainer\x22).show()}else{$pp_pic_holder.find(\x22.pp_hoverContainer\x22).hide()}if(settings.allow_expand){if(a[\x22resized\x22]){e(\x22a.pp_expand,a.pp_contract\x22).show()}else{e(\x22a.pp_expand\x22).hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=true});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find(\x22#pp_full_res object,#pp_full_res embed\x22).css(\x22visibility\x22,\x22hidden\x22);$pp_pic_holder.find(\x22.pp_fade\x22).fadeOut(settings.animation_speed,function(){e(\x22.pp_loaderIcon\x22).show();t()})}function b(t){t\x3e1?e(\x22.pp_nav\x22).show():e(\x22.pp_nav\x22).hide()}function w(e,t){resized=false;E(e,t);imageWidth=e,imageHeight=t;if((p\x3ev||h\x3ed)&&doresize&&settings.allow_resize&&!u){resized=true,fitting=false;while(!fitting){if(p\x3ev){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h\x3ed){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=true}h=imageHeight,p=imageWidth}if(p\x3ev||h\x3ed){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(\x22.pp_details\x22);$pp_details.width(t);detailsHeight=parseFloat($pp_details.css(\x22marginTop\x22))+parseFloat($pp_details.css(\x22marginBottom\x22));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e(\x22body\x22)).css({position:\x22absolute\x22,top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight\x3c=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(\x22.ppt\x22);$pp_title.width(t);titleHeight=parseFloat($pp_title.css(\x22marginTop\x22))+parseFloat($pp_title.css(\x22marginBottom\x22));$pp_title=$pp_title.clone().appendTo(e(\x22body\x22)).css({position:\x22absolute\x22,top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(\x22.pp_top\x22).height()+$pp_pic_holder.find(\x22.pp_bottom\x22).height();p=t}function S(e){if(e.match(/youtube\x5c.com\x5c/watch/i)||e.match(/youtu\x5c.be/i)){return\x22youtube\x22}else if(e.match(/vimeo\x5c.com/i)){return\x22vimeo\x22}else if(e.match(/\x5cb.mov\x5cb/i)){return\x22quicktime\x22}else if(e.match(/\x5cb.swf\x5cb/i)){return\x22flash\x22}else if(e.match(/\x5cbiframe=true\x5cb/i)){return\x22iframe\x22}else if(e.match(/\x5cbajax=true\x5cb/i)){return\x22ajax\x22}else if(e.match(/\x5cbcustom=true\x5cb/i)){return\x22custom\x22}else if(e.substr(0,1)==\x22#\x22){return\x22inline\x22}else{return\x22image\x22}}function x(){if(doresize&&typeof $pp_pic_holder!=\x22undefined\x22){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos[\x22scrollTop\x22]-contentHeight/2;if(projectedTop\x3c0)projectedTop=0;if(contentHeight\x3ed)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos[\x22scrollLeft\x22]-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!=\x22undefined\x22)$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])==\x22image\x22){itemWidth=52+5;navWidth=settings.theme==\x22facebook\x22||settings.theme==\x22pp_default\x22?50:30;itemsPerPage=Math.floor((a[\x22containerWidth\x22]-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage\x3cpp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(\x22.pp_arrow_next,.pp_arrow_previous\x22).hide()}else{$pp_gallery.find(\x22.pp_arrow_next,.pp_arrow_previous\x22).show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css(\x22margin-left\x22,-(galleryWidth/2+navWidth/2)).find(\x22div:first\x22).width(galleryWidth+5).find(\x22ul\x22).width(fullGalleryWidth).find(\x22li.selected\x22).removeClass(\x22selected\x22);goToPage=Math.floor(set_position/itemsPerPage)\x3ctotalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(\x22:eq(\x22+set_position+\x22)\x22).addClass(\x22selected\x22)}else{$pp_pic_holder.find(\x22.pp_content\x22).unbind(\x22mouseenter mouseleave\x22)}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace(\x22{location_href}\x22,encodeURIComponent(location.href));settings.markup=settings.markup.replace(\x22{pp_social}\x22,\x22\x22);e(\x22body\x22).append(settings.markup);$pp_pic_holder=e(\x22.pp_pic_holder\x22),$ppt=e(\x22.ppt\x22),$pp_overlay=e(\x22div.pp_overlay\x22);if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject=\x22\x22;for(var n=0;n\x3cpp_images.length;n++){if(!pp_images[n].match(/\x5cb(jpg|jpeg|png|gif)\x5cb/gi)){classname=\x22default\x22;img_src=\x22\x22}else{classname=\x22\x22;img_src=pp_images[n]}toInject+=\x22\x3cli class=\x27\x22+classname+\x22\x27\x3e\x3ca href=\x27#\x27\x3e\x3cimg src=\x27\x22+img_src+\x22\x27 width=\x2750\x27 alt=\x27\x27 /\x3e\x3c/a\x3e\x3c/li\x3e\x22}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find(\x22#pp_full_res\x22).after(toInject);$pp_gallery=e(\x22.pp_pic_holder .pp_gallery\x22),$pp_gallery_li=$pp_gallery.find(\x22li\x22);$pp_gallery.find(\x22.pp_arrow_next\x22).click(function(){e.prettyPhoto.changeGalleryPage(\x22next\x22);e.prettyPhoto.stopSlideshow();return false});$pp_gallery.find(\x22.pp_arrow_previous\x22).click(function(){e.prettyPhoto.changeGalleryPage(\x22previous\x22);e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(\x22.pp_content\x22).hover(function(){$pp_pic_holder.find(\x22.pp_gallery:not(.disabled)\x22).fadeIn()},function(){$pp_pic_holder.find(\x22.pp_gallery:not(.disabled)\x22).fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find(\x22a\x22).click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(\x22.pp_nav\x22).prepend(\x27\x3ca href=\x22#\x22 class=\x22pp_play\x22\x3ePlay\x3c/a\x3e\x27);$pp_pic_holder.find(\x22.pp_nav .pp_play\x22).click(function(){e.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr(\x22class\x22,\x22pp_pic_holder \x22+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind(\x22click\x22,function(){if(!settings.modal)e.prettyPhoto.close()});e(\x22a.pp_close\x22).bind(\x22click\x22,function(){e.prettyPhoto.close();return false});if(settings.allow_expand){e(\x22a.pp_expand\x22).bind(\x22click\x22,function(t){if(e(this).hasClass(\x22pp_expand\x22)){e(this).removeClass(\x22pp_expand\x22).addClass(\x22pp_contract\x22);doresize=false}else{e(this).removeClass(\x22pp_contract\x22).addClass(\x22pp_expand\x22);doresize=true}y(function(){e.prettyPhoto.open()});return false})}$pp_pic_holder.find(\x22.pp_previous, .pp_nav .pp_arrow_previous\x22).bind(\x22click\x22,function(){e.prettyPhoto.changePage(\x22previous\x22);e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(\x22.pp_next, .pp_nav .pp_arrow_next\x22).bind(\x22click\x22,function(){e.prettyPhoto.changePage(\x22next\x22);e.prettyPhoto.stopSlideshow();return false});x()}s=jQuery.extend({hook:\x22rel\x22,animation_speed:\x22fast\x22,ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:false,opacity:.8,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:\x22/\x22,theme:\x22pp_default\x22,horizontal_padding:20,hideflash:false,wmode:\x22opaque\x22,autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:\x27\x3cdiv class=\x22pp_pic_holder\x22\x3e \x09\x09\x09\x09\x09\x09\x3cdiv class=\x22ppt\x22\x3e\xc2\xa0\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_top\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_left\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_middle\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_right\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_content_container\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_left\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_right\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_content\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_loaderIcon\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_fade\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca href=\x22#\x22 class=\x22pp_expand\x22 title=\x22Expand the image\x22\x3eExpand\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_hoverContainer\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca class=\x22pp_next\x22 href=\x22#\x22\x3enext\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca class=\x22pp_previous\x22 href=\x22#\x22\x3eprevious\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv id=\x22pp_full_res\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_details\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_nav\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca href=\x22#\x22 class=\x22pp_arrow_previous\x22\x3ePrevious\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cp class=\x22currentTextHolder\x22\x3e0/0\x3c/p\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca href=\x22#\x22 class=\x22pp_arrow_next\x22\x3eNext\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cp class=\x22pp_description\x22\x3e\x3c/p\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_social\x22\x3e{pp_social}\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3ca class=\x22pp_close\x22 href=\x22#\x22\x3eClose\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_bottom\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_left\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_middle\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x3cdiv class=\x22pp_right\x22\x3e\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x3cdiv class=\x22pp_overlay\x22\x3e\x3c/div\x3e\x27,gallery_markup:\x27\x3cdiv class=\x22pp_gallery\x22\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3ca href=\x22#\x22 class=\x22pp_arrow_previous\x22\x3ePrevious\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3cdiv\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x3cul\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x09\x09{gallery} \x09\x09\x09\x09\x09\x09\x09\x09\x09\x3c/ul\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e \x09\x09\x09\x09\x09\x09\x09\x09\x3ca href=\x22#\x22 class=\x22pp_arrow_next\x22\x3eNext\x3c/a\x3e \x09\x09\x09\x09\x09\x09\x09\x3c/div\x3e\x27,image_markup:\x27\x3cimg id=\x22fullResImage\x22 src=\x22{path}\x22 /\x3e\x27,flash_markup:\x27\x3cobject classid=\x22clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\x22 width=\x22{width}\x22 height=\x22{height}\x22\x3e\x3cparam name=\x22wmode\x22 value=\x22{wmode}\x22 /\x3e\x3cparam name=\x22allowfullscreen\x22 value=\x22true\x22 /\x3e\x3cparam name=\x22allowscriptaccess\x22 value=\x22always\x22 /\x3e\x3cparam name=\x22movie\x22 value=\x22{path}\x22 /\x3e\x3cembed src=\x22{path}\x22 type=\x22application/x-shockwave-flash\x22 allowfullscreen=\x22true\x22 allowscriptaccess=\x22always\x22 width=\x22{width}\x22 height=\x22{height}\x22 wmode=\x22{wmode}\x22\x3e\x3c/embed\x3e\x3c/object\x3e\x27,quicktime_markup:\x27\x3cobject classid=\x22clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\x22 codebase=\x22http://www.apple.com/qtactivex/qtplugin.cab\x22 height=\x22{height}\x22 width=\x22{width}\x22\x3e\x3cparam name=\x22src\x22 value=\x22{path}\x22\x3e\x3cparam name=\x22autoplay\x22 value=\x22{autoplay}\x22\x3e\x3cparam name=\x22type\x22 value=\x22video/quicktime\x22\x3e\x3cembed src=\x22{path}\x22 height=\x22{height}\x22 width=\x22{width}\x22 autoplay=\x22{autoplay}\x22 type=\x22video/quicktime\x22 pluginspage=\x22http://www.apple.com/quicktime/download/\x22\x3e\x3c/embed\x3e\x3c/object\x3e\x27,iframe_markup:\x27\x3ciframe src =\x22{path}\x22 width=\x22{width}\x22 height=\x22{height}\x22 frameborder=\x22no\x22\x3e\x3c/iframe\x3e\x27,inline_markup:\x27\x3cdiv class=\x22pp_inline\x22\x3e{content}\x3c/div\x3e\x27,custom_markup:\x22\x22,social_tools:\x27\x3cdiv class=\x22twitter\x22\x3e\x3ca href=\x22http://twitter.com/share\x22 class=\x22twitter-share-button\x22 data-count=\x22none\x22\x3eTweet\x3c/a\x3e\x3cscript type=\x22text/javascript\x22 src=\x22http://platform.twitter.com/widgets.js\x22'}