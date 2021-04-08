// const { formatNumber } = require("./format_num");
// const { stateInitials } = require("./state_Initials");
// const { calculateFill } = require("./calculate_fill");
// const { colors } = require("./colors");

// export const drawMap = (apiData) => {
//   apiData.then((data) => {
//     let stateTotal = {};

//     data.forEach((state) => {
//       let stateName;
//       if (stateInitials[state.jurisdiction]) {
//         stateName = stateInitials[state.jurisdiction];
//       } else {
//         stateName = state.jurisdiction;
//       }

//       if (!state._2nd_dose_allocations) {
//       }

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
//         stateTotal[stateName].fillKey = calculateFill(
//           stateTotal[stateName]._1st_dose_allocations
//         );
//       }
//     });

//     const addBigCitiesToStates = () => {
//       const Philly = stateTotal["Philadelphia"];
//       const PA = stateTotal["PA"];
//       PA._1st_dose_allocations += Philly._1st_dose_allocations;
//       PA._2nd_dose_allocations += Philly._2nd_dose_allocations;

//       const NYC = stateTotal["New York City"];
//       const NY = stateTotal["NY"];
//       NY._1st_dose_allocations += NYC._1st_dose_allocations;
//       NY._2nd_dose_allocations += NYC._2nd_dose_allocations;

//       const Chicago = stateTotal["Chicago"];
//       const IL = stateTotal["IL"];
//       IL._1st_dose_allocations += Chicago._1st_dose_allocations;
//       IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
//     };

//     addBigCitiesToStates(stateTotal);

//     const map = new Datamap({
//       scope: "usa",
//       element: document.getElementById("map"),
//       responsive: true,
//       geographyConfig: {
//         highlightBorderColor: "rgb(59, 177, 255)",
//         popupTemplate: (geo) => {
//           if (!stateTotal[[geo.id]]._2nd_dose_allocations) {
//             return [
//               '<div class="hoverinfo"><strong>',
//               '<p class="state-name"><strong>',
//               geo.properties.name,
//               "</strong></p>",
//               '<p class="green-text"><strong>',
//               " 1st Dose " +
//                 formatNumber(stateTotal[geo.id]._1st_dose_allocations),
//               "</strong></p>",
//               "</strong></div>",
//             ].join("");
//           } else {
//             return [
//               '<div class="hoverinfo"><strong>',
//               '<p class="state-name"><strong>',
//               geo.properties.name,
//               "</strong></p>",
//               '<p class="green-text"><strong>',
//               " 1st Dose " +
//                 formatNumber(stateTotal[geo.id]._1st_dose_allocations),
//               "</strong></p>",
//               '<p class="blue-text"><strong>',
//               " 2nd Dose " +
//                 formatNumber(stateTotal[geo.id]._2nd_dose_allocations),
//               "</strong></div>",
//             ].join("");
//           }
//         },
//         highlightBorderWidth: 2,
//       },
//       fills: colors,
//       data: stateTotal,
//     });
//     map.labels({
//       labelColor: "white",
//       fontFamily: "Roboto",
//       fontSize: 12,
//     });
//   });
// };
