const S = require("sequelize");
const homerun = require("../db/config");

class Image extends S.Model {}
Image.init(
  {
    listingId: {
      type: S.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: homerun, modelName: "image" }
);

module.exports = Image;
