document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");

  const nextBtn = document.getElementById("nextBtn");

  const prevBtn = document.getElementById("prevBtn");

  const intervalTime = 5000;

  let slideInterval;

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  slideInterval = setInterval(nextSlide, intervalTime);
});
