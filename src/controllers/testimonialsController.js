const Testimonial = require('../models/Testimonial');

const saveTestimonials = async (req, res) => {
  const error = [];
  const {name, trip, email, message} = req.body;
  if(name.trim() === ''){
    error.push({message: 'The name´s field is empty'});
  } 
  if(trip.trim() === ''){
    error.push({message: 'The trip´s field is empty'});
  } 
  if(email.trim() === ''){
    error.push({message: 'The email´s field is empty'});
  } 
  if(message.trim() === ''){
    error.push({message: 'The message field is empty'});
  } 

  if(error){
    const testimonials = await Testimonial.findAll();

    res.render('pages/testimonials',  {
      page: 'Tetimonials',
      error,
      name,
      trip,
      email,
      message,
      testimonials
    })
  }

  try {
    await Testimonial.create({name, trip, email, message});
    res.redirect('/travels/testimonials');
  } catch (error) {
    console.log(error);
  }
}

module.exports = saveTestimonials;