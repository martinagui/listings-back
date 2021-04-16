const S = require("sequelize");
const homerun = require("../db/config");

class Listing extends S.Model {}
Listing.init(
  {
    address: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    state: {
      type: S.STRING,
      allowNull: false,
    },
    zip: {
      type: S.INTEGER,
      allowNull: false,
    },
    price: {
      type: S.DECIMAL,
      allowNull: false,
    },
    beds: {
      type: S.INTEGER,
      allowNull: true,
    },
    baths: {
      type: S.DECIMAL,
      allowNull: true,
    },
    garage: {
      type: S.INTEGER,
      allowNull: true,
    },
    hasPool: {
      type: S.BOOLEAN,
      allowNull: true,
    },
    imageUrl: {
      type: S.STRING,
      allowNull: false,
    },
    sqft: {
      type: S.FLOAT,
      allowNull: false,
    },
    date: {
      type: S.DATE,
      allowNull: false,
    },
    expirationDate: {
      type: S.DATE,
      allowNull: false,
    },
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    statusId: {
      type: S.INTEGER,
      allowNull: false,
    },
    propertyTypeId: {
      type: S.INTEGER,
      allowNull: false,
    },
    listingTypeId: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: homerun, modelName: "listing" }
);

module.exports = Listing;
