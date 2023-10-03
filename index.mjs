// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-entropy@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-kurtosis@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mode@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-quantile@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-skewness@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-stdev@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-variance@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-cdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-logcdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-logpdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-mgf@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gamma-pdf@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function v(){var s,e;if(!(this instanceof v))return 0===arguments.length?new v:new v(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(c("10v7d,HT",s));if(!i(e))throw new TypeError(c("10v8q,HC",e))}else s=1,e=1;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(c("10v8k,HE",t));s=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(c("10v8k,HE",t));e=t}}),this}e(v.prototype,"entropy",(function(){return r(this.alpha,this.beta)})),e(v.prototype,"kurtosis",(function(){return n(this.alpha,this.beta)})),e(v.prototype,"mean",(function(){return a(this.alpha,this.beta)})),e(v.prototype,"mode",(function(){return o(this.alpha,this.beta)})),e(v.prototype,"skewness",(function(){return d(this.alpha,this.beta)})),e(v.prototype,"stdev",(function(){return p(this.alpha,this.beta)})),e(v.prototype,"variance",(function(){return h(this.alpha,this.beta)})),s(v.prototype,"cdf",(function(t){return l(t,this.alpha,this.beta)})),s(v.prototype,"logcdf",(function(t){return f(t,this.alpha,this.beta)})),s(v.prototype,"logpdf",(function(t){return j(t,this.alpha,this.beta)})),s(v.prototype,"mgf",(function(t){return b(t,this.alpha,this.beta)})),s(v.prototype,"pdf",(function(t){return u(t,this.alpha,this.beta)})),s(v.prototype,"quantile",(function(t){return m(t,this.alpha,this.beta)}));export{v as default};
//# sourceMappingURL=index.mjs.map
