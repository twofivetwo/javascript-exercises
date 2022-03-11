// My Solutions
const ftoc = function(tempFahrenheit) {
  return +(tempFahrenheit === 32 ? c = 0 : c = ((tempFahrenheit - 32) * 
      0.5555555556).toFixed(1));
};

const ctof = function(tempCelcius) {
  return +(tempCelcius === 0 ? f = 32 : f = (tempCelcius * 1.8 + 32).toFixed(1));
};


//TOP's Solutions
const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10;
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10;
 };
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
