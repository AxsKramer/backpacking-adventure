const { Router } = require("express");
const {
  homePage,
  getNationalTravels,
  getInternationalTravels,
  getTestimonials,
  aboutPage
} = require('../controllers/travelsController');;

const saveTestimonials = require('../controllers/testimonialsController.js'); 

const router = Router();

router.get("/", homePage);
router.get("/about-us", aboutPage);
router.get("/travels/national", getNationalTravels);
router.get("/travels/international", getInternationalTravels);
router.get('/travels/testimonials', getTestimonials);
router.post('/travels/testimonials', saveTestimonials);

module.exports = router;
