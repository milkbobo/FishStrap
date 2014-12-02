/*! Sea.js 2.3.0 | seajs.org/LICENSE.md */
!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return z++}function e(a){return a.match(C)[0]}function f(a){for(a=a.replace(D,"/"),a=a.replace(F,"$1/");a.match(E);)a=a.replace(E,"/");return a}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||"/"===c?a:a+".js"}function h(a){var b=u.alias;return b&&w(b[a])?b[a]:a}function i(a){var b=u.paths,c;return b&&(c=a.match(G))&&w(b[c[1]])&&(a=b[c[1]]+c[2]),a}function j(a){var b=u.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(H,function(a,c){return w(b[c])?b[c]:a})),a}function k(a){var b=u.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=y(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(I.test(a))c=a;else if("."===d)c=f((b?e(b):u.cwd)+a);else if("/"===d){var g=u.cwd.match(J);c=g?g[0]+a.substring(1):a}else c=u.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=K.createElement("script");if(c){var e=y(c)?c(a):c;e&&(d.charset=e)}p(d,b,a),d.async=!0,d.src=a,R=d,Q?P.insertBefore(d,Q):P.appendChild(d),R=null}function p(a,b,c){function d(){a.onload=a.onerror=a.onreadystatechange=null,u.debug||P.removeChild(a),a=null,b()}var e="onload"in a;e?(a.onload=d,a.onerror=function(){B("error",{uri:c,node:a}),d()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&d()}}function q(){if(R)return R;if(S&&"interactive"===S.readyState)return S;for(var a=P.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return S=c}}function r(a){var b=[];return a.replace(U,"").replace(T,function(a,c,d){d&&b.push(d)}),b}function s(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var t=a.seajs={version:"2.3.0"},u=t.data={},v=c("Object"),w=c("String"),x=Array.isArray||c("Array"),y=c("Function"),z=0,A=u.events={};t.on=function(a,b){var c=A[a]||(A[a]=[]);return c.push(b),t},t.off=function(a,b){if(!a&&!b)return A=u.events={},t;var c=A[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete A[a];return t};var B=t.emit=function(a,b){var c=A[a],d;if(c){c=c.slice();for(var e=0,f=c.length;f>e;e++)c[e](b)}return t},C=/[^?#]*\//,D=/\/\.\//g,E=/\/[^/]+\/\.\.\//,F=/([^:/])\/+\//g,G=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,I=/^\/\/.|:\//,J=/^.*?\/\/.*?\//,K=document,L=location.href&&0!==location.href.indexOf("about:")?e(location.href):"",M=K.scripts,N=K.getElementById("seajsnode")||M[M.length-1],O=e(n(N)||L);t.resolve=m;var P=K.head||K.getElementsByTagName("head")[0]||K.documentElement,Q=P.getElementsByTagName("base")[0],R,S;t.request=o;var T=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,U=/\\\\/g,V=t.cache={},W,X={},Y={},Z={},$=s.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};s.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=s.resolve(b[d],a.uri);return c},s.prototype.load=function(){var a=this;if(!(a.status>=$.LOADING)){a.status=$.LOADING;var c=a.resolve();B("load",c);for(var d=a._remain=c.length,e,f=0;d>f;f++)e=s.get(c[f]),e.status<$.LOADED?e._waitings[a.uri]=(e._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),b;var g={};for(f=0;d>f;f++)e=V[c[f]],e.status<$.FETCHING?e.fetch(g):e.status===$.SAVED&&e.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},s.prototype.onload=function(){var a=this;a.status=$.LOADED,a.callback&&a.callback();var b=a._waitings,c,d;for(c in b)b.hasOwnProperty(c)&&(d=V[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},s.prototype.fetch=function(a){function c(){t.request(g.requestUri,g.onRequest,g.charset)}function d(){delete X[h],Y[h]=!0,W&&(s.save(f,W),W=null);var a,b=Z[h];for(delete Z[h];a=b.shift();)a.load()}var e=this,f=e.uri;e.status=$.FETCHING;var g={uri:f};B("fetch",g);var h=g.requestUri||f;return!h||Y[h]?(e.load(),b):X[h]?(Z[h].push(e),b):(X[h]=!0,Z[h]=[e],B("request",g={uri:f,requestUri:h,onRequest:d,charset:u.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},s.prototype.exec=function(){function a(b){return s.get(a.resolve(b)).exec()}var c=this;if(c.status>=$.EXECUTING)return c.exports;c.status=$.EXECUTING;var e=c.uri;a.resolve=function(a){return s.resolve(a,e)},a.async=function(b,c){return s.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=y(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=$.EXECUTED,B("exec",c),g},s.resolve=function(a,b){var c={id:a,refUri:b};return B("resolve",c),c.uri||t.resolve(c.id,b)},s.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,x(a)?(c=a,a=b):c=b),!x(c)&&y(d)&&(c=r(""+d));var f={id:a,uri:s.resolve(a),deps:c,factory:d};if(!f.uri&&K.attachEvent){var g=q();g&&(f.uri=g.src)}B("define",f),f.uri?s.save(f.uri,f):W=f},s.save=function(a,b){var c=s.get(a);c.status<$.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=$.SAVED,B("save",c))},s.get=function(a,b){return V[a]||(V[a]=new s(a,b))},s.use=function(b,c,d){var e=s.get(d,x(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=V[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.use=function(a,b){return s.use(a,b,u.cwd+"_use_"+d()),t},s.define.cmd={},a.define=s.define,t.Module=s,u.fetchedList=Y,u.cid=d,t.require=function(a){var b=s.get(s.resolve(a));return b.status<$.EXECUTING&&(b.onload(),b.exec()),b.exports},u.base=O,u.dir=O,u.cwd=L,u.charset="utf-8",t.config=function(a){for(var b in a){var c=a[b],d=u[b];if(d&&v(d))for(var e in c)d[e]=c[e];else x(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),u[b]=c}return B("config",a),t}}}(this);
/*seajs-css配置*/
!function(){function a(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function b(a){return"[object Function]"=={}.toString.call(a)}function c(a,c,e){var f=u.test(a),g=r.createElement(f?"link":"script");if(e){var h=b(e)?e(a):e;h&&(g.charset=h)}d(g,c,f,a),f?(g.rel="stylesheet",g.href=a):(g.async=!0,g.src=a),p=g,t?s.insertBefore(g,t):s.appendChild(g),p=null}function d(a,b,c,d){function f(){a.onload=a.onerror=a.onreadystatechange=null,c||seajs.data.debug||s.removeChild(a),a=null,b()}var g="onload"in a;return!c||!v&&g?(g?(a.onload=f,a.onerror=function(){seajs.emit("error",{uri:d,node:a}),f()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&f()},void 0):(setTimeout(function(){e(a,b)},1),void 0)}function e(a,b){var c,d=a.sheet;if(v)d&&(c=!0);else if(d)try{d.cssRules&&(c=!0)}catch(f){"NS_ERROR_DOM_SECURITY_ERR"===f.name&&(c=!0)}setTimeout(function(){c?b():e(a,b)},20)}function f(a){return a.match(x)[0]}function g(a){for(a=a.replace(y,"/"),a=a.replace(A,"$1/");a.match(z);)a=a.replace(z,"/");return a}function h(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function i(a){var b=w.alias;return b&&q(b[a])?b[a]:a}function j(a){var b,c=w.paths;return c&&(b=a.match(B))&&q(c[b[1]])&&(a=c[b[1]]+b[2]),a}function k(a){var b=w.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(C,function(a,c){return q(b[c])?b[c]:a})),a}function l(a){var c=w.map,d=a;if(c)for(var e=0,f=c.length;f>e;e++){var g=c[e];if(d=b(g)?g(a)||a:a.replace(g[0],g[1]),d!==a)break}return d}function m(a,b){var c,d=a.charAt(0);if(D.test(a))c=a;else if("."===d)c=g((b?f(b):w.cwd)+a);else if("/"===d){var e=w.cwd.match(E);c=e?e[0]+a.substring(1):a}else c=w.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function n(a,b){if(!a)return"";a=i(a),a=j(a),a=k(a),a=h(a);var c=m(a,b);return c=l(c)}function o(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}var p,q=a("String"),r=document,s=r.head||r.getElementsByTagName("head")[0]||r.documentElement,t=s.getElementsByTagName("base")[0],u=/\.css(?:\?|$)/i,v=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i,"$1")<536;seajs.request=c;var w=seajs.data,x=/[^?#]*\//,y=/\/\.\//g,z=/\/[^/]+\/\.\.\//,A=/([^:/])\/+\//g,B=/^([^/:]+)(\/.+)$/,C=/{([^{]+)}/g,D=/^\/\/.|:\//,E=/^.*?\/\/.*?\//,r=document,F=location.href&&0!==location.href.indexOf("about:")?f(location.href):"",G=r.scripts,H=r.getElementById("seajsnode")||G[G.length-1];f(o(H)||F),seajs.resolve=n,define("seajs/seajs-css/1.0.4/seajs-css",[],{})}();
/*seajs配置*/
var fishstrap = {};
(function(){
	seajs.config({
		charset: 'utf-8',
		timeout: 20000
	});
		
	var scripts = document.getElementsByTagName("script"); 
	var currentFileName = scripts[scripts.length - 1].getAttribute("src");
	var currentHost = currentFileName.match(/http:\/\/[^\/]*\/[^\/]*/g);
	
	function addScript(script){
		document.write('<script type="text/javascript" src="'+script+'"></script>');
	}
	function addStyleSheet(style){
		document.write('<link href="'+style+'" rel="stylesheet" type="text/css" />');
	}
	fishstrap.use = function(a,b){
		addScript('http://libs.baidu.com/jquery/1.11.1/jquery.min.js');
		seajs.use(a,b);
	}
})();