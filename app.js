const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const Heading2 = document.querySelector(".question-11");
const Paragraph = document.querySelector(".question-111");
const IFunction = document.querySelector(".first");
const IFunction1 = document.querySelector(".second");
const Today = document.querySelector(".today-s");
const Schedule = document.querySelector(".today-schedule");
const Support = document.querySelector(".support-message");
const Supoortcotntent = document.querySelector(".support-content");


let currentIndex = 0;
let startX = 0;
let endX = 0;
let supportX = 0;

function slide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    slide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slide();
}

// Event listeners for buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Touch event listeners for swipe functionality
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});
//     // Toggle the display of the answer

//     function toggleAnswer(questionElement) {
//     const answerElement = questionElement.nextElementSibling;
//     const iconElement = questionElement.querySelector('.icon');


//     if (answerElement.style.display === "block") {
//         answerElement.style.display = "none";
//         iconElement.textContent = "▼"; // Down arrow
//     } else {
//         answerElement.style.display = "block";
//         iconElement.textContent = "▲"; // Up arrow
//     }
// }

// Today's Schedule

Today.addEventListener("click", () => {
    if (Schedule.style.display === "block") {
        Schedule.style.display = "none";
    } else {
        Schedule.style.display = "block";
    }
});

// question and answer container when i click on each this is active 


const Faq = document.querySelectorAll(".faq");

Faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// toggle when i click icon of message this is dispaly "block" otherwise this so dispaly "none".

Support.addEventListener("click", () => {
    if (supportX === 0) {
        Supoortcotntent.style.display = "block";
        supportX = 1;
    } else {
        Supoortcotntent.style.display = "none";
        supportX = 0;
    }
});

// loader when i click any page this is redirect on according to home page 


window.addEventListener("load", () => {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const currentLocation = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



