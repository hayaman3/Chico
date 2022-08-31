const content = document.getElementById("content")
const element = document.createElement("main")

function getHomePage(){
    element.className = "";
    element.classList.add("home")
    element.innerHTML = `
        <header>CHICO</header>
        <p><u>Chi</u>cken & <u>Co</u>ffee</p>
        <div>
            <h4>About:</h4>
            <p>Sustainable farming to table</p>
        </div>
    `;
    content.appendChild(element)
}

function getShopPage(){
    element.className = "";
    element.classList.add("shop")
    element.innerHTML = `
        <img src="../src/coffee.jpg" alt="coffee beans">
        <div id="details">
            <h4>Robusta Coffee</h4>
            <p>Distinct woody and nutty taste</p>
        </div>
    `;
    content.appendChild(element)
}

function getContactPage(){
    element.className = "";
    element.classList.add("contact")
    element.innerHTML = `
######
    `;
    content.appendChild(element)
}



export { getHomePage, getShopPage, getContactPage };