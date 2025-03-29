// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s){var d,i,a,o,f,m,u,l;if(r<=0)return NaN;if(1===r||0===n)return(m=t[s])==m&&r-e>0?0:NaN;for(o=s,a=0,i=0,u=0,l=0;l<r;l++)(m=t[o])==m&&(a+=(d=m-i)*(m-(i+=d/(u+=1)))),o+=n;return(f=u-e)<=0?NaN:a/f}function n(r,n,s,d){return t(r,n,s,d,e(r,d))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
