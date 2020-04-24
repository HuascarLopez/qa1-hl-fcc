/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var resString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (initUnit === null && initNum === null) {
      res.json({error: "Invalid Number and Unit"});
    } else if (initNum === null) {
      res.json({error: "Invalid Number"});
    } else if (initUnit === null) {
      res.json({error: "Invalid Unit"});
    } else {
      res.json({initNum, initUnit, returnNum, returnUnit, resString});
    }
  });
};
