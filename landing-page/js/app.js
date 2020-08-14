/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBarUl = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const htmlTag = document.querySelector('html');

/**
 * End Global Variables
 */

// build the nav
let navItems = `
            <li><a href="#section1">section1</a></li>
            <li><a href="#section2">section2</a></li>
            <li><a href="#section3">section3</a></li>
            <li><a href="#section4">section4</a></li>
        `;

// smooth scroll body
htmlTag.style.scrollBehavior = 'smooth';

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function() {
    for (section of sections) {
        if(section.getBoundingClientRect().top <= 40){
            section.classList.add('your-active-class');
        }
    }
});



/**
 * Begin Events
*/

// Build menu 
// add li in ul
navBarUl.innerHTML += navItems;

//Select link of li to for loop on it
let listLinks = document.querySelectorAll('#navbar__list li a');

// for of links to add class
for (let listLink of listLinks) {
    listLink.setAttribute('class', 'menu__link');
}

//on click scroll to section
for (var i = 0; i < listLinks.length; i++) {
    listLinks[i].addEventListener('click', function () {
        for (var y = 0; y < listLinks.length; y++) {
            listLinks[y].classList.remove('active');
            this.classList.add('active');
        }
    });
}






