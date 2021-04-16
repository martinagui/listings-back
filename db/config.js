const Sequelize = require("sequelize");

//Sequelize instance:
const homerun = new Sequelize(
  "postgres://postgres:22362236@localhost:5432/homerun"
);

//Export homerun connection.
module.exports = homerun;
