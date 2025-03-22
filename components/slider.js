const sliderItems = document.querySelector('.slider-items');
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const itemHeight = items[0].offsetHeight;
let currentIndex = 0;

function slideItem() {
  currentIndex++;
  if (currentIndex >= itemCount) {
    currentIndex = 0; // Loop back to the start
  }
  sliderItems.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
}

setInterval(slideItem, 3000); // Slide every 3 seconds (adjust as needed)