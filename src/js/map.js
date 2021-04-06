// export const drawMap = (stateTotal) => {
//   const map = new Datamap({
//     scope: "usa",
//     element: document.getElementById("map"),
//     responsive: true,
//     geographyConfig: {
//       popupTemplate: (geo) => {
//         function getState(states) {
//           return states.state === geo.id;
//         }

//         return [
//           '<div class="hoverinfo"><strong>',
//           geo.properties.name,
//           ": $" + stateTotal["Virginia"]._1st_dose_allocations,
//           "</strong></div>",
//         ].join("");
//       },
//     },
//   });
// };
