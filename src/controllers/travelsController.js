const Testimonial = require("../models/Testimonial");


const getTop5Travels = async  (req, res) => {
  try {
    const testimonials = await Testimonial.findAll({limit: 6});
    res.render('pages/home', {page: 'HOME', testimonials});

  } catch (error) {
    console.log(error.message);
  }
}
const getNationalTravels = (req, res) => {

}
const getInternationalTravels = (req, res) => {

}
const getNationalTravelById = (req, res) => {

}
const getInternationalTravelById = (req, res) => {
  res.render('pages/aboutus',{page: 'Testimonials', testimonials});
}

const aboutPage = (req, res) => {
  res.render('pages/aboutUs',{page: 'About Us'});
}


const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.render('pages/testimonials',{page: 'Testimonials', testimonials});
  } catch (error) {
    console.log(error);
  }
} 



module.exports = {
  getTop5Travels,
  getNationalTravels,
  getInternationalTravels,
  getNationalTravelById,
  getInternationalTravelById,
  getTestimonials,
  aboutPage
}