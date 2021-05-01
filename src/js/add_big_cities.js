export const addBigCitiesToStates = (stateTotal) => {
  const Philly = stateTotal["Philadelphia"];
  const PA = stateTotal["PA"];
  PA._1st_dose_allocations += Philly._1st_dose_allocations;
  PA._2nd_dose_allocations += Philly._2nd_dose_allocations;

  const NYC = stateTotal["New York City"];
  const NY = stateTotal["NY"];
  NY._1st_dose_allocations += NYC._1st_dose_allocations;
  NY._2nd_dose_allocations += NYC._2nd_dose_allocations;

  const Chicago = stateTotal["Chicago"];
  const IL = stateTotal["IL"];
  IL._1st_dose_allocations += Chicago._1st_dose_allocations;
  IL._2nd_dose_allocations += Chicago._2nd_dose_allocations;
};
