webpackJsonp([0x67ef26645b2a,60335399758886],{97:function(e,t){e.exports={layoutContext:{}}},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(3),i=r(o),l=n(203),u=r(l),c=n(97),s=r(c);t.default=function(e){return i.default.createElement(u.default,a({},e,s.default))},e.exports=t.default},98:function(e,t){e.exports={title:"Calpa",subtitle:null,author:"Calpa",language:null,timezone:null,friends:[{title:"娜酱骑士团",href:"http://blog.shanamaid.top/"},{title:"Clarence Blog",href:"https://clarencec.github.io/"},{title:"F2EX",href:"http://f2ex.cn/"},{title:"晚晴幽草轩",href:"https://jeffjade.com/"}],meta:{description:"Calpa的技術博客，開發日常，以及遇到的坑",keyword:"calpa, blog, JavaScript",theme_color:"#384f7c",favicon:"/img/icon.png",google_site_verification:"riZBcestky7i9xY__A-5J-2EE65T75X1u-zgbss37Io"},SEOTitle:"Calpa's blog","header-img":"/img/blue-blur-background.jpg",email:"calpaliu@gmail.com",hosted:"Github Pages",License:"by",url:"https://calpa.me",root:"/",permalink:":year/:month/:day/:title/",permalink_defaults:null,weibo_username:null,zhihu_username:"piao-xue-wu-ying",github_username:"calpa",twitter_username:null,facebook_username:null,linkedin_username:null,anchorjs:!0,disqus_username:null,duoshuo_username:null,duoshuo_share:!0,ba_track_id:null,ga_track_id:"UA-84737574-3",ga_domain:"auto","sidebar-about-description":{poetry:["夢裡不覺秋已深","餘情豈是為他人"]},"sidebar-avatar":"https://calpa.me/img/profile.png","show-latest-post":!0,"show-latest-post-size":5,"show-all-post":!0,"featured-tags":!0,"featured-condition-size":1,source_dir:"source",public_dir:"public",tag_dir:"Tags",archive_dir:"archives",category_dir:"categories",code_dir:"downloads/code",i18n_dir:":lang",skip_render:["README.md","OneSingal*.js"],new_post_name:":title.md",default_layout:"post",titlecase:!1,external_link:!0,filename_case:0,render_drafts:!1,post_asset_folder:!0,relative_link:!1,future:!0,highlight:{enable:!0,line_number:!0,auto_detect:!1,tab_replace:null},default_category:"uncategorized",category_map:null,tag_map:null,date_format:"YYYY-MM-DD",time_format:"HH:mm:ss",per_page:8,pagination_dir:"page",markdown:{plugins:["markdown-it-abbr","markdown-it-footnote","markdown-it-ins","markdown-it-sub","markdown-it-sup","markdown-it-emoji"]},deploy:{type:"git",repo:"https://github.com/calpa/calpa.github.io.git",branch:"master"},"cdn-url":"https://i.imgur.com/","clip-content":"","clip-avatar":"","clip-home-post-bg":"","post-default-img":"/img/post-default.jpg","post-default-img-mobile":"/img/post-default.jpg",swiftype_key:null,word_count:!0,nofollow:{enable:!0,exclude:["calpa.me","calpa.github.io"]},pace:!0,add_this:{home:!1},fancybox:!0,hotjar:{id:576135,version:5},gitalk:!0,node_sass:{debug:!1,outputStyle:"nested",precision:5,sourceComments:!1},browsersync:{logLevel:"warn",ghostMode:{scroll:!0}},algolia:{applicationID:"ABS4QV1E9V",apiKey:"d9adae0b31ed52fc0f6c4c75aad428bf",indexName:"blog"},offline:{maximumFileSizeToCacheInBytes:5242880,staticFileGlobs:["public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}"],stripPrefix:"public",verbose:!0,runtimeCaching:[{urlPattern:"/*",handler:"cacheFirst",options:{origin:"cdnjs.cloudflare.com"}},{urlPattern:"/*",handler:"cacheFirst",options:{origin:"cdn.jsdelivr.net"}},{urlPattern:"/*",handler:"cacheFirst",options:{origin:"i.imgur.com"}}]},metadata:{"header-img":"Vb56RuU.jpg","header-size":"contain;","header-bg-color":"00d8e4",translator:"Calpa",author:null,"background-position-y":"50%",theme:"white",magic:!1},post:{tableOfContents:!1}}},89:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),o=f.length-1;o>=0;o--)if(f[o]!=d[o])return!1;for(o=f.length-1;o>=0;o--)if(s=f[o],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,l=n(91),u=n(90),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},90:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},91:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},93:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},116:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),f=r(s),d=n(8),p=r(d),T=n(126),m=r(T),E=n(89),h=r(E),A=n(117),b=n(48),y=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=i,t.titleAttributes=u({},o),t));case b.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},o)});case b.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},o)})}return u({},a,(n={},n[r.type]=u({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,l=a(o,["children"]),u=(0,A.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,i),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=u({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},g=(0,m.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(_),S=y(g);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},48:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},117:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(3),l=r(i),u=n(7),c=r(u),s=n(48),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],i=o.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();t.indexOf(u)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],u=(0,c.default)({},r[l],a[l]);r[l]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:m([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),y=function(e){return clearTimeout(e)},_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,O=function(e){v&&g(v),e.defer?v=_(function(){P(e,function(){v=null})}):(P(e),v=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;w(s.TAG_NAMES.BODY,r),w(s.TAG_NAMES.HTML,a),R(d,p);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,o),metaTags:C(s.TAG_NAMES.META,i),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,l),scriptTags:C(s.TAG_NAMES.SCRIPT,c),styleTags:C(s.TAG_NAMES.STYLE,f)},m={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),u(e,m,E)},M=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),w(s.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var f=o.indexOf(u);f!==-1&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return i=t,n.isEqualNode(e)})?a.splice(i,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=N(n),o=M(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+f(o,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,a=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),o=j(n,a);return[l.default.createElement(s.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),l.default.createElement(e,a)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,a,r),link:x(s.TAG_NAMES.LINK,o,r),meta:x(s.TAG_NAMES.META,i,r),noscript:x(s.TAG_NAMES.NOSCRIPT,l,r),script:x(s.TAG_NAMES.SCRIPT,u,r),style:x(s.TAG_NAMES.STYLE,c,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=A,t.requestAnimationFrame=_,t.warn=S}).call(t,function(){return this}())},126:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(3),u=r(l),c=n(93),s=r(c),f=n(127),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(c,this.props)},t}(l.Component);return m.displayName="SideEffect("+r(c)+")",m.canUseDOM=s.default.canUseDOM,m}}},127:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var s=e[c],f=t[c];if(a=n?n.call(r,s,f,c):void 0,a===!1||void 0===a&&s!==f)return!1}return!0}},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),o=r(a),i=n(155),l=r(i),u=function(e){e.preventDefault();var t=document.getElementById("nav-search").value;(0,i.navigateTo)("search?"+t)},c=function(){return o.default.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light sticky-top mb-3"},o.default.createElement(l.default,{className:"navbar-brand",to:"/"},"Calpa's Blog"),o.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.default.createElement("span",{className:"navbar-toggler-icon"})),o.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.default.createElement("ul",{className:"navbar-nav mr-auto"},o.default.createElement("li",{className:"nav-item active"},o.default.createElement(l.default,{className:"nav-link",to:"/"},"Home ",o.default.createElement("span",{className:"sr-only"},"(current)")))),o.default.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){return u(e)}},o.default.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",id:"nav-search"}),o.default.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))};t.default=c,e.exports=t.default},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),o=r(a),i=n(116),l=n(98),u=r(l),c=function(){return o.default.createElement(i.Helmet,{defaultTitle:"Calpa's Blog",titleTemplate:"%s | Calpa's Blog"},o.default.createElement("meta",{charSet:"utf-8"}),o.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),o.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.default.createElement("meta",{name:"description",content:u.default.meta.description}),o.default.createElement("meta",{name:"keyword",content:u.default.meta.keyword}),o.default.createElement("meta",{name:"theme-color",content:u.default.meta.theme_color}),o.default.createElement("meta",{name:"msapplication-navbutton-color",content:u.default.meta.theme_color}),o.default.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),o.default.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:u.default.meta.theme_color}),o.default.createElement("link",{rel:"shortcut icon",href:u.default.favicon||"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-128.png"}),o.default.createElement("link",{rel:"alternate",type:"application/atom+xml",title:u.default.title,href:"/atom.xml"}),o.default.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),o.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),o.default.createElement("meta",{name:"google-site-verification",content:u.default.meta.google_site_verification}),o.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"}))};t.default=c,e.exports=t.default},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(3),o=r(a),i=n(8),l=r(i),u=n(201),c=r(u),s=n(202),f=r(s);n(436);var d=function(e){var t=e.children;return o.default.createElement("div",null,o.default.createElement(f.default,null),o.default.createElement(c.default,null),o.default.createElement("div",{className:"container"},t()))};d.propTypes={children:l.default.func},t.default=d,e.exports=t.default},436:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-473b17cee440dee84bbf.js.map