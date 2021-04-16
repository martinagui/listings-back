// const S = require("sequelize");

// const { Model, DataType } = require("sequelize");
// const db = require("../db/db");
// const db = new S("postgres://postgres:22362236@localhost:5432/listings");

const homerun = require("../db/config");

const Listing = require("./Listing");
const Image = require("./Image");

//Relations
Listing.hasMany(Image, { foreignKey: "listingId" });
Image.belongsTo(Listing);

module.exports = { homerun, Listing, Image };
