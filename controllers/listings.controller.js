const Listing = require("../models/Listing");
const { Op } = require("sequelize");

const listingController = {
  addListing(req, res, next) {
    const date = new Date();
    const {
      address,
      description,
      city,
      state,
      zip,
      price,
      beds,
      baths,
      garage,
      hasPool,
      imageUrl,
      sqft,
      expirationDate,
      userId,
      statusId,
      propertyTypeId,
      listingTypeId,
    } = req.body;

    console.log(req.body);
    Listing.create({
      address,
      description,
      city,
      state,
      zip,
      price,
      beds,
      baths,
      garage,
      hasPool,
      imageUrl,
      sqft,
      date,
      expirationDate,
      userId,
      statusId,
      propertyTypeId,
      listingTypeId,
    })
      .then((listing) => {
        res.status(201).send(listing);
      })
      .catch((err) => {
        res.send(err);
      });

    // if (newListing) {
    //   res.json({ message: "Listing saved successfully", data: newListing });
    // }
  },
  getListings(req, res) {
    Listing.findAll({})
      .then((solution) => {
        res.status(201).send(solution);
      })
      .then(() => {
        console.log(req.params);
      });
  },
  getById(req, res) {
    Listing.findOne({ where: { id: req.params.id } })
      .then((listing) => {
        res.status(201).json(listing);
      })
      .catch((err) => send(err));
  },
  getOneListing(req, res) {
    Listing.findAll({
      where: {
        address: {
          [Op.like]: "Roque",
          // [Op.like]: "%1114%",
        },
      },
    })
      .then((solution) => {
        res.status(201).send(solution);
      })
      .then(() => {
        console.log(req.params);
      });
  },
  deleteListing(req, res) {
    Listing.destroy({
      where: { id: req.params.id },
    }).then(() => {
      res.send({ message: "That listing has been deleted" });
    });
  },
  // query(req, res) {
  //   // console.log(req); recivir req query
  //   res.status(201).json(req.query);
  // },
  query(req, res) {
    // const { Op } = require("sequelize");

    function queryCreator(req) {
      let q = { where: {} };

      if (req.query.min && req.query.max) {
        q.where.price = { [Op.between]: [req.query.min, req.query.max] };
      } else if (req.query.min) {
        q.where.price = { [Op.gt]: req.query.min };
      } else if (req.query.max) {
        q.where.price = { [Op.lt]: req.query.max };
      }

      console.log(q);
      return q;
    }
    console.log(queryCreator(req));

    Listing.findAll(queryCreator(req))
      .then((solution) => {
        res.status(201).send(solution);
      })
      .then(() => {
        console.log(req.params);
      });
  },
};

module.exports = listingController;
