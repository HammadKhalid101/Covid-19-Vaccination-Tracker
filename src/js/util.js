const AppToken = require("./secret");
const Map = require("./map");

// export const PfizerData = fetch(
//   `https://data.cdc.gov/resource/saz5-9hgg.json?$$app_token=${AppToken}&$limit=5000`
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
//     let stateWeekly = {};

//     // let weekDateObj = new Date(state.week_of_allocations);
//     // let week = weekDateObj.toDateString().slice(4);

//     data.forEach((state) => {
//       let stateName = `${state.jurisdiction}`;

//       let weekDateObj = new Date(state.week_of_allocations);
//       let week = weekDateObj.toDateString().slice(4);

//       //   stateWeekly[week] = {
//       //     state: state,
//       //   };
//       //   stateWeekly[week] = {
//       //     state: state,
//       //   };

//       if (Object.values(stateTotal).length !== 63) {
//         stateTotal[stateName] = {
//           _1st_dose_allocations: Number(state._1st_dose_allocations),
//           _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         };

//         // stateWeekly[week] = {
//         //   week_of_allocations: state.week_of_allocations,
//         //   _1st_dose_allocations: Number(state._1st_dose_allocations),
//         //   _2nd_dose_allocations: Number(state._2nd_dose_allocations),
//         // };
//       } else {
//         // let stateName = `${state.jurisdiction}`;
//         stateTotal[stateName]._1st_dose_allocations += Number(
//           state._1st_dose_allocations
//         );
//         stateTotal[stateName]._2nd_dose_allocations += Number(
//           state._2nd_dose_allocations
//         );
//         // stateWeekly[stateName]._1st_dose_allocations += Number(
//         //   state._1st_dose_allocations
//         // );
//         // stateWeekly[stateName]._2nd_dose_allocations += Number(
//         //   state._2nd_dose_allocations
//         // );
//       }
//     });
//     // let map = document.getElementById('map');
//     // let usaMap = new Datamap({
//     //     scope: "usa",
//     //     element: document.getElementById("map"),
//     //   });

//     //     const plot = `
//     //       <script class="usa-map-script">
//     //         ${Map}
//     //       </script>
//     //       `;
//     //     document.getElementById("map").insertAdjacentElement("afterbegin", plot);
//   });

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
