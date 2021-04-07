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
/* harmony import */ var _js_draw_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/draw_map */ "./src/js/draw_map.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/api_util */ "./src/js/api_util.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_api_util__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener("DOMContentLoaded", function () {
  var pfizerButton = document.querySelector("#pfizer");
  var modernaButton = document.querySelector("#moderna");
  var janssenButton = document.querySelector("#janssen");
  pfizerButton.addEventListener("click", function () {
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_2__["pfizerAPI"]);
  });
  modernaButton.addEventListener("click", function () {
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_2__["modernaAPI"]);
  });
  janssenButton.addEventListener("click", function () {
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_2__["janssenAPI"]);
  });
  Object(_js_draw_map__WEBPACK_IMPORTED_MODULE_1__["drawMap"])(_js_api_util__WEBPACK_IMPORTED_MODULE_2__["pfizerAPI"]);
});

function newMap(apiData) {
  var mapParent = document.querySelector(".usa-map");
  var map = document.querySelector("#map");
  var newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";
  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap);
  Object(_js_draw_map__WEBPACK_IMPORTED_MODULE_1__["drawMap"])(apiData);
}

/***/ }),

/***/ "./src/js/api_util.js":
/*!****************************!*\
  !*** ./src/js/api_util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AppToken = __webpack_require__(/*! ./secret */ "./src/js/secret.js");

var pfizerAPI = fetch("https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=".concat(AppToken, "&$limit=5000")).then(function (res) {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Pfizer");
    return res.json();
  }
});
var modernaAPI = fetch("https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=".concat(AppToken, "&$limit=5000")).then(function (res) {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Moderna");
    return res.json();
  }
});
var janssenAPI = fetch("https://data.cdc.gov/resource/w9zu-fywh.json?$$app_token=".concat(AppToken, "&$limit=5000")).then(function (res) {
  if (!res.ok) {
    throw Error("Api call unsuccessful");
  } else {
    // alert("Received Janssen");
    return res.json();
  }
});
module.exports = {
  pfizerAPI: pfizerAPI,
  modernaAPI: modernaAPI,
  janssenAPI: janssenAPI
};

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
    return "5000000";
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
  60000: "rgb(0,255,0)",
  defaultFill: "gray"
};

/***/ }),

/***/ "./src/js/draw_map.js":
/*!****************************!*\
  !*** ./src/js/draw_map.js ***!
  \****************************/
/*! exports provided: drawMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawMap", function() { return drawMap; });
var _require = __webpack_require__(/*! ./format_num */ "./src/js/format_num.js"),
    formatNumber = _require.formatNumber;

var _require2 = __webpack_require__(/*! ./state_Initials */ "./src/js/state_Initials.js"),
    stateInitials = _require2.stateInitials;

var _require3 = __webpack_require__(/*! ./calculate_fill */ "./src/js/calculate_fill.js"),
    calculateFill = _require3.calculateFill;

var _require4 = __webpack_require__(/*! ./colors */ "./src/js/colors.js"),
    colors = _require4.colors;

var drawMap = function drawMap(apiData) {
  apiData.then(function (data) {
    var stateTotal = {};
    data.forEach(function (state) {
      var stateName;

      if (stateInitials[state.jurisdiction]) {
        stateName = stateInitials[state.jurisdiction];
      } else {
        stateName = state.jurisdiction;
      }

      if (!state._2nd_dose_allocations) {}

      if (Object.values(stateTotal).length !== 63) {
        stateTotal[stateName] = {
          _1st_dose_allocations: Number(state._1st_dose_allocations),
          _2nd_dose_allocations: Number(state._2nd_dose_allocations)
        };
      } else {
        stateTotal[stateName]._1st_dose_allocations += Number(state._1st_dose_allocations);
        stateTotal[stateName]._2nd_dose_allocations += Number(state._2nd_dose_allocations);
        stateTotal[stateName].fillKey = calculateFill(stateTotal[stateName]._1st_dose_allocations);
      }
    });

    var addBigCitiesToStates = function addBigCitiesToStates() {
      var Philly = stateTotal["Philadelphia"];
      var PA = stateTotal["PA"];
      PA._1st_dose_allocations += Philly._1st_dose_allocations;
      PA._2nd_dose_allocations += Philly._2nd_dose_allocations;
      var NYC = stateTotal["New York City"];
      var NY = stateTotal["NY"];
      NY._1st_dose_allocations += NYC._1st_dose_allocations;
      NY._2nd_dose_allocations += NYC._2nd_dose_allocations;
      var Chicago = stateTotal["Chicago"];
      var IL = stateTotal["IL"];
      IL._1st_dose_allocations += Chicago._1st_dose_allocations;
      IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
    };

    addBigCitiesToStates(stateTotal);
    var map = new Datamap({
      scope: "usa",
      element: document.getElementById("map"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "rgb(59, 177, 255)",
        popupTemplate: function popupTemplate(geo) {
          if (!stateTotal[[geo.id]]._2nd_dose_allocations) {
            return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name, "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations), "</strong></p>", "</strong></div>"].join("");
          } else {
            return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name, "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations), "</strong></p>", '<p class="blue-text"><strong>', " 2nd Dose " + formatNumber(stateTotal[geo.id]._2nd_dose_allocations), "</strong></div>"].join("");
          }
        },
        highlightBorderWidth: 2
      },
      fills: colors,
      data: stateTotal
    });
    map.labels({
      labelColor: "white",
      fontFamily: "Roboto",
      fontSize: 12
    });
  });
};

/***/ }),

/***/ "./src/js/format_num.js":
/*!******************************!*\
  !*** ./src/js/format_num.js ***!
  \******************************/
/*! exports provided: formatNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
var formatNumber = function formatNumber(num) {
  var convert = num;
  var decimal = Math.abs(convert).toFixed(0);
  var nums = decimal.toString();
  nums = decimal.toString().split(".");
  nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var converted = "".concat(nums.join("."));
  return converted;
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
  // Chicago: "IL",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  "District of Columbia": "DC",
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
  // "New York City": "NY",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  "Northern Mariana Islands": "MP",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Palau: "PW",
  Pennsylvania: "PA",
  // Philadelphia: "PA",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRlX2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhd19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1hdF9udW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RhdGVfSW5pdGlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBmaXplckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtb2Rlcm5hQnV0dG9uIiwiamFuc3NlbkJ1dHRvbiIsIm5ld01hcCIsInBmaXplckFQSSIsIm1vZGVybmFBUEkiLCJqYW5zc2VuQVBJIiwiZHJhd01hcCIsImFwaURhdGEiLCJtYXBQYXJlbnQiLCJtYXAiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsIkFwcFRva2VuIiwicmVxdWlyZSIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGN1bGF0ZUZpbGwiLCJudW1Eb3NlcyIsImNvbG9ycyIsImRlZmF1bHRGaWxsIiwiZm9ybWF0TnVtYmVyIiwic3RhdGVJbml0aWFscyIsImRhdGEiLCJzdGF0ZVRvdGFsIiwiZm9yRWFjaCIsInN0YXRlIiwic3RhdGVOYW1lIiwianVyaXNkaWN0aW9uIiwiXzJuZF9kb3NlX2FsbG9jYXRpb25zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiXzFzdF9kb3NlX2FsbG9jYXRpb25zIiwiTnVtYmVyIiwiZmlsbEtleSIsImFkZEJpZ0NpdGllc1RvU3RhdGVzIiwiUGhpbGx5IiwiUEEiLCJOWUMiLCJOWSIsIkNoaWNhZ28iLCJJTCIsIkRhdGFtYXAiLCJzY29wZSIsImVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc3BvbnNpdmUiLCJnZW9ncmFwaHlDb25maWciLCJoaWdobGlnaHRCb3JkZXJDb2xvciIsInBvcHVwVGVtcGxhdGUiLCJnZW8iLCJwcm9wZXJ0aWVzIiwibmFtZSIsImpvaW4iLCJoaWdobGlnaHRCb3JkZXJXaWR0aCIsImZpbGxzIiwibGFiZWxzIiwibGFiZWxDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm51bSIsImNvbnZlcnQiLCJkZWNpbWFsIiwiTWF0aCIsImFicyIsInRvRml4ZWQiLCJudW1zIiwidG9TdHJpbmciLCJzcGxpdCIsInJlcGxhY2UiLCJjb252ZXJ0ZWQiLCJBbGFiYW1hIiwiQWxhc2thIiwiQXJpem9uYSIsIkFya2Fuc2FzIiwiQ2FsaWZvcm5pYSIsIkNvbG9yYWRvIiwiQ29ubmVjdGljdXQiLCJEZWxhd2FyZSIsIkZsb3JpZGEiLCJHZW9yZ2lhIiwiR3VhbSIsIkhhd2FpaSIsIklkYWhvIiwiSWxsaW5vaXMiLCJJbmRpYW5hIiwiSW93YSIsIkthbnNhcyIsIktlbnR1Y2t5IiwiTG91aXNpYW5hIiwiTWFpbmUiLCJNYXJ5bGFuZCIsIk1hc3NhY2h1c2V0dHMiLCJNaWNoaWdhbiIsIk1pbm5lc290YSIsIk1pc3Npc3NpcHBpIiwiTWlzc291cmkiLCJNb250YW5hIiwiTmVicmFza2EiLCJOZXZhZGEiLCJPaGlvIiwiT2tsYWhvbWEiLCJPcmVnb24iLCJQYWxhdSIsIlBlbm5zeWx2YW5pYSIsIlRlbm5lc3NlZSIsIlRleGFzIiwiVXRhaCIsIlZlcm1vbnQiLCJWaXJnaW5pYSIsIldhc2hpbmd0b24iLCJXaXNjb25zaW4iLCJXeW9taW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7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QUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE9BQXRDLEVBQStDO0FBQ3BELFdBQU8sU0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsT0FBWCxJQUFzQkEsUUFBUSxJQUFJLE1BQXRDLEVBQThDO0FBQ25ELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdBQUcsTUFBWCxJQUFxQkEsUUFBUSxJQUFJLE1BQXJDLEVBQTZDO0FBQ2xELFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxRQUFRLEdB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YyxJQXBDYTtBQXFDM0IsZ0JBQWMsSUFyQ2E7QUFzQzNCO0FBQ0EsY0FBWSxJQXZDZTtBQXdDM0Isb0JBQWtCLElBeENTO0FBeUMzQixrQkFBZ0IsSUF6Q1c7QUEwQzNCLDhCQUE0QixJQTFDRDtBQTJDM0JDLE1BQUksRUFBRSxJQTNDcUI7QUE0QzNCQyxVQUFRLEVBQUUsSUE1Q2lCO0FBNkMzQkMsUUFBTSxFQUFFLElBN0NtQjtBQThDM0JDLE9BQUssRUFBRSxJQTlDb0I7QUErQzNCQyxjQUFZLEVBQUUsSUEvQ2E7QUFnRDNCO0FBQ0EsaUJBQWUsSUFqRFk7QUFrRDNCLGtCQUFnQixJQWxEVztBQW1EM0Isb0JBQWtCLElBbkRTO0FBb0QzQixrQkFBZ0IsSUFwRFc7QUFxRDNCQyxXQUFTLEVBQUUsSUFyRGdCO0FBc0QzQkMsT0FBSyxFQUFFLElBdERvQjtBQXVEM0JDLE1BQUksRUFBRSxJQXZEcUI7QUF3RDNCQyxTQUFPLEVBQUUsSUF4RGtCO0FBeUQzQixvQkFBa0IsSUF6RFM7QUEwRDNCQyxVQUFRLEVBQUUsSUExRGlCO0FBMkQzQkMsWUFBVSxFQUFFLElBM0RlO0FBNEQzQixtQkFBaUIsSUE1RFU7QUE2RDNCQyxXQUFTLEVBQUUsSUE3RGdCO0FBOEQzQkMsU0FBTyxFQUFFO0FBOURrQixDQUF0QixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IGRyYXdNYXAgfSBmcm9tIFwiLi9qcy9kcmF3X21hcFwiO1xuaW1wb3J0IHsgcGZpemVyQVBJLCBtb2Rlcm5hQVBJLCBqYW5zc2VuQVBJIH0gZnJvbSBcIi4vanMvYXBpX3V0aWxcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBwZml6ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BmaXplclwiKTtcbiAgY29uc3QgbW9kZXJuYUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kZXJuYVwiKTtcbiAgY29uc3QgamFuc3NlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjamFuc3NlblwiKTtcblxuICBwZml6ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdNYXAocGZpemVyQVBJKTtcbiAgfSk7XG5cbiAgbW9kZXJuYUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld01hcChtb2Rlcm5hQVBJKTtcbiAgfSk7XG5cbiAgamFuc3NlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld01hcChqYW5zc2VuQVBJKTtcbiAgfSk7XG5cbiAgZHJhd01hcChwZml6ZXJBUEkpO1xufSk7XG5cbmZ1bmN0aW9uIG5ld01hcChhcGlEYXRhKSB7XG4gIGNvbnN0IG1hcFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNhLW1hcFwiKTtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXBcIik7XG5cbiAgbGV0IG5ld01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld01hcC5pZCA9IFwibWFwXCI7XG4gIG5ld01hcC5jbGFzc05hbWUgPSBcIm1hcFwiO1xuXG4gIG1hcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1hcCk7XG4gIG1hcFBhcmVudC5hcHBlbmRDaGlsZChuZXdNYXApO1xuXG4gIGRyYXdNYXAoYXBpRGF0YSk7XG59XG4iLCJjb25zdCBBcHBUb2tlbiA9IHJlcXVpcmUoXCIuL3NlY3JldFwiKTtcblxuY29uc3QgcGZpemVyQVBJID0gZmV0Y2goXG4gIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9zYXo1LTloZ2cuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbikudGhlbigocmVzKSA9PiB7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBQZml6ZXJcIik7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBtb2Rlcm5hQVBJID0gZmV0Y2goXG4gIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS9iN3BlLTVud3MuanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbikudGhlbigocmVzKSA9PiB7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBNb2Rlcm5hXCIpO1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9XG59KTtcblxuY29uc3QgamFuc3NlbkFQSSA9IGZldGNoKFxuICBgaHR0cHM6Ly9kYXRhLmNkYy5nb3YvcmVzb3VyY2Uvdzl6dS1meXdoLmpzb24/JCRhcHBfdG9rZW49JHtBcHBUb2tlbn0mJGxpbWl0PTUwMDBgXG4pLnRoZW4oKHJlcykgPT4ge1xuICBpZiAoIXJlcy5vaykge1xuICAgIHRocm93IEVycm9yKFwiQXBpIGNhbGwgdW5zdWNjZXNzZnVsXCIpO1xuICB9IGVsc2Uge1xuICAgIC8vIGFsZXJ0KFwiUmVjZWl2ZWQgSmFuc3NlblwiKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBwZml6ZXJBUEksIG1vZGVybmFBUEksIGphbnNzZW5BUEkgfTtcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVGaWxsID0gKG51bURvc2VzKSA9PiB7XG4gIGlmIChudW1Eb3NlcyA+PSA2MDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjAwMDAwMCAmJiBudW1Eb3NlcyA+PSA1MDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTAwMDAwMCAmJiBudW1Eb3NlcyA+PSA0MDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNDAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDAwMDAwMCAmJiBudW1Eb3NlcyA+PSAzNTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzUwMDAwMCAmJiBudW1Eb3NlcyA+PSAzMDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzAwMDAwMCAmJiBudW1Eb3NlcyA+PSAyNTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjUwMDAwMCAmJiBudW1Eb3NlcyA+PSAyMDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjAwMDAwMCAmJiBudW1Eb3NlcyA+PSAxODAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTgwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTgwMDAwMCAmJiBudW1Eb3NlcyA+PSAxNjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTYwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTYwMDAwMCAmJiBudW1Eb3NlcyA+PSAxNTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTUwMDAwMCAmJiBudW1Eb3NlcyA+PSAxNDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTQwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTQwMDAwMCAmJiBudW1Eb3NlcyA+PSAxMzAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTMwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTMwMDAwMCAmJiBudW1Eb3NlcyA+PSAxMjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTIwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTIwMDAwMCAmJiBudW1Eb3NlcyA+PSAxMTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTEwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTEwMDAwMCAmJiBudW1Eb3NlcyA+PSAxMDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTAwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTAwMDAwMCAmJiBudW1Eb3NlcyA+PSA5NTAwMDApIHtcbiAgICByZXR1cm4gXCI5NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDk1MDAwMCAmJiBudW1Eb3NlcyA+PSA5MDAwMDApIHtcbiAgICByZXR1cm4gXCI5MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDkwMDAwMCAmJiBudW1Eb3NlcyA+PSA4NTAwMDApIHtcbiAgICByZXR1cm4gXCI4NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDg1MDAwMCAmJiBudW1Eb3NlcyA+PSA4MDAwMDApIHtcbiAgICByZXR1cm4gXCI4MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDgwMDAwMCAmJiBudW1Eb3NlcyA+PSA3NTAwMDApIHtcbiAgICByZXR1cm4gXCI3NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDc1MDAwMCAmJiBudW1Eb3NlcyA+PSA3MDAwMDApIHtcbiAgICByZXR1cm4gXCI3MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDcwMDAwMCAmJiBudW1Eb3NlcyA+PSA2NTAwMDApIHtcbiAgICByZXR1cm4gXCI2NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDY1MDAwMCAmJiBudW1Eb3NlcyA+PSA2MDAwMDApIHtcbiAgICByZXR1cm4gXCI2MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDYwMDAwMCAmJiBudW1Eb3NlcyA+PSA1NTAwMDApIHtcbiAgICByZXR1cm4gXCI1NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDU1MDAwMCAmJiBudW1Eb3NlcyA+PSA1MDAwMDApIHtcbiAgICByZXR1cm4gXCI1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDUwMDAwMCAmJiBudW1Eb3NlcyA+PSA0NTAwMDApIHtcbiAgICByZXR1cm4gXCI0NTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDQ1MDAwMCAmJiBudW1Eb3NlcyA+PSA0MDAwMDApIHtcbiAgICByZXR1cm4gXCI0MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDQwMDAwMCAmJiBudW1Eb3NlcyA+PSAzNTAwMDApIHtcbiAgICByZXR1cm4gXCIzNTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDM1MDAwMCAmJiBudW1Eb3NlcyA+PSAzMDAwMDApIHtcbiAgICByZXR1cm4gXCIzMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDMwMDAwMCAmJiBudW1Eb3NlcyA+PSAyNTAwMDApIHtcbiAgICByZXR1cm4gXCIyNTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDI1MDAwMCAmJiBudW1Eb3NlcyA+PSAyMDAwMDApIHtcbiAgICByZXR1cm4gXCIyMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDIwMDAwMCAmJiBudW1Eb3NlcyA+PSAxODAwMDApIHtcbiAgICByZXR1cm4gXCIxODAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE4MDAwMCAmJiBudW1Eb3NlcyA+PSAxNjAwMDApIHtcbiAgICByZXR1cm4gXCIxNjAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE2MDAwMCAmJiBudW1Eb3NlcyA+PSAxNTAwMDApIHtcbiAgICByZXR1cm4gXCIxNTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE1MDAwMCAmJiBudW1Eb3NlcyA+PSAxNDAwMDApIHtcbiAgICByZXR1cm4gXCIxNDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE0MDAwMCAmJiBudW1Eb3NlcyA+PSAxMzAwMDApIHtcbiAgICByZXR1cm4gXCIxMzAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEzMDAwMCAmJiBudW1Eb3NlcyA+PSAxMjAwMDApIHtcbiAgICByZXR1cm4gXCIxMjAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEyMDAwMCAmJiBudW1Eb3NlcyA+PSAxMTAwMDApIHtcbiAgICByZXR1cm4gXCIxMTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDExMDAwMCAmJiBudW1Eb3NlcyA+PSAxMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEwMDAwMCAmJiBudW1Eb3NlcyA+PSA5MDAwMCkge1xuICAgIHJldHVybiBcIjkwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA5MDAwMCAmJiBudW1Eb3NlcyA+PSA4MDAwMCkge1xuICAgIHJldHVybiBcIjgwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA4MDAwMCAmJiBudW1Eb3NlcyA+PSA3MDAwMCkge1xuICAgIHJldHVybiBcIjcwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA3MDAwMCAmJiBudW1Eb3NlcyA+PSA2MDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiZGVmYXVsdEZpbGxcIjtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIDYwMDAwMDA6IFwicmdiKDAsNTAsMClcIixcbiAgNTAwMDAwMDogXCJyZ2IoMCw1NSwwKVwiLFxuICA0MDAwMDAwOiBcInJnYigwLDYwLDApXCIsXG4gIDM1MDAwMDA6IFwicmdiKDAsNzAsMClcIixcbiAgMzAwMDAwMDogXCJyZ2IoMCw4MCwwKVwiLFxuICAyNTAwMDAwOiBcInJnYigwLDkwLDApXCIsXG4gIDIwMDAwMDA6IFwicmdiKDAsMTAwLDApXCIsXG4gIDE4MDAwMDA6IFwicmdiKDAsMTEwLDApXCIsXG4gIDE2MDAwMDA6IFwicmdiKDAsMTIwLDApXCIsXG4gIDE1MDAwMDA6IFwicmdiKDAsMTMwLDApXCIsXG4gIDE0MDAwMDA6IFwicmdiKDAsMTQwLDApXCIsXG4gIDEzMDAwMDA6IFwicmdiKDAsMTUwLDApXCIsXG4gIDEyMDAwMDA6IFwicmdiKDAsMTU1LDApXCIsXG4gIDExMDAwMDA6IFwicmdiKDAsMTYwLDApXCIsXG4gIDEwMDAwMDA6IFwicmdiKDAsMTY1LDApXCIsXG4gIDk1MDAwMDogXCJyZ2IoMCwxNzAsMClcIixcbiAgOTAwMDAwOiBcInJnYigwLDE3NSwwKVwiLFxuICA4NTAwMDA6IFwicmdiKDAsMTgwLDApXCIsXG4gIDgwMDAwMDogXCJyZ2IoMCwxODUsMClcIixcbiAgNzUwMDAwOiBcInJnYigwLDE5MCwwKVwiLFxuICA3MDAwMDA6IFwicmdiKDAsMTk1LDApXCIsXG4gIDY1MDAwMDogXCJyZ2IoMCwyMDAsMClcIixcbiAgNjAwMDAwOiBcInJnYigwLDIwNSwwKVwiLFxuICA1NTAwMDA6IFwicmdiKDAsMjEwLDApXCIsXG4gIDUwMDAwMDogXCJyZ2IoMCwyMTUsMClcIixcbiAgNDUwMDAwOiBcInJnYigwLDIyMCwwKVwiLFxuICA0MDAwMDA6IFwicmdiKDAsMjI1LDApXCIsXG4gIDM1MDAwMDogXCJyZ2IoMCwyMzAsMClcIixcbiAgMzAwMDAwOiBcInJnYigwLDIzNSwwKVwiLFxuICAyNTAwMDA6IFwicmdiKDAsMjQwLDApXCIsXG4gIDIwMDAwMDogXCJyZ2IoMCwyNDIsMClcIixcbiAgMTgwMDAwOiBcInJnYigwLDI0NCwwKVwiLFxuICAxNjAwMDA6IFwicmdiKDAsMjQ1LDApXCIsXG4gIDE1MDAwMDogXCJyZ2IoMCwyNDYsMClcIixcbiAgMTQwMDAwOiBcInJnYigwLDI0NywwKVwiLFxuICAxMzAwMDA6IFwicmdiKDAsMjQ4LDApXCIsXG4gIDEyMDAwMDogXCJyZ2IoMCwyNDksMClcIixcbiAgMTEwMDAwOiBcInJnYigwLDI1MCwwKVwiLFxuICAxMDAwMDA6IFwicmdiKDAsMjUxLDApXCIsXG4gIDkwMDAwOiBcInJnYigwLDI1MiwwKVwiLFxuICA4MDAwMDogXCJyZ2IoMCwyNTMsMClcIixcbiAgNzAwMDA6IFwicmdiKDAsMjU0LDApXCIsXG4gIDYwMDAwOiBcInJnYigwLDI1NSwwKVwiLFxuICBkZWZhdWx0RmlsbDogXCJncmF5XCIsXG59O1xuIiwiY29uc3QgeyBmb3JtYXROdW1iZXIgfSA9IHJlcXVpcmUoXCIuL2Zvcm1hdF9udW1cIik7XG5jb25zdCB7IHN0YXRlSW5pdGlhbHMgfSA9IHJlcXVpcmUoXCIuL3N0YXRlX0luaXRpYWxzXCIpO1xuY29uc3QgeyBjYWxjdWxhdGVGaWxsIH0gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVfZmlsbFwiKTtcbmNvbnN0IHsgY29sb3JzIH0gPSByZXF1aXJlKFwiLi9jb2xvcnNcIik7XG5cbmV4cG9ydCBjb25zdCBkcmF3TWFwID0gKGFwaURhdGEpID0+IHtcbiAgYXBpRGF0YS50aGVuKChkYXRhKSA9PiB7XG4gICAgbGV0IHN0YXRlVG90YWwgPSB7fTtcblxuICAgIGRhdGEuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgIGxldCBzdGF0ZU5hbWU7XG4gICAgICBpZiAoc3RhdGVJbml0aWFsc1tzdGF0ZS5qdXJpc2RpY3Rpb25dKSB7XG4gICAgICAgIHN0YXRlTmFtZSA9IHN0YXRlSW5pdGlhbHNbc3RhdGUuanVyaXNkaWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlTmFtZSA9IHN0YXRlLmp1cmlzZGljdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGVUb3RhbCkubGVuZ3RoICE9PSA2Mykge1xuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0gPSB7XG4gICAgICAgICAgXzFzdF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICBfMm5kX2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgICAgICAgc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gTnVtYmVyKFxuICAgICAgICAgIHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9uc1xuICAgICAgICApO1xuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uZmlsbEtleSA9IGNhbGN1bGF0ZUZpbGwoXG4gICAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8xc3RfZG9zZV9hbGxvY2F0aW9uc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkQmlnQ2l0aWVzVG9TdGF0ZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBQaGlsbHkgPSBzdGF0ZVRvdGFsW1wiUGhpbGFkZWxwaGlhXCJdO1xuICAgICAgY29uc3QgUEEgPSBzdGF0ZVRvdGFsW1wiUEFcIl07XG4gICAgICBQQS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gUGhpbGx5Ll8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgICAgIFBBLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBQaGlsbHkuXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBOWUMgPSBzdGF0ZVRvdGFsW1wiTmV3IFlvcmsgQ2l0eVwiXTtcbiAgICAgIGNvbnN0IE5ZID0gc3RhdGVUb3RhbFtcIk5ZXCJdO1xuICAgICAgTlkuXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE5ZQy5fMXN0X2Rvc2VfYWxsb2NhdGlvbnM7XG4gICAgICBOWS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gTllDLl8ybmRfZG9zZV9hbGxvY2F0aW9ucztcblxuICAgICAgY29uc3QgQ2hpY2FnbyA9IHN0YXRlVG90YWxbXCJDaGljYWdvXCJdO1xuICAgICAgY29uc3QgSUwgPSBzdGF0ZVRvdGFsW1wiSUxcIl07XG4gICAgICBJTC5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gQ2hpY2Fnby5fMXN0X2Rvc2VfYWxsb2NhdGlvbnM7XG4gICAgICBJTC5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gQ2hpY2Fnby5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG4gICAgfTtcblxuICAgIGFkZEJpZ0NpdGllc1RvU3RhdGVzKHN0YXRlVG90YWwpO1xuXG4gICAgY29uc3QgbWFwID0gbmV3IERhdGFtYXAoe1xuICAgICAgc2NvcGU6IFwidXNhXCIsXG4gICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSxcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICBnZW9ncmFwaHlDb25maWc6IHtcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyQ29sb3I6IFwicmdiKDU5LCAxNzcsIDI1NSlcIixcbiAgICAgICAgcG9wdXBUZW1wbGF0ZTogKGdlbykgPT4ge1xuICAgICAgICAgIGlmICghc3RhdGVUb3RhbFtbZ2VvLmlkXV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhvdmVyaW5mb1wiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwic3RhdGUtbmFtZVwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgZ2VvLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cImdyZWVuLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgICAgICAgICBmb3JtYXROdW1iZXIoc3RhdGVUb3RhbFtnZW8uaWRdLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvZGl2PlwiLFxuICAgICAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhvdmVyaW5mb1wiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwic3RhdGUtbmFtZVwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgZ2VvLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cImdyZWVuLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgICAgICAgICBmb3JtYXROdW1iZXIoc3RhdGVUb3RhbFtnZW8uaWRdLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJibHVlLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIFwiIDJuZCBEb3NlIFwiICtcbiAgICAgICAgICAgICAgICBmb3JtYXROdW1iZXIoc3RhdGVUb3RhbFtnZW8uaWRdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9kaXY+XCIsXG4gICAgICAgICAgICBdLmpvaW4oXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJXaWR0aDogMixcbiAgICAgIH0sXG4gICAgICBmaWxsczogY29sb3JzLFxuICAgICAgZGF0YTogc3RhdGVUb3RhbCxcbiAgICB9KTtcbiAgICBtYXAubGFiZWxzKHtcbiAgICAgIGxhYmVsQ29sb3I6IFwid2hpdGVcIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtKSA9PiB7XG4gIGxldCBjb252ZXJ0ID0gbnVtO1xuICBjb25zdCBkZWNpbWFsID0gTWF0aC5hYnMoY29udmVydCkudG9GaXhlZCgwKTtcbiAgbGV0IG51bXMgPSBkZWNpbWFsLnRvU3RyaW5nKCk7XG4gIG51bXMgPSBkZWNpbWFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICBudW1zWzBdID0gbnVtc1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIGNvbnN0IGNvbnZlcnRlZCA9IGAke251bXMuam9pbihcIi5cIil9YDtcbiAgcmV0dXJuIGNvbnZlcnRlZDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiUnBickpMdHJDWXpvODhoZkpCTGVnMmZ5QlwiO1xuIiwiZXhwb3J0IGNvbnN0IHN0YXRlSW5pdGlhbHMgPSB7XG4gIEFsYWJhbWE6IFwiQUxcIixcbiAgQWxhc2thOiBcIkFLXCIsXG4gIFwiQW1lcmljYW4gU2Ftb2FcIjogXCJBU1wiLFxuICBBcml6b25hOiBcIkFaXCIsXG4gIEFya2Fuc2FzOiBcIkFSXCIsXG4gIENhbGlmb3JuaWE6IFwiQ0FcIixcbiAgLy8gQ2hpY2FnbzogXCJJTFwiLFxuICBDb2xvcmFkbzogXCJDT1wiLFxuICBDb25uZWN0aWN1dDogXCJDVFwiLFxuICBEZWxhd2FyZTogXCJERVwiLFxuICBcIkRpc3RyaWN0IG9mIENvbHVtYmlhXCI6IFwiRENcIixcbiAgXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIjogXCJGTVwiLFxuICBGbG9yaWRhOiBcIkZMXCIsXG4gIEdlb3JnaWE6IFwiR0FcIixcbiAgR3VhbTogXCJHVVwiLFxuICBIYXdhaWk6IFwiSElcIixcbiAgSWRhaG86IFwiSURcIixcbiAgSWxsaW5vaXM6IFwiSUxcIixcbiAgSW5kaWFuYTogXCJJTlwiLFxuICBJb3dhOiBcIklBXCIsXG4gIEthbnNhczogXCJLU1wiLFxuICBLZW50dWNreTogXCJLWVwiLFxuICBMb3Vpc2lhbmE6IFwiTEFcIixcbiAgTWFpbmU6IFwiTUVcIixcbiAgXCJNYXJzaGFsbCBJc2xhbmRzXCI6IFwiTUhcIixcbiAgTWFyeWxhbmQ6IFwiTURcIixcbiAgTWFzc2FjaHVzZXR0czogXCJNQVwiLFxuICBNaWNoaWdhbjogXCJNSVwiLFxuICBNaW5uZXNvdGE6IFwiTU5cIixcbiAgTWlzc2lzc2lwcGk6IFwiTVNcIixcbiAgTWlzc291cmk6IFwiTU9cIixcbiAgTW9udGFuYTogXCJNVFwiLFxuICBOZWJyYXNrYTogXCJORVwiLFxuICBOZXZhZGE6IFwiTlZcIixcbiAgXCJOZXcgSGFtcHNoaXJlXCI6IFwiTkhcIixcbiAgXCJOZXcgSmVyc2V5XCI6IFwiTkpcIixcbiAgXCJOZXcgTWV4aWNvXCI6IFwiTk1cIixcbiAgLy8gXCJOZXcgWW9yayBDaXR5XCI6IFwiTllcIixcbiAgXCJOZXcgWW9ya1wiOiBcIk5ZXCIsXG4gIFwiTm9ydGggQ2Fyb2xpbmFcIjogXCJOQ1wiLFxuICBcIk5vcnRoIERha290YVwiOiBcIk5EXCIsXG4gIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCI6IFwiTVBcIixcbiAgT2hpbzogXCJPSFwiLFxuICBPa2xhaG9tYTogXCJPS1wiLFxuICBPcmVnb246IFwiT1JcIixcbiAgUGFsYXU6IFwiUFdcIixcbiAgUGVubnN5bHZhbmlhOiBcIlBBXCIsXG4gIC8vIFBoaWxhZGVscGhpYTogXCJQQVwiLFxuICBcIlB1ZXJ0byBSaWNvXCI6IFwiUFJcIixcbiAgXCJSaG9kZSBJc2xhbmRcIjogXCJSSVwiLFxuICBcIlNvdXRoIENhcm9saW5hXCI6IFwiU0NcIixcbiAgXCJTb3V0aCBEYWtvdGFcIjogXCJTRFwiLFxuICBUZW5uZXNzZWU6IFwiVE5cIixcbiAgVGV4YXM6IFwiVFhcIixcbiAgVXRhaDogXCJVVFwiLFxuICBWZXJtb250OiBcIlZUXCIsXG4gIFwiVmlyZ2luIElzbGFuZHNcIjogXCJWSVwiLFxuICBWaXJnaW5pYTogXCJWQVwiLFxuICBXYXNoaW5ndG9uOiBcIldBXCIsXG4gIFwiV2VzdCBWaXJnaW5pYVwiOiBcIldWXCIsXG4gIFdpc2NvbnNpbjogXCJXSVwiLFxuICBXeW9taW5nOiBcIldZXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==