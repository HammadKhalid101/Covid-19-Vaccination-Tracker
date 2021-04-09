const { formatNumber } = require("./format_num");
const { stateInitials } = require("./state_Initials");
const { calculateFill } = require("./calculate_fill");
const { colors } = require("./colors");

export const drawMapWeekly = (apiData, week) => {
  apiData.then((data) => {
    let stateWeekly = {};

    let start = 0;
    let end = 63;

    if (week > 0) {
      start = week * 63;
      end = start + 63;
    }

    data.slice(start, end).forEach((state) => {
      console.log(state.week_of_allocations);
      let stateName;
      if (stateInitials[state.jurisdiction]) {
        stateName = stateInitials[state.jurisdiction];
      } else {
        stateName = state.jurisdiction;
      }

      if (Object.values(stateWeekly).length !== 63) {
        stateWeekly[stateName] = {
          _1st_dose_allocations: Number(state._1st_dose_allocations),
          _2nd_dose_allocations: Number(state._2nd_dose_allocations),
          week_of_allocations: state.week_of_allocations,
        };
        stateWeekly[stateName].fillKey = calculateFill(
          stateWeekly[stateName]._1st_dose_allocations
        );
      }
    });

    const addBigCitiesToStates = () => {
      const Philly = stateWeekly["Philadelphia"];
      const PA = stateWeekly["PA"];
      PA._1st_dose_allocations += Philly._1st_dose_allocations;
      PA._2nd_dose_allocations += Philly._2nd_dose_allocations;

      const NYC = stateWeekly["New York City"];
      const NY = stateWeekly["NY"];
      NY._1st_dose_allocations += NYC._1st_dose_allocations;
      NY._2nd_dose_allocations += NYC._2nd_dose_allocations;

      const Chicago = stateWeekly["Chicago"];
      const IL = stateWeekly["IL"];
      IL._1st_dose_allocations += Chicago._1st_dose_allocations;
      IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
    };

    addBigCitiesToStates(stateWeekly);

    const map = new Datamap({
      scope: "usa",
      element: document.getElementById("map"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "rgb(59, 177, 255)",
        popupTemplate: (geo) => {
          if (!stateWeekly[[geo.id]]._2nd_dose_allocations) {
            return [
              '<div class="hoverinfo"><strong>',
              '<p class="state-name"><strong>',
              geo.properties.name,
              "</strong></p>",
              '<p class="green-text"><strong>',
              " 1st Dose " +
                formatNumber(stateWeekly[geo.id]._1st_dose_allocations),
              "</strong></p>",
              "</strong></div>",
            ].join("");
          } else {
            return [
              '<div class="hoverinfo"><strong>',
              '<p class="state-name"><strong>',
              geo.properties.name,
              "</strong></p>",
              '<p class="green-text"><strong>',
              " 1st Dose " +
                formatNumber(stateWeekly[geo.id]._1st_dose_allocations),
              "</strong></p>",
              '<p class="blue-text"><strong>',
              " 2nd Dose " +
                formatNumber(stateWeekly[geo.id]._2nd_dose_allocations),
              "</strong></div>",
            ].join("");
          }
        },
        highlightBorderWidth: 2,
      },
      fills: colors,
      data: stateWeekly,
    });
    map.labels({
      labelColor: "white",
      fontFamily: "Roboto",
      fontSize: 12,
    });
    // console.log(Object.values(stateWeekly).length);
  });
};
