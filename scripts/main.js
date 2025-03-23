const nav = document.querySelector('header-component nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
  }
});

// Function to calculate item width based on screen size
function getItemWidth() {
  if (window.innerWidth <= 576) {
    return 120;
  } else if (window.innerWidth <= 768) {
    return 140;
  } else if (window.innerWidth <= 992) {
    return 160;
  } else if (window.innerWidth <= 1200) {
    return 180;
  } else {
    return 200;
  }
}

// Programming Languages Slider
const sliderItems = document.querySelector('.slider-items');
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
let currentIndex = 0;
let itemWidth = getItemWidth();

// Clone the first 5 items and append them to the end
for (let i = 0; i < 5; i++) {
  const clone = items[i].cloneNode(true);
  sliderItems.appendChild(clone);
}

const totalItems = itemCount + 5;

function slideItem() {
  currentIndex++;
  if (currentIndex >= totalItems - 5) {
    currentIndex = 0;
    sliderItems.style.transition = 'none';
    sliderItems.style.transform = `translateX(0px)`;
    sliderItems.offsetWidth;
    sliderItems.style.transition = 'transform 0.5s ease-in-out';
  } else {
    sliderItems.style.transition = 'transform 0.5s ease-in-out';
  }
  sliderItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Frameworks Slider
const sliderItemsFrameworks = document.querySelector('.slider-items-frameworks');
const itemsFrameworks = document.querySelectorAll('.slider-item-frameworks');
const itemCountFrameworks = itemsFrameworks.length;
let currentIndexFrameworks = 0;

// Clone the first 5 items and append them to the end
for (let i = 0; i < 5; i++) {
  const cloneFrameworks = itemsFrameworks[i].cloneNode(true);
  sliderItemsFrameworks.appendChild(cloneFrameworks);
}

const totalItemsFrameworks = itemCountFrameworks + 5;

function slideItemFrameworks() {
  currentIndexFrameworks++;
  if (currentIndexFrameworks >= totalItemsFrameworks - 5) {
    currentIndexFrameworks = 0;
    sliderItemsFrameworks.style.transition = 'none';
    sliderItemsFrameworks.style.transform = `translateX(0px)`;
    sliderItemsFrameworks.offsetWidth;
    sliderItemsFrameworks.style.transition = 'transform 0.5s ease-in-out';
  } else {
    sliderItemsFrameworks.style.transition = 'transform 0.5s ease-in-out';
  }
  sliderItemsFrameworks.style.transform = `translateX(-${currentIndexFrameworks * itemWidth}px)`;
}

// Update item width on window resize
window.addEventListener('resize', () => {
  itemWidth = getItemWidth();
  
  // Update current positions
  sliderItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  sliderItemsFrameworks.style.transform = `translateX(-${currentIndexFrameworks * itemWidth}px)`;
});

// Start the sliders
setInterval(slideItem, 3000);
setInterval(slideItemFrameworks, 2500);