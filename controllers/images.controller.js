const Image = require("../models/Image");

const imageController = {
  addImage(req, res, next) {
    const { listingId, imageUrl } = req.body;

    console.log(req.body);
    Image.create({
      listingId,
      imageUrl,
    }).then((listing) => {
      res.status(201).send(listing);
    });

    // if (newListing) {
    //   res.json({ message: "Listing saved successfully", data: newListing });
    // }
  },
};

module.exports = imageController;
