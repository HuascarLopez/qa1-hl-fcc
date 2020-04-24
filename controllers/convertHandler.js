/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const unitsMap = {
    gal: "L",
    L: "gal",
    lbs: "kg",
    kg: "lbs",
    mi: "km",
    km: "mi"
  };

  this.getNum = function(input) {
    const unit = this.getUnit(input);

    if (unit === null) {
      return null;
    }
    
    const num = input.split(unit)[0];

    try {
      const result = eval(num === "" ? 1 : num);
      return result;
    } catch (e) {
      return null;
    }
  };

  this.getUnit = function(input) {
    const reg = /(gal)|(L)|(lbs)|(kg)|(mi)|(km)$/;
    const unit = input.match(reg);

    return unit === null ? null : unit[0];
  };

  this.getReturnUnit = function(initUnit) {
    if (initUnit === null) {
      return null;
    }
    return unitsMap[initUnit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.45359;
    const miToKm = 1.60934;

    if (initNum === null) {
      return null;
    }

    switch (initUnit) {
      case "gal": {
        return Number(initNum * galToL).toFixed(6);
      }
      case "L": {
        return Number(initNum / galToL).toFixed(6);
      }
      case "lbs": {
        return Number(initNum * lbsToKg).toFixed(6);
      }
      case "kg": {
        return Number(initNum / lbsToKg).toFixed(6);
      }
      case "mi": {
        return Number(initNum * miToKm).toFixed(6);
      }
      case "km": {
        return Number(initNum / miToKm).toFixed(6);
      }
      default: {
        return null;
      }
    }
  };
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (initNum === null || initUnit === null || returnNum === null || returnUnit === null){
      return null;
    }
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;
