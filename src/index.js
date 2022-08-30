import './style.css';
// import Icon from './icon.png';

const content = document.getElementById("content")
const element = document.createElement("main")
function home(){
    element.classList.add("home")
    element.innerHTML = `

            <header>CHICO</header>
            <p><u>Chi</u>cken & <u>Co</u>ffee</p>

    `;
    content.appendChild(element)
}

home()

function shop(){
    element.classList.add("shop")
    element.innerHTML = `

            <div>Coffee Bag 1kg</div>

    `;
    content.appendChild(element)
}

// shop()