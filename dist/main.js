!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=9)}([function(t,e,n){function r(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}var a=n(5);function i(){return(i=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=".concat(a,"&$limit=5000"));case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=".concat(a,"&$limit=5000"));case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=".concat(a,"&$limit=5000"));case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.exports={pfizerAPI:function(){return i.apply(this,arguments)},modernaAPI:function(){return c.apply(this,arguments)},janssenAPI:function(){return s.apply(this,arguments)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"formatData",(function(){return i}));var r=n(6).stateInitials,o=n(7).calculateFill,a=n(8).addBigCitiesToStates,i=function(t){var e={};return t.forEach((function(t){var n;n=r[t.jurisdiction]?r[t.jurisdiction]:t.jurisdiction,63!==Object.values(e).length?(e[n]={_1st_dose_allocations:Number(t._1st_dose_allocations),_2nd_dose_allocations:Number(t._2nd_dose_allocations)||0,week_of_allocations:t.week_of_allocations,jurisdiction:t.jurisdiction},e[n].fillKey=o(e[n]._1st_dose_allocations)):(e[n]._1st_dose_allocations+=Number(t._1st_dose_allocations),e[n]._2nd_dose_allocations+=Number(t._2nd_dose_allocations||0),e[n].fillKey=o(e[n]._1st_dose_allocations))})),a(e),e.week=t[0].week_of_allocations,e.allData=!1,t.length>=190&&(e.allData=!0),e}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function f(){}function d(){}function h(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&n.call(m,o)&&(p=m);var y=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new _(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e),n.d(e,"formatNumber",(function(){return r}));var r=function(t){var e=t,n=Math.abs(e).toFixed(0),r=n.toString();return(r=n.toString().split("."))[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"".concat(r.join("."))}},function(t,e,n){"use strict";n.r(e),n.d(e,"colors",(function(){return r}));var r={6e6:"#0b1d78",3e6:"#0045a5",1e6:"#0069c0",5e5:"#008ac5",1e5:"#00a9b5",5e4:"#01c698",25e3:"#18c7be",1e4:"#5cc4d3",5e3:"#8fc0d5",1:"#b2beca",defaultFill:"gray"}},function(t,e){t.exports="RpbrJLtrCYzo88hfJBLeg2fyB"},function(t,e,n){"use strict";n.r(e),n.d(e,"stateInitials",(function(){return r}));var r={Alabama:"AL",Alaska:"AK","American Samoa":"AS",Arizona:"AZ",Arkansas:"AR",California:"CA",Colorado:"CO",Connecticut:"CT",Delaware:"DE","District of Columbia":"DC","Federated States Of Micronesia":"FM",Florida:"FL",Georgia:"GA",Guam:"GU",Hawaii:"HI",Idaho:"ID",Illinois:"IL",Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Maine:"ME","Marshall Islands":"MH",Maryland:"MD",Massachusetts:"MA",Michigan:"MI",Minnesota:"MN",Mississippi:"MS",Missouri:"MO",Montana:"MT",Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Palau:"PW",Pennsylvania:"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",Vermont:"VT","Virgin Islands":"VI",Virginia:"VA",Washington:"WA","West Virginia":"WV",Wisconsin:"WI",Wyoming:"WY"}},function(t,e,n){"use strict";n.r(e),n.d(e,"calculateFill",(function(){return r}));var r=function(t){return t>=6e6?"6000000":t<6e6&&t>=3e6?"3000000":t<3e6&&t>=1e6?"1000000":t<1e6&&t>=5e5?"500000":t<5e5&&t>=1e5?"100000":t<1e5&&t>=5e4?"50000":t<5e4&&t>=25e3?"25000":t<25e3&&t>=1e4?"10000":t<1e4&&t>=5e3?"5000":t<5e3&&t>=1?"1":"defaultFill"}},function(t,e,n){"use strict";n.r(e),n.d(e,"addBigCitiesToStates",(function(){return r}));var r=function(t){var e=t.Philadelphia,n=t.PA;n._1st_dose_allocations+=e._1st_dose_allocations,n._2nd_dose_allocations+=e._2nd_dose_allocations;var r=t["New York City"],o=t.NY;o._1st_dose_allocations+=r._1st_dose_allocations,o._2nd_dose_allocations+=r._2nd_dose_allocations;var a=t.Chicago,i=t.IL;i._1st_dose_allocations+=a._1st_dose_allocations,i._2nd_dose_allocations+=a._2nd_dose_allocations}},function(t,e,n){"use strict";n.r(e);n(2);var r=n(3).formatNumber,o=n(4).colors,a=n(0),i=n(1),c=n(1).formatData,s=function(t,e){var n=[],r=0;e>0&&(r=63*e);var o=t.slice(r,r+1)[0].week_of_allocations;return t.forEach((function(t){t.week_of_allocations===o&&n.push(t)})),c(n)};function u(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))}}function f(t){var e=document.querySelector(".usa-map"),n=document.querySelector("#map"),a=document.createElement("div");a.id="map",a.className="map",n.parentNode.removeChild(n),e.appendChild(a),function(t){var e=t,n=document.getElementById("week"),a=new Date(t.week).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"});t.allData?n.innerText="Uptil week of ".concat(a):n.innerText="Week of ".concat(a);var i=new Datamap({scope:"usa",element:document.getElementById("map"),responsive:!0,geographyConfig:{highlightBorderColor:"rgb(59, 177, 255)",popupTemplate:function(t){return['<div class="hoverinfo"><strong>','<p class="state-name"><strong>',t.properties.name,"</strong></p>",'<p class="green-text"><strong>'," 1st Dose "+r(e[t.id]._1st_dose_allocations),"</strong></p>",'<p class="blue-text"><strong>'," 2nd Dose "+r(e[t.id]._2nd_dose_allocations),"</strong></div>"].join("")},highlightBorderWidth:2},fills:o,data:e});window.addEventListener("resize",(function(t){i.resize()})),i.labels({labelColor:"white",fontFamily:"Roboto",fontSize:14})}(t)}function d(t,e){return h.apply(this,arguments)}function h(){return(h=l(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.prev=1,t.next=4,e();case 4:r=t.sent,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log("Error"),console.log(t.t0);case 11:f(n?s(r,n):Object(i.formatData)(r));case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=l(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r=[],o=[],t.prev=3,t.next=6,Object(a.pfizerAPI)();case 6:return n=t.sent,t.next=9,Object(a.modernaAPI)();case 9:return r=t.sent,t.next=12,Object(a.janssenAPI)();case 12:o=t.sent,t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),console.log("Error"),console.log(t.t0);case 19:c=n.concat(r).concat(o),f(e?s(c,e):Object(i.formatData)(c));case 22:case"end":return t.stop()}}),t,null,[[3,15]])})))).apply(this,arguments)}function m(t){t.classList.add("active")}function y(t,e,n,r){t.classList[1]?t.classList.remove("active"):e.classList[1]?e.classList.remove("active"):n.classList[1]?n.classList.remove("active"):r.classList[1]&&r.classList.remove("active")}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".modal-map-button"),e=document.querySelector(".all-button"),n=document.querySelector("#pfizer"),r=document.querySelector("#moderna"),o=document.querySelector("#janssen"),i=document.querySelector("#scroller");t.addEventListener("click",(function(){document.querySelector(".modal").classList.add("remove-modal")})),e.addEventListener("click",(function(){y(e,n,r,o),m(e),i.value=0,i.max=20,p()})),n.addEventListener("click",(function(){y(e,n,r,o),m(n),i.value=0,i.max=20,d(a.pfizerAPI)})),r.addEventListener("click",(function(){y(e,n,r,o),m(r),i.value=0,i.max=18,d(a.modernaAPI)})),o.addEventListener("click",(function(){y(e,n,r,o),m(o),i.value=0,i.max=6,d(a.janssenAPI)})),i.addEventListener("change",(function(){e.classList[1]?p(i.value):d(function(t,e,n,r,o,a){if(t.classList[1])return e;if(n.classList[1])return r;if(o.classList[1])return a}(n,a.pfizerAPI,r,a.modernaAPI,o,a.janssenAPI),i.value)})),i.value=0,i.max=20,p()}))}]);
//# sourceMappingURL=main.js.map