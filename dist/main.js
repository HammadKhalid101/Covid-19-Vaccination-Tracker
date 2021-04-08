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
  var modalButton = document.querySelector(".modal-map-button");
  modalButton.addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRlX2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhd19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Zvcm1hdF9udW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RhdGVfSW5pdGlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBmaXplckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtb2Rlcm5hQnV0dG9uIiwiamFuc3NlbkJ1dHRvbiIsIm1vZGFsQnV0dG9uIiwibW9kYWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdNYXAiLCJwZml6ZXJBUEkiLCJtb2Rlcm5hQVBJIiwiamFuc3NlbkFQSSIsImRyYXdNYXAiLCJhcGlEYXRhIiwibWFwUGFyZW50IiwibWFwIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJBcHBUb2tlbiIsInJlcXVpcmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxjdWxhdGVGaWxsIiwibnVtRG9zZXMiLCJjb2xvcnMiLCJkZWZhdWx0RmlsbCIsImZvcm1hdE51bWJlciIsInN0YXRlSW5pdGlhbHMiLCJkYXRhIiwic3RhdGVUb3RhbCIsImZvckVhY2giLCJzdGF0ZSIsInN0YXRlTmFtZSIsImp1cmlzZGljdGlvbiIsIl8ybmRfZG9zZV9hbGxvY2F0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsIl8xc3RfZG9zZV9hbGxvY2F0aW9ucyIsIk51bWJlciIsImZpbGxLZXkiLCJhZGRCaWdDaXRpZXNUb1N0YXRlcyIsIlBoaWxseSIsIlBBIiwiTllDIiwiTlkiLCJDaGljYWdvIiwiSUwiLCJEYXRhbWFwIiwic2NvcGUiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNwb25zaXZlIiwiZ2VvZ3JhcGh5Q29uZmlnIiwiaGlnaGxpZ2h0Qm9yZGVyQ29sb3IiLCJwb3B1cFRlbXBsYXRlIiwiZ2VvIiwicHJvcGVydGllcyIsIm5hbWUiLCJqb2luIiwiaGlnaGxpZ2h0Qm9yZGVyV2lkdGgiLCJmaWxscyIsImxhYmVscyIsImxhYmVsQ29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJudW0iLCJjb252ZXJ0IiwiZGVjaW1hbCIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIiwibnVtcyIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwiY29udmVydGVkIiwiQWxhYmFtYSIsIkFsYXNrYSIsIkFyaXpvbmEiLCJBcmthbnNhcyIsIkNhbGlmb3JuaWEiLCJDb2xvcmFkbyIsIkNvbm5lY3RpY3V0IiwiRGVsYXdhcmUiLCJGbG9yaWRhIiwiR2VvcmdpYSIsIkd1YW0iLCJIYXdhaWkiLCJJZGFobyIsIklsbGlub2lzIiwiSW5kaWFuYSIsIklvd2EiLCJLYW5zYXMiLCJLZW50dWNreSIsIkxvdWlzaWFuYSIsIk1haW5lIiwiTWFyeWxhbmQiLCJNYXNzYWNodXNldHRzIiwiTWljaGlnYW4iLCJNaW5uZXNvdGEiLCJNaXNzaXNzaXBwaSIsIk1pc3NvdXJpIiwiTW9udGFuYSIsIk5lYnJhc2thIiwiTmV2YWRhIiwiT2hpbyIsIk9rbGFob21hIiwiT3JlZ29uIiwiUGFsYXUiLCJQZW5uc3lsdmFuaWEiLCJUZW5uZXNzZWUiLCJUZXhhcyIsIlV0YWgiLCJWZXJtb250IiwiVmlyZ2luaWEiLCJXYXNoaW5ndG9uIiwiV2lzY29u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QUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxPQUF0QyxFQUErQztBQUNwRCxXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE9BQVgsSUFBc0JBLFFBQVEsSUFBSSxNQUF0QyxFQUE4QztBQUNuRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsUUFBUSxHQUFHLE1BQVgsSUFBcUJBLFFBQVEsSUFBSSxNQUFyQyxFQUE2QztBQUNsRCxXQUFPLFFBQVA7QUFDRCxHQUZNLE1B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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBkcmF3TWFwIH0gZnJvbSBcIi4vanMvZHJhd19tYXBcIjtcbmltcG9ydCB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9IGZyb20gXCIuL2pzL2FwaV91dGlsXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgcGZpemVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZml6ZXJcIik7XG4gIGNvbnN0IG1vZGVybmFCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGVybmFcIik7XG4gIGNvbnN0IGphbnNzZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2phbnNzZW5cIik7XG4gIGNvbnN0IG1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1tYXAtYnV0dG9uXCIpO1xuXG4gIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtbW9kYWxcIik7XG4gIH0pO1xuXG4gIHBmaXplckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld01hcChwZml6ZXJBUEkpO1xuICB9KTtcblxuICBtb2Rlcm5hQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3TWFwKG1vZGVybmFBUEkpO1xuICB9KTtcblxuICBqYW5zc2VuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3TWFwKGphbnNzZW5BUEkpO1xuICB9KTtcblxuICBkcmF3TWFwKHBmaXplckFQSSk7XG59KTtcblxuZnVuY3Rpb24gbmV3TWFwKGFwaURhdGEpIHtcbiAgY29uc3QgbWFwUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2EtbWFwXCIpO1xuICBjb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcFwiKTtcblxuICBsZXQgbmV3TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3TWFwLmlkID0gXCJtYXBcIjtcbiAgbmV3TWFwLmNsYXNzTmFtZSA9IFwibWFwXCI7XG5cbiAgbWFwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWFwKTtcbiAgbWFwUGFyZW50LmFwcGVuZENoaWxkKG5ld01hcCk7XG5cbiAgZHJhd01hcChhcGlEYXRhKTtcbn1cbiIsImNvbnN0IEFwcFRva2VuID0gcmVxdWlyZShcIi4vc2VjcmV0XCIpO1xuXG5jb25zdCBwZml6ZXJBUEkgPSBmZXRjaChcbiAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuKS50aGVuKChyZXMpID0+IHtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhbGVydChcIlJlY2VpdmVkIFBmaXplclwiKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxufSk7XG5cbmNvbnN0IG1vZGVybmFBUEkgPSBmZXRjaChcbiAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL2I3cGUtNW53cy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuKS50aGVuKChyZXMpID0+IHtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhbGVydChcIlJlY2VpdmVkIE1vZGVybmFcIik7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBqYW5zc2VuQVBJID0gZmV0Y2goXG4gIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS93OXp1LWZ5d2guanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbikudGhlbigocmVzKSA9PiB7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBKYW5zc2VuXCIpO1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9O1xuIiwiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUZpbGwgPSAobnVtRG9zZXMpID0+IHtcbiAgaWYgKG51bURvc2VzID49IDYwMDAwMDApIHtcbiAgICByZXR1cm4gXCI2MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2MDAwMDAwICYmIG51bURvc2VzID49IDUwMDAwMDApIHtcbiAgICByZXR1cm4gXCI1MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1MDAwMDAwICYmIG51bURvc2VzID49IDQwMDAwMDApIHtcbiAgICByZXR1cm4gXCI0MDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0MDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMDApIHtcbiAgICByZXR1cm4gXCIzNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzNTAwMDAwICYmIG51bURvc2VzID49IDMwMDAwMDApIHtcbiAgICByZXR1cm4gXCIzMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzMDAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMDApIHtcbiAgICByZXR1cm4gXCIyNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyNTAwMDAwICYmIG51bURvc2VzID49IDIwMDAwMDApIHtcbiAgICByZXR1cm4gXCIyMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyMDAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMDApIHtcbiAgICByZXR1cm4gXCIxODAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxODAwMDAwICYmIG51bURvc2VzID49IDE2MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNjAwMDAwICYmIG51bURvc2VzID49IDE1MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNTAwMDAwICYmIG51bURvc2VzID49IDE0MDAwMDApIHtcbiAgICByZXR1cm4gXCIxNDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNDAwMDAwICYmIG51bURvc2VzID49IDEzMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMzAwMDAwICYmIG51bURvc2VzID49IDEyMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMjAwMDAwICYmIG51bURvc2VzID49IDExMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMTAwMDAwICYmIG51bURvc2VzID49IDEwMDAwMDApIHtcbiAgICByZXR1cm4gXCIxMDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMDAwMDAwICYmIG51bURvc2VzID49IDk1MDAwMCkge1xuICAgIHJldHVybiBcIjk1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTUwMDAwICYmIG51bURvc2VzID49IDkwMDAwMCkge1xuICAgIHJldHVybiBcIjkwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTAwMDAwICYmIG51bURvc2VzID49IDg1MDAwMCkge1xuICAgIHJldHVybiBcIjg1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODUwMDAwICYmIG51bURvc2VzID49IDgwMDAwMCkge1xuICAgIHJldHVybiBcIjgwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODAwMDAwICYmIG51bURvc2VzID49IDc1MDAwMCkge1xuICAgIHJldHVybiBcIjc1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzUwMDAwICYmIG51bURvc2VzID49IDcwMDAwMCkge1xuICAgIHJldHVybiBcIjcwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzAwMDAwICYmIG51bURvc2VzID49IDY1MDAwMCkge1xuICAgIHJldHVybiBcIjY1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjUwMDAwICYmIG51bURvc2VzID49IDYwMDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNjAwMDAwICYmIG51bURvc2VzID49IDU1MDAwMCkge1xuICAgIHJldHVybiBcIjU1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTUwMDAwICYmIG51bURvc2VzID49IDUwMDAwMCkge1xuICAgIHJldHVybiBcIjUwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNTAwMDAwICYmIG51bURvc2VzID49IDQ1MDAwMCkge1xuICAgIHJldHVybiBcIjQ1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDUwMDAwICYmIG51bURvc2VzID49IDQwMDAwMCkge1xuICAgIHJldHVybiBcIjQwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNDAwMDAwICYmIG51bURvc2VzID49IDM1MDAwMCkge1xuICAgIHJldHVybiBcIjM1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzUwMDAwICYmIG51bURvc2VzID49IDMwMDAwMCkge1xuICAgIHJldHVybiBcIjMwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMzAwMDAwICYmIG51bURvc2VzID49IDI1MDAwMCkge1xuICAgIHJldHVybiBcIjI1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjUwMDAwICYmIG51bURvc2VzID49IDIwMDAwMCkge1xuICAgIHJldHVybiBcIjIwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMjAwMDAwICYmIG51bURvc2VzID49IDE4MDAwMCkge1xuICAgIHJldHVybiBcIjE4MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTgwMDAwICYmIG51bURvc2VzID49IDE2MDAwMCkge1xuICAgIHJldHVybiBcIjE2MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTYwMDAwICYmIG51bURvc2VzID49IDE1MDAwMCkge1xuICAgIHJldHVybiBcIjE1MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTUwMDAwICYmIG51bURvc2VzID49IDE0MDAwMCkge1xuICAgIHJldHVybiBcIjE0MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTQwMDAwICYmIG51bURvc2VzID49IDEzMDAwMCkge1xuICAgIHJldHVybiBcIjEzMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTMwMDAwICYmIG51bURvc2VzID49IDEyMDAwMCkge1xuICAgIHJldHVybiBcIjEyMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTIwMDAwICYmIG51bURvc2VzID49IDExMDAwMCkge1xuICAgIHJldHVybiBcIjExMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTEwMDAwICYmIG51bURvc2VzID49IDEwMDAwMCkge1xuICAgIHJldHVybiBcIjEwMDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgMTAwMDAwICYmIG51bURvc2VzID49IDkwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDkwMDAwICYmIG51bURvc2VzID49IDgwMDAwKSB7XG4gICAgcmV0dXJuIFwiODAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDgwMDAwICYmIG51bURvc2VzID49IDcwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDcwMDAwICYmIG51bURvc2VzID49IDYwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDBcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJkZWZhdWx0RmlsbFwiO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgNjAwMDAwMDogXCJyZ2IoMCw1MCwwKVwiLFxuICA1MDAwMDAwOiBcInJnYigwLDU1LDApXCIsXG4gIDQwMDAwMDA6IFwicmdiKDAsNjAsMClcIixcbiAgMzUwMDAwMDogXCJyZ2IoMCw3MCwwKVwiLFxuICAzMDAwMDAwOiBcInJnYigwLDgwLDApXCIsXG4gIDI1MDAwMDA6IFwicmdiKDAsOTAsMClcIixcbiAgMjAwMDAwMDogXCJyZ2IoMCwxMDAsMClcIixcbiAgMTgwMDAwMDogXCJyZ2IoMCwxMTAsMClcIixcbiAgMTYwMDAwMDogXCJyZ2IoMCwxMjAsMClcIixcbiAgMTUwMDAwMDogXCJyZ2IoMCwxMzAsMClcIixcbiAgMTQwMDAwMDogXCJyZ2IoMCwxNDAsMClcIixcbiAgMTMwMDAwMDogXCJyZ2IoMCwxNTAsMClcIixcbiAgMTIwMDAwMDogXCJyZ2IoMCwxNTUsMClcIixcbiAgMTEwMDAwMDogXCJyZ2IoMCwxNjAsMClcIixcbiAgMTAwMDAwMDogXCJyZ2IoMCwxNjUsMClcIixcbiAgOTUwMDAwOiBcInJnYigwLDE3MCwwKVwiLFxuICA5MDAwMDA6IFwicmdiKDAsMTc1LDApXCIsXG4gIDg1MDAwMDogXCJyZ2IoMCwxODAsMClcIixcbiAgODAwMDAwOiBcInJnYigwLDE4NSwwKVwiLFxuICA3NTAwMDA6IFwicmdiKDAsMTkwLDApXCIsXG4gIDcwMDAwMDogXCJyZ2IoMCwxOTUsMClcIixcbiAgNjUwMDAwOiBcInJnYigwLDIwMCwwKVwiLFxuICA2MDAwMDA6IFwicmdiKDAsMjA1LDApXCIsXG4gIDU1MDAwMDogXCJyZ2IoMCwyMTAsMClcIixcbiAgNTAwMDAwOiBcInJnYigwLDIxNSwwKVwiLFxuICA0NTAwMDA6IFwicmdiKDAsMjIwLDApXCIsXG4gIDQwMDAwMDogXCJyZ2IoMCwyMjUsMClcIixcbiAgMzUwMDAwOiBcInJnYigwLDIzMCwwKVwiLFxuICAzMDAwMDA6IFwicmdiKDAsMjM1LDApXCIsXG4gIDI1MDAwMDogXCJyZ2IoMCwyNDAsMClcIixcbiAgMjAwMDAwOiBcInJnYigwLDI0MiwwKVwiLFxuICAxODAwMDA6IFwicmdiKDAsMjQ0LDApXCIsXG4gIDE2MDAwMDogXCJyZ2IoMCwyNDUsMClcIixcbiAgMTUwMDAwOiBcInJnYigwLDI0NiwwKVwiLFxuICAxNDAwMDA6IFwicmdiKDAsMjQ3LDApXCIsXG4gIDEzMDAwMDogXCJyZ2IoMCwyNDgsMClcIixcbiAgMTIwMDAwOiBcInJnYigwLDI0OSwwKVwiLFxuICAxMTAwMDA6IFwicmdiKDAsMjUwLDApXCIsXG4gIDEwMDAwMDogXCJyZ2IoMCwyNTEsMClcIixcbiAgOTAwMDA6IFwicmdiKDAsMjUyLDApXCIsXG4gIDgwMDAwOiBcInJnYigwLDI1MywwKVwiLFxuICA3MDAwMDogXCJyZ2IoMCwyNTQsMClcIixcbiAgNjAwMDA6IFwicmdiKDAsMjU1LDApXCIsXG4gIGRlZmF1bHRGaWxsOiBcImdyYXlcIixcbn07XG4iLCJjb25zdCB7IGZvcm1hdE51bWJlciB9ID0gcmVxdWlyZShcIi4vZm9ybWF0X251bVwiKTtcbmNvbnN0IHsgc3RhdGVJbml0aWFscyB9ID0gcmVxdWlyZShcIi4vc3RhdGVfSW5pdGlhbHNcIik7XG5jb25zdCB7IGNhbGN1bGF0ZUZpbGwgfSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZV9maWxsXCIpO1xuY29uc3QgeyBjb2xvcnMgfSA9IHJlcXVpcmUoXCIuL2NvbG9yc1wiKTtcblxuZXhwb3J0IGNvbnN0IGRyYXdNYXAgPSAoYXBpRGF0YSkgPT4ge1xuICBhcGlEYXRhLnRoZW4oKGRhdGEpID0+IHtcbiAgICBsZXQgc3RhdGVUb3RhbCA9IHt9O1xuXG4gICAgZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgbGV0IHN0YXRlTmFtZTtcbiAgICAgIGlmIChzdGF0ZUluaXRpYWxzW3N0YXRlLmp1cmlzZGljdGlvbl0pIHtcbiAgICAgICAgc3RhdGVOYW1lID0gc3RhdGVJbml0aWFsc1tzdGF0ZS5qdXJpc2RpY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVOYW1lID0gc3RhdGUuanVyaXNkaWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucykge1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyhzdGF0ZVRvdGFsKS5sZW5ndGggIT09IDYzKSB7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXSA9IHtcbiAgICAgICAgICBfMXN0X2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgIF8ybmRfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAgICAgICBzdGF0ZS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOdW1iZXIoXG4gICAgICAgICAgc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5maWxsS2V5ID0gY2FsY3VsYXRlRmlsbChcbiAgICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzFzdF9kb3NlX2FsbG9jYXRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRCaWdDaXRpZXNUb1N0YXRlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IFBoaWxseSA9IHN0YXRlVG90YWxbXCJQaGlsYWRlbHBoaWFcIl07XG4gICAgICBjb25zdCBQQSA9IHN0YXRlVG90YWxbXCJQQVwiXTtcbiAgICAgIFBBLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBQaGlsbHkuXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICAgICAgUEEuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IFBoaWxseS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG5cbiAgICAgIGNvbnN0IE5ZQyA9IHN0YXRlVG90YWxbXCJOZXcgWW9yayBDaXR5XCJdO1xuICAgICAgY29uc3QgTlkgPSBzdGF0ZVRvdGFsW1wiTllcIl07XG4gICAgICBOWS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTllDLl8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgICAgIE5ZLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOWUMuXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBDaGljYWdvID0gc3RhdGVUb3RhbFtcIkNoaWNhZ29cIl07XG4gICAgICBjb25zdCBJTCA9IHN0YXRlVG90YWxbXCJJTFwiXTtcbiAgICAgIElMLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBDaGljYWdvLl8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgICAgIElMLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBDaGljYWdvLl8ybmRfZG9zZV9hbGxvY2F0aW9ucztcbiAgICB9O1xuXG4gICAgYWRkQmlnQ2l0aWVzVG9TdGF0ZXMoc3RhdGVUb3RhbCk7XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBzY29wZTogXCJ1c2FcIixcbiAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRCb3JkZXJDb2xvcjogXCJyZ2IoNTksIDE3NywgMjU1KVwiLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiAoZ2VvKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGF0ZVRvdGFsW1tnZW8uaWRdXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaG92ZXJpbmZvXCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBnZW8ucHJvcGVydGllcy5uYW1lLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgXCIgMXN0IERvc2UgXCIgK1xuICAgICAgICAgICAgICAgIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9kaXY+XCIsXG4gICAgICAgICAgICBdLmpvaW4oXCJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaG92ZXJpbmZvXCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJzdGF0ZS1uYW1lXCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBnZW8ucHJvcGVydGllcy5uYW1lLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiZ3JlZW4tdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgXCIgMXN0IERvc2UgXCIgK1xuICAgICAgICAgICAgICAgIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cImJsdWUtdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgXCIgMm5kIERvc2UgXCIgK1xuICAgICAgICAgICAgICAgIGZvcm1hdE51bWJlcihzdGF0ZVRvdGFsW2dlby5pZF0uXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L2Rpdj5cIixcbiAgICAgICAgICAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhpZ2hsaWdodEJvcmRlcldpZHRoOiAyLFxuICAgICAgfSxcbiAgICAgIGZpbGxzOiBjb2xvcnMsXG4gICAgICBkYXRhOiBzdGF0ZVRvdGFsLFxuICAgIH0pO1xuICAgIG1hcC5sYWJlbHMoe1xuICAgICAgbGFiZWxDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9IChudW0pID0+IHtcbiAgbGV0IGNvbnZlcnQgPSBudW07XG4gIGNvbnN0IGRlY2ltYWwgPSBNYXRoLmFicyhjb252ZXJ0KS50b0ZpeGVkKDApO1xuICBsZXQgbnVtcyA9IGRlY2ltYWwudG9TdHJpbmcoKTtcbiAgbnVtcyA9IGRlY2ltYWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gIG51bXNbMF0gPSBudW1zWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgY29uc3QgY29udmVydGVkID0gYCR7bnVtcy5qb2luKFwiLlwiKX1gO1xuICByZXR1cm4gY29udmVydGVkO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJScGJySkx0ckNZem84OGhmSkJMZWcyZnlCXCI7XG4iLCJleHBvcnQgY29uc3Qgc3RhdGVJbml0aWFscyA9IHtcbiAgQWxhYmFtYTogXCJBTFwiLFxuICBBbGFza2E6IFwiQUtcIixcbiAgXCJBbWVyaWNhbiBTYW1vYVwiOiBcIkFTXCIsXG4gIEFyaXpvbmE6IFwiQVpcIixcbiAgQXJrYW5zYXM6IFwiQVJcIixcbiAgQ2FsaWZvcm5pYTogXCJDQVwiLFxuICAvLyBDaGljYWdvOiBcIklMXCIsXG4gIENvbG9yYWRvOiBcIkNPXCIsXG4gIENvbm5lY3RpY3V0OiBcIkNUXCIsXG4gIERlbGF3YXJlOiBcIkRFXCIsXG4gIFwiRGlzdHJpY3Qgb2YgQ29sdW1iaWFcIjogXCJEQ1wiLFxuICBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiOiBcIkZNXCIsXG4gIEZsb3JpZGE6IFwiRkxcIixcbiAgR2VvcmdpYTogXCJHQVwiLFxuICBHdWFtOiBcIkdVXCIsXG4gIEhhd2FpaTogXCJISVwiLFxuICBJZGFobzogXCJJRFwiLFxuICBJbGxpbm9pczogXCJJTFwiLFxuICBJbmRpYW5hOiBcIklOXCIsXG4gIElvd2E6IFwiSUFcIixcbiAgS2Fuc2FzOiBcIktTXCIsXG4gIEtlbnR1Y2t5OiBcIktZXCIsXG4gIExvdWlzaWFuYTogXCJMQVwiLFxuICBNYWluZTogXCJNRVwiLFxuICBcIk1hcnNoYWxsIElzbGFuZHNcIjogXCJNSFwiLFxuICBNYXJ5bGFuZDogXCJNRFwiLFxuICBNYXNzYWNodXNldHRzOiBcIk1BXCIsXG4gIE1pY2hpZ2FuOiBcIk1JXCIsXG4gIE1pbm5lc290YTogXCJNTlwiLFxuICBNaXNzaXNzaXBwaTogXCJNU1wiLFxuICBNaXNzb3VyaTogXCJNT1wiLFxuICBNb250YW5hOiBcIk1UXCIsXG4gIE5lYnJhc2thOiBcIk5FXCIsXG4gIE5ldmFkYTogXCJOVlwiLFxuICBcIk5ldyBIYW1wc2hpcmVcIjogXCJOSFwiLFxuICBcIk5ldyBKZXJzZXlcIjogXCJOSlwiLFxuICBcIk5ldyBNZXhpY29cIjogXCJOTVwiLFxuICAvLyBcIk5ldyBZb3JrIENpdHlcIjogXCJOWVwiLFxuICBcIk5ldyBZb3JrXCI6IFwiTllcIixcbiAgXCJOb3J0aCBDYXJvbGluYVwiOiBcIk5DXCIsXG4gIFwiTm9ydGggRGFrb3RhXCI6IFwiTkRcIixcbiAgXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIjogXCJNUFwiLFxuICBPaGlvOiBcIk9IXCIsXG4gIE9rbGFob21hOiBcIk9LXCIsXG4gIE9yZWdvbjogXCJPUlwiLFxuICBQYWxhdTogXCJQV1wiLFxuICBQZW5uc3lsdmFuaWE6IFwiUEFcIixcbiAgLy8gUGhpbGFkZWxwaGlhOiBcIlBBXCIsXG4gIFwiUHVlcnRvIFJpY29cIjogXCJQUlwiLFxuICBcIlJob2RlIElzbGFuZFwiOiBcIlJJXCIsXG4gIFwiU291dGggQ2Fyb2xpbmFcIjogXCJTQ1wiLFxuICBcIlNvdXRoIERha290YVwiOiBcIlNEXCIsXG4gIFRlbm5lc3NlZTogXCJUTlwiLFxuICBUZXhhczogXCJUWFwiLFxuICBVdGFoOiBcIlVUXCIsXG4gIFZlcm1vbnQ6IFwiVlRcIixcbiAgXCJWaXJnaW4gSXNsYW5kc1wiOiBcIlZJXCIsXG4gIFZpcmdpbmlhOiBcIlZBXCIsXG4gIFdhc2hpbmd0b246IFwiV0FcIixcbiAgXCJXZXN0IFZpcmdpbmlhXCI6IFwiV1ZcIixcbiAgV2lzY29uc2luOiBcIldJXCIsXG4gIFd5b21pbmc6IFwiV1lcIixcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9