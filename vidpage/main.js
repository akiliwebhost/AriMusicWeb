document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
        item.classList.toggle("change");
    });
});

document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".target").forEach((item) => {
            item.classList.remove("change");
        });
    });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
    video.addEventListener("mouseover", () => {
        video.play();
    });
    video.addEventListener("mouseout", () => {
        video.pause();
    });
});

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})