import './style.css';
// import Icon from './icon.png';

const content = document.getElementById("content")
function component() {
    const element = document.createElement("main");
    element.innerHTML = `

            <div>Chico</div>
            <div>chicken & coffee</div>

    `;
    return element;
}
content.appendChild(component());