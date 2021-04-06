/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/util */ "./src/js/util.js");
/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_util__WEBPACK_IMPORTED_MODULE_1__);

 // import "./js/map";

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// export const election = new Datamap({
//   scope: "usa",
//   element: document.getElementById("map"),
//   geographyConfig: {
//     highlightBorderColor: "#bada55",
//     popupTemplate: function (geography, data) {
//       return `<div class="hoverinfo">' + geography.properties.name + `;
//       ElectoralVotes: " +  data.electoralVotes + ";
//     },
//     highlightBorderWidth: 3,
//   },
//   fills: {
//     Republican: "#CC4731",
//     Democrat: "#306596",
//     "Heavy Democrat": "#667FAF",
//     "Light Democrat": "#A9C0DE",
//     "Heavy Republican": "#CA5E5B",
//     "Light Republican": "#EAA9A8",
//     defaultFill: "#EDDC4E",
//   },
//   data: {
//     AZ: {
//       fillKey: "Republican",
//       electoralVotes: 5,
//     },
//     CO: {
//       fillKey: "Light Democrat",
//       electoralVotes: 5,
//     },
//     DE: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     FL: {
//       fillKey: "UNDECIDED",
//       electoralVotes: 29,
//     },
//     GA: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     HI: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     ID: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     IL: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     IN: {
//       fillKey: "Republican",
//       electoralVotes: 11,
//     },
//     IA: {
//       fillKey: "Light Democrat",
//       electoralVotes: 11,
//     },
//     KS: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     KY: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     LA: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     MD: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     ME: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     MA: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     MN: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     MI: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     MS: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     MO: {
//       fillKey: "Republican",
//       electoralVotes: 13,
//     },
//     MT: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     NC: {
//       fillKey: "Light Republican",
//       electoralVotes: 32,
//     },
//     NE: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     NV: {
//       fillKey: "Heavy Democrat",
//       electoralVotes: 32,
//     },
//     NH: {
//       fillKey: "Light Democrat",
//       electoralVotes: 32,
//     },
//     NJ: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     NY: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     ND: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     NM: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     OH: {
//       fillKey: "UNDECIDED",
//       electoralVotes: 32,
//     },
//     OK: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     OR: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     PA: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     RI: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     SC: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     SD: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     TN: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     TX: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     UT: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     WI: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     VA: {
//       fillKey: "Light Democrat",
//       electoralVotes: 32,
//     },
//     VT: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     WA: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     WV: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     WY: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     CA: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     CT: {
//       fillKey: "Democrat",
//       electoralVotes: 32,
//     },
//     AK: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     AR: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//     AL: {
//       fillKey: "Republican",
//       electoralVotes: 32,
//     },
//   },
// });
// election.labels();

/***/ }),

/***/ "./src/js/secret.js":
/*!**************************!*\
  !*** ./src/js/secret.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "RpbrJLtrCYzo88hfJBLeg2fyB";

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AppToken = __webpack_require__(/*! ./secret */ "./src/js/secret.js");

var Map = __webpack_require__(/*! ./map */ "./src/js/map.js"); // export const PfizerData = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Api call unsuccessful");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     let stateTotal = {};
//     let stateWeekly = {};
//     // let weekDateObj = new Date(state.week_of_allocations);
//     // let week = weekDateObj.toDateString().slice(4);
//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;
//       let weekDateObj = new Date(state.week_of_allocations);
//       let week = weekDateObj.toDateString().slice(4);
//       //   stateWeekly[week] = {
//       //     state: state,
//       //   };
//       //   stateWeekly[week] = {
//       //     state: state,
//       //   };
//       if (Object.values(stateTotal).length !== 63) {
//         stateTotal[stateName] = {
//           _1st_dose_allocations: Number(state._1st_dose_allocations),
//           _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         };
//         // stateWeekly[week] = {
//         //   week_of_allocations: state.week_of_allocations,
//         //   _1st_dose_allocations: Number(state._1st_dose_allocations),
//         //   _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         // };
//       } else {
//         // let stateName = `${state.jurisdiction}`;
//         stateTotal[stateName]._1st_dose_allocations += Number(
//           state._1st_dose_allocations
//         );
//         stateTotal[stateName]._2nd_dose_allocations += Number(
//           state._2nd_dose_allocations
//         );
//         // stateWeekly[stateName]._1st_dose_allocations += Number(
//         //   state._1st_dose_allocations
//         // );
//         // stateWeekly[stateName]._2nd_dose_allocations += Number(
//         //   state._2nd_dose_allocations
//         // );
//       }
//     });
//     // let map = document.getElementById('map');
//     // let usaMap = new Datamap({
//     //     scope: "usa",
//     //     element: document.getElementById("map"),
//     //   });
//     //     const plot = `
//     //       <script class="usa-map-script">
//     //         ${Map}
//     //       </script>
//     //       `;
//     //     document.getElementById("map").insertAdjacentElement("afterbegin", plot);
//   });
// export const ModernaData = fetch(
//   `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Api call unsuccessful");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     let stateTotal = {};
//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;
//       if (Object.values(stateTotal).length !== 63) {
//         stateTotal[stateName] = {
//           _1st_dose_allocations: Number(state._1st_dose_allocations),
//           _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         };
//       } else {
//         stateTotal[stateName]._1st_dose_allocations += Number(
//           state._1st_dose_allocations
//         );
//         stateTotal[stateName]._2nd_dose_allocations += Number(
//           state._2nd_dose_allocations
//         );
//       }
//     });
//     console.log(stateTotal);
//   });
// export const JanssenData = fetch(
//   `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Api call unsuccessful");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     let stateTotal = {};
//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;
//       if (Object.values(stateTotal).length !== 63) {
//         stateTotal[stateName] = {
//           _1st_dose_allocations: Number(state._1st_dose_allocations),
//           _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         };
//       } else {
//         stateTotal[stateName]._1st_dose_allocations += Number(
//           state._1st_dose_allocations
//         );
//         stateTotal[stateName]._2nd_dose_allocations += Number(
//           state._2nd_dose_allocations
//         );
//       }
//     });
//     console.log(stateTotal);
//   });
// export const ModernaDtata = $.ajax({
//   url: "https://data.cdc.gov/resource/b7pe-5nws.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Moderna" + data.length + " records from the dataset!");
//   console.log(data);
// });
// export const JanssenData = $.ajax({
//   url: "https://data.cdc.gov/resource/w9zu-fywh.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Janssen" + data.length + " records from the dataset!");
//   console.log(data);
// });
///////////////////////////////////////////////////////////////////////////////
// const PfizerRequest = new Request("https://data.cdc.gov/resource/saz5-9hgg.json", {
//     method: "GET",
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
// })
// const PfizerApi = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// );
// export const PfizerData = PfizerApi.then((response) =>
//   response.json()
// ).then((data) => data);
// export const PfizerData = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// let response = await fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// );
// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }
// export const PfizerData = fetch({
//   url: "https://data.cdc.gov/resource/saz5-9hgg.json",
//   type: "GET",
//   data: {
// $limit: 5000,
// $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Pfizer" + data.length + " records from the dataset!");
//   console.log(data);
// });
// export const PfizerData = $.ajax({
//   url: "https://data.cdc.gov/resource/saz5-9hgg.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Pfizer" + data.length + " records from the dataset!");
//   console.log(data);
// });

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkFwcFRva2VuIiwicmVxdWlyZSIsIk1hcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUEscUI7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQjs7Ozs7Ozs7Ozs7QUNoT0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQiwyQkFBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMsb0NBQUQsQ0FBeEI7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHRCxtQkFBTyxDQUFDLDhCQUFELENBQW5CLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7Ozs7Ozs7O0FDMU5BO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9qcy91dGlsXCI7XG4vLyBpbXBvcnQgXCIuL2pzL21hcFwiO1xuIiwiLy8gZXhwb3J0IGNvbnN0IGVsZWN0aW9uID0gbmV3IERhdGFtYXAoe1xuLy8gICBzY29wZTogXCJ1c2FcIixcbi8vICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksXG4vLyAgIGdlb2dyYXBoeUNvbmZpZzoge1xuLy8gICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcIiNiYWRhNTVcIixcbi8vICAgICBwb3B1cFRlbXBsYXRlOiBmdW5jdGlvbiAoZ2VvZ3JhcGh5LCBkYXRhKSB7XG4vLyAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj4nICsgZ2VvZ3JhcGh5LnByb3BlcnRpZXMubmFtZSArIGA7XG4vLyAgICAgICBFbGVjdG9yYWxWb3RlczogXCIgKyAgZGF0YS5lbGVjdG9yYWxWb3RlcyArIFwiO1xuLy8gICAgIH0sXG4vLyAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IDMsXG4vLyAgIH0sXG5cbi8vICAgZmlsbHM6IHtcbi8vICAgICBSZXB1YmxpY2FuOiBcIiNDQzQ3MzFcIixcbi8vICAgICBEZW1vY3JhdDogXCIjMzA2NTk2XCIsXG4vLyAgICAgXCJIZWF2eSBEZW1vY3JhdFwiOiBcIiM2NjdGQUZcIixcbi8vICAgICBcIkxpZ2h0IERlbW9jcmF0XCI6IFwiI0E5QzBERVwiLFxuLy8gICAgIFwiSGVhdnkgUmVwdWJsaWNhblwiOiBcIiNDQTVFNUJcIixcbi8vICAgICBcIkxpZ2h0IFJlcHVibGljYW5cIjogXCIjRUFBOUE4XCIsXG4vLyAgICAgZGVmYXVsdEZpbGw6IFwiI0VEREM0RVwiLFxuLy8gICB9LFxuLy8gICBkYXRhOiB7XG4vLyAgICAgQVo6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiUmVwdWJsaWNhblwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDUsXG4vLyAgICAgfSxcbi8vICAgICBDTzoge1xuLy8gICAgICAgZmlsbEtleTogXCJMaWdodCBEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDUsXG4vLyAgICAgfSxcbi8vICAgICBERToge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgRkw6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiVU5ERUNJREVEXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMjksXG4vLyAgICAgfSxcbi8vICAgICBHQToge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBISToge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgSUQ6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiUmVwdWJsaWNhblwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgSUw6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIElOOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIlJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAxMSxcbi8vICAgICB9LFxuLy8gICAgIElBOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkxpZ2h0IERlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMTEsXG4vLyAgICAgfSxcbi8vICAgICBLUzoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBLWToge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBMQToge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBNRDoge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgTUU6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE1BOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkRlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBNTjoge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgTUk6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE1TOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIlJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE1POiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIlJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAxMyxcbi8vICAgICB9LFxuLy8gICAgIE1UOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIlJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE5DOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkxpZ2h0IFJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE5FOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIlJlcHVibGljYW5cIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE5WOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkhlYXZ5IERlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBOSDoge1xuLy8gICAgICAgZmlsbEtleTogXCJMaWdodCBEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgTko6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIE5ZOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkRlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBORDoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBOTToge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgT0g6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiVU5ERUNJREVEXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBPSzoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBPUjoge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgUEE6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIFJJOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkRlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBTQzoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBTRDoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBUTjoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBUWDoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBVVDoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBXSToge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgVkE6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiTGlnaHQgRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIFZUOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkRlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBXQToge1xuLy8gICAgICAgZmlsbEtleTogXCJEZW1vY3JhdFwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgV1Y6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiUmVwdWJsaWNhblwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgV1k6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiUmVwdWJsaWNhblwiLFxuLy8gICAgICAgZWxlY3RvcmFsVm90ZXM6IDMyLFxuLy8gICAgIH0sXG4vLyAgICAgQ0E6IHtcbi8vICAgICAgIGZpbGxLZXk6IFwiRGVtb2NyYXRcIixcbi8vICAgICAgIGVsZWN0b3JhbFZvdGVzOiAzMixcbi8vICAgICB9LFxuLy8gICAgIENUOiB7XG4vLyAgICAgICBmaWxsS2V5OiBcIkRlbW9jcmF0XCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBBSzoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBBUjoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgICBBTDoge1xuLy8gICAgICAgZmlsbEtleTogXCJSZXB1YmxpY2FuXCIsXG4vLyAgICAgICBlbGVjdG9yYWxWb3RlczogMzIsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH0pO1xuLy8gZWxlY3Rpb24ubGFiZWxzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiUnBickpMdHJDWXpvODhoZkpCTGVnMmZ5QlwiO1xuIiwiY29uc3QgQXBwVG9rZW4gPSByZXF1aXJlKFwiLi9zZWNyZXRcIik7XG5jb25zdCBNYXAgPSByZXF1aXJlKFwiLi9tYXBcIik7XG5cbi8vIGV4cG9ydCBjb25zdCBQZml6ZXJEYXRhID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vIClcbi8vICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGxldCBzdGF0ZVRvdGFsID0ge307XG4vLyAgICAgbGV0IHN0YXRlV2Vla2x5ID0ge307XG5cbi8vICAgICAvLyBsZXQgd2Vla0RhdGVPYmogPSBuZXcgRGF0ZShzdGF0ZS53ZWVrX29mX2FsbG9jYXRpb25zKTtcbi8vICAgICAvLyBsZXQgd2VlayA9IHdlZWtEYXRlT2JqLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuXG4vLyAgICAgZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuLy8gICAgICAgbGV0IHN0YXRlTmFtZSA9IGAke3N0YXRlLmp1cmlzZGljdGlvbn1gO1xuXG4vLyAgICAgICBsZXQgd2Vla0RhdGVPYmogPSBuZXcgRGF0ZShzdGF0ZS53ZWVrX29mX2FsbG9jYXRpb25zKTtcbi8vICAgICAgIGxldCB3ZWVrID0gd2Vla0RhdGVPYmoudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XG5cbi8vICAgICAgIC8vICAgc3RhdGVXZWVrbHlbd2Vla10gPSB7XG4vLyAgICAgICAvLyAgICAgc3RhdGU6IHN0YXRlLFxuLy8gICAgICAgLy8gICB9O1xuLy8gICAgICAgLy8gICBzdGF0ZVdlZWtseVt3ZWVrXSA9IHtcbi8vICAgICAgIC8vICAgICBzdGF0ZTogc3RhdGUsXG4vLyAgICAgICAvLyAgIH07XG5cbi8vICAgICAgIGlmIChPYmplY3QudmFsdWVzKHN0YXRlVG90YWwpLmxlbmd0aCAhPT0gNjMpIHtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuLy8gICAgICAgICAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgICAgXzJuZF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICAvLyBzdGF0ZVdlZWtseVt3ZWVrXSA9IHtcbi8vICAgICAgICAgLy8gICB3ZWVrX29mX2FsbG9jYXRpb25zOiBzdGF0ZS53ZWVrX29mX2FsbG9jYXRpb25zLFxuLy8gICAgICAgICAvLyAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgIC8vICAgXzJuZF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbi8vICAgICAgICAgLy8gfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vIGxldCBzdGF0ZU5hbWUgPSBgJHtzdGF0ZS5qdXJpc2RpY3Rpb259YDtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4vLyAgICAgICAgICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gTnVtYmVyKFxuLy8gICAgICAgICAgIHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9uc1xuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBzdGF0ZVdlZWtseVtzdGF0ZU5hbWVdLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4vLyAgICAgICAgIC8vICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4vLyAgICAgICAgIC8vICk7XG4vLyAgICAgICAgIC8vIHN0YXRlV2Vla2x5W3N0YXRlTmFtZV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbi8vICAgICAgICAgLy8gICBzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnNcbi8vICAgICAgICAgLy8gKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgICAvLyBsZXQgbWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xuLy8gICAgIC8vIGxldCB1c2FNYXAgPSBuZXcgRGF0YW1hcCh7XG4vLyAgICAgLy8gICAgIHNjb3BlOiBcInVzYVwiLFxuLy8gICAgIC8vICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSxcbi8vICAgICAvLyAgIH0pO1xuXG4vLyAgICAgLy8gICAgIGNvbnN0IHBsb3QgPSBgXG4vLyAgICAgLy8gICAgICAgPHNjcmlwdCBjbGFzcz1cInVzYS1tYXAtc2NyaXB0XCI+XG4vLyAgICAgLy8gICAgICAgICAke01hcH1cbi8vICAgICAvLyAgICAgICA8L3NjcmlwdD5cbi8vICAgICAvLyAgICAgICBgO1xuLy8gICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHBsb3QpO1xuLy8gICB9KTtcblxuLy8gZXhwb3J0IGNvbnN0IE1vZGVybmFEYXRhID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9iN3BlLTVud3MuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vIClcbi8vICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGxldCBzdGF0ZVRvdGFsID0ge307XG5cbi8vICAgICBkYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4vLyAgICAgICBsZXQgc3RhdGVOYW1lID0gYCR7c3RhdGUuanVyaXNkaWN0aW9ufWA7XG5cbi8vICAgICAgIGlmIChPYmplY3QudmFsdWVzKHN0YXRlVG90YWwpLmxlbmd0aCAhPT0gNjMpIHtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuLy8gICAgICAgICAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgICAgXzJuZF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTnVtYmVyKFxuLy8gICAgICAgICAgIHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9uc1xuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbi8vICAgICAgICAgICBzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnNcbi8vICAgICAgICAgKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhzdGF0ZVRvdGFsKTtcbi8vICAgfSk7XG5cbi8vIGV4cG9ydCBjb25zdCBKYW5zc2VuRGF0YSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2UvYjdwZS01bndzLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApXG4vLyAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICBpZiAoIXJlcy5vaykge1xuLy8gICAgICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICBsZXQgc3RhdGVUb3RhbCA9IHt9O1xuXG4vLyAgICAgZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuLy8gICAgICAgbGV0IHN0YXRlTmFtZSA9IGAke3N0YXRlLmp1cmlzZGljdGlvbn1gO1xuXG4vLyAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZVRvdGFsKS5sZW5ndGggIT09IDYzKSB7XG4vLyAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXSA9IHtcbi8vICAgICAgICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuLy8gICAgICAgICAgIF8ybmRfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgIH07XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbi8vICAgICAgICAgICBzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4vLyAgICAgICAgICAgc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zXG4vLyAgICAgICAgICk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGVUb3RhbCk7XG4vLyAgIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgTW9kZXJuYUR0YXRhID0gJC5hamF4KHtcbi8vICAgdXJsOiBcImh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL2I3cGUtNW53cy5qc29uXCIsXG4vLyAgIHR5cGU6IFwiR0VUXCIsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAkbGltaXQ6IDUwMDAsXG4vLyAgICAgJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIE1vZGVybmFcIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcblxuLy8gZXhwb3J0IGNvbnN0IEphbnNzZW5EYXRhID0gJC5hamF4KHtcbi8vICAgdXJsOiBcImh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3c5enUtZnl3aC5qc29uXCIsXG4vLyAgIHR5cGU6IFwiR0VUXCIsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAkbGltaXQ6IDUwMDAsXG4vLyAgICAgJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIEphbnNzZW5cIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdCBQZml6ZXJSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXCJodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvblwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxuLy8gICAgICRsaW1pdDogNTAwMCxcbi8vICAgICAkJGFwcF90b2tlbjogYCR7QXBwVG9rZW59YCxcbi8vIH0pXG5cbi8vIGNvbnN0IFBmaXplckFwaSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9IFBmaXplckFwaS50aGVuKChyZXNwb25zZSkgPT5cbi8vICAgcmVzcG9uc2UuanNvbigpXG4vLyApLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApXG4vLyAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuXG4vLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbi8vICAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuLy8gKTtcblxuLy8gaWYgKHJlc3BvbnNlLm9rKSB7XG4vLyAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gfSBlbHNlIHtcbi8vICAgYWxlcnQoXCJIVFRQLUVycm9yOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBQZml6ZXJEYXRhID0gZmV0Y2goe1xuLy8gICB1cmw6IFwiaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb25cIixcbi8vICAgdHlwZTogXCJHRVRcIixcbi8vICAgZGF0YToge1xuLy8gJGxpbWl0OiA1MDAwLFxuLy8gJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIFBmaXplclwiICsgZGF0YS5sZW5ndGggKyBcIiByZWNvcmRzIGZyb20gdGhlIGRhdGFzZXQhXCIpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9ICQuYWpheCh7XG4vLyAgIHVybDogXCJodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvblwiLFxuLy8gICB0eXBlOiBcIkdFVFwiLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgJGxpbWl0OiA1MDAwLFxuLy8gICAgICQkYXBwX3Rva2VuOiBgJHtBcHBUb2tlbn1gLFxuLy8gICB9LFxuLy8gfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuLy8gICBhbGVydChcIlJldHJpZXZlZCBQZml6ZXJcIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=