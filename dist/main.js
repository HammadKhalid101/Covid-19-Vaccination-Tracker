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

 // import "./js/map";

/***/ }),

/***/ "./src/js/calculate_fill.js":
/*!**********************************!*\
  !*** ./src/js/calculate_fill.js ***!
  \**********************************/
/*! exports provided: calculateFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFill", function() { return calculateFill; });
var calculateFill = function calculateFill(numDoses) {
  if (numDoses >= 6000000) {
    return "6000000";
  } else if (numDoses < 6000000 && numDoses >= 5000000) {
    return "500000";
  } else if (numDoses < 5000000 && numDoses >= 4000000) {
    return "4000000";
  } else if (numDoses < 4000000 && numDoses >= 3500000) {
    return "3500000";
  } else if (numDoses < 3500000 && numDoses >= 3000000) {
    return "3000000";
  } else if (numDoses < 3000000 && numDoses >= 2500000) {
    return "2500000";
  } else if (numDoses < 2500000 && numDoses >= 2000000) {
    return "2000000";
  } else if (numDoses < 2000000 && numDoses >= 1800000) {
    return "1800000";
  } else if (numDoses < 1800000 && numDoses >= 1600000) {
    return "1600000";
  } else if (numDoses < 1600000 && numDoses >= 1500000) {
    return "1500000";
  } else if (numDoses < 1500000 && numDoses >= 1400000) {
    return "1400000";
  } else if (numDoses < 1400000 && numDoses >= 1300000) {
    return "1300000";
  } else if (numDoses < 1300000 && numDoses >= 1200000) {
    return "1200000";
  } else if (numDoses < 1200000 && numDoses >= 1100000) {
    return "1100000";
  } else if (numDoses < 1100000 && numDoses >= 1000000) {
    return "1000000";
  } else if (numDoses < 1000000 && numDoses >= 950000) {
    return "950000";
  } else if (numDoses < 950000 && numDoses >= 900000) {
    return "900000";
  } else if (numDoses < 900000 && numDoses >= 850000) {
    return "850000";
  } else if (numDoses < 850000 && numDoses >= 800000) {
    return "800000";
  } else if (numDoses < 800000 && numDoses >= 750000) {
    return "750000";
  } else if (numDoses < 750000 && numDoses >= 700000) {
    return "700000";
  } else if (numDoses < 700000 && numDoses >= 650000) {
    return "650000";
  } else if (numDoses < 650000 && numDoses >= 600000) {
    return "600000";
  } else if (numDoses < 600000 && numDoses >= 550000) {
    return "550000";
  } else if (numDoses < 550000 && numDoses >= 500000) {
    return "500000";
  } else if (numDoses < 500000 && numDoses >= 450000) {
    return "450000";
  } else if (numDoses < 450000 && numDoses >= 400000) {
    return "400000";
  } else if (numDoses < 400000 && numDoses >= 350000) {
    return "350000";
  } else if (numDoses < 350000 && numDoses >= 300000) {
    return "300000";
  } else if (numDoses < 300000 && numDoses >= 250000) {
    return "250000";
  } else if (numDoses < 250000 && numDoses >= 200000) {
    return "200000";
  } else if (numDoses < 200000 && numDoses >= 180000) {
    return "180000";
  } else if (numDoses < 180000 && numDoses >= 160000) {
    return "160000";
  } else if (numDoses < 160000 && numDoses >= 150000) {
    return "150000";
  } else if (numDoses < 150000 && numDoses >= 140000) {
    return "140000";
  } else if (numDoses < 140000 && numDoses >= 130000) {
    return "130000";
  } else if (numDoses < 130000 && numDoses >= 120000) {
    return "120000";
  } else if (numDoses < 120000 && numDoses >= 110000) {
    return "110000";
  } else if (numDoses < 110000 && numDoses >= 100000) {
    return "100000";
  } else if (numDoses < 100000 && numDoses >= 90000) {
    return "90000";
  } else if (numDoses < 90000 && numDoses >= 80000) {
    return "80000";
  } else if (numDoses < 80000 && numDoses >= 70000) {
    return "70000";
  } else if (numDoses < 70000 && numDoses >= 60000) {
    return "60000";
  } else {
    return "defaultFill";
  }
};

/***/ }),

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = {
  6000000: "rgb(0,50,0)",
  5000000: "rgb(0,55,0)",
  4000000: "rgb(0,60,0)",
  3500000: "rgb(0,70,0)",
  3000000: "rgb(0,80,0)",
  2500000: "rgb(0,90,0)",
  2000000: "rgb(0,100,0)",
  1800000: "rgb(0,110,0)",
  1600000: "rgb(0,120,0)",
  1500000: "rgb(0,130,0)",
  1400000: "rgb(0,140,0)",
  1300000: "rgb(0,150,0)",
  1200000: "rgb(0,155,0)",
  1100000: "rgb(0,160,0)",
  1000000: "rgb(0,165,0)",
  950000: "rgb(0,170,0)",
  900000: "rgb(0,175,0)",
  850000: "rgb(0,180,0)",
  800000: "rgb(0,185,0)",
  750000: "rgb(0,190,0)",
  700000: "rgb(0,195,0)",
  650000: "rgb(0,200,0)",
  600000: "rgb(0,205,0)",
  550000: "rgb(0,210,0)",
  500000: "rgb(0,215,0)",
  450000: "rgb(0,220,0)",
  400000: "rgb(0,225,0)",
  350000: "rgb(0,230,0)",
  300000: "rgb(0,235,0)",
  250000: "rgb(0,240,0)",
  200000: "rgb(0,242,0)",
  180000: "rgb(0,244,0)",
  160000: "rgb(0,245,0)",
  150000: "rgb(0,246,0)",
  140000: "rgb(0,247,0)",
  130000: "rgb(0,248,0)",
  120000: "rgb(0,249,0)",
  110000: "rgb(0,250,0)",
  100000: "rgb(0,251,0)",
  90000: "rgb(0,252,0)",
  80000: "rgb(0,253,0)",
  70000: "rgb(0,254,0)",
  60000: "rgb(0,255,0)"
};

/***/ }),

/***/ "./src/js/secret.js":
/*!**************************!*\
  !*** ./src/js/secret.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "RpbrJLtrCYzo88hfJBLeg2fyB";

/***/ }),

/***/ "./src/js/state_Initials.js":
/*!**********************************!*\
  !*** ./src/js/state_Initials.js ***!
  \**********************************/
/*! exports provided: stateInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateInitials", function() { return stateInitials; });
var stateInitials = {
  Alabama: "AL",
  Alaska: "AK",
  "American Samoa": "AS",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  "District Of Columbia": "DC",
  "Federated States Of Micronesia": "FM",
  Florida: "FL",
  Georgia: "GA",
  Guam: "GU",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  "Marshall Islands": "MH",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  "Northern Mariana Islands": "MP",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Palau: "PW",
  Pennsylvania: "PA",
  "Puerto Rico": "PR",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  "Virgin Islands": "VI",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY"
};

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: PfizerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfizerData", function() { return PfizerData; });
var AppToken = __webpack_require__(/*! ./secret */ "./src/js/secret.js");

var stateInitials = __webpack_require__(/*! ./state_Initials */ "./src/js/state_Initials.js");

var calculateFill = __webpack_require__(/*! ./calculate_fill */ "./src/js/calculate_fill.js");

var _require = __webpack_require__(/*! ./colors */ "./src/js/colors.js"),
    colors = _require.colors; // const drawMap = require("./map");


var formatNumber = function formatNumber(num) {
  var convert = num;
  var decimal = Math.abs(convert).toFixed(0);
  var nums = decimal.toString();
  nums = decimal.toString().split(".");
  nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var converted = "".concat(nums.join("."));
  return converted;
};

var PfizerData = fetch("https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=".concat(AppToken, "&$limit=5000")).then(function (res) {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    return res.json();
  }
}).then(function (data) {
  var stateTotal = {};
  var stateWeekly = {}; // let weekDateObj = new Date(state.week_of_allocations);
  // let week = weekDateObj.toDateString().slice(4);

  data.forEach(function (state) {
    var st = stateInitials;
    var stateName;
    var cl = calculateFill;

    if (st.stateInitials[state.jurisdiction]) {
      stateName = st.stateInitials[state.jurisdiction];
    } else {
      stateName = state.jurisdiction;
    }

    var weekDateObj = new Date(state.week_of_allocations);
    var week = weekDateObj.toDateString().slice(4);

    if (Object.values(stateTotal).length !== 63) {
      stateTotal[stateName] = {
        _1st_dose_allocations: Number(state._1st_dose_allocations),
        _2nd_dose_allocations: Number(state._2nd_dose_allocations)
      };
    } else {
      stateTotal[stateName]._1st_dose_allocations += Number(state._1st_dose_allocations);
      stateTotal[stateName]._2nd_dose_allocations += Number(state._2nd_dose_allocations);
      stateTotal[stateName].fillKey = cl.calculateFill(stateTotal[stateName]._1st_dose_allocations);
    }
  }); // const veryHigh = "#228B22";
  // Object.keys(stateTotal).forEach((state) => {
  //   stateTotal[state].fillKey = "mid";
  // });

  var drawMap = new Datamap({
    scope: "usa",
    element: document.getElementById("map"),
    responsive: true,
    geographyConfig: {
      highlightBorderColor: "rgb(59, 177, 255)",
      // highlightFillColor: "white",
      popupTemplate: function popupTemplate(geo) {
        return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name + ":", "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations), "</strong></p>", '<p class="blue-text"><strong>', " 2nd Dose " + formatNumber(stateTotal[geo.id]._2nd_dose_allocations), "</strong></div>"].join("");
      },
      highlightBorderWidth: 3
    },
    fills: colors,
    data: stateTotal
  });
  console.log(stateTotal);
  drawMap.labels();
}); // export const ModernaData = fetch(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYWxjdWxhdGVfZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXRlX0luaXRpYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVGaWxsIiwibnVtRG9zZXMiLCJjb2xvcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RhdGVJbml0aWFscyIsIkFsYWJhbWEiLCJBbGFza2EiLCJBcml6b25hIiwiQXJrYW5zYXMiLCJDYWxpZm9ybmlhIiwiQ29sb3JhZG8iLCJDb25uZWN0aWN1dCIsIkRlbGF3YXJlIiwiRmxvcmlkYSIsIkdlb3JnaWEiLCJHdWFtIiwiSGF3YWlpIiwiSWRhaG8iLCJJbGxpbm9pcyIsIkluZGlhbmEiLCJJb3dhIiwiS2Fuc2FzIiwiS2VudHVja3kiLCJMb3Vpc2lhbmEiLCJNYWluZSIsIk1hcnlsYW5kIiwiTWFzc2FjaHVzZXR0cyIsIk1pY2hpZ2FuIiwiTWlubmVzb3RhIiwiTWlzc2lzc2lwcGkiLCJNaXNzb3VyaSIsIk1vbnRhbmEiLCJOZWJyYXNrYSIsIk5ldmFkYSIsIk9oaW8iLCJPa2xhaG9tYSIsIk9yZWdvbiIsIlBhbGF1IiwiUGVubnN5bHZhbmlhIiwiVGVubmVzc2VlIiwiVGV4YXMiLCJVdGFoIiwiVmVybW9udCIsIlZpcmdpbmlhIiwiV2FzaGluZ3RvbiIsIldpc2NvbnNpbiIsIld5b21pbmciLCJBcHBUb2tlbiIsInJlcXVpcmUiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJjb252ZXJ0IiwiZGVjaW1hbCIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIiwibnVtcyIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwiY29udmVydGVkIiwiam9pbiIsIlBmaXplckRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJzdGF0ZVRvdGFsIiwic3RhdGVXZWVrbHkiLCJmb3JFYWNoIiwic3RhdGUiLCJzdCIsInN0YXRlTmFtZSIsImNsIiwianVyaXNkaWN0aW9uIiwid2Vla0RhdGVPYmoiLCJEYXRlIiwid2Vla19vZl9hbGxvY2F0aW9ucyIsIndlZWsiLCJ0b0RhdGVTdHJpbmciLCJzbGljZSIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsIl8xc3RfZG9zZV9hbGxvY2F0aW9ucyIsIk51bWJlciIsIl8ybmRfZG9zZV9hbGxvY2F0aW9ucyIsImZpbGxLZXkiLCJkcmF3TWFwIiwiRGF0YW1hcCIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNwb25zaXZlIiwiZ2VvZ3JhcGh5Q29uZmlnIiwiaGlnaGxpZ2h0Qm9yZGVyQ29sb3IiLCJwb3B1cFRlbXBsYXRlIiwiZ2VvIiwicHJvcGVydGllcyIsIm5hbWUiLCJpZCIsImhpZ2hsaWdodEJvcmRlcldpZHRoIiwiZmlsbHMiLCJjb25zb2xlIiwibG9nIiwibGFiZWxzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBRUEscUI7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUN6QyxNQUFJQSxRQUFRLElBQUksT0FBaEIsRUFBeUI7QUFDdkIsV0FBTyxTQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksTUFBdEMsRUFBOEM7QUFDbkQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksS0FBckMsRUFBNEM7QUFDakQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxLQUFYLElBQW9CQSxRQUFRLElBQUksS0FBcEMsRUFBMkM7QUFDaEQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlB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O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7Ozs7OztBQ3hQQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vanMvdXRpbFwiO1xuLy8gaW1wb3J0IFwiLi9qcy9tYXBcIjtcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVGaWxsID0gKG51bURvc2VzKSA9PiB7XG4gIGlmIChudW1Eb3NlcyA+PSA2MDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjAwMDAwMCAmJiBudW1Eb3NlcyA+PSA1MDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1MDAwMDAwICYmIG51bURvc2VzID49IDQwMDAwMDApIHtcbiAgICByZXR1cm4gXCI0MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0MDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMDApIHtcbiAgICByZXR1cm4gXCIzNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzNTAwMDAwICYmIG51bURvc2VzID49IDMwMDAwMDApIHtcbiAgICByZXR1cm4gXCIzMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzMDAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMDApIHtcbiAgICByZXR1cm4gXCIyNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyNTAwMDAwICYmIG51bURvc2VzID49IDIwMDAwMDApIHtcbiAgICByZXR1cm4gXCIyMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyMDAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMDApIHtcbiAgICByZXR1cm4gXCIxODAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxODAwMDAwICYmIG51bURvc2VzID49IDE2MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNjAwMDAwICYmIG51bURvc2VzID49IDE1MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNTAwMDAwICYmIG51bURvc2VzID49IDE0MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNDAwMDAwICYmIG51bURvc2VzID49IDEzMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMzAwMDAwICYmIG51bURvc2VzID49IDEyMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMjAwMDAwICYmIG51bURvc2VzID49IDExMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMTAwMDAwICYmIG51bURvc2VzID49IDEwMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMDAwMDAwICYmIG51bURvc2VzID49IDk1MDAwMCkge1xuICAgIHJldHVybiBcIjk1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTUwMDAwICYmIG51bURvc2VzID49IDkwMDAwMCkge1xuICAgIHJldHVybiBcIjkwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTAwMDAwICYmIG51bURvc2VzID49IDg1MDAwMCkge1xuICAgIHJldHVybiBcIjg1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODUwMDAwICYmIG51bURvc2VzID49IDgwMDAwMCkge1xuICAgIHJldHVybiBcIjgwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODAwMDAwICYmIG51bURvc2VzID49IDc1MDAwMCkge1xuICAgIHJldHVybiBcIjc1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzUwMDAwICYmIG51bURvc2VzID49IDcwMDAwMCkge1xuICAgIHJldHVybiBcIjcwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzAwMDAwICYmIG51bURvc2VzID49IDY1MDAwMCkge1xuICAgIHJldHVybiBcIjY1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjUwMDAwICYmIG51bURvc2VzID49IDYwMDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjAwMDAwICYmIG51bURvc2VzID49IDU1MDAwMCkge1xuICAgIHJldHVybiBcIjU1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTUwMDAwICYmIG51bURvc2VzID49IDUwMDAwMCkge1xuICAgIHJldHVybiBcIjUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTAwMDAwICYmIG51bURvc2VzID49IDQ1MDAwMCkge1xuICAgIHJldHVybiBcIjQ1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDUwMDAwICYmIG51bURvc2VzID49IDQwMDAwMCkge1xuICAgIHJldHVybiBcIjQwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMCkge1xuICAgIHJldHVybiBcIjM1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzUwMDAwICYmIG51bURvc2VzID49IDMwMDAwMCkge1xuICAgIHJldHVybiBcIjMwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMCkge1xuICAgIHJldHVybiBcIjI1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjUwMDAwICYmIG51bURvc2VzID49IDIwMDAwMCkge1xuICAgIHJldHVybiBcIjIwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMCkge1xuICAgIHJldHVybiBcIjE4MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTgwMDAwICYmIG51bURvc2VzID49IDE2MDAwMCkge1xuICAgIHJldHVybiBcIjE2MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTYwMDAwICYmIG51bURvc2VzID49IDE1MDAwMCkge1xuICAgIHJldHVybiBcIjE1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTUwMDAwICYmIG51bURvc2VzID49IDE0MDAwMCkge1xuICAgIHJldHVybiBcIjE0MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTQwMDAwICYmIG51bURvc2VzID49IDEzMDAwMCkge1xuICAgIHJldHVybiBcIjEzMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTMwMDAwICYmIG51bURvc2VzID49IDEyMDAwMCkge1xuICAgIHJldHVybiBcIjEyMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTIwMDAwICYmIG51bURvc2VzID49IDExMDAwMCkge1xuICAgIHJldHVybiBcIjExMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTEwMDAwICYmIG51bURvc2VzID49IDEwMDAwMCkge1xuICAgIHJldHVybiBcIjEwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTAwMDAwICYmIG51bURvc2VzID49IDkwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDkwMDAwICYmIG51bURvc2VzID49IDgwMDAwKSB7XG4gICAgcmV0dXJuIFwiODAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDgwMDAwICYmIG51bURvc2VzID49IDcwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDcwMDAwICYmIG51bURvc2VzID49IDYwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDBcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJkZWZhdWx0RmlsbFwiO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgNjAwMDAwMDogXCJyZ2IoMCw1MCwwKVwiLFxuICA1MDAwMDAwOiBcInJnYigwLDU1LDApXCIsXG4gIDQwMDAwMDA6IFwicmdiKDAsNjAsMClcIixcbiAgMzUwMDAwMDogXCJyZ2IoMCw3MCwwKVwiLFxuICAzMDAwMDAwOiBcInJnYigwLDgwLDApXCIsXG4gIDI1MDAwMDA6IFwicmdiKDAsOTAsMClcIixcbiAgMjAwMDAwMDogXCJyZ2IoMCwxMDAsMClcIixcbiAgMTgwMDAwMDogXCJyZ2IoMCwxMTAsMClcIixcbiAgMTYwMDAwMDogXCJyZ2IoMCwxMjAsMClcIixcbiAgMTUwMDAwMDogXCJyZ2IoMCwxMzAsMClcIixcbiAgMTQwMDAwMDogXCJyZ2IoMCwxNDAsMClcIixcbiAgMTMwMDAwMDogXCJyZ2IoMCwxNTAsMClcIixcbiAgMTIwMDAwMDogXCJyZ2IoMCwxNTUsMClcIixcbiAgMTEwMDAwMDogXCJyZ2IoMCwxNjAsMClcIixcbiAgMTAwMDAwMDogXCJyZ2IoMCwxNjUsMClcIixcbiAgOTUwMDAwOiBcInJnYigwLDE3MCwwKVwiLFxuICA5MDAwMDA6IFwicmdiKDAsMTc1LDApXCIsXG4gIDg1MDAwMDogXCJyZ2IoMCwxODAsMClcIixcbiAgODAwMDAwOiBcInJnYigwLDE4NSwwKVwiLFxuICA3NTAwMDA6IFwicmdiKDAsMTkwLDApXCIsXG4gIDcwMDAwMDogXCJyZ2IoMCwxOTUsMClcIixcbiAgNjUwMDAwOiBcInJnYigwLDIwMCwwKVwiLFxuICA2MDAwMDA6IFwicmdiKDAsMjA1LDApXCIsXG4gIDU1MDAwMDogXCJyZ2IoMCwyMTAsMClcIixcbiAgNTAwMDAwOiBcInJnYigwLDIxNSwwKVwiLFxuICA0NTAwMDA6IFwicmdiKDAsMjIwLDApXCIsXG4gIDQwMDAwMDogXCJyZ2IoMCwyMjUsMClcIixcbiAgMzUwMDAwOiBcInJnYigwLDIzMCwwKVwiLFxuICAzMDAwMDA6IFwicmdiKDAsMjM1LDApXCIsXG4gIDI1MDAwMDogXCJyZ2IoMCwyNDAsMClcIixcbiAgMjAwMDAwOiBcInJnYigwLDI0MiwwKVwiLFxuICAxODAwMDA6IFwicmdiKDAsMjQ0LDApXCIsXG4gIDE2MDAwMDogXCJyZ2IoMCwyNDUsMClcIixcbiAgMTUwMDAwOiBcInJnYigwLDI0NiwwKVwiLFxuICAxNDAwMDA6IFwicmdiKDAsMjQ3LDApXCIsXG4gIDEzMDAwMDogXCJyZ2IoMCwyNDgsMClcIixcbiAgMTIwMDAwOiBcInJnYigwLDI0OSwwKVwiLFxuICAxMTAwMDA6IFwicmdiKDAsMjUwLDApXCIsXG4gIDEwMDAwMDogXCJyZ2IoMCwyNTEsMClcIixcbiAgOTAwMDA6IFwicmdiKDAsMjUyLDApXCIsXG4gIDgwMDAwOiBcInJnYigwLDI1MywwKVwiLFxuICA3MDAwMDogXCJyZ2IoMCwyNTQsMClcIixcbiAgNjAwMDA6IFwicmdiKDAsMjU1LDApXCIsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlJwYnJKTHRyQ1l6bzg4aGZKQkxlZzJmeUJcIjtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZUluaXRpYWxzID0ge1xuICBBbGFiYW1hOiBcIkFMXCIsXG4gIEFsYXNrYTogXCJBS1wiLFxuICBcIkFtZXJpY2FuIFNhbW9hXCI6IFwiQVNcIixcbiAgQXJpem9uYTogXCJBWlwiLFxuICBBcmthbnNhczogXCJBUlwiLFxuICBDYWxpZm9ybmlhOiBcIkNBXCIsXG4gIENvbG9yYWRvOiBcIkNPXCIsXG4gIENvbm5lY3RpY3V0OiBcIkNUXCIsXG4gIERlbGF3YXJlOiBcIkRFXCIsXG4gIFwiRGlzdHJpY3QgT2YgQ29sdW1iaWFcIjogXCJEQ1wiLFxuICBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiOiBcIkZNXCIsXG4gIEZsb3JpZGE6IFwiRkxcIixcbiAgR2VvcmdpYTogXCJHQVwiLFxuICBHdWFtOiBcIkdVXCIsXG4gIEhhd2FpaTogXCJISVwiLFxuICBJZGFobzogXCJJRFwiLFxuICBJbGxpbm9pczogXCJJTFwiLFxuICBJbmRpYW5hOiBcIklOXCIsXG4gIElvd2E6IFwiSUFcIixcbiAgS2Fuc2FzOiBcIktTXCIsXG4gIEtlbnR1Y2t5OiBcIktZXCIsXG4gIExvdWlzaWFuYTogXCJMQVwiLFxuICBNYWluZTogXCJNRVwiLFxuICBcIk1hcnNoYWxsIElzbGFuZHNcIjogXCJNSFwiLFxuICBNYXJ5bGFuZDogXCJNRFwiLFxuICBNYXNzYWNodXNldHRzOiBcIk1BXCIsXG4gIE1pY2hpZ2FuOiBcIk1JXCIsXG4gIE1pbm5lc290YTogXCJNTlwiLFxuICBNaXNzaXNzaXBwaTogXCJNU1wiLFxuICBNaXNzb3VyaTogXCJNT1wiLFxuICBNb250YW5hOiBcIk1UXCIsXG4gIE5lYnJhc2thOiBcIk5FXCIsXG4gIE5ldmFkYTogXCJOVlwiLFxuICBcIk5ldyBIYW1wc2hpcmVcIjogXCJOSFwiLFxuICBcIk5ldyBKZXJzZXlcIjogXCJOSlwiLFxuICBcIk5ldyBNZXhpY29cIjogXCJOTVwiLFxuICBcIk5ldyBZb3JrXCI6IFwiTllcIixcbiAgXCJOb3J0aCBDYXJvbGluYVwiOiBcIk5DXCIsXG4gIFwiTm9ydGggRGFrb3RhXCI6IFwiTkRcIixcbiAgXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIjogXCJNUFwiLFxuICBPaGlvOiBcIk9IXCIsXG4gIE9rbGFob21hOiBcIk9LXCIsXG4gIE9yZWdvbjogXCJPUlwiLFxuICBQYWxhdTogXCJQV1wiLFxuICBQZW5uc3lsdmFuaWE6IFwiUEFcIixcbiAgXCJQdWVydG8gUmljb1wiOiBcIlBSXCIsXG4gIFwiUmhvZGUgSXNsYW5kXCI6IFwiUklcIixcbiAgXCJTb3V0aCBDYXJvbGluYVwiOiBcIlNDXCIsXG4gIFwiU291dGggRGFrb3RhXCI6IFwiU0RcIixcbiAgVGVubmVzc2VlOiBcIlROXCIsXG4gIFRleGFzOiBcIlRYXCIsXG4gIFV0YWg6IFwiVVRcIixcbiAgVmVybW9udDogXCJWVFwiLFxuICBcIlZpcmdpbiBJc2xhbmRzXCI6IFwiVklcIixcbiAgVmlyZ2luaWE6IFwiVkFcIixcbiAgV2FzaGluZ3RvbjogXCJXQVwiLFxuICBcIldlc3QgVmlyZ2luaWFcIjogXCJXVlwiLFxuICBXaXNjb25zaW46IFwiV0lcIixcbiAgV3lvbWluZzogXCJXWVwiLFxufTtcbiIsImNvbnN0IEFwcFRva2VuID0gcmVxdWlyZShcIi4vc2VjcmV0XCIpO1xuY29uc3Qgc3RhdGVJbml0aWFscyA9IHJlcXVpcmUoXCIuL3N0YXRlX0luaXRpYWxzXCIpO1xuY29uc3QgY2FsY3VsYXRlRmlsbCA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZV9maWxsXCIpO1xuY29uc3QgeyBjb2xvcnMgfSA9IHJlcXVpcmUoXCIuL2NvbG9yc1wiKTtcbi8vIGNvbnN0IGRyYXdNYXAgPSByZXF1aXJlKFwiLi9tYXBcIik7XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChudW0pID0+IHtcbiAgbGV0IGNvbnZlcnQgPSBudW07XG4gIGNvbnN0IGRlY2ltYWwgPSBNYXRoLmFicyhjb252ZXJ0KS50b0ZpeGVkKDApO1xuICBsZXQgbnVtcyA9IGRlY2ltYWwudG9TdHJpbmcoKTtcbiAgbnVtcyA9IGRlY2ltYWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gIG51bXNbMF0gPSBudW1zWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgY29uc3QgY29udmVydGVkID0gYCR7bnVtcy5qb2luKFwiLlwiKX1gO1xuICByZXR1cm4gY29udmVydGVkO1xufTtcblxuZXhwb3J0IGNvbnN0IFBmaXplckRhdGEgPSBmZXRjaChcbiAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IEVycm9yKFwiQXBpIGNhbGwgdW5zdWNjZXNzZnVsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgbGV0IHN0YXRlVG90YWwgPSB7fTtcbiAgICBsZXQgc3RhdGVXZWVrbHkgPSB7fTtcblxuICAgIC8vIGxldCB3ZWVrRGF0ZU9iaiA9IG5ldyBEYXRlKHN0YXRlLndlZWtfb2ZfYWxsb2NhdGlvbnMpO1xuICAgIC8vIGxldCB3ZWVrID0gd2Vla0RhdGVPYmoudG9EYXRlU3RyaW5nKCkuc2xpY2UoNCk7XG5cbiAgICBkYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICBsZXQgc3QgPSBzdGF0ZUluaXRpYWxzO1xuXG4gICAgICBsZXQgc3RhdGVOYW1lO1xuICAgICAgY29uc3QgY2wgPSBjYWxjdWxhdGVGaWxsO1xuXG4gICAgICBpZiAoc3Quc3RhdGVJbml0aWFsc1tzdGF0ZS5qdXJpc2RpY3Rpb25dKSB7XG4gICAgICAgIHN0YXRlTmFtZSA9IHN0LnN0YXRlSW5pdGlhbHNbc3RhdGUuanVyaXNkaWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlTmFtZSA9IHN0YXRlLmp1cmlzZGljdGlvbjtcbiAgICAgIH1cblxuICAgICAgbGV0IHdlZWtEYXRlT2JqID0gbmV3IERhdGUoc3RhdGUud2Vla19vZl9hbGxvY2F0aW9ucyk7XG4gICAgICBsZXQgd2VlayA9IHdlZWtEYXRlT2JqLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuXG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZVRvdGFsKS5sZW5ndGggIT09IDYzKSB7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXSA9IHtcbiAgICAgICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgIF8ybmRfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAgICAgICBzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgICAgICAgc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5maWxsS2V5ID0gY2wuY2FsY3VsYXRlRmlsbChcbiAgICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCB2ZXJ5SGlnaCA9IFwiIzIyOEIyMlwiO1xuXG4gICAgLy8gT2JqZWN0LmtleXMoc3RhdGVUb3RhbCkuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAvLyAgIHN0YXRlVG90YWxbc3RhdGVdLmZpbGxLZXkgPSBcIm1pZFwiO1xuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgZHJhd01hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICAgIHNjb3BlOiBcInVzYVwiLFxuICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcInJnYig1OSwgMTc3LCAyNTUpXCIsXG4gICAgICAgIC8vIGhpZ2hsaWdodEZpbGxDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiAoZ2VvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaG92ZXJpbmZvXCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgJzxwIGNsYXNzPVwic3RhdGUtbmFtZVwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUgKyBcIjpcIixcbiAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAnPHAgY2xhc3M9XCJibHVlLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgICBcIiAybmQgRG9zZSBcIiArXG4gICAgICAgICAgICAgIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9kaXY+XCIsXG4gICAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJXaWR0aDogMyxcbiAgICAgIH0sXG4gICAgICBmaWxsczogY29sb3JzLFxuICAgICAgZGF0YTogc3RhdGVUb3RhbCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZVRvdGFsKTtcbiAgICBkcmF3TWFwLmxhYmVscygpO1xuICB9KTtcblxuLy8gZXhwb3J0IGNvbnN0IE1vZGVybmFEYXRhID0gZmV0Y2goXG4vLyAgIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9iN3BlLTVud3MuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbi8vIClcbi8vICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgIGxldCBzdGF0ZVRvdGFsID0ge307XG5cbi8vICAgICBkYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4vLyAgICAgICBsZXQgc3RhdGVOYW1lID0gYCR7c3RhdGUuanVyaXNkaWN0aW9ufWA7XG5cbi8vICAgICAgIGlmIChPYmplY3QudmFsdWVzKHN0YXRlVG90YWwpLmxlbmd0aCAhPT0gNjMpIHtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuLy8gICAgICAgICAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgICAgXzJuZF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTnVtYmVyKFxuLy8gICAgICAgICAgIHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9uc1xuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbi8vICAgICAgICAgICBzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnNcbi8vICAgICAgICAgKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhzdGF0ZVRvdGFsKTtcbi8vICAgfSk7XG5cbi8vIGV4cG9ydCBjb25zdCBKYW5zc2VuRGF0YSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2UvYjdwZS01bndzLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApXG4vLyAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICBpZiAoIXJlcy5vaykge1xuLy8gICAgICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuLy8gICAgIH1cbi8vICAgfSlcbi8vICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICBsZXQgc3RhdGVUb3RhbCA9IHt9O1xuXG4vLyAgICAgZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuLy8gICAgICAgbGV0IHN0YXRlTmFtZSA9IGAke3N0YXRlLmp1cmlzZGljdGlvbn1gO1xuXG4vLyAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZVRvdGFsKS5sZW5ndGggIT09IDYzKSB7XG4vLyAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXSA9IHtcbi8vICAgICAgICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuLy8gICAgICAgICAgIF8ybmRfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4vLyAgICAgICAgIH07XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbi8vICAgICAgICAgICBzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4vLyAgICAgICAgICAgc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zXG4vLyAgICAgICAgICk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGVUb3RhbCk7XG4vLyAgIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgTW9kZXJuYUR0YXRhID0gJC5hamF4KHtcbi8vICAgdXJsOiBcImh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL2I3cGUtNW53cy5qc29uXCIsXG4vLyAgIHR5cGU6IFwiR0VUXCIsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAkbGltaXQ6IDUwMDAsXG4vLyAgICAgJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIE1vZGVybmFcIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcblxuLy8gZXhwb3J0IGNvbnN0IEphbnNzZW5EYXRhID0gJC5hamF4KHtcbi8vICAgdXJsOiBcImh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3c5enUtZnl3aC5qc29uXCIsXG4vLyAgIHR5cGU6IFwiR0VUXCIsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAkbGltaXQ6IDUwMDAsXG4vLyAgICAgJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIEphbnNzZW5cIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBjb25zdCBQZml6ZXJSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXCJodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvblwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxuLy8gICAgICRsaW1pdDogNTAwMCxcbi8vICAgICAkJGFwcF90b2tlbjogYCR7QXBwVG9rZW59YCxcbi8vIH0pXG5cbi8vIGNvbnN0IFBmaXplckFwaSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9IFBmaXplckFwaS50aGVuKChyZXNwb25zZSkgPT5cbi8vICAgcmVzcG9uc2UuanNvbigpXG4vLyApLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9IGZldGNoKFxuLy8gICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4vLyApXG4vLyAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuXG4vLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbi8vICAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuLy8gKTtcblxuLy8gaWYgKHJlc3BvbnNlLm9rKSB7XG4vLyAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gfSBlbHNlIHtcbi8vICAgYWxlcnQoXCJIVFRQLUVycm9yOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBQZml6ZXJEYXRhID0gZmV0Y2goe1xuLy8gICB1cmw6IFwiaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvc2F6NS05aGdnLmpzb25cIixcbi8vICAgdHlwZTogXCJHRVRcIixcbi8vICAgZGF0YToge1xuLy8gJGxpbWl0OiA1MDAwLFxuLy8gJCRhcHBfdG9rZW46IGAke0FwcFRva2VufWAsXG4vLyAgIH0sXG4vLyB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgIGFsZXJ0KFwiUmV0cmlldmVkIFBmaXplclwiICsgZGF0YS5sZW5ndGggKyBcIiByZWNvcmRzIGZyb20gdGhlIGRhdGFzZXQhXCIpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIH0pO1xuXG4vLyBleHBvcnQgY29uc3QgUGZpemVyRGF0YSA9ICQuYWpheCh7XG4vLyAgIHVybDogXCJodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvblwiLFxuLy8gICB0eXBlOiBcIkdFVFwiLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgJGxpbWl0OiA1MDAwLFxuLy8gICAgICQkYXBwX3Rva2VuOiBgJHtBcHBUb2tlbn1gLFxuLy8gICB9LFxuLy8gfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuLy8gICBhbGVydChcIlJldHJpZXZlZCBQZml6ZXJcIiArIGRhdGEubGVuZ3RoICsgXCIgcmVjb3JkcyBmcm9tIHRoZSBkYXRhc2V0IVwiKTtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=