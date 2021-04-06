const AppToken = require("./secret");
const stateInitials = require("./state_Initials");
const calculateFill = require("./calculate_fill");
const { colors } = require("./colors");
// const drawMap = require("./map");

const formatNumber = (num) => {
  let convert = num;
  const decimal = Math.abs(convert).toFixed(0);
  let nums = decimal.toString();
  nums = decimal.toString().split(".");
  nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const converted = `${nums.join(".")}`;
  return converted;
};

export const PfizerData = fetch(
  `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
)
  .then((res) => {
    if (!res.ok) {
      throw Error("Api call unsuccessful");
    } else {
      return res.json();
    }
  })
  .then((data) => {
    let stateTotal = {};
    let stateWeekly = {};

    // let weekDateObj = new Date(state.week_of_allocations);
    // let week = weekDateObj.toDateString().slice(4);

    data.forEach((state) => {
      let st = stateInitials;

      let stateName;
      const cl = calculateFill;

      if (st.stateInitials[state.jurisdiction]) {
        stateName = st.stateInitials[state.jurisdiction];
      } else {
        stateName = state.jurisdiction;
      }

      let weekDateObj = new Date(state.week_of_allocations);
      let week = weekDateObj.toDateString().slice(4);

      if (Object.values(stateTotal).length !== 63) {
        stateTotal[stateName] = {
          _1st_dose_allocations: Number(state._1st_dose_allocations),
          _2nd_dose_allocations: Number(state._2nd_dose_allocations),
        };
      } else {
        stateTotal[stateName]._1st_dose_allocations += Number(
          state._1st_dose_allocations
        );
        stateTotal[stateName]._2nd_dose_allocations += Number(
          state._2nd_dose_allocations
        );
        stateTotal[stateName].fillKey = cl.calculateFill(
          stateTotal[stateName]._1st_dose_allocations
        );
      }
    });

    // const veryHigh = "#228B22";

    // Object.keys(stateTotal).forEach((state) => {
    //   stateTotal[state].fillKey = "mid";
    // });

    const drawMap = new Datamap({
      scope: "usa",
      element: document.getElementById("map"),
      responsive: true,
      geographyConfig: {
        highlightBorderColor: "rgb(59, 177, 255)",
        // highlightFillColor: "white",
        popupTemplate: (geo) => {
          return [
            '<div class="hoverinfo"><strong>',
            '<p class="state-name"><strong>',
            geo.properties.name + ":",
            "</strong></p>",
            '<p class="green-text"><strong>',
            " 1st Dose " +
              formatNumber(stateTotal[geo.id]._1st_dose_allocations),
            "</strong></p>",
            '<p class="blue-text"><strong>',
            " 2nd Dose " +
              formatNumber(stateTotal[geo.id]._2nd_dose_allocations),
            "</strong></div>",
          ].join("");
        },
        highlightBorderWidth: 3,
      },
      fills: colors,
      data: stateTotal,
    });
    console.log(stateTotal);
    drawMap.labels();
  });

// export const ModernaData = fetch(
//   `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Api call unsuccessful");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     let stateTotal = {};

//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;

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
//       }
//     });
//     console.log(stateTotal);
//   });

// export const JanssenData = fetch(
//   `https://data.cdc.gov/resource/b7pe-5nws.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Api call unsuccessful");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     let stateTotal = {};

//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;

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
//       }
//     });
//     console.log(stateTotal);
//   });

// export const ModernaDtata = $.ajax({
//   url: "https://data.cdc.gov/resource/b7pe-5nws.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Moderna" + data.length + " records from the dataset!");
//   console.log(data);
// });

// export const JanssenData = $.ajax({
//   url: "https://data.cdc.gov/resource/w9zu-fywh.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Janssen" + data.length + " records from the dataset!");
//   console.log(data);
// });

///////////////////////////////////////////////////////////////////////////////

// const PfizerRequest = new Request("https://data.cdc.gov/resource/saz5-9hgg.json", {
//     method: "GET",
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
// })

// const PfizerApi = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// );

// export const PfizerData = PfizerApi.then((response) =>
//   response.json()
// ).then((data) => data);

// export const PfizerData = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let response = await fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
// );

// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

// export const PfizerData = fetch({
//   url: "https://data.cdc.gov/resource/saz5-9hgg.json",
//   type: "GET",
//   data: {
// $limit: 5000,
// $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Pfizer" + data.length + " records from the dataset!");
//   console.log(data);
// });

// export const PfizerData = $.ajax({
//   url: "https://data.cdc.gov/resource/saz5-9hgg.json",
//   type: "GET",
//   data: {
//     $limit: 5000,
//     $$app_token: `${AppToken}`,
//   },
// }).done(function (data) {
//   alert("Retrieved Pfizer" + data.length + " records from the dataset!");
//   console.log(data);
// });
