"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var o=f(function(C,m){
function _(r,a,n,i,y){var u,v,s,d,q,e,t,c;if(r<=0)return NaN;if(r===1||i===0)return e=n[y],e===e&&r-a>0?0:NaN;for(d=y,s=0,v=0,t=0,c=0;c<r;c++)e=n[d],e===e&&(u=e-v,t+=1,v+=u/t,s+=u*(e-v)),d+=i;return q=t-a,q<=0?NaN:s/q}m.exports=_
});var x=f(function(D,w){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(r,a,n,i){return M(r,a,n,i,E(r,i))}w.exports=O
});var N=f(function(F,l){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),g=o();b(j,"ndarray",g);l.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=N(),p,R=k(h(__dirname,"./native.js"));z(R)?p=A:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
