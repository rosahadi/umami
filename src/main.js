// Dots
const dots = document.querySelectorAll('.dots > div');
const dotOne = document.querySelector('.one');
const dotTwo = document.querySelector('.two');
const dotThree = document.querySelector('.three');

// Navigation
const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const navToggleLineMiddle = document.querySelector('.middle');
const navBar = document.querySelector('.navigation__bar');
const navBarLi = document.querySelectorAll('.navigation__bar li');
const links = document.querySelectorAll('a[href="#"]');
const logo = document.querySelector('.navigation__logo');
const logoLink = document.querySelector('.navigation__logo-a');
const svgPath = document.querySelector('.navigation__logo-a svg path');

// Header
const headerSection = document.querySelector('.header');
const headerText = document.querySelector('.header__text');
const svgDown = document.querySelector('.header__arrow');

// About us
const aboutUsSection = document.querySelector('.about-us');

// Recipes
const recipesSection = document.querySelector('.recipes');

// Menu
const menuSection = document.querySelector('.menu');
// Fixed image
const fixedImageSection = document.querySelector('.fixed-image');

// Reservation
const reservationSection = document.querySelector('.reservation');

// Footer
const footerSection = document.querySelector('.footer');
//////////////////////////////////////////////////

// Prevent link click hash
links.forEach(link =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
  })
);

// Show line in active navigation link
// navBarLi.forEach(li =>
//   li.addEventListener('click', function () {
//     const arr = [...li.parentElement.children];
//     console.log(arr);
//     arr.forEach(li => li.classList.remove('underline'));
//     li.classList.add('underline');
//   })
// );

// Hamburger menu button
navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('active');
  navToggleLineMiddle.classList.toggle('hide');
  navBar.classList.toggle('show');
});

window.onscroll = function () {
  // Fixed nav bar
  if (window.pageYOffset > headerSection.offsetHeight - 78) {
    nav.classList.add('active');
    svgPath.setAttribute(
      'd',
      'M9.7 22.42C7.73 22.42 6.1 22.04 4.81 21.28C3.53 20.51 2.575 19.425 1.945 18.025C1.315 16.625 1 14.965 1 13.045V1H4.27V12.19C4.27 13.16 4.34 14.08 4.48 14.95C4.63 15.82 4.895 16.585 5.275 17.245C5.655 17.905 6.2 18.425 6.91 18.805C7.63 19.185 8.56 19.375 9.7 19.375C10.85 19.375 11.78 19.185 12.49 18.805C13.21 18.425 13.76 17.905 14.14 17.245C14.52 16.575 14.78 15.81 14.92 14.95C15.06 14.08 15.13 13.16 15.13 12.19V1H18.4V13.045C18.4 14.965 18.085 16.625 17.455 18.025C16.825 19.425 15.865 20.51 14.575 21.28C13.295 22.04 11.67 22.42 9.7 22.42ZM24.696 22L27.546 1H30.291L35.631 11.05L40.941 1H43.701L46.536 22H43.116L41.046 5.44L41.916 5.605L35.661 17.26L29.316 5.62L30.186 5.455L28.116 22H24.696ZM64.6947 16.63H55.7847V13.705H64.6947V16.63ZM59.7897 4.195H60.6897L54.4047 22H51.1047L58.6047 1H61.8747L69.3747 22H66.0747L59.7897 4.195ZM73.9382 22L76.7882 1H79.5332L84.8732 11.05L90.1832 1H92.9432L95.7782 22H92.3582L90.2882 5.44L91.1582 5.605L84.9032 17.26L78.5582 5.62L79.4282 5.455L77.3582 22H73.9382ZM102.39 22V1H105.66V22H102.39Z'
    );
  } else {
    nav.classList.remove('active');
    svgPath.setAttribute(
      'd',
      'M8.815 21.42C6.845 21.42 5.215 21.04 3.925 20.28C2.645 19.51 1.69 18.425 1.06 17.025C0.43 15.625 0.115 13.965 0.115 12.045V-1.43051e-06H3.385V11.19C3.385 12.16 3.455 13.08 3.595 13.95C3.745 14.82 4.01 15.585 4.39 16.245C4.77 16.905 5.315 17.425 6.025 17.805C6.745 18.185 7.675 18.375 8.815 18.375C9.965 18.375 10.895 18.185 11.605 17.805C12.325 17.425 12.875 16.905 13.255 16.245C13.635 15.575 13.895 14.81 14.035 13.95C14.175 13.08 14.245 12.16 14.245 11.19V-1.43051e-06H17.515V12.045C17.515 13.965 17.2 15.625 16.57 17.025C15.94 18.425 14.98 19.51 13.69 20.28C12.41 21.04 10.785 21.42 8.815 21.42ZM23.811 21L26.661 -1.43051e-06H29.406L34.746 10.05L40.056 -1.43051e-06H42.816L45.651 21H42.231L40.161 4.44L41.031 4.605L34.776 16.26L28.431 4.62L29.301 4.455L27.231 21H23.811ZM63.8097 15.63H54.8997V12.705H63.8097V15.63ZM58.9047 3.195H59.8047L53.5197 21H50.2197L57.7197 -1.43051e-06H60.9897L68.4897 21H65.1897L58.9047 3.195ZM73.0532 21L75.9032 -1.43051e-06H78.6482L83.9882 10.05L89.2982 -1.43051e-06H92.0582L94.8932 21H91.4732L89.4032 4.44L90.2732 4.605L84.0182 16.26L77.6732 4.62L78.5432 4.455L76.4732 21H73.0532ZM101.505 21V-1.43051e-06H104.775V21H101.505Z'
    );
  }

  // Header text fade in and out
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / 290;
  headerText.style.opacity = opacity < 0 ? 0 : opacity;

  // Change dots
  if (window.scrollY < headerSection.offsetHeight * 0.5) {
    dots.forEach(dot => {
      dot.classList.remove('black', 'active');
    });
    dotOne.classList.add('active');
  }
  if (
    window.scrollY > headerSection.offsetHeight * 0.5 &&
    window.scrollY < recipesSection.offsetTop * 0.72
  ) {
    dots.forEach(dot => {
      dot.classList.add('black');
      dot.classList.remove('active');
    });
    dotTwo.classList.remove('active');
    dotOne.classList.add('active');
  }
  if (
    window.scrollY > recipesSection.offsetTop * 0.72 &&
    window.scrollY < menuSection.offsetTop * 0.735
  ) {
    dots.forEach(dot => {
      dot.classList.remove('black', 'active');
    });
    dotTwo.classList.add('active');
  }
  if (
    window.scrollY > menuSection.offsetTop * 0.735 &&
    window.scrollY < fixedImageSection.offsetTop * 0.835
  ) {
    dots.forEach(dot => {
      dot.classList.add('black');
      dot.classList.remove('active');
    });
    dotThree.classList.remove('active');
    dotTwo.classList.add('active');
  }
  if (
    window.scrollY > fixedImageSection.offsetTop * 0.835 &&
    window.scrollY < reservationSection.offsetTop * 0.835
  ) {
    dots.forEach(dot => {
      dot.classList.remove('black', 'active');
    });
    dotThree.classList.add('active');
  }
  if (
    window.scrollY > reservationSection.offsetTop * 0.835 &&
    window.scrollY < footerSection.offsetTop * 0.88
  ) {
    dots.forEach(dot => {
      dot.classList.add('black');
      dot.classList.remove('active');
    });
    dotThree.classList.add('active');
  }
  if (scrollY > footerSection.offsetTop * 0.88) {
    dots.forEach(dot => {
      dot.classList.remove('black', 'active');
    });
    dotThree.classList.add('active');
  }
};

// Smooth scroll to target section on dot click
dots.forEach(dot => {
  const targetSectionId = dot.dataset.x;
  const targetSection = document.querySelector(`.${targetSectionId}`);

  dot.addEventListener('click', () => {
    if (targetSection) {
      // const targetPosition = targetSection.offsetTop;
      // const scrollPosition = targetPosition - 100;
      window.scroll({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  });
});

// SVG-down smooth scroll
svgDown.addEventListener('click', function () {
  window.scroll({
    top: aboutUsSection.offsetTop - 70,
    behavior: 'smooth',
  });
});
