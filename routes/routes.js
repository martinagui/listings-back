//import listingController from "../controllers/listings.controller";

const express = require("express");
const router = express.Router();

const ListingController = require("../controllers/listings.controller");
const ImageController = require("../controllers/images.controller");

//Post Routes
router.post("/add", ListingController.addListing);
router.post("/addImg", ImageController.addImage);
router.delete("/delete/:id", ListingController.deleteListing);

//Get Routes
router.get("/listings", ListingController.getListings);
router.get("/listings/:id", ListingController.getById);
router.get("/q", ListingController.query);

router.get("/lala", ListingController.getOneListing);

router.get("/", (req, res) => {
  res.send("Llegaste");
});
// export default router;
module.exports = router;
