import "./styles/index.scss";
// import { drawMap } from "./js/draw_map";
// import { pfizerAPI, modernaAPI, janssenAPI } from "./js/api_util";

document.addEventListener("DOMContentLoaded", () => {
  const pfizerButton = document.querySelector("#pfizer");
  const modernaButton = document.querySelector("#moderna");
  const janssenButton = document.querySelector("#janssen");
  const modalButton = document.querySelector(".modal-map-button");

  modalButton.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("remove-modal");
  });

  pfizerButton.addEventListener("click", () => {
    newMap(pfizerAPI);
  });

  modernaButton.addEventListener("click", () => {
    newMap(modernaAPI);
  });

  janssenButton.addEventListener("click", () => {
    newMap(janssenAPI);
  });

  drawMap(pfizerAPI);
});

function newMap(apiData) {
  const mapParent = document.querySelector(".usa-map");
  const map = document.querySelector("#map");

  let newMap = document.createElement("div");
  newMap.id = "map";
  newMap.className = "map";

  map.parentNode.removeChild(map);
  mapParent.appendChild(newMap);

  drawMap(apiData);
}
