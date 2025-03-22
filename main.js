const nav = document.querySelector('header-component nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
  }
});


const sliderItems = document.querySelector('.slider-items');
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const itemWidth = items[0].offsetWidth;
let currentIndex = 0;

// Clone the first 3 items and append them to the end
for (let i = 0; i < 5; i++) {
  const clone = items[i].cloneNode(true);
  sliderItems.appendChild(clone);
}

const totalItems = itemCount + 3; // Total items including clones

function slideItem() {
  currentIndex++;
  if (currentIndex >= totalItems - 2) {
    currentIndex = 0;
    sliderItems.style.transition = 'none'; // Disable transition for instant jump
    sliderItems.style.transform = `translateX(0px)`;
    // Force reflow to apply the instant jump before enabling transition
    sliderItems.offsetWidth;
    sliderItems.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
  } else {
    sliderItems.style.transition = 'transform 0.5s ease-in-out';
  }
  sliderItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

setInterval(slideItem, 3000);



const sliderItemsFrameworks = document.querySelector('.slider-items-frameworks');
const itemsFrameworks = document.querySelectorAll('.slider-item-frameworks');
const itemCountFrameworks = itemsFrameworks.length;
const itemWidthFrameworks = itemsFrameworks[0].offsetWidth;
let currentIndexFrameworks = 0;

// Clone the first 5 items and append them to the end
for (let i = 0; i < 5; i++) {
  const cloneFrameworks = itemsFrameworks[i].cloneNode(true);
  sliderItemsFrameworks.appendChild(cloneFrameworks);
}

const totalItemsFrameworks = itemCountFrameworks + 3;

function slideItemFrameworks() {
  currentIndexFrameworks++;
  if (currentIndexFrameworks >= totalItemsFrameworks - 2) {
    currentIndexFrameworks = 0;
    sliderItemsFrameworks.style.transition = 'none';
    sliderItemsFrameworks.style.transform = `translateX(0px)`;
    sliderItemsFrameworks.offsetWidth;
    sliderItemsFrameworks.style.transition = 'transform 0.5s ease-in-out';
  } else {
    sliderItemsFrameworks.style.transition = 'transform 0.5s ease-in-out';
  }
  sliderItemsFrameworks.style.transform = `translateX(-${currentIndexFrameworks * itemWidthFrameworks}px)`;
}

setInterval(slideItemFrameworks, 3000);