export const calculateFill = (numDoses) => {
  if (numDoses >= 6000000) {
    return "6000000";
  } else if (numDoses < 6000000 && numDoses >= 3000000) {
    return "3000000";
  } else if (numDoses < 3000000 && numDoses >= 1000000) {
    return "1000000";
  } else if (numDoses < 1000000 && numDoses >= 500000) {
    return "500000";
  } else if (numDoses < 500000 && numDoses >= 100000) {
    return "100000";
  } else if (numDoses < 100000 && numDoses >= 50000) {
    return "50000";
  } else if (numDoses < 50000 && numDoses >= 25000) {
    return "25000";
  } else if (numDoses < 25000 && numDoses >= 10000) {
    return "10000";
  } else if (numDoses < 10000 && numDoses >= 5000) {
    return "5000";
  } else if (numDoses < 5000 && numDoses >= 1) {
    return "1";
  } else {
    return "defaultFill";
  }
};
