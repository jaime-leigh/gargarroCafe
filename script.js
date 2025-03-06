//NAVBAR

const toggleButton = document.getElementsByClassName('navbar__toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navbar__links')[0];
const navbarName = document.getElementsByClassName('navbar__name');
const navbarPages = document.querySelectorAll('.navbarPages'); // Selects all elements with class "navbarPages"

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

function handleScroll() {
  const navbar = document.querySelector('.navbar');

  if (window.innerWidth < 768) {
    // Mobile behavior
    navbar.style.background =
      window.scrollY > 50 ? 'rgba(41, 74, 68, 0.9)' : '#294a44';
    navbarPages.forEach((link) => (link.style.color = 'white'));
  } else {
    // Desktop behavior
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.5)';
      navbar.style.transform = 'translateY(0px)';
      navbarPages.forEach((link) => (link.style.color = 'rgba(41, 74, 68, 1)'));
    } else {
      navbar.style.background = 'transparent';
      navbar.style.transform = 'translateY(50px)';
    }
  }
}

// Run when scrolling
window.addEventListener('scroll', handleScroll);

// Ensure correct styling when resizing
window.addEventListener('resize', handleScroll);

toggleButton.addEventListener('click', function (event) {
  event.stopPropagation();
});

////////

//WEB3FORMS

window.onload = function () {
  // Reset the form fields when the page loads
  document.getElementById('form').reset();
};

//SWIPER.JS
document.addEventListener('DOMContentLoaded', function () {
  const swiperConfig = {
    slidesPerView: window.innerWidth <= 600 ? 1 : 3, // Change based on screen width
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  let swiper = new Swiper('.mySwiper', swiperConfig);

  // Function to update Swiper on screen resize
  function updateSwiper() {
    if (window.innerWidth <= 768 && swiper.params.slidesPerView !== 1) {
      swiper.params.slidesPerView = 1;
      swiper.update();
    } else if (window.innerWidth > 768 && swiper.params.slidesPerView !== 3) {
      swiper.params.slidesPerView = 3;
      swiper.update();
    }
  }

  // Listen for screen size changes
  window.addEventListener('resize', updateSwiper);
});

//ANIMATIONS///
document.addEventListener('DOMContentLoaded', function () {
  const welcomeButtons = document.getElementsByClassName(
    'gargarroMain__button'
  );
  const welcomeButtonsDown = document.getElementsByClassName(
    'gargarroMain__buttonFloatDown'
  );
  const welcomeButtonsLeft = document.getElementsByClassName(
    'gargarroMain__buttonFloatLeft'
  );
  const welcomeButtonsRight = document.getElementsByClassName(
    'gargarroMain__buttonFloatRight'
  );

  // Function to check visibility of each button
  function checkVisibility() {
    // Iterate over each button in the NodeList
    Array.from(welcomeButtons).forEach((button) => {
      const buttonPosition = button.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if button is within the viewport
      if (buttonPosition < windowHeight) {
        button.classList.add('visible');
      }
    });
    Array.from(welcomeButtonsDown).forEach((button) => {
      const buttonPosition = button.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if button is within the viewport
      if (buttonPosition < windowHeight) {
        button.classList.add('visible');
      }
    });
    Array.from(welcomeButtonsLeft).forEach((button) => {
      const buttonPosition = button.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if button is within the viewport
      if (buttonPosition < windowHeight) {
        button.classList.add('visible');
      }
    });
    Array.from(welcomeButtonsRight).forEach((button) => {
      const buttonPosition = button.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if button is within the viewport
      if (buttonPosition < windowHeight) {
        button.classList.add('visible');
      }
    });
  }

  // Initial check in case the elements are already in view
  checkVisibility();

  // Add event listener for scroll events
  window.addEventListener('scroll', checkVisibility);
});
