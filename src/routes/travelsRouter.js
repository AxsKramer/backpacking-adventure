const { Router } = require("express");
const {
  getTop5Travels,
  getNationalTravels,
  getInternationalTravels,
  getNationalTravelById,
  getInternationalTravelById,
} = require('../controllers/travelsController');;

const router = Router();

router.get("/", getTop5Travels);
router.get("/travels/national", getNationalTravels);
router.get("/travels/national/:travelId", getNationalTravelById);
router.get("travels/international", getInternationalTravels);
router.get("travels/international/:travelId", getInternationalTravelById);

module.exports = router;
