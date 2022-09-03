// import './style.css';
import { getHomePage, getShopPage, getContactPage } from './content.js';


const homeNav = document.getElementById("home");
const shopNav = document.getElementById("shop");
const contactNav = document.getElementById("contact");

homeNav.addEventListener("click",getHomePage)
shopNav.addEventListener("click",getShopPage)
contactNav.addEventListener("click",getContactPage)

getHomePage()
