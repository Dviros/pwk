var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:11:59 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 16 Oct 2017 06:46:48 GMT\x0aETag: \x221edb-55ba45edf2600-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2645/2646\x0aContent-Length: 2646\x0aKeep-Alive: timeout=5, max=85\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0awp.customize.widgetsPreview=wp.customize.WidgetCustomizerPreview=function(a,b,c,d){var e;return e={renderedSidebars:{},renderedWidgets:{},registeredSidebars:[],registeredWidgets:{},widgetSelectors:[],preview:null,l10n:{widgetTooltip:\x22\x22},selectiveRefreshableWidgets:{}},e.init=function(){var a=this;a.preview=d.preview,b.isEmpty(a.selectiveRefreshableWidgets)||a.addPartials(),a.buildWidgetSelectors(),a.highlightControls(),a.preview.bind(\x22highlight-widget\x22,a.highlightWidget),d.preview.bind(\x22active\x22,function(){a.highlightControls()}),d.preview.bind(\x22refresh-widget-partial\x22,function(b){var c=\x22widget[\x22+b+\x22]\x22;d.selectiveRefresh.partial.has(c)?d.selectiveRefresh.partial(c).refresh():a.renderedWidgets[b]&&d.preview.send(\x22refresh\x22)})},e.WidgetPartial=d.selectiveRefresh.Partial.extend({initialize:function(a,c){var f,g=this;if(f=a.match(/^widget\x5c[(.+)]$/),!f)throw new Error(\x22Illegal id for widget partial.\x22);g.widgetId=f[1],g.widgetIdParts=e.parseWidgetId(g.widgetId),c=c||{},c.params=b.extend({settings:[e.getWidgetSettingId(g.widgetId)],containerInclusive:!0},c.params||{}),d.selectiveRefresh.Partial.prototype.initialize.call(g,a,c)},refresh:function(){var b,c=this;return e.selectiveRefreshableWidgets[c.widgetIdParts.idBase]?d.selectiveRefresh.Partial.prototype.refresh.call(c):(b=a.Deferred(),b.reject(),c.fallback(),b.promise())},renderContent:function(a){var b=this;d.selectiveRefresh.Partial.prototype.renderContent.call(b,a)&&(d.preview.send(\x22widget-updated\x22,b.widgetId),d.selectiveRefresh.trigger(\x22widget-updated\x22,b))}}),e.SidebarPartial=d.selectiveRefresh.Partial.extend({initialize:function(a,c){var e,f=this;if(e=a.match(/^sidebar\x5c[(.+)]$/),!e)throw new Error(\x22Illegal id for sidebar partial.\x22);if(f.sidebarId=e[1],c=c||{},c.params=b.extend({settings:[\x22sidebars_widgets[\x22+f.sidebarId+\x22]\x22]},c.params||{}),d.selectiveRefresh.Partial.prototype.initialize.call(f,a,c),!f.params.sidebarArgs)throw new Error(\x22The sidebarArgs param was not provided.\x22);if(f.params.settings.length\x3e1)throw new Error(\x22Expected SidebarPartial to only have one associated setting\x22)},ready:function(){var a=this;b.each(a.settings(),function(c){d(c).bind(b.bind(a.handleSettingChange,a))}),d.selectiveRefresh.bind(\x22partial-content-rendered\x22,function(c){var f=c.partial.extended(e.WidgetPartial)&&-1!==b.indexOf(a.getWidgetIds(),c.partial.widgetId);f&&d.selectiveRefresh.trigger(\x22sidebar-updated\x22,a)}),d.bind(\x22change\x22,function(c){var d,f;f=e.parseWidgetSettingId(c.id),f&&(d=f.idBase,f.number&&(d+=\x22-\x22+String(f.number)),-1!==b.indexOf(a.getWidgetIds(),d)&&a.ensureWidgetPlacementContainers(d))})},findDynamicSidebarBoundaryNodes:function(){var a,c,d=this,e={};return a=/^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\x5cd+)$/,c=function(f){b.each(f,function(f){var g;if(8===f.nodeType){if(g=f.nodeValue.match(a),!g||g[2]!==d.sidebarId)return;b.isUndefined(e[g[3]])&&(e[g[3]]={before:null,after:null,instanceNumber:parseInt(g[3],10)}),\x22dynamic_sidebar_before\x22===g[1]?e[g[3]].before=f:e[g[3]].after=f}else 1===f.nodeType&&c(f.childNodes)})},c(document.body.childNodes),b.values(e)},placements:function(){var a=this;return b.map(a.findDynamicSidebarBoundaryNodes(),function(b){return new d.selectiveRefresh.Placement({partial:a,container:null,startNode:b.before,endNode:b.after,context:{instanceNumber:b.instanceNumber}})})},getWidgetIds:function(){var a,c,e=this;if(a=e.settings()[0],!a)throw new Error(\x22Missing associated setting.\x22);if(!d.has(a))throw new Error(\x22Setting does not exist.\x22);if(c=d(a).get(),!b.isArray(c))throw new Error(\x22Expected setting to be array of widget IDs\x22);return c.slice(0)},reflowWidgets:function(){var a,c,e,f=this,g=[];return c=f.getWidgetIds(),a=f.placements(),e={},b.each(c,function(a){var b=d.selectiveRefresh.partial(\x22widget[\x22+a+\x22]\x22);b&&(e[a]=b)}),b.each(a,function(a){var c,f=[],h=!1,i=-1;b.each(e,function(d){b.each(d.placements(),function(b){a.context.instanceNumber===b.context.sidebar_instance_number&&(c=b.container.index(),f.push({partial:d,placement:b,position:c}),c\x3ci&&(h=!0),i=c)})}),h&&(b.each(f,function(b){a.endNode.parentNode.insertBefore(b.placement.container[0],a.endNode),d.selectiveRefresh.trigger(\x22partial-content-moved\x22,b.placement)}),g.push(a))}),g.length\x3e0&&d.selectiveRefresh.trigger(\x22sidebar-updated\x22,f),g},ensureWidgetPlacementContainers:function(c){var f,g=this,h=!1,i=\x22widget[\x22+c+\x22]\x22;return f=d.selectiveRefresh.partial(i),f||(f=new e.WidgetPartial(i,{params:{}})),b.each(g.placements(),function(d){var e,i;e=b.find(f.placements(),function(a){return a.context.sidebar_instance_number===d.context.instanceNumber}),e||(i=a(g.params.sidebarArgs.before_widget.replace(/%1\x5c$s/g,c).replace(/%2\x5c$s/g,\x22widget\x22)+g.params.sidebarArgs.after_widget),i[0]&&(i.attr(\x22data-customize-partial-id\x22,f.id),i.attr(\x22data-customize-partial-type\x22,\x22widget\x22),i.attr(\x22data-customize-widget-id\x22,c),i.data(\x22customize-partial-placement-context\x22,{sidebar_id:g.sidebarId,sidebar_instance_number:d.context.instanceNumber}),d.endNode.parentNode.insertBefore(i[0],d.endNode),h=!0))}),d.selectiveRefresh.partial.add(f),h&&g.reflowWidgets(),f},handleSettingChange:function(a,c){var f,g,h,i=this,j=[];return(f=c.length\x3e0&&0===a.length||a.length\x3e0&&0===c.length)?void i.fallback():(g=b.difference(c,a),b.each(g,function(a){var c=d.selectiveRefresh.partial(\x22widget[\x22+a+\x22]\x22);c&&b.each(c.placements(),function(a){var b=a.context.sidebar_id===i.sidebarId||a.context.sidebar_args&&a.context.sidebar_args.id===i.sidebarId;b&&a.container.remove()}),delete e.renderedWidgets[a]}),h=b.difference(a,c),b.each(h,function(a){var b=i.ensureWidgetPlacementContainers(a);j.push(b),e.renderedWidgets[a]=!0}),b.each(j,function(a){a.refresh()}),void d.selectiveRefresh.trigger(\x22sidebar-updated\x22,i))},refresh:function(){var c=this,e=a.Deferred();return e.fail(function(){c.fallback()}),0===c.placements().length?e.reject():(b.each(c.reflowWidgets(),function(a){d.selectiveRefresh.trigger(\x22partial-content-rendered\x22,a)}),e.resolve()),e.promise()}}),d.selectiveRefresh.partialConstructor.sidebar=e.SidebarPartial,d.selectiveRefresh.partialConstructor.widget=e.WidgetPartial,e.addPartials=function(){b.each(e.registeredSidebars,function(a){var b,c=\x22sidebar[\x22+a.id+\x22]\x22;b=d.selectiveRefresh.partial(c),b||(b=new e.SidebarPartial(c,{params:{sidebarArgs:a}}),d.selectiveRefresh.partial.add(b))})},e.buildWidgetSelectors=function(){var b=this;a.each(b.registeredSidebars,function(c,d){var e,f,g,h=[d.before_widget,d.before_title,d.after_title,d.after_widget].join(\x22\x22);e=a(h),f=e.prop(\x22tagName\x22)||\x22\x22,g=e.prop(\x22className\x22)||\x22\x22,g&&(g=g.replace(/\x5cS*%[12]\x5c$s\x5cS*/g,\x22\x22),g=g.replace(/^\x5cs+|\x5cs+$/g,\x22\x22),g&&(f+=\x22.\x22+g.split(/\x5cs+/).join(\x22.\x22)),b.widgetSelectors.push(f))})},e.highlightWidget=function(b){var c=a(document.body),d=a(\x22#\x22+b);c.find(\x22.widget-customizer-highlighted-widget\x22).removeClass(\x22widget-customizer-highlighted-widget\x22),d.addClass(\x22widget-customizer-highlighted-widget\x22),setTimeout(function(){d.removeClass(\x22widget-customizer-highlighted-widget\x22)},500)},e.highlightControls=function(){var b=this,c=this.widgetSelectors.join(\x22,\x22);d.settings.channel&&(a(c).attr(\x22title\x22,this.l10n.widgetTooltip),a(document).on(\x22mouseenter\x22,c,function(){b.preview.send(\x22highlight-widget-control\x22,a(this).prop(\x22id\x22))}),a(document).on(\x22click\x22,c,function(c){c.shiftKey&&(c.preventDefault(),b.preview.send(\x22focus-widget-control\x22,a(this).prop(\x22id\x22)))}))},e.parseWidgetId=function(a){var b,c={idBase:\x22\x22,number:null};return b=a.match(/^(.+)-(\x5cd+)$/),b?(c.idBase=b[1],c.number=parseInt(b[2],10)):c.idBase=a,c},e.parseWidgetSettingId=function(a){var b,c={idBase:\x22\x22,number:null};return(b=a.match(/^widget_([^\x5c[]+?)(?:\x5c[(\x5cd+)])?$/))?(c.idBase=b[1],b[2]&&(c.number=parseInt(b[2],10)),c):null},e.getWidgetSettingId=function(a){var b,c=this.parseWidgetId(a);return b=\x22widget_\x22+c.idBase,c.number&&(b+=\x22[\x22+String(c.number)+\x22]\x22),b},d.bind(\x22preview-ready\x22,function(){a.extend(e,_wpWidgetCustomizerPreviewSettings),e.init()}),e}(jQuery,_,wp,wp.customize);'}