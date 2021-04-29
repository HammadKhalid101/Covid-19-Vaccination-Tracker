import "./styles/index.scss";
import "regenerator-runtime/runtime.js";
import { drawMap } from "./js/draw_map";
import { pfizerAPI, modernaAPI, janssenAPI } from "./js/api_util";
import { formatData } from "./js/format_data";
import { formatDataWeekly } from "./js/format_data_weekly";

document.addEventListener("DOMContentLoaded", () => {
  const modalButton = document.querySelector(".modal-map-button");
  const allButton = document.querySelector(".all-button");
  const pfizerButton = document.querySelector("#pfizer");
  const modernaButton = document.querySelector("#moderna");
  const janssenButton = document.querySelector("#janssen");
  const slider = document.querySelector("#scroller");

  modalButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });

  allButton.addEventListener("click", () => {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(allButton);
    slider.value = 0;
    slider.max = 20;
    combinedDataMap();
  });

  pfizerButton.addEventListener("click", () => {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(pfizerButton);
    slider.value = 0;
    slider.max = 20;
    singleMap(pfizerAPI);
  });

  modernaButton.addEventListener("click", () => {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(modernaButton);
    slider.value = 0;
    slider.max = 18;
    singleMap(modernaAPI);
  });

  janssenButton.addEventListener("click", () => {
    removeActive(allButton, pfizerButton, modernaButton, janssenButton);
    addActive(janssenButton);
    slider.value = 0;
    slider.max = 5;
    singleMap(janssenAPI);
  });

  slider.addEventListener("change", () => {
    if (allButton.classList[1]) {
      combinedDataMap(slider.value);
    } else {
      singleMap(
        selectedManufacturer(
          pfizerButton,
          pfizerAPI,
          modernaButton,
          modernaAPI,
          janssenButton,
          janssenAPI
        ),
        slider.value
      );
    }
  });

  slider.value = 0;
  slider.max = 19;
  combinedDataMap();
});

function newMap(apiData) {
  const mapParent = document.querySelector(".usa-map");
  const map = document.querySelector("#map");

  let newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";

  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap);
  // debugger;
  drawMap(apiData);
}

async function singleMap(apiData, week) {
  let manufacturerData = [];

  try {
    manufacturerData = await apiData();
  } catch (e) {
    console.log("Error");
    console.log(e);
  }

  let formattedData;
  if (week) {
    formattedData = formatDataWeekly(manufacturerData, week);
  } else {
    formattedData = formatData(manufacturerData);
  }
  newMap(formattedData);
}

async function combinedDataMap(week) {
  let pfizerData = [];
  let modernaData = [];
  let janssenData = [];

  try {
    pfizerData = await pfizerAPI();
    modernaData = await modernaAPI();
    janssenData = await janssenAPI();
  } catch (e) {
    console.log("Error");
    console.log(e);
  }
  const total = pfizerData.concat(modernaData).concat(janssenData);
  let formattedData;

  if (week) {
    formattedData = formatDataWeekly(total, week);
  } else {
    formattedData = formatData(total);
  }

  newMap(formattedData);
}

function addActive(button) {
  button.classList.add("active");
}

function removeActive(allButton, pfizerButton, modernaButton, janssenButton) {
  if (allButton.classList[1]) {
    allButton.classList.remove("active");
  } else if (pfizerButton.classList[1]) {
    pfizerButton.classList.remove("active");
  } else if (modernaButton.classList[1]) {
    modernaButton.classList.remove("active");
  } else if (janssenButton.classList[1]) {
    janssenButton.classList.remove("active");
  }
}

function selectedManufacturer(
  pfizerButton,
  pfizerAPI,
  modernaButton,
  modernaAPI,
  janssenButton,
  janssenAPI
) {
  if (pfizerButton.classList[1]) {
    return pfizerAPI;
  } else if (modernaButton.classList[1]) {
    return modernaAPI;
  } else if (janssenButton.classList[1]) {
    return janssenAPI;
  }
}

// Scroller/Slider variables

let inputValue = null;
const week = [
  "04/12/2021",
  "04/05/2021",
  "03/29/2021",
  "03/22/2021",
  "03/15/2021",
  "03/08/2021",
  "03/01/2021",
  "02/22/2021",
  "02/15/2021",
  "02/08/2021",
  "02/01/2021",
  "01/25/2021",
  "01/18/2021",
  "01/11/2021",
  "01/04/2021",
  "12/28/2020",
];
