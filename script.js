window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = '#222'; // darker on scroll
  } else {
    navbar.style.backgroundColor = '#333'; // original
  }
});


