// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function c(e,r,t,n){var o,a,i,l,u,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=t[0])==f&&e-r>0?0:NaN;for(l=n<0?(1-e)*n:0,i=0,a=0,c=0,_=0;_<e;_++)(f=t[l])==f&&(i+=(o=f-a)*(f-(a+=o/(c+=1)))),l+=n;return(u=c-r)<=0?NaN:i/u}function _(e,r,t,n,o){var a,i,l,u,f,c,_,p;if(e<=0)return NaN;if(1===e||0===n)return(c=t[o])==c&&e-r>0?0:NaN;for(u=o,l=0,i=0,_=0,p=0;p<e;p++)(c=t[u])==c&&(l+=(a=c-i)*(c-(i+=a/(_+=1)))),u+=n;return(f=_-r)<=0?NaN:l/f}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dnanvariancewd={});
//# sourceMappingURL=index.js.map
