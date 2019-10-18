!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(p){function e(){}function u(e,t){h.ev.on(i+e+w,t)}function d(e,t,i,n){var s=document.createElement("div");return s.className="mfp-"+e,i&&(s.innerHTML=i),n?t&&t.appendChild(s):(s=p(s),t&&s.appendTo(t)),s}function m(e,t){h.ev.triggerHandler(i+e,t),h.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),h.st.callbacks[e]&&h.st.callbacks[e].apply(h,p.isArray(t)?t:[t]))}function f(e){return e===t&&h.currTemplate.closeBtn||(h.currTemplate.closeBtn=p(h.st.closeMarkup.replace("%title%",h.st.tClose)),t=e),h.currTemplate.closeBtn}function o(){p.magnificPopup.instance||((h=new e).init(),p.magnificPopup.instance=h)}var h,n,g,s,_,t,l="Close",c="BeforeClose",v="MarkupParse",y="Open",a="Change",i="mfp",w="."+i,C="mfp-ready",r="mfp-removing",b="mfp-prevent-close",T=!!window.jQuery,x=p(window);e.prototype={constructor:e,init:function(){var e=navigator.appVersion;h.isLowIE=h.isIE8=document.all&&!document.addEventListener,h.isAndroid=/android/gi.test(e),h.isIOS=/iphone|ipad|ipod/gi.test(e),h.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),h.probablyMobile=h.isAndroid||h.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),g=p(document),h.popupsCache={}},open:function(e){var t;if(!1===e.isObj){h.items=e.items.toArray(),h.index=0;var i,n=e.items;for(t=0;t<n.length;t++)if((i=n[t]).parsed&&(i=i.el[0]),i===e.el[0]){h.index=t;break}}else h.items=p.isArray(e.items)?e.items:[e.items],h.index=e.index||0;if(!h.isOpen){h.types=[],_="",e.mainEl&&e.mainEl.length?h.ev=e.mainEl.eq(0):h.ev=g,e.key?(h.popupsCache[e.key]||(h.popupsCache[e.key]={}),h.currTemplate=h.popupsCache[e.key]):h.currTemplate={},h.st=p.extend(!0,{},p.magnificPopup.defaults,e),h.fixedContentPos="auto"===h.st.fixedContentPos?!h.probablyMobile:h.st.fixedContentPos,h.st.modal&&(h.st.closeOnContentClick=!1,h.st.closeOnBgClick=!1,h.st.showCloseBtn=!1,h.st.enableEscapeKey=!1),h.bgOverlay||(h.bgOverlay=d("bg").on("click"+w,function(){h.close()}),h.wrap=d("wrap").attr("tabindex",-1).on("click"+w,function(e){h._checkIfClose(e.target)&&h.close()}),h.container=d("container",h.wrap)),h.contentContainer=d("content"),h.st.preloader&&(h.preloader=d("preloader",h.container,h.st.tLoading));var s=p.magnificPopup.modules;for(t=0;t<s.length;t++){var o=s[t];o=o.charAt(0).toUpperCase()+o.slice(1),h["init"+o].call(h)}m("BeforeOpen"),h.st.showCloseBtn&&(h.st.closeBtnInside?(u(v,function(e,t,i,n){i.close_replaceWith=f(n.type)}),_+=" mfp-close-btn-in"):h.wrap.append(f())),h.st.alignTop&&(_+=" mfp-align-top"),h.fixedContentPos?h.wrap.css({overflow:h.st.overflowY,overflowX:"hidden",overflowY:h.st.overflowY}):h.wrap.css({top:x.scrollTop(),position:"absolute"}),!1!==h.st.fixedBgPos&&("auto"!==h.st.fixedBgPos||h.fixedContentPos)||h.bgOverlay.css({height:g.height(),position:"absolute"}),h.st.enableEscapeKey&&g.on("keyup"+w,function(e){27===e.keyCode&&h.close()}),x.on("resize"+w,function(){h.updateSize()}),h.st.closeOnContentClick||(_+=" mfp-auto-cursor"),_&&h.wrap.addClass(_);var a=h.wH=x.height(),r={};if(h.fixedContentPos&&h._hasScrollBar(a)){var l=h._getScrollbarSize();l&&(r.marginRight=l)}h.fixedContentPos&&(h.isIE7?p("body, html").css("overflow","hidden"):r.overflow="hidden");var c=h.st.mainClass;return h.isIE7&&(c+=" mfp-ie7"),c&&h._addClassToMFP(c),h.updateItemHTML(),m("BuildControls"),p("html").css(r),h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo||p(document.body)),h._lastFocusedEl=document.activeElement,setTimeout(function(){h.content?(h._addClassToMFP(C),h._setFocus()):h.bgOverlay.addClass(C),g.on("focusin"+w,h._onFocusIn)},16),h.isOpen=!0,h.updateSize(a),m(y),e}h.updateItemHTML()},close:function(){h.isOpen&&(m(c),h.isOpen=!1,h.st.removalDelay&&!h.isLowIE&&h.supportsTransition?(h._addClassToMFP(r),setTimeout(function(){h._close()},h.st.removalDelay)):h._close())},_close:function(){m(l);var e=r+" "+C+" ";if(h.bgOverlay.detach(),h.wrap.detach(),h.container.empty(),h.st.mainClass&&(e+=h.st.mainClass+" "),h._removeClassFromMFP(e),h.fixedContentPos){var t={marginRight:""};h.isIE7?p("body, html").css("overflow",""):t.overflow="",p("html").css(t)}g.off("keyup.mfp focusin"+w),h.ev.off(w),h.wrap.attr("class","mfp-wrap").removeAttr("style"),h.bgOverlay.attr("class","mfp-bg"),h.container.attr("class","mfp-container"),!h.st.showCloseBtn||h.st.closeBtnInside&&!0!==h.currTemplate[h.currItem.type]||h.currTemplate.closeBtn&&h.currTemplate.closeBtn.detach(),h.st.autoFocusLast&&h._lastFocusedEl&&p(h._lastFocusedEl).focus(),h.currItem=null,h.content=null,h.currTemplate=null,h.prevHeight=0,m("AfterClose")},updateSize:function(e){if(h.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*t;h.wrap.css("height",i),h.wH=i}else h.wH=e||x.height();h.fixedContentPos||h.wrap.css("height",h.wH),m("Resize")},updateItemHTML:function(){var e=h.items[h.index];h.contentContainer.detach(),h.content&&h.content.detach(),e.parsed||(e=h.parseEl(h.index));var t=e.type;if(m("BeforeChange",[h.currItem?h.currItem.type:"",t]),h.currItem=e,!h.currTemplate[t]){var i=!!h.st[t]&&h.st[t].markup;m("FirstMarkupParse",i),h.currTemplate[t]=!i||p(i)}s&&s!==e.type&&h.container.removeClass("mfp-"+s+"-holder");var n=h["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,h.currTemplate[t]);h.appendContent(n,t),e.preloaded=!0,m(a,e),s=e.type,h.container.prepend(h.contentContainer),m("AfterChange")},appendContent:function(e,t){(h.content=e)?h.st.showCloseBtn&&h.st.closeBtnInside&&!0===h.currTemplate[t]?h.content.find(".mfp-close").length||h.content.append(f()):h.content=e:h.content="",m("BeforeAppend"),h.container.addClass("mfp-"+t+"-holder"),h.contentContainer.append(h.content)},parseEl:function(e){var t,i=h.items[e];if((i=i.tagName?{el:p(i)}:(t=i.type,{data:i,src:i.src})).el){for(var n=h.types,s=0;s<n.length;s++)if(i.el.hasClass("mfp-"+n[s])){t=n[s];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=t||h.st.type||"inline",i.index=e,i.parsed=!0,h.items[e]=i,m("ElementParse",i),h.items[e]},addGroup:function(t,i){function e(e){e.mfpEl=this,h._openClick(e,t,i)}var n="click.magnificPopup";(i=i||{}).mainEl=t,i.items?(i.isObj=!0,t.off(n).on(n,e)):(i.isObj=!1,i.delegate?t.off(n).on(n,i.delegate,e):(i.items=t).off(n).on(n,e))},_openClick:function(e,t,i){if((void 0!==i.midClick?i.midClick:p.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var n=void 0!==i.disableOn?i.disableOn:p.magnificPopup.defaults.disableOn;if(n)if(p.isFunction(n)){if(!n.call(h))return!0}else if(x.width()<n)return!0;e.type&&(e.preventDefault(),h.isOpen&&e.stopPropagation()),i.el=p(e.mfpEl),i.delegate&&(i.items=t.find(i.delegate)),h.open(i)}},updateStatus:function(e,t){if(h.preloader){n!==e&&h.container.removeClass("mfp-s-"+n),t||"loading"!==e||(t=h.st.tLoading);var i={status:e,text:t};m("UpdateStatus",i),e=i.status,t=i.text,h.preloader.html(t),h.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),h.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(e){if(!p(e).hasClass(b)){var t=h.st.closeOnContentClick,i=h.st.closeOnBgClick;if(t&&i)return!0;if(!h.content||p(e).hasClass("mfp-close")||h.preloader&&e===h.preloader[0])return!0;if(e===h.content[0]||p.contains(h.content[0],e)){if(t)return!0}else if(i&&p.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){h.bgOverlay.addClass(e),h.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),h.wrap.removeClass(e)},_hasScrollBar:function(e){return(h.isIE7?g.height():document.body.scrollHeight)>(e||x.height())},_setFocus:function(){(h.st.focus?h.content.find(h.st.focus).eq(0):h.wrap).focus()},_onFocusIn:function(e){return e.target===h.wrap[0]||p.contains(h.wrap[0],e.target)?void 0:(h._setFocus(),!1)},_parseMarkup:function(s,e,t){var o;t.data&&(e=p.extend(t.data,e)),m(v,[s,e,t]),p.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(o=e.split("_")).length){var i=s.find(w+"-"+o[0]);if(0<i.length){var n=o[1];"replaceWith"===n?i[0]!==t[0]&&i.replaceWith(t):"img"===n?i.is("img")?i.attr("src",t):i.replaceWith(p("<img>").attr("src",t).attr("class",i.attr("class"))):i.attr(o[1],t)}}else s.find(w+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===h.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),h.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return h.scrollbarSize}},p.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return o(),(e=e?p.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return p.magnificPopup.instance&&p.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(p.magnificPopup.defaults[e]=t.options),p.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},p.fn.magnificPopup=function(e){o();var t=p(this);if("string"==typeof e)if("open"===e){var i,n=T?t.data("magnificPopup"):t[0].magnificPopup,s=parseInt(arguments[1],10)||0;i=n.items?n.items[s]:(i=t,n.delegate&&(i=i.find(n.delegate)),i.eq(s)),h._openClick({mfpEl:i},t,n)}else h.isOpen&&h[e].apply(h,Array.prototype.slice.call(arguments,1));else e=p.extend(!0,{},e),T?t.data("magnificPopup",e):t[0].magnificPopup=e,h.addGroup(t,e);return t};function I(){k&&(M.after(k.addClass(S)).detach(),k=null)}var S,M,k,D="inline";p.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){h.types.push(D),u(l+"."+D,function(){I()})},getInline:function(e,t){if(I(),e.src){var i=h.st.inline,n=p(e.src);if(n.length){var s=n[0].parentNode;s&&s.tagName&&(M||(S=i.hiddenClass,M=d(S),S="mfp-"+S),k=n.after(M).detach().removeClass(S)),h.updateStatus("ready")}else h.updateStatus("error",i.tNotFound),n=p("<div>");return e.inlineElement=n}return h.updateStatus("ready"),h._parseMarkup(t,{},e),t}}});function E(){O&&p(document.body).removeClass(O)}function P(){E(),h.req&&h.req.abort()}var O,L="ajax";p.magnificPopup.registerModule(L,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){h.types.push(L),O=h.st.ajax.cursor,u(l+"."+L,P),u("BeforeChange."+L,P)},getAjax:function(s){O&&p(document.body).addClass(O),h.updateStatus("loading");var e=p.extend({url:s.src,success:function(e,t,i){var n={data:e,xhr:i};m("ParseAjax",n),h.appendContent(p(n.data),L),s.finished=!0,E(),h._setFocus(),setTimeout(function(){h.wrap.addClass(C)},16),h.updateStatus("ready"),m("AjaxContentAdded")},error:function(){E(),s.finished=s.loadError=!0,h.updateStatus("error",h.st.ajax.tError.replace("%url%",s.src))}},h.st.ajax.settings);return h.req=p.ajax(e),""}}});var z;p.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=h.st.image,t=".image";h.types.push("image"),u(y+t,function(){"image"===h.currItem.type&&e.cursor&&p(document.body).addClass(e.cursor)}),u(l+t,function(){e.cursor&&p(document.body).removeClass(e.cursor),x.off("resize"+w)}),u("Resize"+t,h.resizeImage),h.isLowIE&&u("AfterChange",h.resizeImage)},resizeImage:function(){var e=h.currItem;if(e&&e.img&&h.st.image.verticalFit){var t=0;h.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",h.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,z&&clearInterval(z),e.isCheckingImgSize=!1,m("ImageHasSize",e),e.imgHidden&&(h.content&&h.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var i=0,n=t.img[0],s=function(e){z&&clearInterval(z),z=setInterval(function(){return 0<n.naturalWidth?void h._onImageHasSize(t):(200<i&&clearInterval(z),void(3===++i?s(10):40===i?s(50):100===i&&s(500)))},e)};s(1)},getImage:function(e,t){var i=0,n=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===h.currItem&&(h._onImageHasSize(e),h.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,m("ImageLoadComplete")):++i<200?setTimeout(n,100):s())},s=function(){e&&(e.img.off(".mfploader"),e===h.currItem&&(h._onImageHasSize(e),h.updateStatus("error",o.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},o=h.st.image,a=t.find(".mfp-img");if(a.length){var r=document.createElement("img");r.className="mfp-img",e.el&&e.el.find("img").length&&(r.alt=e.el.find("img").attr("alt")),e.img=p(r).on("load.mfploader",n).on("error.mfploader",s),r.src=e.src,a.is("img")&&(e.img=e.img.clone()),0<(r=e.img[0]).naturalWidth?e.hasSize=!0:r.width||(e.hasSize=!1)}return h._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=h.st.image.titleSrc;if(t){if(p.isFunction(t))return t.call(h,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),h.resizeImage(),e.hasSize?(z&&clearInterval(z),e.loadError?(t.addClass("mfp-loading"),h.updateStatus("error",o.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),h.updateStatus("ready"))):(h.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),h.findImageSize(e))),t}}});var F;p.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,o=h.st.zoom,t=".zoom";if(o.enabled&&h.supportsTransition){function i(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+o.duration/1e3+"s "+o.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},s="transition";return n["-webkit-"+s]=n["-moz-"+s]=n["-o-"+s]=n[s]=i,t.css(n),t}function n(){h.content.css("visibility","visible")}var s,a,r=o.duration;u("BuildControls"+t,function(){if(h._allowZoom()){if(clearTimeout(s),h.content.css("visibility","hidden"),!(e=h._getItemToZoom()))return void n();(a=i(e)).css(h._getOffset()),h.wrap.append(a),s=setTimeout(function(){a.css(h._getOffset(!0)),s=setTimeout(function(){n(),setTimeout(function(){a.remove(),e=a=null,m("ZoomAnimationEnded")},16)},r)},16)}}),u(c+t,function(){if(h._allowZoom()){if(clearTimeout(s),h.st.removalDelay=r,!e){if(!(e=h._getItemToZoom()))return;a=i(e)}a.css(h._getOffset(!0)),h.wrap.append(a),h.content.css("visibility","hidden"),setTimeout(function(){a.css(h._getOffset())},16)}}),u(l+t,function(){h._allowZoom()&&(n(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===h.currItem.type},_getItemToZoom:function(){return!!h.currItem.hasSize&&h.currItem.img},_getOffset:function(e){var t,i=(t=e?h.currItem.img:h.st.zoom.opener(h.currItem.el||h.currItem)).offset(),n=parseInt(t.css("padding-top"),10),s=parseInt(t.css("padding-bottom"),10);i.top-=p(window).scrollTop()-n;var o={width:t.width(),height:(T?t.innerHeight():t[0].offsetHeight)-s-n};return void 0===F&&(F=void 0!==document.createElement("p").style.MozTransform),F?o["-moz-transform"]=o.transform="translate("+i.left+"px,"+i.top+"px)":(o.left=i.left,o.top=i.top),o}}});function A(e){if(h.currTemplate[H]){var t=h.currTemplate[H].find("iframe");t.length&&(e||(t[0].src="//about:blank"),h.isIE8&&t.css("display",e?"block":"none"))}}var H="iframe";p.magnificPopup.registerModule(H,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){h.types.push(H),u("BeforeChange",function(e,t,i){t!==i&&(t===H?A():i===H&&A(!0))}),u(l+"."+H,function(){A()})},getIframe:function(e,t){var i=e.src,n=h.st.iframe;p.each(n.patterns,function(){return-1<i.indexOf(this.index)?(this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1):void 0});var s={};return n.srcAction&&(s[n.srcAction]=i),h._parseMarkup(t,s,e),h.updateStatus("ready"),t}}});function B(e){var t=h.items.length;return t-1<e?e-t:e<0?t+e:e}function j(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)}p.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=h.st.gallery,e=".mfp-gallery";return h.direction=!0,!(!o||!o.enabled)&&(_+=" mfp-gallery",u(y+e,function(){o.navigateByImgClick&&h.wrap.on("click"+e,".mfp-img",function(){return 1<h.items.length?(h.next(),!1):void 0}),g.on("keydown"+e,function(e){37===e.keyCode?h.prev():39===e.keyCode&&h.next()})}),u("UpdateStatus"+e,function(e,t){t.text&&(t.text=j(t.text,h.currItem.index,h.items.length))}),u(v+e,function(e,t,i,n){var s=h.items.length;i.counter=1<s?j(o.tCounter,n.index,s):""}),u("BuildControls"+e,function(){if(1<h.items.length&&o.arrows&&!h.arrowLeft){var e=o.arrowMarkup,t=h.arrowLeft=p(e.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(b),i=h.arrowRight=p(e.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(b);t.click(function(){h.prev()}),i.click(function(){h.next()}),h.container.append(t.add(i))}}),u(a+e,function(){h._preloadTimeout&&clearTimeout(h._preloadTimeout),h._preloadTimeout=setTimeout(function(){h.preloadNearbyImages(),h._preloadTimeout=null},16)}),void u(l+e,function(){g.off(e),h.wrap.off("click"+e),h.arrowRight=h.arrowLeft=null}))},next:function(){h.direction=!0,h.index=B(h.index+1),h.updateItemHTML()},prev:function(){h.direction=!1,h.index=B(h.index-1),h.updateItemHTML()},goTo:function(e){h.direction=e>=h.index,h.index=e,h.updateItemHTML()},preloadNearbyImages:function(){var e,t=h.st.gallery.preload,i=Math.min(t[0],h.items.length),n=Math.min(t[1],h.items.length);for(e=1;e<=(h.direction?n:i);e++)h._preloadItem(h.index+e);for(e=1;e<=(h.direction?i:n);e++)h._preloadItem(h.index-e)},_preloadItem:function(e){if(e=B(e),!h.items[e].preloaded){var t=h.items[e];t.parsed||(t=h.parseEl(e)),m("LazyLoad",t),"image"===t.type&&(t.img=p('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,m("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var q="retina";p.magnificPopup.registerModule(q,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var i=h.st.retina,n=i.ratio;1<(n=isNaN(n)?n():n)&&(u("ImageHasSize."+q,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse."+q,function(e,t){t.src=i.replaceSrc(t,n)}))}}}}),o()}),function(){"use strict";var p=!1;window.JQClass=function(){},JQClass.classes={},JQClass.extend=function e(t){function i(){!p&&this._init&&this._init.apply(this,arguments)}var s=this.prototype;p=!0;var n=new this;for(var o in p=!1,t)if("function"==typeof t[o]&&"function"==typeof s[o])n[o]=function(i,n){return function(){var e=this._super;this._super=function(e){return s[i].apply(this,e||[])};var t=n.apply(this,arguments);return this._super=e,t}}(o,t[o]);else if("object"==typeof t[o]&&"object"==typeof s[o]&&"defaultOptions"===o){var a,r=s[o],l=t[o],c={};for(a in r)c[a]=r[a];for(a in l)c[a]=l[a];n[o]=c}else n[o]=t[o];return((i.prototype=n).constructor=i).extend=e,i}}(),function($){"use strict";function camelCase(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}JQClass.classes.JQPlugin=JQClass.extend({name:"plugin",defaultOptions:{},regionalOptions:{},deepMerge:!0,_getMarker:function(){return"is-"+this.name},_init:function(){$.extend(this.defaultOptions,this.regionalOptions&&this.regionalOptions[""]||{});var o=camelCase(this.name);$[o]=this,$.fn[o]=function(t){var i=Array.prototype.slice.call(arguments,1),n=this,s=this;return this.each(function(){if("string"==typeof t){if("_"===t[0]||!$[o][t])throw"Unknown method: "+t;var e=$[o][t].apply($[o],[this].concat(i));if(e!==n&&void 0!==e)return s=e,!1}else $[o]._attach(this,t)}),s}},setDefaults:function(e){$.extend(this.defaultOptions,e||{})},_attach:function(e,t){if(!(e=$(e)).hasClass(this._getMarker())){e.addClass(this._getMarker()),t=$.extend(this.deepMerge,{},this.defaultOptions,this._getMetadata(e),t||{});var i=$.extend({name:this.name,elem:e,options:t},this._instSettings(e,t));e.data(this.name,i),this._postAttach(e,i),this.option(e,t)}},_instSettings:function(e,t){return{}},_postAttach:function(e,t){},_getMetadata:function(elem){try{var data=elem.data(this.name.toLowerCase())||"";for(var key in data=data.replace(/(\\?)'/g,function(e,t){return t?"'":'"'}).replace(/([a-zA-Z0-9]+):/g,function(e,t,i){var n=data.substring(0,i).match(/"/g);return n&&n.length%2!=0?t+":":'"'+t+'":'}).replace(/\\:/g,":"),data=$.parseJSON("{"+data+"}"),data)if(data.hasOwnProperty(key)){var value=data[key];"string"==typeof value&&value.match(/^new Date\(([-0-9,\s]*)\)$/)&&(data[key]=eval(value))}return data}catch(e){return{}}},_getInst:function(e){return $(e).data(this.name)||{}},option:function(e,t,i){var n=(e=$(e)).data(this.name),s=t||{};return!t||"string"==typeof t&&void 0===i?(s=(n||{}).options)&&t?s[t]:s:void(e.hasClass(this._getMarker())&&("string"==typeof t&&((s={})[t]=i),this._optionsChanged(e,n,s),$.extend(n.options,s)))},_optionsChanged:function(e,t,i){},destroy:function(e){(e=$(e)).hasClass(this._getMarker())&&(this._preDestroy(e,this._getInst(e)),e.removeData(this.name).removeClass(this._getMarker()))},_preDestroy:function(e,t){}}),$.JQPlugin={createPlugin:function(e,t){"object"==typeof e&&(t=e,e="JQPlugin"),e=camelCase(e);var i=camelCase(t.name);JQClass.classes[i]=JQClass.classes[e].extend(t),new JQClass.classes[i]}}}(jQuery),function(h){"use strict";var e="countdown";h.JQPlugin.createPlugin({name:e,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,padZeroes:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{"":{labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1}},_rtlClass:e+"-rtl",_sectionClass:e+"-section",_amountClass:e+"-amount",_periodClass:e+"-period",_rowClass:e+"-row",_holdingClass:e+"-holding",_showClass:e+"-show",_descrClass:e+"-descr",_timerElems:[],_init:function(){var n=this;this._super(),this._serverSyncs=[];var s="function"==typeof Date.now?Date.now:function(){return(new Date).getTime()},o=window.performance&&"function"==typeof window.performance.now,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,r=0;!a||h.noRequestAnimationFrame?(h.noRequestAnimationFrame=null,h.countdown._timer=setInterval(function(){n._updateElems()},1e3)):(r=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||s(),a(function e(t){var i=t<1e12?o?window.performance.now()+window.performance.timing.navigationStart:s():t||s();1e3<=i-r&&(n._updateElems(),r=i),a(e)}))},UTCDate:function(e,t,i,n,s,o,a,r){"object"==typeof t&&t instanceof Date&&(r=t.getMilliseconds(),a=t.getSeconds(),o=t.getMinutes(),s=t.getHours(),n=t.getDate(),i=t.getMonth(),t=t.getFullYear());var l=new Date;return l.setUTCFullYear(t),l.setUTCDate(1),l.setUTCMonth(i||0),l.setUTCDate(n||1),l.setUTCHours(s||0),l.setUTCMinutes((o||0)-(Math.abs(e)<30?60*e:e)),l.setUTCSeconds(a||0),l.setUTCMilliseconds(r||0),l},periodsToSeconds:function(e){return 31557600*e[0]+2629800*e[1]+604800*e[2]+86400*e[3]+3600*e[4]+60*e[5]+e[6]},resync:function(){var s=this;h("."+this._getMarker()).each(function(){var e=h.data(this,s.name);if(e.options.serverSync){for(var t=null,i=0;i<s._serverSyncs.length;i++)if(s._serverSyncs[i][0]===e.options.serverSync){t=s._serverSyncs[i];break}if(s._eqNull(t[2])){var n=h.isFunction(e.options.serverSync)?e.options.serverSync.apply(this,[]):null;t[2]=(n?(new Date).getTime()-n.getTime():0)-t[1]}e._since&&e._since.setMilliseconds(e._since.getMilliseconds()+t[2]),e._until.setMilliseconds(e._until.getMilliseconds()+t[2])}});for(var e=0;e<s._serverSyncs.length;e++)s._eqNull(s._serverSyncs[e][2])||(s._serverSyncs[e][1]+=s._serverSyncs[e][2],delete s._serverSyncs[e][2])},_instSettings:function(e,t){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(e){this._hasElem(e)||this._timerElems.push(e)},_hasElem:function(e){return-1<h.inArray(e,this._timerElems)},_removeElem:function(t){this._timerElems=h.map(this._timerElems,function(e){return e===t?null:e})},_updateElems:function(){for(var e=this._timerElems.length-1;0<=e;e--)this._updateCountdown(this._timerElems[e])},_optionsChanged:function(e,t,i){i.layout&&(i.layout=i.layout.replace(/&lt;/g,"<").replace(/&gt;/g,">")),this._resetExtraLabels(t.options,i);var n=t.options.timezone!==i.timezone;h.extend(t.options,i),this._adjustSettings(e,t,!this._eqNull(i.until)||!this._eqNull(i.since)||n);var s=new Date;(t._since&&t._since<s||t._until&&t._until>s)&&this._addElem(e[0]),this._updateCountdown(e,t)},_updateCountdown:function(e,t){if(e=e.jquery?e:h(e),t=t||this._getInst(e)){if(e.html(this._generateHTML(t)).toggleClass(this._rtlClass,t.options.isRTL),"pause"!==t._hold&&h.isFunction(t.options.onTick)){var i="lap"!==t._hold?t._periods:this._calculatePeriods(t,t._show,t.options.significant,new Date);1!==t.options.tickInterval&&this.periodsToSeconds(i)%t.options.tickInterval!=0||t.options.onTick.apply(e[0],[i])}if("pause"!==t._hold&&(t._since?t._now.getTime()<t._since.getTime():t._now.getTime()>=t._until.getTime())&&!t._expiring){if(t._expiring=!0,this._hasElem(e[0])||t.options.alwaysExpire){if(this._removeElem(e[0]),h.isFunction(t.options.onExpiry)&&t.options.onExpiry.apply(e[0],[]),t.options.expiryText){var n=t.options.layout;t.options.layout=t.options.expiryText,this._updateCountdown(e[0],t),t.options.layout=n}t.options.expiryUrl&&(window.location=t.options.expiryUrl)}t._expiring=!1}else"pause"===t._hold&&this._removeElem(e[0])}},_resetExtraLabels:function(e,t){var i=null;for(i in t)i.match(/[Ll]abels[02-9]|compactLabels1/)&&(e[i]=t[i]);for(i in e)i.match(/[Ll]abels[02-9]|compactLabels1/)&&void 0===t[i]&&(e[i]=null)},_eqNull:function(e){return null==e},_adjustSettings:function(e,t,i){for(var n=null,s=0;s<this._serverSyncs.length;s++)if(this._serverSyncs[s][0]===t.options.serverSync){n=this._serverSyncs[s][1];break}var o=null,a=null;if(this._eqNull(n)){var r=h.isFunction(t.options.serverSync)?t.options.serverSync.apply(e[0],[]):null;o=new Date,a=r?o.getTime()-r.getTime():0,this._serverSyncs.push([t.options.serverSync,a])}else o=new Date,a=t.options.serverSync?n:0;var l=t.options.timezone;l=this._eqNull(l)?-o.getTimezoneOffset():l,(i||!i&&this._eqNull(t._until)&&this._eqNull(t._since))&&(t._since=t.options.since,this._eqNull(t._since)||(t._since=this.UTCDate(l,this._determineTime(t._since,null)),t._since&&a&&t._since.setMilliseconds(t._since.getMilliseconds()+a)),t._until=this.UTCDate(l,this._determineTime(t.options.until,o)),a&&t._until.setMilliseconds(t._until.getMilliseconds()+a)),t._show=this._determineShow(t)},_preDestroy:function(e,t){this._removeElem(e[0]),e.empty()},pause:function(e){this._hold(e,"pause")},lap:function(e){this._hold(e,"lap")},resume:function(e){this._hold(e,null)},toggle:function(e){this[(h.data(e,this.name)||{})._hold?"resume":"pause"](e)},toggleLap:function(e){this[(h.data(e,this.name)||{})._hold?"resume":"lap"](e)},_hold:function(e,t){var i=h.data(e,this.name);if(i){if("pause"===i._hold&&!t){i._periods=i._savePeriods;var n=i._since?"-":"+";i[i._since?"_since":"_until"]=this._determineTime(n+i._periods[0]+"y"+n+i._periods[1]+"o"+n+i._periods[2]+"w"+n+i._periods[3]+"d"+n+i._periods[4]+"h"+n+i._periods[5]+"m"+n+i._periods[6]+"s"),this._addElem(e)}i._hold=t,i._savePeriods="pause"===t?i._periods:null,h.data(e,this.name,i),this._updateCountdown(e,i)}},getTimes:function(e){var t=h.data(e,this.name);return t?"pause"===t._hold?t._savePeriods:t._hold?this._calculatePeriods(t,t._show,t.options.significant,new Date):t._periods:null},_determineTime:function(e,t){var i,n,p=this,s=this._eqNull(e)?t:"string"==typeof e?function(e){e=e.toLowerCase();for(var t=new Date,i=t.getFullYear(),n=t.getMonth(),s=t.getDate(),o=t.getHours(),a=t.getMinutes(),r=t.getSeconds(),l=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,c=l.exec(e);c;){switch(c[2]||"s"){case"s":r+=parseInt(c[1],10);break;case"m":a+=parseInt(c[1],10);break;case"h":o+=parseInt(c[1],10);break;case"d":s+=parseInt(c[1],10);break;case"w":s+=7*parseInt(c[1],10);break;case"o":n+=parseInt(c[1],10),s=Math.min(s,p._getDaysInMonth(i,n));break;case"y":i+=parseInt(c[1],10),s=Math.min(s,p._getDaysInMonth(i,n))}c=l.exec(e)}return new Date(i,n,s,o,a,r,0)}(e):"number"==typeof e?(i=e,(n=new Date).setTime(n.getTime()+1e3*i),n):e;return s&&s.setMilliseconds(0),s},_getDaysInMonth:function(e,t){return 32-new Date(e,t,32).getDate()},_normalLabels:function(e){return e},_generateHTML:function(i){var n=this;i._periods=i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);var e=!1,t=0,s=i.options.significant,o=h.extend({},i._show),a=null;for(a=0;a<=6;a++)e=e||"?"===i._show[a]&&0<i._periods[a],o[a]="?"!==i._show[a]||e?i._show[a]:null,t+=o[a]?1:0,s-=0<i._periods[a]?1:0;var r=[!1,!1,!1,!1,!1,!1,!1];for(a=6;0<=a;a--)i._show[a]&&(i._periods[a]?r[a]=!0:(r[a]=0<s,s--));function l(e){var t=i.options["compactLabels"+u(i._periods[e])];return o[e]?n._translateDigits(i,i._periods[e])+(t?t[e]:p[e])+" ":""}function c(e){var t=i.options["labels"+u(i._periods[e])];return!i.options.significant&&o[e]||i.options.significant&&r[e]?'<span class="'+n._sectionClass+'"><span class="'+n._amountClass+'">'+n._minDigits(i,i._periods[e],d)+'</span><span class="'+n._periodClass+'">'+(t?t[e]:p[e])+"</span></span>":""}var p=i.options.compact?i.options.compactLabels:i.options.labels,u=i.options.whichLabels||this._normalLabels,d=i.options.padZeroes?2:1;return i.options.layout?this._buildLayout(i,o,i.options.layout,i.options.compact,i.options.significant,r):(i.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(i._hold?" "+this._holdingClass:"")+'">'+l(0)+l(1)+l(2)+l(3)+(o[4]?this._minDigits(i,i._periods[4],2):"")+(o[5]?(o[4]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[5],2):"")+(o[6]?(o[4]||o[5]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[6],2):""):'<span class="'+this._rowClass+" "+this._showClass+(i.options.significant||t)+(i._hold?" "+this._holdingClass:"")+'">'+c(0)+c(1)+c(2)+c(3)+c(4)+c(5)+c(6))+"</span>"+(i.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+i.options.description+"</span>":"")},_buildLayout:function(i,e,t,n,s,o){for(var a=i.options[n?"compactLabels":"labels"],r=i.options.whichLabels||this._normalLabels,l=function(e){return(i.options[(n?"compactLabels":"labels")+r(i._periods[e])]||a)[e]},c=function(e,t){return i.options.digits[Math.floor(e/t)%10]},p={desc:i.options.description,sep:i.options.timeSeparator,yl:l(0),yn:this._minDigits(i,i._periods[0],1),ynn:this._minDigits(i,i._periods[0],2),ynnn:this._minDigits(i,i._periods[0],3),y1:c(i._periods[0],1),y10:c(i._periods[0],10),y100:c(i._periods[0],100),y1000:c(i._periods[0],1e3),ol:l(1),on:this._minDigits(i,i._periods[1],1),onn:this._minDigits(i,i._periods[1],2),onnn:this._minDigits(i,i._periods[1],3),o1:c(i._periods[1],1),o10:c(i._periods[1],10),o100:c(i._periods[1],100),o1000:c(i._periods[1],1e3),wl:l(2),wn:this._minDigits(i,i._periods[2],1),wnn:this._minDigits(i,i._periods[2],2),wnnn:this._minDigits(i,i._periods[2],3),w1:c(i._periods[2],1),w10:c(i._periods[2],10),w100:c(i._periods[2],100),w1000:c(i._periods[2],1e3),dl:l(3),dn:this._minDigits(i,i._periods[3],1),dnn:this._minDigits(i,i._periods[3],2),dnnn:this._minDigits(i,i._periods[3],3),d1:c(i._periods[3],1),d10:c(i._periods[3],10),d100:c(i._periods[3],100),d1000:c(i._periods[3],1e3),hl:l(4),hn:this._minDigits(i,i._periods[4],1),hnn:this._minDigits(i,i._periods[4],2),hnnn:this._minDigits(i,i._periods[4],3),h1:c(i._periods[4],1),h10:c(i._periods[4],10),h100:c(i._periods[4],100),h1000:c(i._periods[4],1e3),ml:l(5),mn:this._minDigits(i,i._periods[5],1),mnn:this._minDigits(i,i._periods[5],2),mnnn:this._minDigits(i,i._periods[5],3),m1:c(i._periods[5],1),m10:c(i._periods[5],10),m100:c(i._periods[5],100),m1000:c(i._periods[5],1e3),sl:l(6),sn:this._minDigits(i,i._periods[6],1),snn:this._minDigits(i,i._periods[6],2),snnn:this._minDigits(i,i._periods[6],3),s1:c(i._periods[6],1),s10:c(i._periods[6],10),s100:c(i._periods[6],100),s1000:c(i._periods[6],1e3)},u=t,d=0;d<=6;d++){var m="yowdhms".charAt(d),f=new RegExp("\\{"+m+"<\\}([\\s\\S]*)\\{"+m+">\\}","g");u=u.replace(f,!s&&e[d]||s&&o[d]?"$1":"")}return h.each(p,function(e,t){var i=new RegExp("\\{"+e+"\\}","g");u=u.replace(i,t)}),u},_minDigits:function(e,t,i){return(t=""+t).length>=i?this._translateDigits(e,t):(t="0000000000"+t,this._translateDigits(e,t.substr(t.length-i)))},_translateDigits:function(t,e){return(""+e).replace(/[0-9]/g,function(e){return t.options.digits[e]})},_determineShow:function(e){var t=e.options.format,i=[];return i[0]=t.match("y")?"?":t.match("Y")?"!":null,i[1]=t.match("o")?"?":t.match("O")?"!":null,i[2]=t.match("w")?"?":t.match("W")?"!":null,i[3]=t.match("d")?"?":t.match("D")?"!":null,i[4]=t.match("h")?"?":t.match("H")?"!":null,i[5]=t.match("m")?"?":t.match("M")?"!":null,i[6]=t.match("s")?"?":t.match("S")?"!":null,i},_calculatePeriods:function(e,i,t,n){e._now=n,e._now.setMilliseconds(0);var s=new Date(e._now.getTime());e._since?n.getTime()<e._since.getTime()?e._now=n=s:n=e._since:(s.setTime(e._until.getTime()),n.getTime()>e._until.getTime()&&(e._now=n=s));var o=[0,0,0,0,0,0,0];if(i[0]||i[1]){var a=this._getDaysInMonth(n.getFullYear(),n.getMonth()),r=this._getDaysInMonth(s.getFullYear(),s.getMonth()),l=s.getDate()===n.getDate()||s.getDate()>=Math.min(a,r)&&n.getDate()>=Math.min(a,r),c=function(e){return 60*(60*e.getHours()+e.getMinutes())+e.getSeconds()},p=Math.max(0,12*(s.getFullYear()-n.getFullYear())+s.getMonth()-n.getMonth()+(s.getDate()<n.getDate()&&!l||l&&c(s)<c(n)?-1:0));o[0]=i[0]?Math.floor(p/12):0,o[1]=i[1]?p-12*o[0]:0;var u=(n=new Date(n.getTime())).getDate()===a,d=this._getDaysInMonth(n.getFullYear()+o[0],n.getMonth()+o[1]);n.getDate()>d&&n.setDate(d),n.setFullYear(n.getFullYear()+o[0]),n.setMonth(n.getMonth()+o[1]),u&&n.setDate(d)}function m(e,t){o[e]=i[e]?Math.floor(f/t):0,f-=o[e]*t}var f=Math.floor((s.getTime()-n.getTime())/1e3),h=null;if(m(2,604800),m(3,86400),m(4,3600),m(5,60),m(6,1),0<f&&!e._since){var g=[1,12,4.3482,7,24,60,60],_=6,v=1;for(h=6;0<=h;h--)i[h]&&(o[_]>=v&&(o[_]=0,f=1),0<f&&(o[h]++,f=0,_=h,v=1)),v*=g[h]}if(t)for(h=0;h<=6;h++)t&&o[h]?t--:t||(o[h]=0);return o}})}(jQuery),function(e){"use strict";e.countdown.regionalOptions.ru={labels:["Лет","Месяцев","Недель","Дней","Часов","Минут","Секунд"],labels1:["Год","Месяц","Неделя","День","Час","Минута","Секунда"],labels2:["Года","Месяца","Недели","Дня","Часа","Минуты","Секунды"],compactLabels:["л","м","н","д"],compactLabels1:["г","м","н","д"],whichLabels:function(e){var t=e%10,i=Math.floor(e%100/10);return 1===e?1:2<=t&&t<=4&&1!==i?2:1==t&&1!==i?1:0},digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1},e.countdown.setDefaults(e.countdown.regionalOptions.ru)}(jQuery);