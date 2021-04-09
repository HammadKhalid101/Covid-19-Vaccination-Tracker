import "./styles/index.scss";
import { drawMap } from "./js/draw_map";
import { drawMapWeekly } from "./js/draw_map_weekly";
import { pfizerAPI, modernaAPI, janssenAPI } from "./js/api_util";

document.addEventListener("DOMContentLoaded", () => {
  const modalButton = document.querySelector(".modal-map-button");
  const pfizerButton = document.querySelector("#pfizer");
  const modernaButton = document.querySelector("#moderna");
  const janssenButton = document.querySelector("#janssen");
  const slider = document.querySelector("#scroller");

  modalButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });

  pfizerButton.addEventListener("click", () => {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(pfizerButton);
    slider.value = 0;
    newMap(pfizerAPI);
  });

  modernaButton.addEventListener("click", () => {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(modernaButton);
    slider.value = 0;
    slider.max = 16;
    newMap(modernaAPI);
  });

  janssenButton.addEventListener("click", () => {
    removeActive(pfizerButton, modernaButton, janssenButton);
    addActive(janssenButton);
    slider.value = 0;
    slider.max = 5;
    newMap(janssenAPI);
  });

  slider.addEventListener("change", () => {
    newMap(
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
  });

  newMap(pfizerAPI);
});

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

// newMap function

function newMap(apiData, week) {
  const mapParent = document.querySelector(".usa-map");
  const map = document.querySelector("#map");

  let newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";

  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap);

  if (!week) {
    drawMap(apiData);
  } else {
    drawMapWeekly(apiData, week);
  }
}
