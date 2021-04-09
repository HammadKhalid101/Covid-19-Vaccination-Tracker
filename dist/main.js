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
/* harmony import */ var _js_draw_map_weekly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/draw_map_weekly */ "./src/js/draw_map_weekly.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/api_util */ "./src/js/api_util.js");
/* harmony import */ var _js_api_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_api_util__WEBPACK_IMPORTED_MODULE_3__);




document.addEventListener("DOMContentLoaded", function () {
  var modalButton = document.querySelector(".modal-map-button");
  var pfizerButton = document.querySelector("#pfizer");
  var modernaButton = document.querySelector("#moderna");
  var janssenButton = document.querySelector("#janssen");
  var slider = document.querySelector("#scroller");
  modalButton.addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });
  pfizerButton.addEventListener("click", function () {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(pfizerButton);
    slider.value = 0;
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"]);
  });
  modernaButton.addEventListener("click", function () {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(modernaButton);
    slider.value = 0;
    slider.max = 16;
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"]);
  });
  janssenButton.addEventListener("click", function () {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(janssenButton);
    slider.value = 0;
    slider.max = 5;
    newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"]);
  });
  slider.addEventListener("change", function () {
    newMap(selectedManufacturer(pfizerButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"], modernaButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["modernaAPI"], janssenButton, _js_api_util__WEBPACK_IMPORTED_MODULE_3__["janssenAPI"]), slider.value);
  });
  newMap(_js_api_util__WEBPACK_IMPORTED_MODULE_3__["pfizerAPI"]);
}); // Scroller/Slider variables

var inputValue = null;
var week = ["04/12/2021", "04/05/2021", "03/29/2021", "03/22/2021", "03/15/2021", "03/08/2021", "03/01/2021", "02/22/2021", "02/15/2021", "02/08/2021", "02/01/2021", "01/25/2021", "01/18/2021", "01/11/2021", "01/04/2021", "12/28/2020"];

function addActive(button) {
  button.classList.add("active");
}

function removeActive(pfizerButton, modernaButton, janssenButton) {
  if (pfizerButton.classList[1]) {
    pfizerButton.classList.remove("active");
  } else if (modernaButton.classList[1]) {
    modernaButton.classList.remove("active");
  } else if (janssenButton.classList[1]) {
    janssenButton.classList.remove("active");
  }
}

function selectedManufacturer(pfizerButton, pfizerAPI, modernaButton, modernaAPI, janssenButton, janssenAPI) {
  if (pfizerButton.classList[1]) {
    return pfizerAPI;
  } else if (modernaButton.classList[1]) {
    return modernaAPI;
  } else if (janssenButton.classList[1]) {
    return janssenAPI;
  }
} // newMap function


function newMap(apiData, week) {
  var mapParent = document.querySelector(".usa-map");
  var map = document.querySelector("#map");
  var newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";
  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap);

  if (!week) {
    Object(_js_draw_map__WEBPACK_IMPORTED_MODULE_1__["drawMap"])(apiData);
  } else {
    Object(_js_draw_map_weekly__WEBPACK_IMPORTED_MODULE_2__["drawMapWeekly"])(apiData, week);
  }
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
}; // module.exports = { pfizerAPI };

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

/***/ "./src/js/draw_map_weekly.js":
/*!***********************************!*\
  !*** ./src/js/draw_map_weekly.js ***!
  \***********************************/
/*! exports provided: drawMapWeekly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawMapWeekly", function() { return drawMapWeekly; });
var _require = __webpack_require__(/*! ./format_num */ "./src/js/format_num.js"),
    formatNumber = _require.formatNumber;

var _require2 = __webpack_require__(/*! ./state_Initials */ "./src/js/state_Initials.js"),
    stateInitials = _require2.stateInitials;

var _require3 = __webpack_require__(/*! ./calculate_fill */ "./src/js/calculate_fill.js"),
    calculateFill = _require3.calculateFill;

var _require4 = __webpack_require__(/*! ./colors */ "./src/js/colors.js"),
    colors = _require4.colors;

var drawMapWeekly = function drawMapWeekly(apiData, week) {
  apiData.then(function (data) {
    var stateWeekly = {};
    var start = 0;
    var end = 63;

    if (week > 0) {
      start = week * 63;
      end = start + 63;
    }

    data.slice(start, end).forEach(function (state) {
      console.log(state.week_of_allocations);
      var stateName;

      if (stateInitials[state.jurisdiction]) {
        stateName = stateInitials[state.jurisdiction];
      } else {
        stateName = state.jurisdiction;
      }

      if (Object.values(stateWeekly).length !== 63) {
        stateWeekly[stateName] = {
          _1st_dose_allocations: Number(state._1st_dose_allocations),
          _2nd_dose_allocations: Number(state._2nd_dose_allocations),
          week_of_allocations: state.week_of_allocations
        };
        stateWeekly[stateName].fillKey = calculateFill(stateWeekly[stateName]._1st_dose_allocations);
      }
    });

    var addBigCitiesToStates = function addBigCitiesToStates() {
      var Philly = stateWeekly["Philadelphia"];
      var PA = stateWeekly["PA"];
      PA._1st_dose_allocations += Philly._1st_dose_allocations;
      PA._2nd_dose_allocations += Philly._2nd_dose_allocations;
      var NYC = stateWeekly["New York City"];
      var NY = stateWeekly["NY"];
      NY._1st_dose_allocations += NYC._1st_dose_allocations;
      NY._2nd_dose_allocations += NYC._2nd_dose_allocations;
      var Chicago = stateWeekly["Chicago"];
      var IL = stateWeekly["IL"];
      IL._1st_dose_allocations += Chicago._1st_dose_allocations;
      IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
    };

    addBigCitiesToStates(stateWeekly);
    var map = new Datamap({
      scope: "usa",
      element: document.getElementById("map"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "rgb(59, 177, 255)",
        popupTemplate: function popupTemplate(geo) {
          if (!stateWeekly[[geo.id]]._2nd_dose_allocations) {
            return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name, "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateWeekly[geo.id]._1st_dose_allocations), "</strong></p>", "</strong></div>"].join("");
          } else {
            return ['<div class="hoverinfo"><strong>', '<p class="state-name"><strong>', geo.properties.name, "</strong></p>", '<p class="green-text"><strong>', " 1st Dose " + formatNumber(stateWeekly[geo.id]._1st_dose_allocations), "</strong></p>", '<p class="blue-text"><strong>', " 2nd Dose " + formatNumber(stateWeekly[geo.id]._2nd_dose_allocations), "</strong></div>"].join("");
          }
        },
        highlightBorderWidth: 2
      },
      fills: colors,
      data: stateWeekly
    });
    map.labels({
      labelColor: "white",
      fontFamily: "Roboto",
      fontSize: 12
    }); // console.log(Object.values(stateWeekly).length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FsY3VsYXRlX2ZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhd19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RyYXdfbWFwX3dlZWtseS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybWF0X251bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VjcmV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdGF0ZV9Jbml0aWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kYWxCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwicGZpemVyQnV0dG9uIiwibW9kZXJuYUJ1dHRvbiIsImphbnNzZW5CdXR0b24iLCJzbGlkZXIiLCJtb2RhbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUFjdGl2ZSIsImFkZEFjdGl2ZSIsInZhbHVlIiwibmV3TWFwIiwicGZpemVyQVBJIiwibWF4IiwibW9kZXJuYUFQSSIsImphbnNzZW5BUEkiLCJzZWxlY3RlZE1hbnVmYWN0dXJlciIsImlucHV0VmFsdWUiLCJ3ZWVrIiwiYnV0dG9uIiwicmVtb3ZlIiwiYXBpRGF0YSIsIm1hcFBhcmVudCIsIm1hcCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiZHJhd01hcCIsImRyYXdNYXBXZWVrbHkiLCJBcHBUb2tlbiIsInJlcXVpcmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxjdWxhdGVGaWxsIiwibnVtRG9zZXMiLCJjb2xvcnMiLCJkZWZhdWx0RmlsbCIsImZvcm1hdE51bWJlciIsInN0YXRlSW5pdGlhbHMiLCJkYXRhIiwic3RhdGVUb3RhbCIsImZvckVhY2giLCJzdGF0ZSIsInN0YXRlTmFtZSIsImp1cmlzZGljdGlvbiIsIl8ybmRfZG9zZV9hbGxvY2F0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsIl8xc3RfZG9zZV9hbGxvY2F0aW9ucyIsIk51bWJlciIsImZpbGxLZXkiLCJhZGRCaWdDaXRpZXNUb1N0YXRlcyIsIlBoaWxseSIsIlBBIiwiTllDIiwiTlkiLCJDaGljYWdvIiwiSUwiLCJEYXRhbWFwIiwic2NvcGUiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNwb25zaXZlIiwiZ2VvZ3JhcGh5Q29uZmlnIiwiaGlnaGxpZ2h0Qm9yZGVyQ29sb3IiLCJwb3B1cFRlbXBsYXRlIiwiZ2VvIiwicHJvcGVydGllcyIsIm5hbWUiLCJqb2luIiwiaGlnaGxpZ2h0Qm9yZGVyV2lkdGgiLCJmaWxscyIsImxhYmVscyIsImxhYmVsQ29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJzdGF0ZVdlZWtseSIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwid2Vla19vZl9hbGxvY2F0aW9ucyIsIm51bSIsImNvbnZlcnQiLCJkZWNpbWFsIiwiTWF0aCIsImFicyIsInRvRml4ZWQiLCJudW1zIiwidG9TdHJpbmciLCJzcGxpdCIsInJlcGxhY2UiLCJjb252ZXJ0ZWQiLCJBbGFiYW1hIiwiQWxhc2thIiwiQXJpem9uYSIsIkFya2Fuc2FzIiwiQ2FsaWZvcm5pYSIsIkNvbG9yYWRvIiwiQ29ubmVjdGljdXQiLCJEZWxhd2FyZSIsIkZsb3JpZGEiLCJHZW9yZ2lhIiwiR3VhbSIsIkhhd2FpaSIsIklkYWhvIiwiSWxsaW5vaXMiLCJJbmRpYW5hIiwiSW93YSIsIkthbnNhcyIsIktlbnR1Y2t5IiwiTG91aXNpYW5hIiwiTWFpbmUiLCJNYXJ5bGFuZCIsIk1hc3NhY2h1c2V0dHMiLCJNaWNoaWdhbiIsIk1pbm5lc290YSIsIk1pc3Npc3NpcHBpIiwiTWlzc291cmkiLCJNb250YW5hIiwiTmVicmFza2EiLCJOZXZhZGEiLCJPaGlvIiwiT2tsYWhvbWEiLCJPcmVnb24iLCJQYWxhdSIsIlBlbm5zeWx2YW5pYSIsIlRlbm5lc3NlZSIsIlRleGFzIiwiVXRhaCIsIlZlcm1vbnQiLCJWaXJnaW5pYSIsIldhc2hpbmd0b24iLCJXaXNjb25zaW4iLCJXeW9taW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FB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TyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksT0FBdEMsRUFBK0M7QUFDcEQsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxPQUFYLElBQXNCQSxRQUFRLElBQUksTUFBdEMsRUFBOEM7QUFDbkQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksTUFBckMsRUFBNkM7QUFDbEQsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxNQUFYLElBQXFCQSxRQUFRLElBQUksS0FBckMsRUFBNEM7QUFDakQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxLQUFYLElBQW9CQSxRQUFRLElBQUksS0FBcEMsRUFBMkM7QUFDaEQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxLQUFYLElBQW9CQSxRQUFRLElBQUksS0FBcEMsRUFBMkM7QUFDaEQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFFBQVEsR0FBRyxLQUFYLElBQW9CQSxRQUFRLElBQUksS0FBcEMsRUFBMkM7QUFDaEQsV0FBTyxPQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0ws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Q29CO0FBK0MzQkMsY0FBWSxFQUFFLElBL0NhO0FBZ0QzQjtBQUNBLGlCQUFlLElBakRZO0FBa0QzQixrQkFBZ0IsSUFsRFc7QUFtRDNCLG9CQUFrQixJQW5EUztBQW9EM0Isa0JBQWdCLElBcERXO0FBcUQzQkMsV0FBUyxFQUFFLElBckRnQjtBQXNEM0JDLE9BQUssRUFBRSxJQXREb0I7QUF1RDNCQyxNQUFJLEVBQUUsSUF2RHFCO0FBd0QzQkMsU0FBTyxFQUFFLElBeERrQjtBQXlEM0Isb0JBQWtCLElBekRTO0FBMEQzQkMsVUFBUSxFQUFFLElBMURpQjtBQTJEM0JDLFlBQVUsRUFBRSxJQTNEZTtBQTREM0IsbUJBQWlCLElBNURVO0FBNkQzQkMsV0FBUyxFQUFFLElBN0RnQjtBQThEM0JDLFNBQU8sRUFBRTtBQTlEa0IsQ0FBdEIsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBkcmF3TWFwIH0gZnJvbSBcIi4vanMvZHJhd19tYXBcIjtcbmltcG9ydCB7IGRyYXdNYXBXZWVrbHkgfSBmcm9tIFwiLi9qcy9kcmF3X21hcF93ZWVrbHlcIjtcbmltcG9ydCB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9IGZyb20gXCIuL2pzL2FwaV91dGlsXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW1hcC1idXR0b25cIik7XG4gIGNvbnN0IHBmaXplckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGZpemVyXCIpO1xuICBjb25zdCBtb2Rlcm5hQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2Rlcm5hXCIpO1xuICBjb25zdCBqYW5zc2VuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqYW5zc2VuXCIpO1xuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbGVyXCIpO1xuXG4gIG1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtbW9kYWxcIik7XG4gIH0pO1xuXG4gIHBmaXplckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZShwZml6ZXJCdXR0b24sIG1vZGVybmFCdXR0b24sIGphbnNzZW5CdXR0b24pO1xuICAgIGFkZEFjdGl2ZShwZml6ZXJCdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgbmV3TWFwKHBmaXplckFQSSk7XG4gIH0pO1xuXG4gIG1vZGVybmFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVBY3RpdmUocGZpemVyQnV0dG9uLCBtb2Rlcm5hQnV0dG9uLCBqYW5zc2VuQnV0dG9uKTtcbiAgICBhZGRBY3RpdmUobW9kZXJuYUJ1dHRvbik7XG4gICAgc2xpZGVyLnZhbHVlID0gMDtcbiAgICBzbGlkZXIubWF4ID0gMTY7XG4gICAgbmV3TWFwKG1vZGVybmFBUEkpO1xuICB9KTtcblxuICBqYW5zc2VuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlKHBmaXplckJ1dHRvbiwgbW9kZXJuYUJ1dHRvbiwgamFuc3NlbkJ1dHRvbik7XG4gICAgYWRkQWN0aXZlKGphbnNzZW5CdXR0b24pO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gICAgc2xpZGVyLm1heCA9IDU7XG4gICAgbmV3TWFwKGphbnNzZW5BUEkpO1xuICB9KTtcblxuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbmV3TWFwKFxuICAgICAgc2VsZWN0ZWRNYW51ZmFjdHVyZXIoXG4gICAgICAgIHBmaXplckJ1dHRvbixcbiAgICAgICAgcGZpemVyQVBJLFxuICAgICAgICBtb2Rlcm5hQnV0dG9uLFxuICAgICAgICBtb2Rlcm5hQVBJLFxuICAgICAgICBqYW5zc2VuQnV0dG9uLFxuICAgICAgICBqYW5zc2VuQVBJXG4gICAgICApLFxuICAgICAgc2xpZGVyLnZhbHVlXG4gICAgKTtcbiAgfSk7XG5cbiAgbmV3TWFwKHBmaXplckFQSSk7XG59KTtcblxuLy8gU2Nyb2xsZXIvU2xpZGVyIHZhcmlhYmxlc1xuXG5sZXQgaW5wdXRWYWx1ZSA9IG51bGw7XG5jb25zdCB3ZWVrID0gW1xuICBcIjA0LzEyLzIwMjFcIixcbiAgXCIwNC8wNS8yMDIxXCIsXG4gIFwiMDMvMjkvMjAyMVwiLFxuICBcIjAzLzIyLzIwMjFcIixcbiAgXCIwMy8xNS8yMDIxXCIsXG4gIFwiMDMvMDgvMjAyMVwiLFxuICBcIjAzLzAxLzIwMjFcIixcbiAgXCIwMi8yMi8yMDIxXCIsXG4gIFwiMDIvMTUvMjAyMVwiLFxuICBcIjAyLzA4LzIwMjFcIixcbiAgXCIwMi8wMS8yMDIxXCIsXG4gIFwiMDEvMjUvMjAyMVwiLFxuICBcIjAxLzE4LzIwMjFcIixcbiAgXCIwMS8xMS8yMDIxXCIsXG4gIFwiMDEvMDQvMjAyMVwiLFxuICBcIjEyLzI4LzIwMjBcIixcbl07XG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZShidXR0b24pIHtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZShwZml6ZXJCdXR0b24sIG1vZGVybmFCdXR0b24sIGphbnNzZW5CdXR0b24pIHtcbiAgaWYgKHBmaXplckJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICBwZml6ZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChtb2Rlcm5hQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIG1vZGVybmFCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChqYW5zc2VuQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIGphbnNzZW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RlZE1hbnVmYWN0dXJlcihcbiAgcGZpemVyQnV0dG9uLFxuICBwZml6ZXJBUEksXG4gIG1vZGVybmFCdXR0b24sXG4gIG1vZGVybmFBUEksXG4gIGphbnNzZW5CdXR0b24sXG4gIGphbnNzZW5BUElcbikge1xuICBpZiAocGZpemVyQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIHJldHVybiBwZml6ZXJBUEk7XG4gIH0gZWxzZSBpZiAobW9kZXJuYUJ1dHRvbi5jbGFzc0xpc3RbMV0pIHtcbiAgICByZXR1cm4gbW9kZXJuYUFQSTtcbiAgfSBlbHNlIGlmIChqYW5zc2VuQnV0dG9uLmNsYXNzTGlzdFsxXSkge1xuICAgIHJldHVybiBqYW5zc2VuQVBJO1xuICB9XG59XG5cbi8vIG5ld01hcCBmdW5jdGlvblxuXG5mdW5jdGlvbiBuZXdNYXAoYXBpRGF0YSwgd2Vlaykge1xuICBjb25zdCBtYXBQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1tYXBcIik7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFwXCIpO1xuXG4gIGxldCBuZXdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdNYXAuaWQgPSBcIm1hcFwiO1xuICBuZXdNYXAuY2xhc3NOYW1lID0gXCJtYXBcIjtcblxuICBtYXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYXApO1xuICBtYXBQYXJlbnQuYXBwZW5kQ2hpbGQobmV3TWFwKTtcblxuICBpZiAoIXdlZWspIHtcbiAgICBkcmF3TWFwKGFwaURhdGEpO1xuICB9IGVsc2Uge1xuICAgIGRyYXdNYXBXZWVrbHkoYXBpRGF0YSwgd2Vlayk7XG4gIH1cbn1cbiIsImNvbnN0IEFwcFRva2VuID0gcmVxdWlyZShcIi4vc2VjcmV0XCIpO1xuXG5jb25zdCBwZml6ZXJBUEkgPSBmZXRjaChcbiAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL3NhejUtOWhnZy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuKS50aGVuKChyZXMpID0+IHtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhbGVydChcIlJlY2VpdmVkIFBmaXplclwiKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfVxufSk7XG5cbmNvbnN0IG1vZGVybmFBUEkgPSBmZXRjaChcbiAgYGh0dHBzOi8vZGF0YS5jZGMuZ292L3Jlc291cmNlL2I3cGUtNW53cy5qc29uPyQkYXBwX3Rva2VuPSR7QXBwVG9rZW59JiRsaW1pdD01MDAwYFxuKS50aGVuKChyZXMpID0+IHtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIkFwaSBjYWxsIHVuc3VjY2Vzc2Z1bFwiKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBhbGVydChcIlJlY2VpdmVkIE1vZGVybmFcIik7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBqYW5zc2VuQVBJID0gZmV0Y2goXG4gIGBodHRwczovL2RhdGEuY2RjLmdvdi9yZXNvdXJjZS93OXp1LWZ5d2guanNvbj8kJGFwcF90b2tlbj0ke0FwcFRva2VufSYkbGltaXQ9NTAwMGBcbikudGhlbigocmVzKSA9PiB7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJBcGkgY2FsbCB1bnN1Y2Nlc3NmdWxcIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gYWxlcnQoXCJSZWNlaXZlZCBKYW5zc2VuXCIpO1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHBmaXplckFQSSwgbW9kZXJuYUFQSSwgamFuc3NlbkFQSSB9O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHsgcGZpemVyQVBJIH07XG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlRmlsbCA9IChudW1Eb3NlcykgPT4ge1xuICBpZiAobnVtRG9zZXMgPj0gNjAwMDAwMCkge1xuICAgIHJldHVybiBcIjYwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDYwMDAwMDAgJiYgbnVtRG9zZXMgPj0gNTAwMDAwMCkge1xuICAgIHJldHVybiBcIjUwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDUwMDAwMDAgJiYgbnVtRG9zZXMgPj0gNDAwMDAwMCkge1xuICAgIHJldHVybiBcIjQwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDQwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMzUwMDAwMCkge1xuICAgIHJldHVybiBcIjM1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDM1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMzAwMDAwMCkge1xuICAgIHJldHVybiBcIjMwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDMwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMjUwMDAwMCkge1xuICAgIHJldHVybiBcIjI1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDI1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMjAwMDAwMCkge1xuICAgIHJldHVybiBcIjIwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDIwMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTgwMDAwMCkge1xuICAgIHJldHVybiBcIjE4MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE4MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTYwMDAwMCkge1xuICAgIHJldHVybiBcIjE2MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE2MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTUwMDAwMCkge1xuICAgIHJldHVybiBcIjE1MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE1MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTQwMDAwMCkge1xuICAgIHJldHVybiBcIjE0MDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDE0MDAwMDAgJiYgbnVtRG9zZXMgPj0gMTMwMDAwMCkge1xuICAgIHJldHVybiBcIjEzMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEzMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTIwMDAwMCkge1xuICAgIHJldHVybiBcIjEyMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEyMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTEwMDAwMCkge1xuICAgIHJldHVybiBcIjExMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDExMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTAwMDAwMCkge1xuICAgIHJldHVybiBcIjEwMDAwMDBcIjtcbiAgfSBlbHNlIGlmIChudW1Eb3NlcyA8IDEwMDAwMDAgJiYgbnVtRG9zZXMgPj0gOTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA5NTAwMDAgJiYgbnVtRG9zZXMgPj0gOTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiOTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA5MDAwMDAgJiYgbnVtRG9zZXMgPj0gODUwMDAwKSB7XG4gICAgcmV0dXJuIFwiODUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA4NTAwMDAgJiYgbnVtRG9zZXMgPj0gODAwMDAwKSB7XG4gICAgcmV0dXJuIFwiODAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA4MDAwMDAgJiYgbnVtRG9zZXMgPj0gNzUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA3NTAwMDAgJiYgbnVtRG9zZXMgPj0gNzAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA3MDAwMDAgJiYgbnVtRG9zZXMgPj0gNjUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2NTAwMDAgJiYgbnVtRG9zZXMgPj0gNjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA2MDAwMDAgJiYgbnVtRG9zZXMgPj0gNTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1NTAwMDAgJiYgbnVtRG9zZXMgPj0gNTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA1MDAwMDAgJiYgbnVtRG9zZXMgPj0gNDUwMDAwKSB7XG4gICAgcmV0dXJuIFwiNDUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0NTAwMDAgJiYgbnVtRG9zZXMgPj0gNDAwMDAwKSB7XG4gICAgcmV0dXJuIFwiNDAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCA0MDAwMDAgJiYgbnVtRG9zZXMgPj0gMzUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzNTAwMDAgJiYgbnVtRG9zZXMgPj0gMzAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMzAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAzMDAwMDAgJiYgbnVtRG9zZXMgPj0gMjUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyNTAwMDAgJiYgbnVtRG9zZXMgPj0gMjAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMjAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAyMDAwMDAgJiYgbnVtRG9zZXMgPj0gMTgwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTgwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxODAwMDAgJiYgbnVtRG9zZXMgPj0gMTYwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTYwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNjAwMDAgJiYgbnVtRG9zZXMgPj0gMTUwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTUwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNTAwMDAgJiYgbnVtRG9zZXMgPj0gMTQwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTQwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxNDAwMDAgJiYgbnVtRG9zZXMgPj0gMTMwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTMwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMzAwMDAgJiYgbnVtRG9zZXMgPj0gMTIwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTIwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMjAwMDAgJiYgbnVtRG9zZXMgPj0gMTEwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTEwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMTAwMDAgJiYgbnVtRG9zZXMgPj0gMTAwMDAwKSB7XG4gICAgcmV0dXJuIFwiMTAwMDAwXCI7XG4gIH0gZWxzZSBpZiAobnVtRG9zZXMgPCAxMDAwMDAgJiYgbnVtRG9zZXMgPj0gOTAwMDApIHtcbiAgICByZXR1cm4gXCI5MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgOTAwMDAgJiYgbnVtRG9zZXMgPj0gODAwMDApIHtcbiAgICByZXR1cm4gXCI4MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgODAwMDAgJiYgbnVtRG9zZXMgPj0gNzAwMDApIHtcbiAgICByZXR1cm4gXCI3MDAwMFwiO1xuICB9IGVsc2UgaWYgKG51bURvc2VzIDwgNzAwMDAgJiYgbnVtRG9zZXMgPj0gNjAwMDApIHtcbiAgICByZXR1cm4gXCI2MDAwMFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImRlZmF1bHRGaWxsXCI7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgY29sb3JzID0ge1xuICA2MDAwMDAwOiBcInJnYigwLDUwLDApXCIsXG4gIDUwMDAwMDA6IFwicmdiKDAsNTUsMClcIixcbiAgNDAwMDAwMDogXCJyZ2IoMCw2MCwwKVwiLFxuICAzNTAwMDAwOiBcInJnYigwLDcwLDApXCIsXG4gIDMwMDAwMDA6IFwicmdiKDAsODAsMClcIixcbiAgMjUwMDAwMDogXCJyZ2IoMCw5MCwwKVwiLFxuICAyMDAwMDAwOiBcInJnYigwLDEwMCwwKVwiLFxuICAxODAwMDAwOiBcInJnYigwLDExMCwwKVwiLFxuICAxNjAwMDAwOiBcInJnYigwLDEyMCwwKVwiLFxuICAxNTAwMDAwOiBcInJnYigwLDEzMCwwKVwiLFxuICAxNDAwMDAwOiBcInJnYigwLDE0MCwwKVwiLFxuICAxMzAwMDAwOiBcInJnYigwLDE1MCwwKVwiLFxuICAxMjAwMDAwOiBcInJnYigwLDE1NSwwKVwiLFxuICAxMTAwMDAwOiBcInJnYigwLDE2MCwwKVwiLFxuICAxMDAwMDAwOiBcInJnYigwLDE2NSwwKVwiLFxuICA5NTAwMDA6IFwicmdiKDAsMTcwLDApXCIsXG4gIDkwMDAwMDogXCJyZ2IoMCwxNzUsMClcIixcbiAgODUwMDAwOiBcInJnYigwLDE4MCwwKVwiLFxuICA4MDAwMDA6IFwicmdiKDAsMTg1LDApXCIsXG4gIDc1MDAwMDogXCJyZ2IoMCwxOTAsMClcIixcbiAgNzAwMDAwOiBcInJnYigwLDE5NSwwKVwiLFxuICA2NTAwMDA6IFwicmdiKDAsMjAwLDApXCIsXG4gIDYwMDAwMDogXCJyZ2IoMCwyMDUsMClcIixcbiAgNTUwMDAwOiBcInJnYigwLDIxMCwwKVwiLFxuICA1MDAwMDA6IFwicmdiKDAsMjE1LDApXCIsXG4gIDQ1MDAwMDogXCJyZ2IoMCwyMjAsMClcIixcbiAgNDAwMDAwOiBcInJnYigwLDIyNSwwKVwiLFxuICAzNTAwMDA6IFwicmdiKDAsMjMwLDApXCIsXG4gIDMwMDAwMDogXCJyZ2IoMCwyMzUsMClcIixcbiAgMjUwMDAwOiBcInJnYigwLDI0MCwwKVwiLFxuICAyMDAwMDA6IFwicmdiKDAsMjQyLDApXCIsXG4gIDE4MDAwMDogXCJyZ2IoMCwyNDQsMClcIixcbiAgMTYwMDAwOiBcInJnYigwLDI0NSwwKVwiLFxuICAxNTAwMDA6IFwicmdiKDAsMjQ2LDApXCIsXG4gIDE0MDAwMDogXCJyZ2IoMCwyNDcsMClcIixcbiAgMTMwMDAwOiBcInJnYigwLDI0OCwwKVwiLFxuICAxMjAwMDA6IFwicmdiKDAsMjQ5LDApXCIsXG4gIDExMDAwMDogXCJyZ2IoMCwyNTAsMClcIixcbiAgMTAwMDAwOiBcInJnYigwLDI1MSwwKVwiLFxuICA5MDAwMDogXCJyZ2IoMCwyNTIsMClcIixcbiAgODAwMDA6IFwicmdiKDAsMjUzLDApXCIsXG4gIDcwMDAwOiBcInJnYigwLDI1NCwwKVwiLFxuICA2MDAwMDogXCJyZ2IoMCwyNTUsMClcIixcbiAgZGVmYXVsdEZpbGw6IFwiZ3JheVwiLFxufTtcbiIsImNvbnN0IHsgZm9ybWF0TnVtYmVyIH0gPSByZXF1aXJlKFwiLi9mb3JtYXRfbnVtXCIpO1xuY29uc3QgeyBzdGF0ZUluaXRpYWxzIH0gPSByZXF1aXJlKFwiLi9zdGF0ZV9Jbml0aWFsc1wiKTtcbmNvbnN0IHsgY2FsY3VsYXRlRmlsbCB9ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlX2ZpbGxcIik7XG5jb25zdCB7IGNvbG9ycyB9ID0gcmVxdWlyZShcIi4vY29sb3JzXCIpO1xuXG5leHBvcnQgY29uc3QgZHJhd01hcCA9IChhcGlEYXRhKSA9PiB7XG4gIGFwaURhdGEudGhlbigoZGF0YSkgPT4ge1xuICAgIGxldCBzdGF0ZVRvdGFsID0ge307XG5cbiAgICBkYXRhLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICBsZXQgc3RhdGVOYW1lO1xuICAgICAgaWYgKHN0YXRlSW5pdGlhbHNbc3RhdGUuanVyaXNkaWN0aW9uXSkge1xuICAgICAgICBzdGF0ZU5hbWUgPSBzdGF0ZUluaXRpYWxzW3N0YXRlLmp1cmlzZGljdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZU5hbWUgPSBzdGF0ZS5qdXJpc2RpY3Rpb247XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSB7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKHN0YXRlVG90YWwpLmxlbmd0aCAhPT0gNjMpIHtcbiAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdID0ge1xuICAgICAgICAgIF8xc3RfZG9zZV9hbGxvY2F0aW9uczogTnVtYmVyKHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgXzJuZF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzJuZF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTnVtYmVyKFxuICAgICAgICAgIHN0YXRlLl8xc3RfZG9zZV9hbGxvY2F0aW9uc1xuICAgICAgICApO1xuICAgICAgICBzdGF0ZVRvdGFsW3N0YXRlTmFtZV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE51bWJlcihcbiAgICAgICAgICBzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgc3RhdGVUb3RhbFtzdGF0ZU5hbWVdLmZpbGxLZXkgPSBjYWxjdWxhdGVGaWxsKFxuICAgICAgICAgIHN0YXRlVG90YWxbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJpZ0NpdGllc1RvU3RhdGVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgUGhpbGx5ID0gc3RhdGVUb3RhbFtcIlBoaWxhZGVscGhpYVwiXTtcbiAgICAgIGNvbnN0IFBBID0gc3RhdGVUb3RhbFtcIlBBXCJdO1xuICAgICAgUEEuXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IFBoaWxseS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnM7XG4gICAgICBQQS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMgKz0gUGhpbGx5Ll8ybmRfZG9zZV9hbGxvY2F0aW9ucztcblxuICAgICAgY29uc3QgTllDID0gc3RhdGVUb3RhbFtcIk5ldyBZb3JrIENpdHlcIl07XG4gICAgICBjb25zdCBOWSA9IHN0YXRlVG90YWxbXCJOWVwiXTtcbiAgICAgIE5ZLl8xc3RfZG9zZV9hbGxvY2F0aW9ucyArPSBOWUMuXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICAgICAgTlkuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IE5ZQy5fMm5kX2Rvc2VfYWxsb2NhdGlvbnM7XG5cbiAgICAgIGNvbnN0IENoaWNhZ28gPSBzdGF0ZVRvdGFsW1wiQ2hpY2Fnb1wiXTtcbiAgICAgIGNvbnN0IElMID0gc3RhdGVUb3RhbFtcIklMXCJdO1xuICAgICAgSUwuXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IENoaWNhZ28uXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICAgICAgSUwuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IENoaWNhZ28uXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuICAgIH07XG5cbiAgICBhZGRCaWdDaXRpZXNUb1N0YXRlcyhzdGF0ZVRvdGFsKTtcblxuICAgIGNvbnN0IG1hcCA9IG5ldyBEYXRhbWFwKHtcbiAgICAgIHNjb3BlOiBcInVzYVwiLFxuICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgZ2VvZ3JhcGh5Q29uZmlnOiB7XG4gICAgICAgIGhpZ2hsaWdodEJvcmRlckNvbG9yOiBcInJnYig1OSwgMTc3LCAyNTUpXCIsXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IChnZW8pID0+IHtcbiAgICAgICAgICBpZiAoIXN0YXRlVG90YWxbW2dlby5pZF1dLl8ybmRfZG9zZV9hbGxvY2F0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cInN0YXRlLW5hbWVcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJncmVlbi10ZXh0XCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBcIiAxc3QgRG9zZSBcIiArXG4gICAgICAgICAgICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L2Rpdj5cIixcbiAgICAgICAgICAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cInN0YXRlLW5hbWVcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJncmVlbi10ZXh0XCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBcIiAxc3QgRG9zZSBcIiArXG4gICAgICAgICAgICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwiYmx1ZS10ZXh0XCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBcIiAybmQgRG9zZSBcIiArXG4gICAgICAgICAgICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlVG90YWxbZ2VvLmlkXS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvZGl2PlwiLFxuICAgICAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGlnaGxpZ2h0Qm9yZGVyV2lkdGg6IDIsXG4gICAgICB9LFxuICAgICAgZmlsbHM6IGNvbG9ycyxcbiAgICAgIGRhdGE6IHN0YXRlVG90YWwsXG4gICAgfSk7XG4gICAgbWFwLmxhYmVscyh7XG4gICAgICBsYWJlbENvbG9yOiBcIndoaXRlXCIsXG4gICAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgIH0pO1xuICB9KTtcbn07XG4iLCJjb25zdCB7IGZvcm1hdE51bWJlciB9ID0gcmVxdWlyZShcIi4vZm9ybWF0X251bVwiKTtcbmNvbnN0IHsgc3RhdGVJbml0aWFscyB9ID0gcmVxdWlyZShcIi4vc3RhdGVfSW5pdGlhbHNcIik7XG5jb25zdCB7IGNhbGN1bGF0ZUZpbGwgfSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZV9maWxsXCIpO1xuY29uc3QgeyBjb2xvcnMgfSA9IHJlcXVpcmUoXCIuL2NvbG9yc1wiKTtcblxuZXhwb3J0IGNvbnN0IGRyYXdNYXBXZWVrbHkgPSAoYXBpRGF0YSwgd2VlaykgPT4ge1xuICBhcGlEYXRhLnRoZW4oKGRhdGEpID0+IHtcbiAgICBsZXQgc3RhdGVXZWVrbHkgPSB7fTtcblxuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGVuZCA9IDYzO1xuXG4gICAgaWYgKHdlZWsgPiAwKSB7XG4gICAgICBzdGFydCA9IHdlZWsgKiA2MztcbiAgICAgIGVuZCA9IHN0YXJ0ICsgNjM7XG4gICAgfVxuXG4gICAgZGF0YS5zbGljZShzdGFydCwgZW5kKS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUud2Vla19vZl9hbGxvY2F0aW9ucyk7XG4gICAgICBsZXQgc3RhdGVOYW1lO1xuICAgICAgaWYgKHN0YXRlSW5pdGlhbHNbc3RhdGUuanVyaXNkaWN0aW9uXSkge1xuICAgICAgICBzdGF0ZU5hbWUgPSBzdGF0ZUluaXRpYWxzW3N0YXRlLmp1cmlzZGljdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZU5hbWUgPSBzdGF0ZS5qdXJpc2RpY3Rpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3QudmFsdWVzKHN0YXRlV2Vla2x5KS5sZW5ndGggIT09IDYzKSB7XG4gICAgICAgIHN0YXRlV2Vla2x5W3N0YXRlTmFtZV0gPSB7XG4gICAgICAgICAgXzFzdF9kb3NlX2FsbG9jYXRpb25zOiBOdW1iZXIoc3RhdGUuXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICBfMm5kX2Rvc2VfYWxsb2NhdGlvbnM6IE51bWJlcihzdGF0ZS5fMm5kX2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgIHdlZWtfb2ZfYWxsb2NhdGlvbnM6IHN0YXRlLndlZWtfb2ZfYWxsb2NhdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRlV2Vla2x5W3N0YXRlTmFtZV0uZmlsbEtleSA9IGNhbGN1bGF0ZUZpbGwoXG4gICAgICAgICAgc3RhdGVXZWVrbHlbc3RhdGVOYW1lXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEJpZ0NpdGllc1RvU3RhdGVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgUGhpbGx5ID0gc3RhdGVXZWVrbHlbXCJQaGlsYWRlbHBoaWFcIl07XG4gICAgICBjb25zdCBQQSA9IHN0YXRlV2Vla2x5W1wiUEFcIl07XG4gICAgICBQQS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gUGhpbGx5Ll8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgICAgIFBBLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBQaGlsbHkuXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBOWUMgPSBzdGF0ZVdlZWtseVtcIk5ldyBZb3JrIENpdHlcIl07XG4gICAgICBjb25zdCBOWSA9IHN0YXRlV2Vla2x5W1wiTllcIl07XG4gICAgICBOWS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMgKz0gTllDLl8xc3RfZG9zZV9hbGxvY2F0aW9ucztcbiAgICAgIE5ZLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyArPSBOWUMuXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBDaGljYWdvID0gc3RhdGVXZWVrbHlbXCJDaGljYWdvXCJdO1xuICAgICAgY29uc3QgSUwgPSBzdGF0ZVdlZWtseVtcIklMXCJdO1xuICAgICAgSUwuXzFzdF9kb3NlX2FsbG9jYXRpb25zICs9IENoaWNhZ28uXzFzdF9kb3NlX2FsbG9jYXRpb25zO1xuICAgICAgSUwuXzJuZF9kb3NlX2FsbG9jYXRpb25zICs9IENoaWNhZ28uXzJuZF9kb3NlX2FsbG9jYXRpb25zO1xuICAgIH07XG5cbiAgICBhZGRCaWdDaXRpZXNUb1N0YXRlcyhzdGF0ZVdlZWtseSk7XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgRGF0YW1hcCh7XG4gICAgICBzY29wZTogXCJ1c2FcIixcbiAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLFxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgIGdlb2dyYXBoeUNvbmZpZzoge1xuICAgICAgICBoaWdobGlnaHRCb3JkZXJDb2xvcjogXCJyZ2IoNTksIDE3NywgMjU1KVwiLFxuICAgICAgICBwb3B1cFRlbXBsYXRlOiAoZ2VvKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGF0ZVdlZWtseVtbZ2VvLmlkXV0uXzJuZF9kb3NlX2FsbG9jYXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhvdmVyaW5mb1wiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgJzxwIGNsYXNzPVwic3RhdGUtbmFtZVwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgZ2VvLnByb3BlcnRpZXMubmFtZSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cImdyZWVuLXRleHRcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIFwiIDFzdCBEb3NlIFwiICtcbiAgICAgICAgICAgICAgICBmb3JtYXROdW1iZXIoc3RhdGVXZWVrbHlbZ2VvLmlkXS5fMXN0X2Rvc2VfYWxsb2NhdGlvbnMpLFxuICAgICAgICAgICAgICBcIjwvc3Ryb25nPjwvcD5cIixcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L2Rpdj5cIixcbiAgICAgICAgICAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJob3ZlcmluZm9cIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cInN0YXRlLW5hbWVcIj48c3Ryb25nPicsXG4gICAgICAgICAgICAgIGdlby5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9wPlwiLFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJncmVlbi10ZXh0XCI+PHN0cm9uZz4nLFxuICAgICAgICAgICAgICBcIiAxc3QgRG9zZSBcIiArXG4gICAgICAgICAgICAgICAgZm9ybWF0TnVtYmVyKHN0YXRlV2Vla2x5W2dlby5pZF0uXzFzdF9kb3NlX2FsbG9jYXRpb25zKSxcbiAgICAgICAgICAgICAgXCI8L3N0cm9uZz48L3A+XCIsXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cImJsdWUtdGV4dFwiPjxzdHJvbmc+JyxcbiAgICAgICAgICAgICAgXCIgMm5kIERvc2UgXCIgK1xuICAgICAgICAgICAgICAgIGZvcm1hdE51bWJlcihzdGF0ZVdlZWtseVtnZW8uaWRdLl8ybmRfZG9zZV9hbGxvY2F0aW9ucyksXG4gICAgICAgICAgICAgIFwiPC9zdHJvbmc+PC9kaXY+XCIsXG4gICAgICAgICAgICBdLmpvaW4oXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoaWdobGlnaHRCb3JkZXJXaWR0aDogMixcbiAgICAgIH0sXG4gICAgICBmaWxsczogY29sb3JzLFxuICAgICAgZGF0YTogc3RhdGVXZWVrbHksXG4gICAgfSk7XG4gICAgbWFwLmxhYmVscyh7XG4gICAgICBsYWJlbENvbG9yOiBcIndoaXRlXCIsXG4gICAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoc3RhdGVXZWVrbHkpLmxlbmd0aCk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtKSA9PiB7XG4gIGxldCBjb252ZXJ0ID0gbnVtO1xuICBjb25zdCBkZWNpbWFsID0gTWF0aC5hYnMoY29udmVydCkudG9GaXhlZCgwKTtcbiAgbGV0IG51bXMgPSBkZWNpbWFsLnRvU3RyaW5nKCk7XG4gIG51bXMgPSBkZWNpbWFsLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICBudW1zWzBdID0gbnVtc1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIGNvbnN0IGNvbnZlcnRlZCA9IGAke251bXMuam9pbihcIi5cIil9YDtcbiAgcmV0dXJuIGNvbnZlcnRlZDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiUnBickpMdHJDWXpvODhoZkpCTGVnMmZ5QlwiO1xuIiwiZXhwb3J0IGNvbnN0IHN0YXRlSW5pdGlhbHMgPSB7XG4gIEFsYWJhbWE6IFwiQUxcIixcbiAgQWxhc2thOiBcIkFLXCIsXG4gIFwiQW1lcmljYW4gU2Ftb2FcIjogXCJBU1wiLFxuICBBcml6b25hOiBcIkFaXCIsXG4gIEFya2Fuc2FzOiBcIkFSXCIsXG4gIENhbGlmb3JuaWE6IFwiQ0FcIixcbiAgLy8gQ2hpY2FnbzogXCJJTFwiLFxuICBDb2xvcmFkbzogXCJDT1wiLFxuICBDb25uZWN0aWN1dDogXCJDVFwiLFxuICBEZWxhd2FyZTogXCJERVwiLFxuICBcIkRpc3RyaWN0IG9mIENvbHVtYmlhXCI6IFwiRENcIixcbiAgXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIjogXCJGTVwiLFxuICBGbG9yaWRhOiBcIkZMXCIsXG4gIEdlb3JnaWE6IFwiR0FcIixcbiAgR3VhbTogXCJHVVwiLFxuICBIYXdhaWk6IFwiSElcIixcbiAgSWRhaG86IFwiSURcIixcbiAgSWxsaW5vaXM6IFwiSUxcIixcbiAgSW5kaWFuYTogXCJJTlwiLFxuICBJb3dhOiBcIklBXCIsXG4gIEthbnNhczogXCJLU1wiLFxuICBLZW50dWNreTogXCJLWVwiLFxuICBMb3Vpc2lhbmE6IFwiTEFcIixcbiAgTWFpbmU6IFwiTUVcIixcbiAgXCJNYXJzaGFsbCBJc2xhbmRzXCI6IFwiTUhcIixcbiAgTWFyeWxhbmQ6IFwiTURcIixcbiAgTWFzc2FjaHVzZXR0czogXCJNQVwiLFxuICBNaWNoaWdhbjogXCJNSVwiLFxuICBNaW5uZXNvdGE6IFwiTU5cIixcbiAgTWlzc2lzc2lwcGk6IFwiTVNcIixcbiAgTWlzc291cmk6IFwiTU9cIixcbiAgTW9udGFuYTogXCJNVFwiLFxuICBOZWJyYXNrYTogXCJORVwiLFxuICBOZXZhZGE6IFwiTlZcIixcbiAgXCJOZXcgSGFtcHNoaXJlXCI6IFwiTkhcIixcbiAgXCJOZXcgSmVyc2V5XCI6IFwiTkpcIixcbiAgXCJOZXcgTWV4aWNvXCI6IFwiTk1cIixcbiAgLy8gXCJOZXcgWW9yayBDaXR5XCI6IFwiTllcIixcbiAgXCJOZXcgWW9ya1wiOiBcIk5ZXCIsXG4gIFwiTm9ydGggQ2Fyb2xpbmFcIjogXCJOQ1wiLFxuICBcIk5vcnRoIERha290YVwiOiBcIk5EXCIsXG4gIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCI6IFwiTVBcIixcbiAgT2hpbzogXCJPSFwiLFxuICBPa2xhaG9tYTogXCJPS1wiLFxuICBPcmVnb246IFwiT1JcIixcbiAgUGFsYXU6IFwiUFdcIixcbiAgUGVubnN5bHZhbmlhOiBcIlBBXCIsXG4gIC8vIFBoaWxhZGVscGhpYTogXCJQQVwiLFxuICBcIlB1ZXJ0byBSaWNvXCI6IFwiUFJcIixcbiAgXCJSaG9kZSBJc2xhbmRcIjogXCJSSVwiLFxuICBcIlNvdXRoIENhcm9saW5hXCI6IFwiU0NcIixcbiAgXCJTb3V0aCBEYWtvdGFcIjogXCJTRFwiLFxuICBUZW5uZXNzZWU6IFwiVE5cIixcbiAgVGV4YXM6IFwiVFhcIixcbiAgVXRhaDogXCJVVFwiLFxuICBWZXJtb250OiBcIlZUXCIsXG4gIFwiVmlyZ2luIElzbGFuZHNcIjogXCJWSVwiLFxuICBWaXJnaW5pYTogXCJWQVwiLFxuICBXYXNoaW5ndG9uOiBcIldBXCIsXG4gIFwiV2VzdCBWaXJnaW5pYVwiOiBcIldWXCIsXG4gIFdpc2NvbnNpbjogXCJXSVwiLFxuICBXeW9taW5nOiBcIldZXCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==