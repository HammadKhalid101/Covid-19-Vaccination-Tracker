const { stateInitials } = require("./state_Initials");
const { calculateFill } = require("./calculate_fill");
const { addBigCitiesToStates } = require("./add_big_cities");

export const formatData = (apiData) => {
  let stateTotal = {};

  apiData.forEach((state) => {
    let stateName;
    if (stateInitials[state.jurisdiction]) {
      stateName = stateInitials[state.jurisdiction];
    } else {
      stateName = state.jurisdiction;
    }

    if (Object.values(stateTotal).length !== 63) {
      stateTotal[stateName] = {
        _1st_dose_allocations: Number(state._1st_dose_allocations),
        _2nd_dose_allocations: Number(state._2nd_dose_allocations) || 0,
        week_of_allocations: state.week_of_allocations,
        jurisdiction: state.jurisdiction,
      };
      stateTotal[stateName].fillKey = calculateFill(
        stateTotal[stateName]._1st_dose_allocations
      );
    } else {
      stateTotal[stateName]._1st_dose_allocations += Number(
        state._1st_dose_allocations
      );
      stateTotal[stateName]._2nd_dose_allocations += Number(
        state._2nd_dose_allocations || 0
      );
      stateTotal[stateName].fillKey = calculateFill(
        stateTotal[stateName]._1st_dose_allocations
      );
    }
  });
  addBigCitiesToStates(stateTotal);

  stateTotal["week"] = apiData[0].week_of_allocations;
  stateTotal["allData"] = false;

  if (apiData.length >= 190) {
    stateTotal.allData = true;
  }

  return stateTotal;
};
