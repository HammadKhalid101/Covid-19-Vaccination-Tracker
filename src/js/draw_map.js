const { formatData } = require("./format_data");
const { formatNumber } = require("./format_num");
const { colors } = require("./colors");

export const drawMap = (apiData) => {
  const stateTotal = apiData;
  // debugger;

  const map = new Datamap({
    scope: "usa",
    element: document.getElementById("map"),
    responsive: true,
    geographyConfig: {
      highlightBorderColor: "rgb(59, 177, 255)",
      popupTemplate: (geo) => {
        // if (!stateTotal[[geo.id]]._2nd_dose_allocations) {
        //   return [
        //     '<div class="hoverinfo"><strong>',
        //     '<p class="state-name"><strong>',
        //     geo.properties.name,
        //     "</strong></p>",
        //     '<p class="green-text"><strong>',
        //     " 1st Dose " +
        //       formatNumber(stateTotal[geo.id]._1st_dose_allocations),
        //     "</strong></p>",
        //     "</strong></div>",
        //   ].join("");
        // } else {
        return [
          '<div class="hoverinfo"><strong>',
          '<p class="state-name"><strong>',
          geo.properties.name,
          "</strong></p>",
          '<p class="green-text"><strong>',
          " 1st Dose " + formatNumber(stateTotal[geo.id]._1st_dose_allocations),
          "</strong></p>",
          '<p class="blue-text"><strong>',
          " 2nd Dose " + formatNumber(stateTotal[geo.id]._2nd_dose_allocations),
          "</strong></div>",
        ].join("");
        // }
      },
      highlightBorderWidth: 2,
    },
    fills: colors,
    data: stateTotal,
  });
  map.labels({
    labelColor: "white",
    fontFamily: "Roboto",
    fontSize: 12,
  });
};
