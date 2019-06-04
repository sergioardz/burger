// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function (table, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (burger_name) VALUES ";
		queryString += "('";
		queryString += vals;
		queryString += "') ";

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// An example of objColVals would be {burger_name: cheeseburger, devoured: true}
	updateOne: function (table, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET devoured = true WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// Export the orm object for the model (cat.js).
module.exports = orm;