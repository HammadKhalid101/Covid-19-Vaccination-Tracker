export const formatNumber = (num) => {
  let convert = num;
  const decimal = Math.abs(convert).toFixed(0);
  let nums = decimal.toString();
  nums = decimal.toString().split(".");
  nums[0] = nums[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const converted = `${nums.join(".")}`;
  return converted;
};
