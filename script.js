document.addEventListener("DOMContentLoaded", () => {
    let music = new Audio("assets/sound.m4a");
    music.loop = true;

    // Try to autoplay music
    music.play().catch(() => {
        console.log("Autoplay blocked. Click anywhere to play music.");
    });

    // If autoplay is blocked, allow play on user interaction
    document.addEventListener("click", () => {
        if (music.paused) {
            music.play();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    images.forEach(img => observer.observe(img));
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".poster h1").style.animationDelay = "0s";
        document.querySelector(".poster p").style.animationDelay = "0.5s";
    }, 1000);
});