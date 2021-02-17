const Testimonial = require("../models/Testimonial");
const National = require('../models/National');
const International = require('../models/International');

const homePage = async  (req, res) => {
  try {
    const testimonials = await Testimonial.findAll({limit: 6});
    res.render('pages/home', {page: 'HOME', testimonials});
  } catch (error) {
    console.log(error.message);
  }
}
const getNationalTravels = async (req, res) => {
  try{
    const travels = await National.findAll() || [];
    res.render('pages/travels', {page: 'National', travels}); 
  }
  catch(error){
    console.log(error);
  }
}
const getInternationalTravels =  async (req, res) => {
  try{
    const travels = await International.findAll() || [];
    res.render('pages/travels', {page: 'International', travels}); 
  }
  catch(error){
    console.log(error);
  }
}

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll() || 'No testimonials';
    res.render('pages/testimonials',{page: 'Testimonials', testimonials});
  } catch (error) {
    console.log(error);
  }
} 

const aboutPage = (req, res) => {
  res.render('pages/aboutUs',{page: 'About Us'});
}

module.exports = {
  homePage,
  getNationalTravels,
  getInternationalTravels,
  getTestimonials,
  aboutPage
}