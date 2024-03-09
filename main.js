const header = document.querySelector('header');

window.addEventListener ('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 80);
});

const div = document.getElementById('menu-bar');
const nav = document.querySelector('nav');

div.addEventListener ('click', () => {
    nav.classList.toggle('close-nav');
});

nav.addEventListener ('click', () => {
    nav.classList.add('close-nav');
});

const float = document.getElementById('float-btn');

window.addEventListener ('scroll', () => {
    float.classList.toggle('floating-btn', window.scrollY > 150);
});


const slides = document.querySelector(".slides");
let position = 0;

function slide() {
    position -= 560;
    slides.style.transform = `translateX(${position}px)`;

    if(position === -2240) {
        setTimeout(() => {
            slides.style.transition = "none";
            position = 0;
            slides.style.transform = `translateX(${position}px)`;

            setTimeout(() => {
                slides.style.transition = "transform .5s ease-in-out";
            }, 50);
        }, 500);
    }
}
setInterval(slide, 5000);



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i=0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 1;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);



var modal = document.getElementById("myModal");
var images = document.querySelectorAll(".carousel-image");
var modalImg = document.getElementById("modalImg");

images.forEach(function(image) {
    image.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", () => {
  modal.style.display = "none";
});