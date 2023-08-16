// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ACTIVE FOR PARTICULAR SECTIONS
// Function to handle intersection of sections
const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust the threshold as needed (0.5 means 50% visibility required for triggering)
});

// Observe each section
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    observer.observe(section);
});
// Function to handle sticky header
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

const anchorTags = document.querySelectorAll('.navbar a');

anchorTags.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});







 
 



// section 2 
// ABOUT ME
// shifting from academic to certificates
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// NAVBAR VISIBLE FOR ABOUT SECTION
// Sticky navbar
window.onscroll = () => {
   let header = document.querySelector('.header');

   header.classList.toggle('sticky' , window.scrollY >100);
};





//DARK MODE 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
     darkModeIcon.classList.toggle('bx-sun');
     document.body.classList.toggle('dark-mode');
};

// SCROLL REVEAL
ScrollReveal({ 
    // reset: true,
    // distance: '80px',
    // duration: 2000,
    // delay: 200 
    distance: '45px', 
    duration: 2700,
    reset: true
});

ScrollReveal().reveal('.home-content, .heading, .contact-left  , .keyPoints ',{ origin: top });
ScrollReveal().reveal('.skills , .doughnut , .contact-right , .home-img img ', { delay: 700 });
ScrollReveal().reveal('.ticTactoe , .drumKit ' , {delay: 600})
ScrollReveal().reveal('.about-img img', { delay: 500 });



const typed = new Typed('.multiple-text', {
    strings:['Computer Engineeer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
