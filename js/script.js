const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Ensure the themeButton exists before continuing
if (!themeButton) {
    console.error("Theme button not found! Make sure the button exists in the DOM with id 'theme-button'.");
} else {
    // PREVIOUSLY SELECTED TOPICS (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    
    console.log("Selected theme from localStorage:", selectedTheme);
    console.log("Selected icon from localStorage:", selectedIcon);

    // We obtain the current theme that the interface has by validating the dark theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We need to validate if the user has previously chosen a theme
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Activate/deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Toggle dark/light theme and icon
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        // Save the theme and the current icon that the user has chosen
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());

        console.log("New theme:", getCurrentTheme());
        console.log("New icon:", getCurrentIcon());
    });
}


//MENU SHOW Y HIDDEN
const nanMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('Click',() => {
        navMenu.classList.add('show-menu')
    }) 
}

//MENU SHOW
/* validate is the constant exists*/

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
console.log("manu Y setting working")

//REMOVE MENU PROFILE

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working")

//===============================TYPEWRITER EFFECT(https://www.npmjs.com/package/typewriter-effect)++====================================

    new Typewriter('#typewriter', {
    strings: ['Photonics Researcher','Freelancer'],
    autoStart: true,
    loop: true,
    cursor: "|"
    });
    console.log("Type Writer is working")