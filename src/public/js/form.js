
document.addEventListener('DOMContentLoaded', (event) => {
  if(document.getElementById('form')){
    const form = document.getElementById('form');
    form.addEventListener('submit', () => {
      form.reset();
    })
  }

})

