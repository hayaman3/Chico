const content = document.getElementById("content")
const element = document.createElement("main")

function getHomePage(){
    element.className = "";
    element.classList.add("home")
    element.innerHTML = `
        <div class="top">
            <header>CHICO</header>
            <p><u>Chi</u>cken & <u>Co</u>ffee</p>
        </div>
        <h4>“The pursuit of great flavor always has attached to it great agriculture.”</h4>
        <div class="philo">
            <p><b>PHILOSOPHY: </b>Sustainable farming to table. Sustainable agriculture involves food production methods that are healthy, do not harm the environment, respect workers, are humane to animals, provide fair wages to farmers, and support farming communities. </p>            
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
    <div class="contact">
    <div class="left">
        <div>
        <h4><i class="fas fa-map-marker-alt"></i> Address</h4>
        <p>
            P. Sherman 42 
            <br>
            Wallaby Way, Sydney
        </p>
        </div>
        <div>
            <h4><i class="fas fa-phone-alt"></i> Let's Talk </h4>
            <p>+639*********</p>
        </div>
        <div>
            <h4><i class=" far fa-envelope"></i> General Support </h4>
            
            <p>contact@example.com</p>
        </div>
    </div>
    
    <div class="right">
        <h2>Contact Us</h2>
        <p>Name*</p>
        <input id="txt_name" type="text" required="required">
        <p>Email*</p>
        <input id="txt_email" type="text" required="required">
        <p>Phone*</p>
        <input id="txt_phone" type="text" required="required">
        <p>Subject*</p>
        <input id="txt_subject" type="text" required="required">
        <p>Message*</p>
        <textarea id="txt_message" rows="4" cols="20" required="required"></textarea>
        <input type="submit" id="btn_send" value="SEND">
    </div>
</div>
    `;
    content.appendChild(element)
}



export { getHomePage, getShopPage, getContactPage };