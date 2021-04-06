export const calculateFill = (numDoses) => {
  if (numDoses >= 6000000) {
    return "6000000";
  } else if (numDoses < 6000000 && numDoses >= 5000000) {
    return "500000";
  } else if (numDoses < 5000000 && numDoses >= 4000000) {
    return "4000000";
  } else if (numDoses < 4000000 && numDoses >= 3500000) {
    return "3500000";
  } else if (numDoses < 3500000 && numDoses >= 3000000) {
    return "3000000";
  } else if (numDoses < 3000000 && numDoses >= 2500000) {
    return "2500000";
  } else if (numDoses < 2500000 && numDoses >= 2000000) {
    return "2000000";
  } else if (numDoses < 2000000 && numDoses >= 1800000) {
    return "1800000";
  } else if (numDoses < 1800000 && numDoses >= 1600000) {
    return "1600000";
  } else if (numDoses < 1600000 && numDoses >= 1500000) {
    return "1500000";
  } else if (numDoses < 1500000 && numDoses >= 1400000) {
    return "1400000";
  } else if (numDoses < 1400000 && numDoses >= 1300000) {
    return "1300000";
  } else if (numDoses < 1300000 && numDoses >= 1200000) {
    return "1200000";
  } else if (numDoses < 1200000 && numDoses >= 1100000) {
    return "1100000";
  } else if (numDoses < 1100000 && numDoses >= 1000000) {
    return "1000000";
  } else if (numDoses < 1000000 && numDoses >= 950000) {
    return "950000";
  } else if (numDoses < 950000 && numDoses >= 900000) {
    return "900000";
  } else if (numDoses < 900000 && numDoses >= 850000) {
    return "850000";
  } else if (numDoses < 850000 && numDoses >= 800000) {
    return "800000";
  } else if (numDoses < 800000 && numDoses >= 750000) {
    return "750000";
  } else if (numDoses < 750000 && numDoses >= 700000) {
    return "700000";
  } else if (numDoses < 700000 && numDoses >= 650000) {
    return "650000";
  } else if (numDoses < 650000 && numDoses >= 600000) {
    return "600000";
  } else if (numDoses < 600000 && numDoses >= 550000) {
    return "550000";
  } else if (numDoses < 550000 && numDoses >= 500000) {
    return "500000";
  } else if (numDoses < 500000 && numDoses >= 450000) {
    return "450000";
  } else if (numDoses < 450000 && numDoses >= 400000) {
    return "400000";
  } else if (numDoses < 400000 && numDoses >= 350000) {
    return "350000";
  } else if (numDoses < 350000 && numDoses >= 300000) {
    return "300000";
  } else if (numDoses < 300000 && numDoses >= 250000) {
    return "250000";
  } else if (numDoses < 250000 && numDoses >= 200000) {
    return "200000";
  } else if (numDoses < 200000 && numDoses >= 180000) {
    return "180000";
  } else if (numDoses < 180000 && numDoses >= 160000) {
    return "160000";
  } else if (numDoses < 160000 && numDoses >= 150000) {
    return "150000";
  } else if (numDoses < 150000 && numDoses >= 140000) {
    return "140000";
  } else if (numDoses < 140000 && numDoses >= 130000) {
    return "130000";
  } else if (numDoses < 130000 && numDoses >= 120000) {
    return "120000";
  } else if (numDoses < 120000 && numDoses >= 110000) {
    return "110000";
  } else if (numDoses < 110000 && numDoses >= 100000) {
    return "100000";
  } else if (numDoses < 100000 && numDoses >= 90000) {
    return "90000";
  } else if (numDoses < 90000 && numDoses >= 80000) {
    return "80000";
  } else if (numDoses < 80000 && numDoses >= 70000) {
    return "70000";
  } else if (numDoses < 70000 && numDoses >= 60000) {
    return "60000";
  } else {
    return "defaultFill";
  }
};
