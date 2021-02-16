const { Router } = require("express");
const {
  getTop5Travels,
  getNationalTravels,
  getInternationalTravels,
  getNationalTravelById,
  getInternationalTravelById,
  getTestimonials,
  aboutPage
} = require('../controllers/travelsController');;

const saveTestimonials = require('../controllers/testimonialsController.js'); 

const router = Router();

router.get("/", getTop5Travels);
router.get("/about-us", aboutPage);
router.get("/travels/national", getNationalTravels);
router.get("/travels/national/:travelId", getNationalTravelById);
router.get("/travels/international", getInternationalTravels);
router.get("/travels/international/:travelId", getInternationalTravelById);
router.get('/travels/testimonials', getTestimonials);
router.post('/travels/testimonials', saveTestimonials);

module.exports = router;
