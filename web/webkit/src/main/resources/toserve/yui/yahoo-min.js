if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={}}YAHOO.namespace=function(){var b=arguments,g=null,e,c,f;for(e=0;e<b.length;e=e+1){f=b[e].split(".");g=YAHOO;for(c=(f[0]=="YAHOO")?1:0;c<f.length;c=c+1){g[f[c]]=g[f[c]]||{};g=g[f[c]]}}return g};YAHOO.log=function(d,a,c){var b=YAHOO.widget.Logger;if(b&&b.log){return b.log(d,a,c)}else{return false}};YAHOO.register=function(a,f,e){var k=YAHOO.env.modules;if(!k[a]){k[a]={versions:[],builds:[]}}var c=k[a],j=e.version,h=e.build,g=YAHOO.env.listeners;c.name=a;c.version=j;c.build=h;c.versions.push(j);c.builds.push(h);c.mainClass=f;for(var d=0;d<g.length;d=d+1){g[d](c)}if(f){f.VERSION=j;f.BUILD=h}else{YAHOO.log("mainClass is undefined for module "+a,"warn")}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(a){return YAHOO.env.modules[a]||null};YAHOO.env.ua=function(){var c={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};var b=navigator.userAgent,a;if((/KHTML/).test(b)){c.webkit=1}a=b.match(/AppleWebKit\/([^\s]*)/);if(a&&a[1]){c.webkit=parseFloat(a[1]);if(/ Mobile\//.test(b)){c.mobile="Apple"}else{a=b.match(/NokiaN[^\/]*/);if(a){c.mobile=a[0]}}a=b.match(/AdobeAIR\/([^\s]*)/);if(a){c.air=a[0]}}if(!c.webkit){a=b.match(/Opera[\s\/]([^\s]*)/);if(a&&a[1]){c.opera=parseFloat(a[1]);a=b.match(/Opera Mini[^;]*/);if(a){c.mobile=a[0]}}else{a=b.match(/MSIE\s([^;]*)/);if(a&&a[1]){c.ie=parseFloat(a[1])}else{a=b.match(/Gecko\/([^\s]*)/);if(a){c.gecko=1;a=b.match(/rv:([^\s\)]*)/);if(a&&a[1]){c.gecko=parseFloat(a[1])}}}}}return c}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var b=YAHOO_config.listener,a=YAHOO.env.listeners,d=true,c;if(b){for(c=0;c<a.length;c=c+1){if(a[c]==b){d=false;break}}if(d){a.push(b)}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var a=YAHOO.lang,c=["toString","valueOf"],b={isArray:function(d){if(d){return a.isNumber(d.length)&&a.isFunction(d.splice)}return false},isBoolean:function(d){return typeof d==="boolean"},isFunction:function(d){return typeof d==="function"},isNull:function(d){return d===null},isNumber:function(d){return typeof d==="number"&&isFinite(d)},isObject:function(d){return(d&&(typeof d==="object"||a.isFunction(d)))||false},isString:function(d){return typeof d==="string"},isUndefined:function(d){return typeof d==="undefined"},_IEEnumFix:(YAHOO.env.ua.ie)?function(g,e){for(var d=0;d<c.length;d=d+1){var j=c[d],h=e[j];if(a.isFunction(h)&&h!=Object.prototype[j]){g[j]=h}}}:function(){},extend:function(g,h,f){if(!h||!g){throw new Error("extend failed, please check that all dependencies are included.")}var e=function(){};e.prototype=h.prototype;g.prototype=new e();g.prototype.constructor=g;g.superclass=h.prototype;if(h.prototype.constructor==Object.prototype.constructor){h.prototype.constructor=h}if(f){for(var d in f){if(a.hasOwnProperty(f,d)){g.prototype[d]=f[d]}}a._IEEnumFix(g.prototype,f)}},augmentObject:function(h,g){if(!g||!h){throw new Error("Absorb failed, verify dependencies.")}var d=arguments,f,j,e=d[2];if(e&&e!==true){for(f=2;f<d.length;f=f+1){h[d[f]]=g[d[f]]}}else{for(j in g){if(e||!(j in h)){h[j]=g[j]}}a._IEEnumFix(h,g)}},augmentProto:function(g,f){if(!f||!g){throw new Error("Augment failed, verify dependencies.")}var d=[g.prototype,f.prototype];for(var e=2;e<arguments.length;e=e+1){d.push(arguments[e])}a.augmentObject.apply(this,d)},dump:function(e,k){var g,j,m=[],n="{...}",f="f(){...}",l=", ",h=" => ";if(!a.isObject(e)){return e+""}else{if(e instanceof Date||("nodeType" in e&&"tagName" in e)){return e}else{if(a.isFunction(e)){return f}}}k=(a.isNumber(k))?k:3;if(a.isArray(e)){m.push("[");for(g=0,j=e.length;g<j;g=g+1){if(a.isObject(e[g])){m.push((k>0)?a.dump(e[g],k-1):n)}else{m.push(e[g])}m.push(l)}if(m.length>1){m.pop()}m.push("]")}else{m.push("{");for(g in e){if(a.hasOwnProperty(e,g)){m.push(g+h);if(a.isObject(e[g])){m.push((k>0)?a.dump(e[g],k-1):n)}else{m.push(e[g])}m.push(l)}}if(m.length>1){m.pop()}m.push("}")}return m.join("")},substitute:function(z,e,q){var m,l,h,u,w,y,t=[],g,n="dump",r=" ",d="{",x="}";for(;;){m=z.lastIndexOf(d);if(m<0){break}l=z.indexOf(x,m);if(m+1>=l){break}g=z.substring(m+1,l);u=g;y=null;h=u.indexOf(r);if(h>-1){y=u.substring(h+1);u=u.substring(0,h)}w=e[u];if(q){w=q(u,w,y)}if(a.isObject(w)){if(a.isArray(w)){w=a.dump(w,parseInt(y,10))}else{y=y||"";var p=y.indexOf(n);if(p>-1){y=y.substring(4)}if(w.toString===Object.prototype.toString||p>-1){w=a.dump(w,parseInt(y,10))}else{w=w.toString()}}}else{if(!a.isString(w)&&!a.isNumber(w)){w="~-"+t.length+"-~";t[t.length]=g}}z=z.substring(0,m)+w+z.substring(l+1)}for(m=t.length-1;m>=0;m=m-1){z=z.replace(new RegExp("~-"+m+"-~"),"{"+t[m]+"}","g")}return z},trim:function(d){try{return d.replace(/^\s+|\s+$/g,"")}catch(f){return d}},merge:function(){var g={},e=arguments;for(var f=0,d=e.length;f<d;f=f+1){a.augmentObject(g,e[f],true)}return g},later:function(n,g,p,i,j){n=n||0;g=g||{};var h=p,l=i,k,e;if(a.isString(p)){h=g[p]}if(!h){throw new TypeError("method undefined")}if(!a.isArray(l)){l=[i]}k=function(){h.apply(g,l)};e=(j)?setInterval(k,n):setTimeout(k,n);return{interval:j,cancel:function(){if(this.interval){clearInterval(e)}else{clearTimeout(e)}}}},isValue:function(d){return(a.isObject(d)||a.isString(d)||a.isNumber(d)||a.isBoolean(d))}};a.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(d,e){return d&&d.hasOwnProperty(e)}:function(d,e){return !a.isUndefined(d[e])&&d.constructor.prototype[e]!==d[e]};b.augmentObject(a,b,true);YAHOO.util.Lang=a;a.augment=a.augmentProto;YAHOO.augment=a.augmentProto;YAHOO.extend=a.extend})();YAHOO.register("yahoo",YAHOO,{version:"2.6.0",build:"1321"});