console.log('test');
import '../css/styles.css';
import lotusCafeImage from '../assets/lotusCafe.png';
import { handleHome } from "../functions/handleHome";
import { handleMenu } from "../functions/handleMenu";
import { handleAbout } from "../functions/handleAbout";



const menuButton = document.querySelector('.menu')
const aboutButton = document.querySelector('.about')
const homeButton = document.querySelector('.home')

function clearDiv(){
    const content = document.querySelector('.content')
    content.innerHTML = ''
}

function init() {
    // Query for the buttons
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');
    const homeButton = document.querySelector('.home');
    const content = document.querySelector('.content')


    if (menuButton) {
        menuButton.addEventListener('click', clearDiv);
        menuButton.addEventListener('click', handleMenu);
    } else {
        console.error("Button with class 'menu' not found.");
    }

    if (homeButton) {
        homeButton.addEventListener('click', clearDiv);
        homeButton.addEventListener('click', handleHome);
    } else {
        console.error("Button with class 'home' not found.");
    }

    if (aboutButton) {
        aboutButton.addEventListener('click', clearDiv);
        aboutButton.addEventListener('click', handleAbout);
    } else {
        console.error("Button with class 'about' not found.");
    }
}

// function init(){
// menuButton.addEventListener('click',handleMenu)
// homeButton.addEventListener('click',handleHome)
// }

init();
handleHome();
