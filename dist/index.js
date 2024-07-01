"use strict";var o=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var p=o(function(A,m){
function R(a,n,c,f){var d,i,v,u,s,e,r,t;if(a<=0)return NaN;if(a===1||f===0)return e=c[0],e===e&&a-n>0?0:NaN;for(f<0?u=(1-a)*f:u=0,v=0,i=0,r=0,t=0;t<a;t++)e=c[u],e===e&&(d=e-i,r+=1,i+=d/r,v+=d*(e-i)),u+=f;return s=r-n,s<=0?NaN:v/s}m.exports=R
});var w=o(function(B,N){
function _(a,n,c,f,d){var i,v,u,s,e,r,t,q;if(a<=0)return NaN;if(a===1||f===0)return r=c[d],r===r&&a-n>0?0:NaN;for(s=d,u=0,v=0,t=0,q=0;q<a;q++)r=c[s],r===r&&(i=r-v,t+=1,v+=i/t,u+=i*(r-v)),s+=f;return e=t-n,e<=0?NaN:u/e}N.exports=_
});var j=o(function(C,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),O=w();E(x,"ndarray",O);y.exports=x
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=j(),l,M=g(b(__dirname,"./native.js"));h(M)?l=k:l=M;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
