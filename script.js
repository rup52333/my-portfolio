
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}





document.addEventListener('DOMContentLoaded', function() {
    var educationItems = document.querySelectorAll('.education-section li');
    
    educationItems.forEach(function(item) {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });






  





















