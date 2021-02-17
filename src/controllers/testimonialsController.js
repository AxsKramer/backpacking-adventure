const Testimonial = require('../models/Testimonial');

const saveTestimonials = async (req, res, next) => {
  const error = [];
  const {name, trip, email, message} = req.body;
  if(name.trim() === ''){
    error.push({name: 'The name´s field is empty'});
  } 
  if(trip.trim() === ''){
    error.push({trip: 'The trip´s field is empty'});
  } 
  if(email.trim() === ''){
    error.push({email: 'The email´s field is empty'});
  } 
  if(message.trim() === ''){
    error.push({message: 'The message field is empty'});
  } 

  if(error.length > 0){
    const testimonials = await Testimonial.findAll();
    res.render('pages/testimonials',  {
      page: 'Tetimonials',
      testimonials,
      error: error
    });
  }
  else{
    try {
      await Testimonial.create({name, trip, email, message});
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }
  
}

module.exports = saveTestimonials;