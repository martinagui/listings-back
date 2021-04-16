const Listing = require("../models/Listing");

export function addListing(req, res, next) {
  const {
    address,
    description,
    city,
    state,
    price,
    imageUrl,
    sqft,
    date,
    expirationDate,
  } = req.body;

  Listing.create(
    {
      address,
      description,
      city,
      state,
      price,
      imageUrl,
      sqft,
      date,
      expirationDate,
    },
    {
      fields: [
        address,
        description,
        city,
        state,
        price,
        imageUrl,
        sqft,
        date,
        expirationDate,
      ],
    }
  );
  if (newListing) {
    res.json({ message: "Listing saved successfully", data: newListing });
  }

  console.log(req.body);
}
