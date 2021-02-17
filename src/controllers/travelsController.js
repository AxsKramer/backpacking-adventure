const Testimonial = require("../models/Testimonial");
const National = require('../models/National');
const International = require('../models/International');


const getTop5Travels = async  (req, res) => {
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
const getNationalTravelById = async (req, res) => {
  const id = req.parms.travelId;
  try{
    const travels = await National.findAll({where: {id: id}});
    res.render('pages/travels', {page: 'National', travels}); 
  }
  catch(error){
    console.log(error);
  }
}
const getInternationalTravelById = async (req, res) => {
  const id = req.parms.travelId;
  try{
    const travels = await International.findAll({where: {id: id}});
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
  getTop5Travels,
  getNationalTravels,
  getInternationalTravels,
  getNationalTravelById,
  getInternationalTravelById,
  getTestimonials,
  aboutPage
}