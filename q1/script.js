let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


const validFirstName = document.getElementById("validationFirstName")
const validLastName = document.getElementById("validationLastName")
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
// When the user clicks the button, open the modal 

btn.onclick = function() {

    function callback() {
        modal.style.display = "none"
    }


    modal.style.display = "block"
    setTimeout(e => {
        callback()
    }, 8000);



}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}