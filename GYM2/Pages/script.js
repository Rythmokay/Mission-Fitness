const btns = document.querySelectorAll(".nav-btn");
const videos = document.querySelectorAll(".video-slide");
let currentSlide = 0;

function updateSliderNav(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btns[manual].classList.add("active");
    videos.forEach((video) => {
        video.pause(); // Pause all videos
        video.currentTime = 0; // Reset video to start
        video.classList.remove("active");
    });
    videos[manual].classList.add("active");
    currentSlide = manual;
    videos[currentSlide].play(); // Play the current video
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        updateSliderNav(i);
    });
});

// Initialize the first video
videos[currentSlide].play();

function autoSlide() {
    updateSliderNav((currentSlide + 1) % videos.length);
}

setInterval(autoSlide, 5000);
